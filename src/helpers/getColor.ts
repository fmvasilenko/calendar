import { Color } from '../types/Color.types';

const getColor = (color: Color) => {
  return {
    'red': '#ff5e78',
    'blue': '#51c2d5',
    'pink': '#ffb4b4',
    'green': '#75cfb8',
    'grey': '#eee',
  }[color];
};

export default getColor;
