import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/pageBasics/Header';
import Footer from '../components/pageBasics/Footer';
import ArticlePreview from '../components/article/ArticlePreview';

const ArticleIndexPage = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const url = `/api/v1/articles`
    axios.get(url)
    .then(res => setArticles(res.data.data))
    .catch(err => console.log(err))
  }, [])

  const previews = articles.map((article) => {
    return(
      <ArticlePreview key={article.id} props={article} />
    )
  });

  return(
    <>
      <Header />
        <div>{previews}</div>
      <Footer />
    </>
  )
};

export default ArticleIndexPage;
