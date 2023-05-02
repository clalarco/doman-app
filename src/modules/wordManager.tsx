import { useTranslation as t} from "react-i18next";

const words = [
  'mom',
  'dad',
  'sister',
  'pineapple',
  'cat',
];

export const nextWord = () => {
  const word = words[Math.floor(Math.random() * words.length)]
  // speak(word);
  return word
};
export const firstWord = nextWord;
export const previousWord = nextWord;
