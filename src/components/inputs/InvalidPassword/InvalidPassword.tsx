import React, { useState } from 'react';
import {
  Input, InvalidField,
  InvalidInvisiblePasswordIcon, InvalidPasswordIcon, InvalidVisiblePasswordIcon
} from './InvalidPassword.style';

function InvalidPassword() {
  const [text, setText] = useState('');
  const [visible, setVisible] = useState(false);

  const handleClick = () => setVisible(!visible);

  return (
    <InvalidField>
      <InvalidPasswordIcon/>
      <Input 
        placeholder="Senha"
        type={visible ? 'text' : 'password'} 
        value={text} onChange={e => setText(e.target.value)}/>
      {visible ? 
        <InvalidInvisiblePasswordIcon onClick={handleClick}/>
        : 
        <InvalidVisiblePasswordIcon onClick={handleClick} />
      }
    </InvalidField>
  );
}

export default InvalidPassword;