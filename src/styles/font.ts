import {mapValues} from 'lodash';

import {COLORS} from './colors';
import {FontWeight} from './fontWeights';

// NOTE: Usage { ...font.size(8).BOLD.BLACK }
export const font = {
  size: (fontSize = 15, lineHeight?: number) =>
    mapValues(FontWeight, (fontFamily: FontWeight) =>
      mapValues(COLORS, (color: COLORS) => ({
        fontFamily,
        fontSize,
        lineHeight: lineHeight || fontSize,
        color,
      })),
    ),
};
