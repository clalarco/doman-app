// Text to Speech module.
// For now it uses expo-speech

// Expo version.
import * as Speech from 'expo-speech';

export const speak = (message: string) => {
  Speech.speak(message,
    {
      language: 'pt_BR',
      onStart() {

      },
      onDone() {

      },
    });
}

// Native version.
// import Tts from 'react-native-tts';

// export const init = async () => {
//   Tts.getInitStatus().then(() => {
//     Tts.speak('Doman');
//   });
// }

// export const speak = (message: string) => {
//   Tts.stop();
//   Tts.speak(message);
// }
