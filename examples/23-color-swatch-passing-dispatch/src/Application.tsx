import * as React from 'react';

import { ColorSwatch } from './ColorSwatch';
import { ColorInputs } from './ColorInputs';

import { toRGB } from './utilities';
import { reducer } from './reducer';
import { ThemeContext } from './theme-context';
import { ColorAdjustment } from './ColorAdjustment';
import { ColorInput } from './ColorInput';
import { ColorSlider } from './ColorSlider';

const Application = () => {
  const themes = React.useContext(ThemeContext);
  const [rgb, dispatch] = React.useReducer(reducer, {
    red: 0,
    green: 0,
    blue: 0
  });

  return (
    <main
      style={{
        borderColor: toRGB(rgb),
        ...themes.dark
      }}
    >
      <ColorSwatch />
      <ColorInputs {...rgb} />
      <ColorAdjustment Adjustment={ColorSlider} />
      <ColorAdjustment Adjustment={ColorInput} />
    </main>
  );
};

export default Application;
