import React, { useState } from 'react';
import {
  Field, Input, PasswordIcon,
  InvisiblePasswordIcon, VisiblePasswordIcon
} from './InputPassword.style';

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
        <InvisiblePasswordIcon onClick={handleClick}/>
        : 
        <VisiblePasswordIcon onClick={handleClick} />
      }
    </Field>
  );
}

export default InputPassword;
