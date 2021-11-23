import React, { useState } from 'react';
import { Field, Input } from './Inputs.elements';

interface Props {
  type: string,
  placeholder: string,
}

function GenericInputDisabled({ type, placeholder }: Props) {
  const [text, useText] = useState('');

  return (
    <Field>
      <Input 
        value={text} 
        onChange={(e) => useText(e.target.value)} 
        disabled
        type={type} 
        placeholder={placeholder}/>
    </Field>
  );
}

export default GenericInputDisabled;