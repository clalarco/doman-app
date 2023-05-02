import React from 'react';
import { StyleSheet, View } from 'react-native';

import { NavigationProp } from '@react-navigation/core';
import { IconButton } from 'react-native-paper';
import { SettingsButton } from './SettingsScreen';

interface Props {
  navigation: NavigationProp<any, any>;
}

const HomeScreen : React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.appContainer}>
      <View style={styles.container}>
        <View style={styles.playButton}>
          <IconButton style={styles.playButton} icon='play' iconColor='white' size={30}
            onPress={() => navigation.navigate('Game')}/>
        </View>
      </View>
      <SettingsButton navigation={navigation}/>
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    flex: 7,
    width: '100%',
    height: '80%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  playButton: {
    width: 192,
    height: 192,
    borderRadius: 96,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconButton: {
    width: 192,
    height: 192,
    borderRadius: 96,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
  },
});

export default HomeScreen;
