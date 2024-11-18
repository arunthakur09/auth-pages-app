import { useEffect, useState } from 'react';
import axios from 'axios';
import Footer from '../components/Footer';

export default function Dashboard() {
  const [articles, setArticles] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [cookieValue, setCookieValue] = useState(null);
  const [currentArticlePage, setCurrentArticlePage] = useState(0);
  const [currentCustomerPage, setCurrentCustomerPage] = useState(0);

  // Function to retrieve cookie value asynchronously
  async function getCookieAsync(name) {
    return new Promise((resolve) => {
      const value = "; " + document.cookie;
      const parts = value.split("; " + name + "=");
      if (parts.length === 2) resolve(parts.pop().split(";").shift());
      else resolve(null);
    });
  }

  useEffect(() => {
    // Access the cookie on the client side
    const fetchCookie = async () => {
      const value = await getCookieAsync('authToken');
      setCookieValue(value);
    };
    fetchCookie();
  }, []);

  useEffect(() => {
    if (!cookieValue) {
      // Uncomment this line to enable redirection when cookieValue is not present
      // window.location.href = '/SignUpStep1';
    } else {
      // Fetch articles
      axios
        .get('https://untitled-twkmuar27a-uc.a.run.app/api', {
          headers: { Authorization: `Token ${cookieValue}` },
        })
        .then((response) => setArticles(response.data))
        .catch((error) => console.error('Failed to fetch articles:', error));

      // Fetch customers
      axios
        .get('https://untitled-twkmuar27a-uc.a.run.app/api/customer-list/', {
          headers: { Authorization: `Token ${cookieValue}` },
        })
        .then((response) => setCustomers(addSrc(response.data)))
        .catch((error) => console.error('Failed to fetch customers:', error));
    }
  }, [cookieValue]);

  // Assign image sources to customers
  function addSrc(customers) {
    const srcList = [
      'Images/photo-1504751999194-ef177d837cfe.avif',
      'Images/photo-1713190193924-8bd93c729b6b.avif',
      'Images/photo-1534236161823-3897f68b00b8.avif',
      'Images/photo-1542549300-f44fe5ea9d82.avif'
    ];
    return customers.map((customer, index) => ({
      ...customer,
      src: srcList[index % srcList.length],
    }));
  }

  // Pagination Logic for Articles
  const itemsPerPage = 3;
  const totalArticlePages = Math.ceil(articles.length / itemsPerPage);

  const displayedArticles = articles.slice(
    currentArticlePage * itemsPerPage,
    (currentArticlePage + 1) * itemsPerPage
  );

  const handleArticlePageClick = (pageIndex) => {
    setCurrentArticlePage(pageIndex);
  };

  // Pagination Logic for Customers (2 items per page)
  const customersPerPage = 2;
  const totalCustomerPages = Math.ceil(customers.length / customersPerPage);

  const displayedCustomers = customers.slice(
    currentCustomerPage * customersPerPage,
    (currentCustomerPage + 1) * customersPerPage
  );

  const handleCustomerPageClick = (pageIndex) => {
    setCurrentCustomerPage(pageIndex);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-b from-gray-100 to-gray-200 font-testSoehne">
      <main className="flex items-center justify-center flex-grow bg-black text-white ">
        <div className="p-10 rounded-xl shadow-2xl max-w-5xl w-full text-center bg-black text-white ">
          <h1 className="text-3xl font-extrabold mb-8">Welcome to Your Dashboard</h1>
          <div className="text-left mb-8">
            <h2 className="text-xl font-bold mb-4">Articles</h2>
            <div className="relative mb-8">
              <ul className="grid grid-cols-3 gap-4">
                {displayedArticles.map((article, index) => (
                  <li key={index} className="p-4 rounded shadow-md">
                    <img
                      src={article.image_url}
                      alt={article.title}
                      className="h-32 w-full object-cover mb-2 rounded-xl"
                    />
                    <p>{article.title}</p>
                  </li>
                ))}
              </ul>
              {/* Article Pagination Dots */}
              <div className="flex justify-center mt-4 space-x-2">
                {Array.from({ length: totalArticlePages }).map((_, pageIndex) => (
                  <button
                    key={pageIndex}
                    onClick={() => handleArticlePageClick(pageIndex)}
                    className={`w-4 h-4 rounded-full ${
                      pageIndex === currentArticlePage ? 'bg-slate-100' : 'bg-gray-500'
                    }`}
                    aria-label={`Go to article page ${pageIndex + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Customers Section */}
            <h2 className="text-xl font-bold mb-4">Customers</h2>
            <div className="relative mb-8">
              <ul className="grid grid-cols-2 gap-6">
                {displayedCustomers.map((customer, index) => (
                  <li key={index} className="mb-4 p-4 rounded shadow-md">
                    <img
                      src={customer.src}
                      alt={customer.customer_name}
                      className="h-32 w-full object-cover mb-2 rounded-xl"
                    />
                    <p className="text-lg font-medium">{customer.customer_name}</p>
                  </li>
                ))}
              </ul>
              {/* Customer Pagination Dots */}
              <div className="flex justify-center mt-4 space-x-2">
                {Array.from({ length: totalCustomerPages }).map((_, pageIndex) => (
                  <button
                    key={pageIndex}
                    onClick={() => handleCustomerPageClick(pageIndex)}
                    className={`w-4 h-4 rounded-full ${
                      pageIndex === currentCustomerPage ? 'bg-slate-100' : 'bg-gray-500'
                    }`}
                    aria-label={`Go to customer page ${pageIndex + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
