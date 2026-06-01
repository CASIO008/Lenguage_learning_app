import { Audio } from 'expo-av';

export const playAudio = async (uri) => {
  const { sound } = await Audio.Sound.createAsync({ uri });
  await sound.playAsync();
};

export const speakWord = async (text) => {
  // Integração com TTS será adicionada aqui
  console.log('Speaking:', text);
};
