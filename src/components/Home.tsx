import React from "react";
import Switch from "./switchs/Switch";
import SwitchThin from "./switchs/SwitchThin";
import SwitchThinWithOption from "./switchs/SwitchThinWithOption";
import SwitchWithOption from "./switchs/SwitchWithOption";

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