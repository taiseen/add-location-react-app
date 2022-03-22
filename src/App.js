import { Routes, Route, } from "react-router-dom";
import { NavBar } from "./components";
import { AllPlaces, Favorites, NewPlace } from './pages';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


toast.configure();
function App() {

  return (
      <main className="px-2 md:px-4 lg:px-10">

        <NavBar />

        <Routes>
          <Route path='/' element={<AllPlaces />} />
          <Route path='/new-place' element={<NewPlace />} />
          <Route path='/favorites' element={<Favorites />} />
        </Routes>

      </main>
  );

}

export default App;
