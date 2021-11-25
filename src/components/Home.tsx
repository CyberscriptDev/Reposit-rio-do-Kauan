import React from 'react';
import styled from 'styled-components';
import CollapseChevron from './collapses/CollapseChevron/CollapseChevron';
import CollapsePlus from './collapses/CollapsePlus/CollapsePlus';
import GenericInput from './inputs/GenericInput/GenericInput';
import GenericLoadingInput from './inputs/GenericLoadingInput/GenericLoadingInput';
import HelpTextInput from './inputs/HelpTextInput/HelpTextInput';
import InputEmail from './inputs/InputEmail/InputEmail';
import InputPassword from './inputs/InputPassword/InputPassword';
import InvalidEmail from './inputs/InvalidEmail/InvalidEmail';
import InvalidPassword from './inputs/InvalidPassword/InvalidPassword';
import ValidEmail from './inputs/ValidEmail/ValidEmail';
import ValidPassword from './inputs/ValidPassword/ValidPassword';
import OptionSwitch from './switches/OptionSwitch/OptionSwitch';
import OptionThinSwitch from './switches/OptionThinSwitch/OptionThinSwitch';
import Switch from './switches/Switch/Switch';
import ThinSwitch from './switches/ThinSwitch/ThinSwitch';

export function Home() {
  return (
    <Store>
      <div>
        <p>Switches</p>
        <Switch id="checkbox" color='green'/>
        <br />
        <ThinSwitch id="thin-checkbox" color="#a2c"/>
        <br />
        <OptionSwitch id="option-checkbox" color="red" option="Some Option"/>
        <br />
        <OptionThinSwitch id="thin-option" color="#0e35e0" option="Some Option" optionColor="red"/>
      </div>
      <div>
        <p>Inputs</p>
        <GenericInput type="text" />
        <GenericLoadingInput type="text" />
        <InputEmail />
        <InputPassword />
        <HelpTextInput type="text" helpText="text" />
        <InvalidEmail />
        <InvalidPassword />
        <ValidEmail />
        <ValidPassword />
      </div>
      <div>
        <p>Collapse</p>
        <CollapseChevron title='Xulambs Papai' content='Papai do céu, eu estou morrendo de saudade'/>
        <CollapsePlus title='Xulambs Papai' content='Papai do céu, eu estou morrendo de saudade'/>
      </div>
    </Store>
  );
}

export const Store = styled.div`
  display: flex;
  justify-content: space-around;
`;
