import { configureStore, createSlice } from "@reduxjs/toolkit";

const pageSlice = createSlice({
  name: "page",
  initialState: {
    data: [],
    fev: [],
    ischecked: false,
    checkedCpmponent: null,
  },
  reducers: {
    setChecked(state, action) {
      state.data = action.payload.data;
      state.ischecked = action.payload.ischecked;
      state.checkedCpmponent = action.payload.data.name;
    },
    resetInitial(state) {
      state.data = [];
      state.ischecked = false;
      state.checkedCpmponent = null;
    },
    setFev(state, action) {
      if (state.fev.length === 0) {
        state.fev = [action.payload];
      } else {
        let matched = false;
        state.fev.forEach((ele) => {
          if (ele.data.name === action.payload.data.name) {
            matched = true;
            ele.text = action.payload.text;
          }
        });

        if (!matched) {
          state.fev = [...state.fev, action.payload];
        }
        localStorage.setItem("fevData", JSON.stringify(state.fev));
      }
    },
    getFromStore(state) {
      if (!JSON.parse(localStorage.getItem("fevData"))) {
        state.fev = [];
        return;
      }
      state.fev = JSON.parse(localStorage.getItem("fevData"));
    },
    removeFevList(state, action) {
      state.fev = state.fev.filter((ele) => ele.data.name !== action.payload);
      localStorage.setItem("fevData", JSON.stringify(state.fev));
    },
  },
});

const store = configureStore({
  reducer: pageSlice.reducer,
});
export default store;
export const pageActions = pageSlice.actions;
