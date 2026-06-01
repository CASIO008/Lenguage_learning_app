import { Platform } from 'react-native';

const fontFamily = Platform.select({
  ios: 'System',
  android: 'Roboto',
  default: 'System',
});

export const typography = {
  h1: { fontSize: 28, fontWeight: 'bold', fontFamily },
  h2: { fontSize: 24, fontWeight: 'bold', fontFamily },
  h3: { fontSize: 20, fontWeight: '600', fontFamily },
  body: { fontSize: 16, fontFamily },
  bodySmall: { fontSize: 14, fontFamily },
  caption: { fontSize: 12, fontFamily },
};
