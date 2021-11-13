import React from 'react';
import styled from 'styled-components';
import Paragraph from '../pageBasics/Paragraph'

const ArticleText = ({props}) => {
  const Wrapper = styled.div`
  `

  const paragraphsText = props.article_text.split("\n").map((paragraph) => {
    return (
      <Paragraph paragraphText={paragraph} />
    )
  })

  return (
    <Wrapper>
      {paragraphsText}
    </Wrapper>
  )
};

export default ArticleText;
