import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { convert2base64 } from '../services/convert2base64';
import { setFormData } from '../store/formsSlice';
import { userSchema } from '../validations/userValidation';
import { useRef, useState } from 'react';
import { IUncontrolledFormErrors } from '../types';

const UncontrolledForm = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries.countries);
  const navigate = useNavigate();

  const nameRef = useRef<HTMLInputElement | null>(null);
  const ageRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const confirmedPasswordRef = useRef<HTMLInputElement | null>(null);
  const genderRef = useRef<HTMLSelectElement | null>(null);
  const termsAndConditionsRef = useRef<HTMLInputElement | null>(null);
  const imageRef = useRef<HTMLInputElement | null>(null);
  const countriesRef = useRef<HTMLSelectElement | null>(null);

  const [errors, setErrors] = useState<IUncontrolledFormErrors>();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      name: nameRef.current?.value || '',
      age: parseInt(ageRef.current?.value || '0', 10),
      email: emailRef.current?.value || '',
      password: passwordRef.current?.value || '',
      confirmedPassword: confirmedPasswordRef.current?.value || '',
      gender: genderRef.current?.value || '',
      termsAndConditions: termsAndConditionsRef.current?.checked || false,
      image: imageRef.current?.files || null,
      country: countriesRef.current?.value || '',
    };

    console.log(data);

    try {
      await userSchema.validate(data, { abortEarly: false });

      if (data.image) {
        const converted = await convert2base64(data.image[0] as File);
        data.image = converted;
      }

      dispatch(setFormData(data));
      navigate(`/`);
    } catch (error) {
      if (error.inner) {
        const validationErrors: IUncontrolledFormErrors = {};
        if (Array.isArray(error.inner)) {
          error.inner.forEach((e: { path: string; message: string }) => {
            validationErrors[e.path] = e.message;
          });
        }
        setErrors(validationErrors);
      }
    }
  };

  return (
    <div className="form-wrapper">
      <p className="title">Uncontrolled Form</p>
      <form onSubmit={handleSubmit} className="form">
        <div className="name">
          <label htmlFor="name">Name</label>
          <input name="name" ref={nameRef} />
          <p>{errors?.name}</p>
        </div>
        <div className="age">
          <label htmlFor="age">Age</label>
          <input type="number" name="age" ref={ageRef} />
          <p>{errors?.age}</p>
        </div>
        <div className="email">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" ref={emailRef} />
          <p>{errors?.email}</p>
        </div>
        <div className="password">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" ref={passwordRef} />
          <p>{errors?.password}</p>
        </div>
        <div className="confirmedPassword">
          <label htmlFor="confirmedPassword">Confirm password</label>
          <input
            type="password"
            name="confirmedPassword"
            ref={confirmedPasswordRef}
          />
          <p>{errors?.confirmedPassword}</p>
        </div>
        <div className="gender">
          <label htmlFor="gender">Gender</label>
          <select name="gender" ref={genderRef}>
            <option value="female">female</option>
            <option value="male">male</option>
            <option value="other">other</option>
          </select>
        </div>
        <div className="termsAndConditions">
          <label htmlFor="termsAndConditions">Accept the T&C</label>
          <input
            type="checkbox"
            name="termsAndConditions"
            ref={termsAndConditionsRef}
          />
          <p className="error">{errors?.termsAndConditions}</p>
        </div>
        <div className="upload-image">
          <label htmlFor="image">Upload image</label>
          <input type="file" name="image" ref={imageRef} />
          <p className="error">{errors?.image}</p>
        </div>
        <div className="countries">
          <label htmlFor="country">Choose the country</label>
          <select name="countries">
            {countries.map((country, index) => (
              <option key={index} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>
        <button className="submit">Submit</button>
      </form>
    </div>
  );
};

export { UncontrolledForm };
