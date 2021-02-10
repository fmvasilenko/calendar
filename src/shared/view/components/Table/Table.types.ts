import MomentStatus from "../../../types/MomentStatus.types";

interface Props {
  days: string[]
  hours: string[]
  matrix: MomentStatus[][]
  callBack: (row: number, column: number) => void
}

export type {
  Props
}
