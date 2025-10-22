import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    return response.data;
  }
);

const state = {
  items: [],
  status: "idle",
};

const productSlice = createSlice({
  name: "products",
  initialState: state,
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "Loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        (state.status = "Succeeded"), (state.items = action.payload);
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.status = "Failed";
      });
  },
});
export default productSlice.reducer;
