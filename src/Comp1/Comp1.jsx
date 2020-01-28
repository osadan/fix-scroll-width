import React, { Component } from 'react';
import ScrollFix from '../ScrollFix/ScrollFix';
import Styled from "./styled";

class Comp1 extends Component {
  render() {
    return (
      <React.Fragment>
        <Styled.Wrapper>
          <Styled.Test>Test content</Styled.Test>
        </Styled.Wrapper>
      </React.Fragment>
    );
  }
}

export default ScrollFix(Comp1);