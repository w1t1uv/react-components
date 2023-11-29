import { SubmitHandler, useForm } from 'react-hook-form';
import { IForm } from '../types';
import { useDispatch, useSelector } from 'react-redux';
import { setFormData } from '../store/formsSlice';

const ControlledForm = () => {
  const { register, handleSubmit } = useForm<IForm>({
    defaultValues: {},
  });
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries.countries);

  const submit: SubmitHandler<IForm> = (data) => {
    console.log(data);
    dispatch(setFormData(data));
  };

  return (
    <div>
      <h1>Controlled Form</h1>
      <form onSubmit={handleSubmit(submit)} className="form">
        <div className="name">
          <label htmlFor="name">Name</label>
          <input {...register('name')} />
        </div>
        <div className="age">
          <label htmlFor="age">Age</label>
          <input type="number" {...register('age')} />
        </div>
        <div className="email">
          <label htmlFor="email">Email</label>
          <input {...register('email')} />
        </div>
        <div className="password">
          <label htmlFor="password">Password</label>
          <input {...register('password')} />
        </div>
        <div className="confirmedPassword">
          <label htmlFor="confirmedPassword">Confirm password</label>
          <input {...register('confirmedPassword')} />
        </div>
        <div className="gender">
          <label htmlFor="gender">Gender</label>
          <select name="gender" {...register('gender')}>
            <option value="female">female</option>
            <option value="male">male</option>
            <option value="other">other</option>
          </select>
        </div>
        <div className="termsAndConditions">
          <label htmlFor="termsAndConditions">Accept the T&C</label>
          <input type="checkbox" {...register('termsAndConditions')} />
        </div>
        <div className="image">
          <label htmlFor="image">Upload image</label>
          <input type="file" name="image" {...register('image')} />
        </div>
        <div className="countries">
          <label htmlFor="country">Choose the country</label>
          <select name="countries" {...register('country')}>
            {countries.map((country, index) => (
              <option key={index} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export { ControlledForm };
