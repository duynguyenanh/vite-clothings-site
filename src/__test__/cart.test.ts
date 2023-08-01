import { test, expect } from "vitest";

import { Product, Size } from "src/types";
import { mapCartItem } from "src/utils";

const mockImage =
  "https://mrdevelopertestassets.s3.ap-southeast-2.amazonaws.com/classic-tee.jpg";

const mockSSize: Size = {
  id: 1,
  label: "S",
};
const mockMSize: Size = {
  id: 2,
  label: "M",
};
const mockLSize: Size = {
  id: 3,
  label: "L",
};

const mockProduct: Product = {
  id: 1,
  title: "classic tee",
  description: "description",
  price: 75.5,
  imageURL: mockImage,
  sizeOptions: [mockSSize, mockMSize, mockLSize],
};

test("add 1 product", () => {
  expect(mapCartItem(mockMSize, mockProduct, [])).toEqual([
    {
      id: 1,
      title: "classic tee",
      description: "description",
      unitPrice: 75.5,
      quantity: 1,
      imageURL: mockImage,
      size: mockMSize,
    },
  ]);
});

test("add 2 product", () => {
  expect(
    mapCartItem(mockMSize, mockProduct, [
      {
        id: 1,
        title: "classic tee",
        description: "description",
        unitPrice: 75.5,
        quantity: 1,
        imageURL: mockImage,
        size: mockMSize,
      },
    ])
  ).toEqual([
    {
      id: 1,
      title: "classic tee",
      description: "description",
      unitPrice: 75.5,
      quantity: 2,
      imageURL: mockImage,
      size: mockMSize,
    },
  ]);
});

test("add 2 different products", () => {
  expect(
    mapCartItem(mockSSize, mockProduct, [
      {
        id: 1,
        title: "classic tee",
        description: "description",
        unitPrice: 75.5,
        quantity: 1,
        imageURL: mockImage,
        size: mockMSize,
      },
    ])
  ).toEqual([
    {
      id: 1,
      title: "classic tee",
      description: "description",
      unitPrice: 75.5,
      quantity: 1,
      imageURL: mockImage,
      size: mockMSize,
    },
    {
      id: 1,
      title: "classic tee",
      description: "description",
      unitPrice: 75.5,
      quantity: 1,
      imageURL: mockImage,
      size: mockSSize,
    },
  ]);
});
