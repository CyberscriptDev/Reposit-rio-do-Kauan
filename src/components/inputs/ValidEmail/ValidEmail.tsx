import React, { useState } from 'react';
import { Input, ValidEmailIcon, ValidField } from '../Inputs.elements';

function ValidEmail() {
  const [text, setText] = useState('');

  return (
    <ValidField>
      <ValidEmailIcon />
      <Input 
        placeholder="E-mail" 
        type="email" value={text} 
        onChange={e => setText(e.target.value)}/>
    </ValidField>
  );
}

export default ValidEmail;
