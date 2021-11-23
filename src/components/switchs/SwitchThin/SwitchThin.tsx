import React, { useState } from 'react';
import { SwitchField, SwitchThinButton, SwitchThinControl, SwitchThinInput } from './SwitchThin.style';

interface Props {
  color?: string,
  id: string
}

function SwitchThin({ color, id }: Props) {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => setIsChecked(!isChecked);

  return (
    <SwitchField>
      <SwitchThinInput 
        id={id ? id : 'thin-switch'} 
        type="checkbox" 
        checked={isChecked}
        onChange={handleChange}/>
      <SwitchThinControl color={color} isChecked={isChecked} htmlFor={id ? id : 'thin-switch'} >
        <SwitchThinButton color={color} isChecked={isChecked} />
      </SwitchThinControl>
    </SwitchField>
  );
}

export default SwitchThin;