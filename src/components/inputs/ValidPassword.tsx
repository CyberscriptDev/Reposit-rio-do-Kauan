import React, { useState } from 'react';
import {
  Input, ValidField,
  ValidPasswordIcon, ValidUnvisiblePasswordIcon, ValidVisiblePasswordIcon
} from './Inputs.elements';

function ValidPassword() {
  const [text, setText] = useState('');
  const [visible, setVisible] = useState(false);

  const handleClick = () => setVisible(!visible);

  return (
    <ValidField>
      <ValidPasswordIcon/>
      <Input 
        placeholder="Senha"
        type={visible ? 'text' : 'password'} 
        value={text} onChange={e => setText(e.target.value)}/>
      {visible ? 
        <ValidUnvisiblePasswordIcon onClick={handleClick}/>
        : 
        <ValidVisiblePasswordIcon onClick={handleClick} />
      }
    </ValidField>
  );
}

export default ValidPassword;
