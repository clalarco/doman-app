import React, { useEffect } from 'react';
import { Text, View, Image } from 'react-native';

import styles from '../../assets/styles';
import { NavigationProp } from '@react-navigation/core';
import { Trans } from 'react-i18next';
import splashImage from '../../assets/splash/splash04.png';

interface Props {
  navigation: NavigationProp<any, any>;
}

const SplashScreen : React.FC<Props>= ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Home');
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.splashContainer}>
        <Image source={splashImage} style={styles.splashLogo}></Image>
        <Text style={styles.splashTitle}>
          <Trans i18nKey='appName'></Trans>
        </Text>
    </View>
    );
}

export default SplashScreen;
