import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    // const res = await axios.get("https://dummyjson.com/products")
    return res.data;
  }
);

const initialState = {
  items: [],
  filteredItems: [],
  status: "idle",
  categories: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    filterByCategory: (state, action) => {
      const category = action.payload;
      if (category === "all") {
        state.filteredItems = state.items;
      } else {
        state.filteredItems = state.items.filter(
          (item) => item.category === category
        );
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "Loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "Succeeded";
        state.items = action.payload;
        state.filteredItems = action.payload;
        state.categories = [
          "all",
          ...new Set(action.payload.map((p) => p.category)),
        ];
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.status = "Failed";
      });
  },
});

export const { filterByCategory } = productSlice.actions;
export default productSlice.reducer;
