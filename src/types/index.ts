export interface IForm {
  name: string;
  age: number;
  email: string;
  password: string;
  confirmedPassword: string;
  gender: string;
  termsAndConditions: boolean;
  image: string;
  country: string;
}

export interface IFormState {
  data: IForm;
}

export interface ICountriesState {
  countries: string[];
}
