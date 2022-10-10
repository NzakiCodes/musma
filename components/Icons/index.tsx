import React from "react";
import * as icons from "./icons";
import { SvgXml } from "react-native-svg";

export type IconName = keyof typeof icons;
export interface Props {
  icon: IconName;
  type?:"nav"|"regular";
  active?:boolean;
}

const Icon = ({ icon, type, active }: Props) => {
  const iconSelect = type==="nav"? (active? `${icon}Active`:icon):icon
  const iconName = icons[iconSelect];
  if (iconName) return <SvgXml xml={iconName} width="24px" height="24px" />;
  throw new Error(`Unknown icon "${iconSelect}"`);
};

export default Icon;
