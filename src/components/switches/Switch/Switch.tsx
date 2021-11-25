import React, { useState } from 'react';
import { SwitchButton, SwitchControl, SwitchField, SwitchInput } from './Switch.style';

interface Props {
  color?: string;
  id: string;
  onChange?: () => void;
  sliderWidth?: number;
}

function Switch({ color, id, onChange, sliderWidth }: Props) {
  const [isChecked, setIsChecked] = useState(false);

  const handleClick = () => setIsChecked(!isChecked);

  return (
    <SwitchField>
      <SwitchControl 
        sliderWidth={sliderWidth} 
        isChecked={isChecked} 
        color={color} 
        htmlFor={id}>
        <SwitchInput  
          id={id}
          type="checkbox" 
          onClick={handleClick}
          onChange={() => onChange}/>
        <SwitchButton 
          sliderWidth={sliderWidth} 
          isChecked={isChecked} 
          color={color} />
      </SwitchControl>
    </SwitchField>
  );
}

export default Switch;
