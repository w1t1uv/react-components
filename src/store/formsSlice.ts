import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  controlledFormData: {},
  uncontrolledFormData: {},
};

const formsSlice = createSlice({
  name: 'forms',
  initialState: initialState,
  reducers: {
    setControlledFormData(state, action) {
      state.controlledFormData = action.payload;
    },
    setUncontrolledFormData(state, action) {
      state.uncontrolledFormData = action.payload;
    },
  },
});

export const { setControlledFormData, setUncontrolledFormData } =
  formsSlice.actions;
export default formsSlice.reducer;
