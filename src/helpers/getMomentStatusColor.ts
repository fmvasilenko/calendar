import MomentStatus from '../types/MomentStatus.types';

const getMomentStatusColor = (moment: MomentStatus) => {
  switch (moment) {
    case 'busy': return '#ff5e78';
    case 'undesirable': return '#ffb4b4';
    case 'free': return '#51c2d5';
    case 'preferred': return '#75cfb8';
    default: return '';
  }
}

export default getMomentStatusColor;