import React, { useState } from 'react';
import { Field, Input, LoadingIcon } from './GenericLoadingInput.style';

interface Props {
  type: string,
  placeholder?: string,
}

function GenericLoadingInput({ type, placeholder }: Props) {
  const [text, useText] = useState('');

  return (
    <Field>
      <Input 
        value={text} 
        onChange={(e) => useText(e.target.value)} 
        type={type} 
        placeholder={placeholder}/>
      <LoadingIcon />
    </Field>
  );
}

export default GenericLoadingInput;