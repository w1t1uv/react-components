import { createSlice, PayloadAction, Slice } from '@reduxjs/toolkit';
import { IForm, IFormState } from '../types';

const initialState: IForm = {
  name: '',
  age: 0,
  email: '',
  password: '',
  confirmedPassword: '',
  gender: '',
  termsAndConditions: false,
  image: '',
  country: '',
};

const formsSlice: Slice<IFormState> = createSlice({
  name: 'forms',
  initialState: {
    data: initialState,
  },
  reducers: {
    setFormData(state: IFormState, action: PayloadAction<IForm>) {
      state.data = action.payload;
    },
  },
});

export const { setFormData } = formsSlice.actions;
export default formsSlice.reducer;
