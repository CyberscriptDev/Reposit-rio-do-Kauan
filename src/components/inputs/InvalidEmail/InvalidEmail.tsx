import React, { useState } from 'react';
import { Input, InvalidEmailIcon, InvalidField } from './InvalidEmail.style';

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