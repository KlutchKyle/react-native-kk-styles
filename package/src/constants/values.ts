import { Dimensions } from 'react-native';

export const window = {
  HEIGHT: Dimensions.get('window').height,
  WIDTH: Dimensions.get('window').width,
};

export const smValue = 8;
export const mdValue = 16;
export const lgValue = 32;

export const h1FontSize = 32; // Large headline
export const h2FontSize = 28; // Sub-headline
export const h3FontSize = 24; // Section headings
export const h4FontSize = 20; // Sub-sections
export const h5FontSize = 18; // Minor headings
export const pFontSize = 16; // Body text, base size
export const sectionTitleFontSize = 28; // Slightly smaller than h1
