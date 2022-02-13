export type IconsId =
  | "icon_alert"
  | "icon_calendar1"
  | "icon_calendar2"
  | "icon_code"
  | "icon_trello";

export type IconsKey =
  | "IconAlert"
  | "IconCalendar1"
  | "IconCalendar2"
  | "IconCode"
  | "IconTrello";

export enum Icons {
  IconAlert = "icon_alert",
  IconCalendar1 = "icon_calendar1",
  IconCalendar2 = "icon_calendar2",
  IconCode = "icon_code",
  IconTrello = "icon_trello",
}

export const ICONS_CODEPOINTS: { [key in Icons]: string } = {
  [Icons.IconAlert]: "61697",
  [Icons.IconCalendar1]: "61698",
  [Icons.IconCalendar2]: "61699",
  [Icons.IconCode]: "61700",
  [Icons.IconTrello]: "61701",
};
