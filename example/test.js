import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Avatar from 'react-native-avatar';

export default class Test extends React.Component {
  render() {
    const avatarProps = {
      avatarCarrier: {
        avatar: 'https://facebook.github.io/react/img/logo_og.png',
        name: 'reactreara',
      },
      showName: true,
      showNameLength: 100,
      avatarStyle: {
        width: 60,
        height: 60,
      },
    }
    return (
      <View style={styles.container}>
        <Text>avatar show bellow.</Text>
        <Avatar {...avatarProps} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
