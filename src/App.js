import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import './App.css';
import StaffForm from './StaffForm';
import PropertyForm from './PropertyForm';
import ClientForm from './ClientForm';
import LeaseForm from './LeaseForm';
import Home from './Home';
import Page404 from "./Page404";

function App() {
  return (

<>
<Router>
<Routes>
        <Route path="/staff" element={<StaffForm />} />
        <Route path="/property" element={<PropertyForm />} />
        <Route path="/client" element={<ClientForm />} />
        <Route path="/lease" element={<LeaseForm />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Page404 />} />
</Routes>
</Router>
</>
)
}



export default App;
