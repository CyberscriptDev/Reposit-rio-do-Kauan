import React, { useState } from 'react';
import { Field, Input, LoadingIcon } from '../Inputs.elements';

interface Props {
  type: string,
  placeholder: string,
}

function GenericInputWithLoading({ type, placeholder }: Props) {
  const [text, useText] = useState('');

  return (
    <Field>
      <Input 
        value={text} 
        onChange={(e) => useText(e.target.value)} 
        type={type} 
        placeholder={placeholder}/>
      <LoadingIcon className="spinner" />
    </Field>
  );
}

export default GenericInputWithLoading;