export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  imageURL: string;
  sizeOptions: Size[];
}

export interface Size {
  id: number;
  label: string;
}

export interface ProductCart {
  id: number;
  title: string;
  description: string;
  unitPrice: number;
  quantity: number;
  imageURL: string;
  size: Size;
}
