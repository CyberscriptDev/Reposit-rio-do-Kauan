import React, { useState } from 'react';
import {
  Field, Input, PasswordIcon,
  UnvisiblePasswordIcon, VisiblePasswordIcon
} from './Inputs.elements';

function InputPassword() {
  const [text, setText] = useState('');
  const [visible, setVisible] = useState(false);

  const handleClick = () => setVisible(!visible);

  return (
    <Field>
      <PasswordIcon/>
      <Input 
        placeholder="Senha"
        type={visible ? 'text' : 'password'} 
        value={text} onChange={e => setText(e.target.value)}/>
      {visible ? 
        <UnvisiblePasswordIcon onClick={handleClick}/>
        : 
        <VisiblePasswordIcon onClick={handleClick} />
      }
    </Field>
  );
}

export default InputPassword;
