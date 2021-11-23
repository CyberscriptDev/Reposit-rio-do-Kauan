import React, { useState } from 'react';
import {
  SwitchField,
  SwitchThinButton,
  SwitchThinControl,
  SwitchThinInput,
} from './ThinSwitch.style';

interface Props {
  color?: string;
  id: string;
}

function ThinSwitch({ color, id }: Props) {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => setIsChecked(!isChecked);

  return (
    <SwitchField>
      <SwitchThinInput
        id={id}
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
      />
      <SwitchThinControl color={color} isChecked={isChecked} htmlFor={id}>
        <SwitchThinButton color={color} isChecked={isChecked} />
      </SwitchThinControl>
    </SwitchField>
  );
}

export default ThinSwitch;
