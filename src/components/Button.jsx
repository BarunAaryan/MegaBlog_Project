import React from "react";

function Button({
  children,
  type = "button",
  bgColor = "bg-blue-600",
  textColor = "text-white",
  className = "",
  ...props
  //leaving it blank coz we can pass our custom class dynamically, all other properties are taken in props
}) {
  return <button className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`} {...props}>{children}</button>;
}

export default Button;
