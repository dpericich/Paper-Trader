import React from 'react';
import styled from 'styled-components';

// Need to change serializer to send over the date_published and a blurb
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  margin: 0 4rem 1.5rem;

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
      </Wrapper>
    </>
  )
};

export default ArticlePreview;
