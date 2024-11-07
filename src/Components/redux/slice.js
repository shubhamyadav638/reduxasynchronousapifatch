import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
//https://dummyjson.com/products

export const fetchCardThunk = createAsyncThunk("card", async () => {
  try {
    const apiresponse = await fetch("https://dummyjson.com/products");

    const convert = await apiresponse.json();
    return convert.products;
  } catch (e) {
    console.log(e);
  }
});

const cardSlice = createSlice({
  name: "card",
  initialState: {
    card: [],
    loading: false, //or idle
  },
  // reducers:{},
  extraReducers: (builder) => {
    builder.addCase(fetchCardThunk.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchCardThunk.fulfilled, (state, action) => {
      state.card = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchCardThunk.rejected, (state, action) => {
      state.loading = true;
    });
  },
});

export default cardSlice.reducer;
