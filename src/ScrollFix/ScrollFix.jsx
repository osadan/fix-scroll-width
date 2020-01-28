import React, { Component } from 'react';
import ReactDOM from "react-dom";


const ScrollFixHoc = (WrappedComponent) => {

  class ScrollFix extends Component {
    constructor(props) {
      super(props)
      this.ref = {}//React.createRef();
    }
    componentDidMount() {
      console.log(this.ref);
      console.log(this.props.forwardRef);
      console.log(this.props.children);
      console.log(React.Children.map(i => console.log(i)));
      if (!this.ref || !this.ref.current) {
        return;
      }
      const element = ReactDOM.findDOMNode(this.ref.current);
      console.log(element);
      if (element.scrollHeight > element.clientHeight) {
        const { paddingLeft, marginLeft, marginRight, paddingRight, borderLeftWidth, borderRightWidth } = getComputedStyle(element);
        const scrollPadding = element.offsetWidth - parseInt(paddingRight) - parseInt(marginLeft) - parseInt(marginRight) - parseInt(borderLeftWidth) - parseInt(borderRightWidth) - element.clientWidth;
        element.style.paddingLeft = (parseInt(paddingLeft) + scrollPadding) + 'px';
      }
    }
    render() {

      return (
        <React.Fragment>
          <WrappedComponent tmp="3" ref={this.ref} {...this.props}></WrappedComponent>
        </React.Fragment>
      );
    }
  }

  //return React.forwardRef((props, ref) => {
  //return <ScrollFix {...props} forwardRef={ref} />
  //})
  return ScrollFix;
}

export default ScrollFixHoc;