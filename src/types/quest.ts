import { FilterLevel, FilterType } from '../const';

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

