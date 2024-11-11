export type ProductCard = {
  title: string;
  newPrice: number;
  oldPrice: number;
  rating: number;
  image: string;
};

export type Product = {
  id: string;
  title: string;
  content: ProductCard[];
};
