import React, { useState } from 'react';
import {
  Input, UnvalidField,
  UnvalidPasswordIcon, UnvalidUnvisiblePasswordIcon, UnvalidVisiblePasswordIcon
} from './Inputs.elements';

function ValidPassword() {
  const [text, setText] = useState('');
  const [visible, setVisible] = useState(false);

  const handleClick = () => setVisible(!visible);

  return (
    <UnvalidField>
      <UnvalidPasswordIcon/>
      <Input 
        placeholder="Senha"
        type={visible ? 'text' : 'password'} 
        value={text} onChange={e => setText(e.target.value)}/>
      {visible ? 
        <UnvalidUnvisiblePasswordIcon onClick={handleClick}/>
        : 
        <UnvalidVisiblePasswordIcon onClick={handleClick} />
      }
    </UnvalidField>
  );
}

export default ValidPassword;