export type IconsId =
  | "icon_arrow"
  | "icon_arrowdown"
  | "icon_eyeshow";

export type IconsKey =
  | "IconArrow"
  | "IconArrowdown"
  | "IconEyeshow";

export enum Icons {
  IconArrow = "icon_arrow",
  IconArrowdown = "icon_arrowdown",
  IconEyeshow = "icon_eyeshow",
}

export const ICONS_CODEPOINTS: { [key in Icons]: string } = {
  [Icons.IconArrow]: "61697",
  [Icons.IconArrowdown]: "61698",
  [Icons.IconEyeshow]: "61699",
};
