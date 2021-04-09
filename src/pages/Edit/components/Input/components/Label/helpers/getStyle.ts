import { View, StyleProps } from "../Label.types";

const getStyle = (view?: View): StyleProps => {
  switch (view) {
    case 'focused': return {
      border: 'middleGrey',
      background: 'grey',
    }
    case 'default':
    default: return {
      background: 'grey',
    }
  }
}

export default getStyle;
