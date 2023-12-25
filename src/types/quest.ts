import { Date, FilterLevel, FilterType } from '../const';

export type TQuestReview = {
  id: string;
  title: string;
  previewImg: string;
  previewImgWebp: string;
  level: FilterLevel;
  type: FilterType;
  peopleMinMax: number[];
  }

export type TQuest = TQuestReview & {
  description: string;
  coverImg: string;
  coverImgWebp: string;
}

export type TMyQuest = {
  date: Date;
  time: string;
  contactPerson: string;
  phone: string;
  withChildren: boolean;
  peopleCount: number;
  id: string;
  location: {
    address: string;
    coords: number[];
  };
  quest: TQuestReview;
}
