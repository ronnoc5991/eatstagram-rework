export type Recipe = {
  title: string;
  description: string;
  imageUrl: string;
  name: string;
  profilePicUrl: string;
  timestamp: string;
  storageUri: string;
  duration?: number;
  ingredients: Array<string>;
  steps: Array<string>;
  tags?: Array<string>;
  id?: string;
};
