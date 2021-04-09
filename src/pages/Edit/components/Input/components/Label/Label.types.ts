import { Color } from "../../../../../../shared/types/Color.types";

type View = 'default' | 'focused';

interface Props {
  label: string
  view: View
}

interface StyleProps {
  border?: Color
  background: Color
}

export type {
  View,
  Props,
  StyleProps
}
