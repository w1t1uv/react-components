import { Link, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { UncontrolledForm } from './pages/UncontrolledForm';
import { ControlledForm } from './pages/ControlledForm';
import { PageNotFound } from './pages/PageNotFound';
import { Layout } from './components/Layout';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="uncontrolled" element={<UncontrolledForm />}></Route>
          <Route path="controlled" element={<ControlledForm />}></Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
