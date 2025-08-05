import React from "react";
import * as FcIcons from "react-icons/fc";
import * as FaIcons from "react-icons/fa";
import * as FiIcons from "react-icons/fi";
import * as GiIcons from "react-icons/gi";
import * as IoIcons from "react-icons/io5";
import * as MdIcons from "react-icons/md";
import * as RiIcons from "react-icons/ri";
import * as SiIcons from "react-icons/si";
import * as TbIcons from "react-icons/tb";
import * as WiIcons from "react-icons/wi";

// 合并所有图标
const allIcons = {
  ...FcIcons,
  ...FaIcons,
  ...FiIcons,
  ...GiIcons,
  ...IoIcons,
  ...MdIcons,
  ...RiIcons,
  ...SiIcons,
  ...TbIcons,
  ...WiIcons,
};

interface DynamicIconProps {
  iconName: string;
  className?: string;
  size?: number;
}

const DynamicIcon: React.FC<DynamicIconProps> = ({
  iconName,
  className = "",
  size = 24,
}) => {
  // @ts-expect-error - Dynamic icon access
  const IconComponent = allIcons[iconName];

  if (!IconComponent) {
    // 如果找不到图标，返回一个默认图标
    console.warn(`Icon "${iconName}" not found`);
    return <div className={`w-6 h-6 bg-gray-300 rounded ${className}`} />;
  }

  return <IconComponent className={className} size={size} />;
};

export default DynamicIcon;
