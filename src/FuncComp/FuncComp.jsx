import React from 'react';
import Styled from '../Comp1/styled';
import ScrollFix from '../ScrollFix/ScrollFix';

const FuncComp = (props, ref) => {
  console.log(props, ref);
  return (
    <React.Fragment>
      <Styled.Wrapper >
        <Styled.Test>Test content</Styled.Test>
      </Styled.Wrapper>
    </React.Fragment>
  )
}

export default ScrollFix(FuncComp);