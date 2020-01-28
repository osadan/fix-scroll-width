import React, { Component } from 'react';
import ReactDOM from "react-dom";

const ScrollFixHoc = (WrappedComponent) => {

  class ScrollFix extends Component {
    constructor(props) {
      super(props)
      this.ref = React.createRef();
    }

    componentDidMount() {
      if (!this.ref || !this.ref.current) {
        return;
      }

      const element = ReactDOM.findDOMNode(this.ref.current);
      if (!element) {
        return;
      }

      if (element.scrollHeight > element.clientHeight) {
        const { paddingLeft, marginLeft, marginRight, paddingRight, borderLeftWidth, borderRightWidth } = getComputedStyle(element);
        const scrollPadding = element.offsetWidth - parseInt(paddingRight) - parseInt(marginLeft) - parseInt(marginRight) - parseInt(borderLeftWidth) - parseInt(borderRightWidth) - element.clientWidth;
        element.style.paddingLeft = (parseInt(paddingLeft) + scrollPadding) + 'px';
      }
    }

    isClassComponent(component) {
      return Boolean(
        typeof component === 'function'
        && component.prototype
        && component.prototype.isReactComponent
      );
    }

    render() {
      return this.isClassComponent(WrappedComponent) ?
        <WrappedComponent {...this.props} ref={this.ref} /> :
        <WrappedComponent {...this.props} forwardRef={this.ref} />
    }
  }

  return ScrollFix;
}

export default ScrollFixHoc;
