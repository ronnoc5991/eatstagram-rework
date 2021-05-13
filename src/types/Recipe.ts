export type Recipe = {
  title: string;
  description: string;
  image: string;
  duration?: number;
  ingredients: Array<string>;
  steps: Array<string>;
  tags?: Array<string>;
  id?: string;
};
