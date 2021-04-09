import { View, ViewConfig } from '../Input.types';

const getStyle = (view?: View): ViewConfig => {
  switch (view) {
    case 'resolved': return {
      color: 'middleGrey',
      border: 'green',
    }
    case 'rejected': return {
      color: 'middleGrey',
      border: 'red',
    }
    case 'focused': return {
      color: 'middleGrey',
      border: 'middleGrey',
    }
    case 'default':
    default: return {
      color: 'middleGrey',
      border: 'grey',
    }
  }
}

export default getStyle;
