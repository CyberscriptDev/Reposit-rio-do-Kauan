import React, { useState } from 'react';
import { Field, Input } from './GenericInput.style';

interface Props {
  type: string,
  placeholder?: string,
}

function GenericInput({ type, placeholder }: Props) {
  const [text, useText] = useState('');

  return (
    <Field>
      <Input 
        value={text} 
        onChange={(e) => useText(e.target.value)} 
        type={type} 
        placeholder={placeholder}/>
    </Field>
  );
}

export default GenericInput;