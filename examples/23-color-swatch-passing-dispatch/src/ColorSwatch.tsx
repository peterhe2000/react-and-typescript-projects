import { RGBContext } from './context';
import { RGBColorType } from './types';

export const ColorSwatch = () => {
  const { red, green, blue } = useContext(RGBContext);

  return (
    <div
      className="color-swatch"
      style={{
        backgroundColor: `rgb(${red}, ${green}, ${blue})`
      }}
    ></div>
  );
};
