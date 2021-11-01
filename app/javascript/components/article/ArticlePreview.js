import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Need to change serializer to send over the date_published and a blurb
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  width: 50%;
  margin 1rem auto;

  @media (max-width: 900px) {
    width: 75%
  }

  @media (max-width: 500px) {
    width: 95%;
  }
`

const Title = styled.h3`
  font-size: 2rem;
  margin-top: .5rem;
  &:first-child {
    margin-top: 1rem;
  }
`

const MetaWrapper = styled.div`
  display: flex;
  flex-direction: row:
  justify-content: left;
  font-size: 1rem;
  font-weight: 700;
`

const Date = styled.p`

`

const Author = styled.p`
  margin-left: .75rem;
`

const Blurb = styled.div`
  font-size: 1rem;
`

const ArticleLink = styled(Link)`
  font-size: 1rem;
  text-decoration: none;
  margin-top: 1rem;


  &,
  &:visited {
    color: #000;
  }

  &:active,
  &: hover {
    color: orangered;
  }
`

const ArticlePreview = ({props}) => {
  return(
    <>
      <Wrapper>
        <Title>{props.attributes.title}</Title>
        <MetaWrapper>
          <Date>{props.attributes.publishedAt}</Date>
          <Author>{props.attributes.username}</Author>
        </MetaWrapper>
        <Blurb>{props.attributes.blurb}</Blurb>
        <ArticleLink to={`/articles/${props.attributes.id}`}>Full Article &rarr;</ArticleLink>
      </Wrapper>
    </>
  )
};

export default ArticlePreview;
