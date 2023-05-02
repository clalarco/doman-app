import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  // Splash Screen
  splashContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    height: '85%',
    borderRadius: 5,
    margin: 5,
  },
  splashLogo: {
    resizeMode : 'contain',
    height: '40%',
    width: '50%',
  },
  splashTitle: {
    fontSize: 40,
    padding: 0,
  },

  // Screen distribution.
  screenContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },

  // Actions buttons.
  actionsContainer: {
    flex: 0.60,
    flexDirection: 'column',
  },

  bottomContainer: {
    flex: 0.16,
    flexDirection: 'row',
  },

  bigButton: {
    fontSize: '30em',
    textAlign:'center',
    height: '85%',
  },
});

export default styles;