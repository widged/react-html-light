import React from "react";
// import PropTypes from "prop-types";
import StyleSheet from "../stylesheet";
import { ViewPropTypes } from "./View";

export const TextPropTypes = ViewPropTypes;

/**
 * @example
 * <Text name='Foo' style={style}>
 *   Hello World!
 * </Text>
 */

const textStyle = {
  display: "inline-block"
};

export default class Text extends React.Component {
  static propTypes = TextPropTypes;

  render() {
    return (
      <span
        name={this.props.name}
        style={StyleSheet.flatten([textStyle, this.props.style])}
      >
        {this.props.children}
      </span>
    );
  }
}
