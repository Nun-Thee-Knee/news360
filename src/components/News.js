import React, { useState, useEffect } from 'react';
import NewsItem from './NewsItem';

const News = () => {
  const [news, setNews] = useState(null);

  useEffect(() => {
    fetchNews();
  }, []); 
  const fetchNews = async () => {
    const url = "https://newsapi.org/v2/everything?q=business&from=2024-02-29&sortBy=publishedAt&apiKey=5ab7b512263b4d4c9b090452faf82ce7&page=2";
    try {
      const response = await fetch(url);
      const data = await response.json();
      setNews(data.articles);
    } catch (error) {
      console.log({ error });
    }
  };

  return (
    <div className='grid flex lg:grid-cols-3 gap-14 p-20 md:grid-cols-2 sm:flex-col'>
      {news === null ? <p>There are no items to display</p> : (
        news.map((newsItem, index) => (
          <NewsItem
            key={index}
            source={newsItem.source.name}
            title={newsItem.title}
            image={newsItem.urlToImage}
            description={newsItem.description}
            url={newsItem.url}
            date={newsItem.publishedAt}
          />
        ))
      )}
    </div>
  );
}

export default News;
