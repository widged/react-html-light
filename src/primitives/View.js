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

/*
export type Color = number | string;
export type Align = 'auto' | 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline';
export type Justify = 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around';
export type Transform = [number, number, number, number, number, number, number, number, number];
ShadowViewStyles = {|
  alignContent?: ?Align,
  alignItems?: ?Align,
  alignSelf?: ?Align,
  aspectRatio?: ?number,
  borderBottomWidth?: ?number,
  borderLeftWidth?: ?number,
  borderRightWidth?: ?number,
  borderTopWidth?: ?number,
  borderWidth?: ?number,
  bottom?: ?number,
  display?: 'flex' | 'none',
  flex?: ?number,
  flexBasis?: ?number,
  flexDirection?: 'row' | 'column',
  flexGrow?: ?number,
  flexShrink?: ?number,
  flexWrap?: 'wrap' | 'nowrap',
  height?: ?number,
  justifyContent?: ?Justify,
  left?: ?number,
  margin?: ?number,
  marginBottom?: ?number,
  marginHorizontal?: ?number,
  marginLeft?: ?number,
  marginRight?: ?number,
  marginTop?: ?number,
  marginVertical?: ?number,
  maxHeight?: ?number,
  maxWidth?: ?number,
  minHeight?: ?number,
  minWidth?: ?number,
  overflow?: 'visible' | 'hidden' | 'scroll',
  padding?: ?number,
  paddingBottom?: ?number,
  paddingHorizontal?: ?number,
  paddingLeft?: ?number,
  paddingRight?: ?number,
  paddingTop?: ?number,
  paddingVertical?: ?number,
  position?: 'absolute' | 'relative',
  right?: ?number,
  top?: ?number,
  transform?: ?Transform,
  width?: ?number,
|};
*/
