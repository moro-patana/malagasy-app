import React from 'react';
import PropTypes from 'prop-types';
import { TouchableHighlight } from 'react-native';

export default function ActionButton({ onPress,style , children }) {
  return <TouchableHighlight onPress={onPress} style={style}>{children}</TouchableHighlight>;
}

ActionButton.defaultProps = {
  children: null,
  onPress: () => {},
};

ActionButton.propTypes = {
  children: PropTypes.node,
  onPress: PropTypes.func,
};
