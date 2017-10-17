/**
 * React Native Avatar Component
 * the Component which show avatar
 *
 * @zack
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ViewPropTypes,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';

class Avatar extends Component{
  constructor(props){
    super(props);

    this._avatarPress = this._avatarPress.bind(this);
  }

  renderDefaultAvatar(){
    return (<View
      style={[
        styles.avatarStyle,
        {backgroundColor: '#B0C4DE'},
        this.props.avatarStyle
      ]}
    />);
  }

  renderAvatarName(){
    if (this.props.showName == true){
      var showThisName = this.props.name ? this.props.name : '无昵称';
      let showThisNameLength = showThisName.length + (showThisName.match(/[^\x00-\xff]/g) || "").length;
      if (showThisNameLength > this.props.showNameLength){
        // 尚不兼容中文
        showThisName = showThisName.slice(0, this.props.showNameLength - 1).concat('...');
      }
      return (
        <Text
          style={[styles.textStyle, this.props.textStyle]} allowFontScaling={false}
          numberOfLines={this.props.numberOfNameLines}>
          {showThisName}
        </Text>
      );
    }
    return null;
  }

  _avatarPress(){
    if (this.props.onAvatarPress){
      this.props.onAvatarPress(this.props);
    }
  }

  render(){
    return(
      <TouchableOpacity
        style={[styles.containerStyle, this.props.avatarContainerStyle]}
        disabled={this.props.onAvatarPress ? false : true}
        onPress={this._avatarPress}
        accessibilityTraits = "image">
        {this.props.avatar ? <Image
          style={[styles.avatarStyle,  this.props.avatarStyle]}
          source={{uri: this.props.avatar}}
        /> : this.renderDefaultAvatar()}
        {this.renderAvatarName()}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle:{
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatarStyle:{
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
    borderRadius: 5,
  },
  textStyle:{
    color: 'black',
    fontSize: 12,
    backgroundColor: 'transparent',
    fontWeight: 'normal',
  }

});

Avatar.defaultProps = {
  avatarStyle: {backgroundColor: '#faebd7'},
  showName: false,
  numberOfNameLines: 2,
  showNameLength: 200,
};

Avatar.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  avatarContainerStyle: ViewPropTypes.style,
  avatarStyle: ViewPropTypes.style,
  textStyle: Text.propTypes.style,
  onAvatarPress: PropTypes.func,
  showName: PropTypes.bool,
  showNameLength: PropTypes.number,
  numberOfNameLines: PropTypes.number,
};

module.exports = Avatar;
