import React from 'react';
import Styled from '../Comp1/styled';
import ScrollFix from '../ScrollFix/ScrollFix';

const FuncComp = (props) => {
  return (
    <React.Fragment >
      <Styled.Wrapper ref={props.forwardRef}>
        <Styled.Test>Test content</Styled.Test>
      </Styled.Wrapper>
    </React.Fragment>
  )
}

export default ScrollFix(FuncComp);