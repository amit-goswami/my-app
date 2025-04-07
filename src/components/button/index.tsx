import BaseInput from "../base-input";
import { BaseInputProps, INPUT_TYPE } from "../../types/components.interface";

interface ButtonProps extends BaseInputProps<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "tertiary";
}

const getVarientClasses = (variant: ButtonProps["variant"]): string => {
  switch (variant) {
    case "primary":
      return "bg-black-500 border border-red-800";
    case "secondary":
      return "bg-gray-500 text-white";
    case "tertiary":
      return "bg-transparent text-blue-500 border border-blue-500";
    default:
      return "";
  }
};

const Button: React.FC<ButtonProps> = ({ variant = "primary", ...props }) => {
  const baseClass = getVarientClasses(variant);

  return (
    <BaseInput
      type={INPUT_TYPE.BUTTON}
      {...props}
      className={`${baseClass} ${
        props.className ? props.className : ""
      } rounded-md p-2 hover:shadow-md transition-all duration-200 ease-in-out cursor-pointer hover:scale-102 active:scale-95
      `}
    />
  );
};

export default Button;
