import { Shape, ShapeConfig } from '../Input.types';

const getShape = (shape?: Shape): ShapeConfig => {
  switch (shape) {
    case 'borderRadiusLeft': return {
      borderRadius: '5px 0 0 5px',
    }
    case 'borderRadiusRight': return {
      borderRadius: '0 5px 5px 0',
    }
    case 'withBorderRadius':
    default: return {
      borderRadius: '5px',
    }
  }
}

export default getShape;
