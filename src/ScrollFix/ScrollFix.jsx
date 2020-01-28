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
      if (!elememt) {
        return;
      }

      if (element.scrollHeight > element.clientHeight) {
        const { paddingLeft, marginLeft, marginRight, paddingRight, borderLeftWidth, borderRightWidth } = getComputedStyle(element);
        const scrollPadding = element.offsetWidth - parseInt(paddingRight) - parseInt(marginLeft) - parseInt(marginRight) - parseInt(borderLeftWidth) - parseInt(borderRightWidth) - element.clientWidth;
        element.style.paddingLeft = (parseInt(paddingLeft) + scrollPadding) + 'px';
      }
    }

    isClassComponent(component) {
      return !!(
        typeof component === 'function'
        && component.prototype
        && component.prototype.isReactComponent
      );
    }
    render() {
      if (this.isClassComponent(WrappedComponent)) {
        return <WrappedComponent {...this.props} ref={this.ref} />
      } else {
        return <WrappedComponent {...this.props} forwardRef={this.ref} />
      }
    }
  }

  return React.forwardRef((props, ref) => {
    return <ScrollFix {...props} forwardRef={ref} />
  })
}

export default ScrollFixHoc;