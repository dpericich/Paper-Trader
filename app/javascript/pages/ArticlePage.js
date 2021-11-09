import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Header from '../components/pageBasics/Header';
import Title from '../components/article/Title';
import ArticleText from '../components/article/ArticleText';
import Footer from '../components/pageBasics/Footer';
import Loader from '../components/pageBasics/Loader';

const ArticlePage = (props) => {
  const [titleInfo, setTitleInfo] = useState({})
  const [articleText, setArticleText] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const url = `/api/v1${props.location.pathname}`
    axios.get(url)
    .then(res => {
      setTitleInfo({title: res.data.data.attributes.title, published_date: res.data.data.attributes.publishedAt, author: res.data.data.attributes.author});
      setArticleText({article_text: res.data.data.attributes.articleText});
      setLoading(false);
    })
    .catch(err => console.log(err));
  }, [])

  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    width: 55%;
    margin: 1rem auto;
    padding: 0rem;

    @media (max-width: 900px) {
      width: 70%;
      padding: .75rem 0 0;
      margin: 0 auto;
    }

    @media (max-width: 600px) {
      width: 85%;
      padding: .75rem 0 0;
      margin: 0 auto;
    }
  `

  if (loading) {
    return(
      <Loader />
    )
  } else {
    return(
      <>
        <Header />
          <Wrapper>
            <Title props={titleInfo} />
            <ArticleText props={articleText} />
          </Wrapper>
        <Footer />
      </>
    )
  }
}

export default ArticlePage;
