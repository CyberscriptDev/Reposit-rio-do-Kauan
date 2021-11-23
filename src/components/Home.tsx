import React from 'react';
import GenericInput from './inputs/GenericInput/GenericInput';
import GenericInputDisabled from './inputs/GenericInputDisabled/GenericInputDisabled';
import GenericLoadingInput from './inputs/GenericLoadingInput/GenericLoadingInput';
import InputEmail from './inputs/InputEmail/InputEmail';
import InputPassword from './inputs/InputPassword/InputPassword';
import HelpTextInput from './inputs/HelpTextInput/HelpTextInput';
import InvalidEmail from './inputs/InvalidEmail/InvalidEmail';
import InvalidPassword from './inputs/InvalidPassword/InvalidPassword';
import ValidEmail from './inputs/ValidEmail/ValidEmail';
import ValidPassword from './inputs/ValidPassword/ValidPassword';
import Switch from './switches/Switch/Switch';
import SwitchThin from './switches/ThinSwitch/ThinSwitch';
import SwitchThinWithOption from './switches/ThinOptionSwitch/ThinOptionSwitch';
import SwitchWithOption from './switches/OptionSwitch/OptionSwitch';
import styled from 'styled-components';
import CollapseChevron from './collapses/CollapseChevron/CollapseChevron';
import CollapsePlus from './collapses/CollapsePlus/CollapsePlus';

export function Home() {
  return (
    <Store>
      <div>
        <p>Switches</p>
        <Switch id="checkbox" />
        <SwitchThin id="checkbox-thin" color="#950ae6" />
        <SwitchWithOption color="#0df60d" option="Some Option" id="option" />
        <SwitchThinWithOption
          color="#0df60d"
          option="Some Option"
          id="option-thin"
        />
      </div>
      <div>
        <p>Inputs</p>
        <GenericInput type="text" />
        <GenericInputDisabled type="text" />
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
`;
