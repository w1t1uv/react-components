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
    setImage(state: IFormState, action: PayloadAction<string>) {
      state.data.image = action.payload;
    },
  },
});

export const { setFormData, setImage } = formsSlice.actions;
export default formsSlice.reducer;
