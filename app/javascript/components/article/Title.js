import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
`

const ArticleTitle = styled.h3`
  font-size: 2rem;
  margin: 0rem;
`

const ArticleInfo = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 1rem;
`

// TODO : At a later date I want this to be a link to an author page
const ArticleAuthor = styled.p`
  font-weight: 700;
`

const ArticleDate = styled.p`
  font-weight: 300;
  margin-left: 1rem;
`

const Title = ({props}) => {
  return(
    <Wrapper>
      <ArticleTitle>
        {props.title}
      </ArticleTitle>
      <ArticleInfo>
        <ArticleAuthor>{props.author}</ArticleAuthor>
        <ArticleDate>{props.published_date}</ArticleDate>
      </ArticleInfo>
    </Wrapper>
  )
};

export default Title;
