import { Color } from "../../../../shared/types/Color.types";

interface Props {
  label: string
  description?: string
  placeholder?: string
}

interface StyleProps {
  background: Color
  border?: Color | null
}

export type {
  Props,
  StyleProps,
};
