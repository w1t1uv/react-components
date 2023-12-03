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

export interface IUncontrolledFormErrors {
  name?: string;
  age?: string;
  email?: string;
  password?: string;
  confirmedPassword?: string;
  gender?: string;
  termsAndConditions?: string;
  image?: string;
  country?: string;
}

export interface IFormState {
  data: IForm;
}

export interface ICountriesState {
  countries: string[];
}

export interface IFile {
  size: number;
  type: string;
}
