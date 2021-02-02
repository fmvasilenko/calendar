import Props from './Tool.types'
import { Label, Input, Text, ColorBox } from './Tool.style';

const Tool = ({
  toolType,
  label,
}: Props): JSX.Element => {
  return (
    <Label>
      <Input toolType={toolType} type="radio" name="tool"/>
      <ColorBox toolType={toolType} />
      <Text>{label}</Text>
    </Label>
  )
}

export default Tool;
