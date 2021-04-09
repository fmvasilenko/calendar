import { useState } from 'react';
import InputField from '../../../../shared/view/components/Input/Input';

import { View } from './components/Label/Label.types';
import Label from './components/Label/Label';

import { InputWrapper, InputDescription } from './Input.style';
import { Props } from './Input.types';

const Input = (props: Props): JSX.Element[] => {
  const { label, description, placeholder } = props;
  const [ view, setView ] = useState<View>('default');

  return [
    <Label label={label} view={view} />,
    (
      <InputWrapper>
        <InputField
          view={view}
          shape='borderRadiusRight'
          placeholder={placeholder}
          onFocus={() => setView('focused')}
          onBlur={() => setView('default')}
        />
        {view === 'focused' && description && <InputDescription>{description}</InputDescription>}
      </InputWrapper>
    )
  ];
};

export default Input;
