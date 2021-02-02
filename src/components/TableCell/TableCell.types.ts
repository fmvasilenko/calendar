import MomentStatus from '../../types/MomentStatus.types';

interface Props {
  status: MomentStatus
  row: number
  column: number
  callBack: (row: number, column: number) => void
}

interface StyleProps {
  status: MomentStatus,
}

export type {
  Props,
  StyleProps,
}
