import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AddDonor from "./pages/AddDonor";
import ViewDonors from "./pages/ViewDonors";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/add-donor"
          element={<AddDonor />}
        />

        <Route
          path="/donors"
          element={<ViewDonors />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;