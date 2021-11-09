import React from 'react';
import styled from 'styled-components';

const Paragraph = ({paragraphText}) => {
  const ParagraphWrapper = styled.div`
    margin-bottom: 1.25rem;
  `

  return(
    <>
      <ParagraphWrapper>{paragraphText}</ParagraphWrapper>
    </>
  )
};

export default Paragraph;
