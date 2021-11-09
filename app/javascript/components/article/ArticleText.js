import React from 'react';
import styled from 'styled-components';
import Paragraph from '../pageBasics/Paragraph'

const ArticleText = ({props}) => {
  const Wrapper = styled.div`
  `

  const paragraph_text = props.article_text.split("\n").map((paragraph) => {
    return (
      <Paragraph paragraphText={paragraph} />
    )
  })

  return (
    <Wrapper>
      {paragraph_text}
    </Wrapper>
  )
};

export default ArticleText;
