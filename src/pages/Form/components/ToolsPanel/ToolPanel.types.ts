import MomentStatus from "../../../../shared/types/MomentStatus.types";

interface Item {
  toolType: MomentStatus
  label: string
}

interface Vocabulary {
  title: string
  items: Item[]
}

export type {
  Vocabulary,
};
