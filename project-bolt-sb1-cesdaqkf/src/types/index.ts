export type Gender = 'both' | 'girls' | 'boys';
export type Category = 'skincare' | 'fitness' | 'nutrition' | 'hair' | 'fashion' | 'mindset' | 'hygiene' | 'sleep';

export interface Tip {
  id: number;
  title: string;
  description: string;
  category: Category;
  gender: Gender;
  timeframe: string;
  difficulty: 'easy' | 'medium' | 'hard';
  steps: string[];
}

export interface CategoryInfo {
  id: Category;
  label: string;
  icon: string;
  color: string;
  bgColor: string;
}
