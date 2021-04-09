import { Color } from '../types/Color.types';

const getColor = (color: Color) => {
  return {
    'black': '#333',
    'red': '#ff5e78',
    'blue': '#51c2d5',
    'pink': '#ffb4b4',
    'green': '#75cfb8',
    'grey': '#eee',
    'middleGrey': '#ccc',
    'white': 'white',
  }[color];
};

export default getColor;
