import MomentStatus from '../types/MomentStatus.types';
import getColor from './getColor';

const getMomentStatusColor = (moment: MomentStatus) => {
  switch (moment) {
    case 'busy': return getColor('red');
    case 'undesirable': return getColor('pink');
    case 'free': return getColor('blue');
    case 'preferred': return getColor('green');
    default: return '';
  }
}

export default getMomentStatusColor;
