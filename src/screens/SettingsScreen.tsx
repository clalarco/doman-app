import { NavigationProp } from '@react-navigation/native';
import React, { useState } from 'react';
import { View } from 'react-native';
import { Switch, List, IconButton } from 'react-native-paper';

interface Props {
  navigation: NavigationProp<any, any>;
}

export const SettingsScreen = () => {
  const [option1, setOption1] = useState(false);
  const [option2, setOption2] = useState(false);
  const [option3, setOption3] = useState(false);

  return (
    <View>
      <List.Item
        title="Option 1"
        right={() => <Switch value={option1} onValueChange={() => setOption1(!option1)} />}
      />
      <List.Item
        title="Option 2"
        right={() => <Switch value={option2} onValueChange={() => setOption2(!option2)} />}
      />
      <List.Item
        title="Option 3"
        right={() => <Switch value={option3} onValueChange={() => setOption3(!option3)} />}
      />
    </View>
  );
};

export const SettingsButton : React.FC<Props> = ({ navigation }) => (
  <IconButton icon='cog' onPress={() => navigation.navigate('Settings')} />
)
