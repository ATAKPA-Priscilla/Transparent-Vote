import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Vote from "./pages/Vote";
import Results from "./pages/Result";
import StateDetails from "./pages/StateDetails";
import Success from "./pages/Success";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vote" element={<Vote />} />
          <Route path="/results" element={<Results />} />
          <Route path="/results/:stateName" element={<StateDetails />} />
          <Route path="/success" element={<Success />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;