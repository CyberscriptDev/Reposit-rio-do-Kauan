import React, { useState } from 'react';
import { Input, UnvalidEmailIcon, UnvalidField } from './Inputs.elements';

function ValidEmail() {
  const [text, setText] = useState('');

  return (
    <UnvalidField>
      <UnvalidEmailIcon />
      <Input 
        placeholder="E-mail" 
        type="email" value={text} 
        onChange={e => setText(e.target.value)}/>
    </UnvalidField>
  );
}

export default ValidEmail;