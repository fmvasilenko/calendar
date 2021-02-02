import MomentStatus from '../types/MomentStatus.types';

const getMomentColorStatus = (moment: MomentStatus) => {
  switch (moment) {
    case 'busy': return '#ff5e78';
    case 'undesirable': return '#ffb4b4';
    case 'free': return '#bbf1fa';
    case 'preferred': return '#75cfb8';
    default: return '';
  }
}

export default getMomentColorStatus;
