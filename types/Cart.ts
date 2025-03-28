export interface CartItem {
  id: string;
  title: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

export interface CartState {
  cart: CartItem[];
}

export interface RemoveItemPayload {
  id: string;
}

export interface IncreaseQuantityPayload {
  id: string;
}

export interface DecreaseQuantityPayload {
  id: string;
}
