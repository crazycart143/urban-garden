import { MouseEventHandler } from "react";

export interface HamburgerMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export interface CustomButtonProps {
  title: String;
  containerStyles?: String;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit"; //means it can either be button or submit
  textStyles?: string;
  rightIcon?: string;
  isDisabled?: boolean;
}
export interface PlantProps {
  id: number;
  common_name: string;
  scientific_name: string[];
  other_name: string[];
  cycle: string;
  watering: string;
  sunlight: string[];
  default_image: object;
}
