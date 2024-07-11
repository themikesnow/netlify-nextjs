import Category from './Category';
import TeamPlayer from './TeamPlayer';
import Tournament from './Tournament';

type Award = {
  award: {
    category: string;
    id: number;
    position: number;
    subCategory: string;
    translationKey: string;
  };
  category?: Category;
  id?: number;
  teamPlayer?: TeamPlayer;
  tournament?: Tournament;
};

export default Award;
