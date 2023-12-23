import { LevelFilter, TypeFilter } from '../const';

export type TQuestReview = {
  id: string;
  title: string;
  previewImg: string;
  previewImgWebp: string;
  level: keyof typeof LevelFilter;
  type: keyof typeof TypeFilter;
  peopleMinMax: number[];
  }

export type TQuest = TQuestReview & {
  description: string;
  coverImg: string;
  coverImgWebp: string;
}

