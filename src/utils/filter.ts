import { FilterLevel, FilterType } from '../const';
import { TQuestReview } from '../types/quest';

export function filterItems (quests: TQuestReview[], filterOfType: FilterType, filterOfLevel: FilterLevel) {
  let result: TQuestReview[] = [...quests];
  switch (filterOfType) {
    case FilterType.All:
      result = [...result];
      break;
    case filterOfType:
      result = result.filter((item) => item.type === filterOfType);
      break;
  }

  switch (filterOfLevel) {
    case FilterLevel.Any:
      result = [...result];
      break;
    case filterOfLevel:
      result = result.filter((item) => item.level === filterOfLevel);
      break;
  }

  return result;
}
