export type Content = {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  date: string;
};

export type Category = {
  id: number;
  name: string;
  content: Content[];
};
