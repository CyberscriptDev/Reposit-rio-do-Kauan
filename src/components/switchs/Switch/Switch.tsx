import React, { useState } from 'react';
import { SwitchButton, SwitchControl, SwitchField, SwitchInput } from './Switch.style';

interface Props {
  color?: string,
  id: string
}

function Switch({ color, id }: Props) {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => setIsChecked(!isChecked);

  return (
    <SwitchField>
      <SwitchInput  
        id={id} 
        type="checkbox" 
        checked={isChecked}
        onChange={handleChange}/>
      <SwitchControl color={color} isChecked={isChecked} htmlFor={id}>
        <SwitchButton />
      </SwitchControl>
    </SwitchField>
  );
}

export default Switch;
