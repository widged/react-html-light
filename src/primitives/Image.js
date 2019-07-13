import React from "react";
import PropTypes from "prop-types";
import StyleSheet from "../stylesheet";
import { ViewPropTypes } from "./View";

const ViewStylePropTypes = {};
const ImageStylePropTypes = {
  ...ViewStylePropTypes
};

const ImageURISourcePropType = PropTypes.shape({
  uri: PropTypes.string.isRequired,
  height: PropTypes.number,
  width: PropTypes.number
  // bundle: PropTypes.string,
  // method: PropTypes.string,
  // headers: PropTypes.objectOf(PropTypes.string),
  // body: PropTypes.string,
  // cache: PropTypes.oneOf(['default', 'reload', 'force-cache', 'only-if-cached']),
  // scale: PropTypes.number,
});

export const ImageSourcePropType = PropTypes.oneOfType([
  ImageURISourcePropType,
  // PropTypes.arrayOf(ImageURISourcePropType), // TODO: handle me
  PropTypes.string
]);

export const ImagePropTypes = {
  ...ViewPropTypes,
  style: PropTypes.oneOfType([
    PropTypes.shape(ImageStylePropTypes),
    PropTypes.number
  ]),
  defaultSource: ImageSourcePropType,
  source: ImageSourcePropType
};

const extractURLFromSource = source => {
  if (typeof source === "string") {
    return source;
  }
  return (source || {}).uri;
};

// $FlowFixMe
export default class Image extends React.Component {
  static propTypes = ImagePropTypes;

  static defaultProps = {
    name: "Image"
  };

  render() {
    const { children, source, defaultSource, name } = this.props;

    let style = StyleSheet.flatten(this.props.style) || {};

    if (source && typeof source !== "string") {
      style = {
        height: source.height,
        width: source.width,
        ...style
      };
    }

    return (
      <img
        style={style}
        src={extractURLFromSource(source || defaultSource)}
        name={name}
        alt={name}
      >
        {children}
      </img>
    );
  }
}
