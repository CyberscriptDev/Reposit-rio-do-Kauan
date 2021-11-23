import React, { useState } from 'react';
import { Input, InvalidEmailIcon, InvalidField } from '../Inputs.elements';

function InvalidEmail() {
  const [text, setText] = useState('');

  return (
    <InvalidField>
      <InvalidEmailIcon />
      <Input 
        placeholder="E-mail" 
        type="email" value={text} 
        onChange={e => setText(e.target.value)}/>
    </InvalidField>
  );
}

export default InvalidEmail;