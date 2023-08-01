import { Size, ProductCart, Product } from "src/types";

export const mapCartItem: (
  size: Size,
  product: Product,
  cart: ProductCart[]
) => ProductCart[] = (size, product, cart) => {
  const clonedCart = [...cart];
  const existingCartItem = clonedCart.find((item) => item.size.id === size.id);
  if (existingCartItem) {
    existingCartItem.quantity++;
  } else {
    clonedCart.push({
      id: product.id,
      title: product.title,
      description: product.description,
      unitPrice: product.price,
      quantity: 1,
      imageURL: product.imageURL,
      size: size,
    });
  }
  return clonedCart;
};
