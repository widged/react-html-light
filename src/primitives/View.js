import React from "react";
import PropTypes from "prop-types";
import StyleSheet from "../stylesheet";

const ShadowsPropTypes = {
  shadowColor: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  shadowOffset: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number
  }),
  shadowOpacity: PropTypes.number,
  shadowRadius: PropTypes.number,
  shadowSpread: PropTypes.number,
  shadowInner: PropTypes.bool
};

export const ViewPropTypes = {
  // TODO(lmr): do some nice warning stuff like RN does
  style: PropTypes.oneOfType([
    PropTypes.shape({}),
    PropTypes.arrayOf(PropTypes.shape({})),
    PropTypes.arrayOf(PropTypes.number),
    PropTypes.number
  ]),
  name: PropTypes.string,
  shadows: PropTypes.arrayOf(
    PropTypes.shape({
      ...ShadowsPropTypes
    })
  ),
  children: PropTypes.node
};

export default class View extends React.Component {
  static propTypes = ViewPropTypes;

  static defaultProps = {
    name: "View"
  };

  render() {
    const { name, style, shadows, children } = this.props;
    return (
      <div name={name} style={StyleSheet.flatten(style)} shadows={shadows}>
        {children}
      </div>
    );
  }
}
