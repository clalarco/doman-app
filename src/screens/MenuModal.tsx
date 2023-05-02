import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Menu, Divider, Provider, IconButton } from 'react-native-paper';

const MenuModal = () => {
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  return (
    <Provider>
      <View style={styles.menuView}>
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={<IconButton style={[styles.mainMenuAnchor]} onPress={openMenu} icon='cog' />}>
          <Menu.Item onPress={() => {}} title="Item 1" />
          <Menu.Item onPress={() => {}} title="Item 2" />
          <Divider />
          <Menu.Item onPress={() => {}} title="Item 3" />
        </Menu>
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  menuView: {
    paddingTop: 50,
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    zIndex: 99,
    alignSelf: 'flex-end',
    width: '100%',
  },
  mainMenuAnchor: {
    width: 24,
  },
});


export default MenuModal;
