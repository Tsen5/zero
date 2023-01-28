import { hsla, parseToHsla } from 'color2k';

const setColorLightness = (color: string, amount: number) => {
  const [hue, saturation, alpha] = parseToHsla(color);
  return hsla(hue, saturation, amount, alpha);
};

export default setColorLightness;
