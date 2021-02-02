import MomentStatus from '../../../types/MomentStatus.types';

interface Props {
  toolType: MomentStatus,
  label: string,
  chosen?: boolean,
  callBack?: (tool: MomentStatus) => void
}

interface StyleProps {
  toolType: MomentStatus,
}

export default Props;
export type {
  StyleProps,
};
