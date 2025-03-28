export type ProductCard = {
  id?: string;
  title: string;
  price: number;
  imageUrl: string;
  description?: string;
  categoryId: string;
  status: string;
  quantity?: number;
};

export type Product = {
  id: string;
  title: string;
  content: ProductCard[];
};
