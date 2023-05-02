import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Trans, useTranslation } from 'react-i18next';

import { NavigationProp } from '@react-navigation/core';
import { Button, IconButton, Text } from 'react-native-paper';
import { firstWord, nextWord, previousWord } from '../modules/wordManager';
import { speak } from '../modules/textToSpeech';

interface Props {
  navigation: NavigationProp<any, any>;
}

const GameScreen : React.FC<Props> = ({ navigation }) => {
  const [word, setWordState] = useState(firstWord())

  const setWord = (word: string) => {
    setWordState(word);
    speak(t(word));
  }

  const { t } = useTranslation()

  return (
      <>
      <View style={styles.containerTop} >
        <View style={styles.menuLeft}>
          <IconButton icon='menu-left' size={80} onPress={() => setWord(previousWord())} />
        </View>
        <View style={styles.wordContent}>
          <Button mode='text' onPress={() => setWord(nextWord())}>
            <Text variant="displayLarge" style={styles.wordText} >{t(word)}
            </Text>
          </Button>
        </View>
        <View style={styles.menuRight}>
          <IconButton icon='menu-right' size={80} onPress={() => setWord(nextWord())} />
        </View>
      </View>
      <View style={styles.containerBottom} >
          <IconButton icon='volume-high' size={80} onPress={() => speak(t(word))} />
          <IconButton icon='microphone' size={80} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  containerTop: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    flex: 1,
    alignItems: 'baseline',
    justifyContent: 'center',
    height: '90%',
  },
  containerBottom: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '10%',
  },
  wordContent: {
    flex: 7,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  wordText: {
    color: 'red',
    fontSize: 110,
    height: 120,
    lineHeight: 200,
    alignItems: 'center',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  menuLeft: {
    flex: 1,
    alignContent: 'flex-start',
  },
  menuRight: {
    flex: 1,
    alignContent: 'flex-end',
  },
});

export default GameScreen;
