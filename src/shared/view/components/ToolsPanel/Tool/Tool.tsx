import Props from './Tool.types'
import { Label, Input, Text, ColorBox } from './Tool.style';

const Tool = ({
  toolType,
  label,
  chosen,
  callBack,
}: Props): JSX.Element => {
  return (
    <Label onClick={() => callBack ? callBack(toolType) : null}>
      <Input toolType={toolType} type="radio" name="tool" defaultChecked={chosen}/>
      <ColorBox toolType={toolType} />
      <Text>{label}</Text>
    </Label>
  )
}

export default Tool;
