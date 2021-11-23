import React from "react";
import Switch from "./switchs/Switch/Switch";
import SwitchThin from "./switchs/SwitchThin/SwitchThin";
import SwitchThinWithOption from "./switchs/SwitchThinWithOption/SwitchThinWithOption";
import SwitchWithOption from "./switchs/SwitchWithOption/SwitchWithOption";

export function Home() {

  return (
    <>
      <Switch id="checkbox"/>
      <SwitchThin id="checkbox-thin" color='#950ae6'/>
      <SwitchWithOption color='#0df60d' option="Some Option" id="option"/>
      <SwitchThinWithOption color='#0df60d' option="Some Option" id="option-thin" />
    </>
  );
}