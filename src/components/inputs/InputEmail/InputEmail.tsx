import React, { useState } from 'react';
import { EmailIcon, Field, Input } from './InputEmail.style';


function InputEmail() {
  const [text, setText] = useState('');

  return (
    <Field>
      <EmailIcon/>
      <Input 
        placeholder="E-mail" 
        type="email" value={text} 
        onChange={e => setText(e.target.value)}/>
    </Field>
  );
}

export default InputEmail;
