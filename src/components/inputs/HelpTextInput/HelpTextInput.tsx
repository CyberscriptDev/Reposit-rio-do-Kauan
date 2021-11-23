import React, { useState } from 'react';
import { Field, HelpField, Input } from './HelpTextInput.style';

interface Props {
  type: string,
  placeholder?: string,
  helpText: string
}

function HelpTextInput({ type, placeholder, helpText }: Props) {
  const [text, useText] = useState('');

  return (
    <HelpField>
      <Field>
        <Input 
          value={text} 
          onChange={(e) => useText(e.target.value)} 
          type={type} 
          placeholder={placeholder}/>
      </Field>
      <p>{helpText}</p>
    </HelpField>
  );
}

export default HelpTextInput;
