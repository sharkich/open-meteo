export const PersonsMap = {
  'Місіс Роуз.': true,
  'Місіс Ріплі.': true,
  'Місіс Скайд.': true,
  'Превелебний Чемберлен.': true,
  'Професор Уокер.': true,
  'Сержант Лейбл.': true
};
export const CluesMap = {
  'Викрутка.': true,
  'Відмичка.': true,
  'Дриль.': true,
  'Лом.': true,
  'Ліхтарик.': true,
  'Шпилька.': true
};
export const RoomsMap = {
  'Бальний зал.': true,
  'Бібліотека.': true,
  'Вітальня.': true,
  'Кабінет.': true,
  'Кухня.': true,
  'Передпокій.': true,
  'Спальня.': true,
  'Столова.': true,
  'Тераса.': true
};
export type IPersons = keyof typeof PersonsMap;
export type IClues = keyof typeof CluesMap;
export type IRooms = keyof typeof RoomsMap;

export interface IHand {
  rooms: IRooms[];
  persons: IPersons[];
  clues: IClues[];
}

export interface ICardsSet {
  room: IRooms;
  person: IPersons;
  clue: IClues;
}

export interface IPlayer {
  name: string;
  asked: ICardsSet[];
  oneOf: ICardsSet[];
  hand: IHand;
}
