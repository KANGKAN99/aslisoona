import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    { id: 1, name: "Aloe Vera", price: 150, image: "img1.jpg", category: "Indoor" },
    { id: 2, name: "Money Plant", price: 100, image: "img2.jpg", category: "Indoor" },
    { id: 3, name: "Snake Plant", price: 200, image: "img3.jpg", category: "Indoor" },
    { id: 4, name: "Cactus", price: 180, image: "img4.jpg", category: "Succulent" },
    { id: 5, name: "Tulsi", price: 80, image: "img5.jpg", category: "Outdoor" },
    { id: 6, name: "Bamboo", price: 250, image: "img6.jpg", category: "Outdoor" },
  ],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export default productSlice.reducer;
