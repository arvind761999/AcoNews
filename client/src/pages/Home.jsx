import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsCard from '../components/Newscard';
import Pagination from '../components/Pagination';

const Home = () => {
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('latest');
  const [totalPages, setTotalPages] = useState(1);  // For dynamic pagination

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/news`, {
          params: { query, page },
        });

        setNews(response.data.articles);
        setTotalPages(Math.ceil(response.data.totalArticles / 10));  // Adjust per page items as needed
      } catch (error) {
        console.error('Failed to fetch news', error);
      }
    };
    fetchNews();
  }, [page, query]);

  const handleSearch = (e) => {
    e.preventDefault();
    setPage(1); // Reset to the first page on new search
  };

  return (
    <div className="container mx-auto p-4">
      {/* Search Bar */}
      <form onSubmit={handleSearch} className="mb-4">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border p-2 w-full md:w-1/2 lg:w-1/3"
          placeholder="Search for news..."
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 ml-2 rounded"
        >
          Search
        </button>
      </form>

      {/* News Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {news.map((article) => (
          <NewsCard key={article.title} {...article} />
        ))}
      </div>

      {/* Pagination */}
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={(newPage) => setPage(newPage)}
      />
    </div>
  );
};

export default Home;
