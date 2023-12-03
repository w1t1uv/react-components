import { useSelector } from 'react-redux';

const Home = () => {
  const formData = useSelector((state) => state.forms.data);

  return (
    <div className="home-wrapper">
      <div className="tiles-wrapper">
        <div>
          <h2 className="title">User information</h2>
          <p className="property">Name : {formData.name}</p>
          <p className="property">Age : {formData.age}</p>
          <p className="property">Email : {formData.email}</p>
          <p className="property">Gender : {formData.gender}</p>
          <p className="property">Country : {formData.country}</p>
        </div>
        <div>
          <img src={formData.image} alt="image" className="image" />
        </div>
      </div>
    </div>
  );
};

export { Home };
