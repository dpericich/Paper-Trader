import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
`

const ArticleTitle = styled.h1`
  font-size: 2rem;
`

const ArticleInfo = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 1rem;
`

// At a later date I want this to be a link to an author page
const ArticleAuthor = styled.p`

`

const ArticleDate = styled.p`
  font-weight: 700;
  margin-left: 1rem;
`

const Title = () => {
  return(
    <Wrapper>
      <ArticleTitle>
        Tershawn Wharton Picks for the Win
      </ArticleTitle>
      <ArticleInfo>
        <ArticleAuthor>Big Bunny</ArticleAuthor>
        <ArticleDate>January 20th, 2021</ArticleDate>
      </ArticleInfo>
    </Wrapper>
  )
};

export default Title;
