import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/pageBasics/Header';
import Title from '../components/article/Title';
import ArticleText from '../components/article/ArticleText';
import Footer from '../components/pageBasics/Footer';

const ArticlePage = (props) => {
  const [titleInfo, setTitleInfo] = useState({})
  const [articleText, setArticleText] = useState({})

  useEffect(() => {
    const url = `/api/v1${props.location.pathname}`
    axios.get(url)
    .then(res => {
      setTitleInfo({title: res.data.title})
      setArticleText({article_text: res.data.article_text})
    })
    .catch(err => console.log(err));
  }, [])

  return(
    <>
      <Header />
      <Title props={titleInfo} />
      <ArticleText props={articleText} />
      <Footer />
    </>
  )
}

export default ArticlePage;
