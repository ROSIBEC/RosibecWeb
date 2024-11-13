import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './page/Layout'
import Home from './page/Home'
import Program from './page/Programmes'
import Contact from './page/Contact'
import NoPage from "./page/NoPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Donate from "./page/Donate";
import Volunteer from "./page/Volunteer";
import About from "./page/About";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path="about" element={<About/>} />
          <Route path="program" element={<Program />} />
          <Route path="volunteer" element={<Volunteer/>} />
          <Route path="contact" element={<Contact />} />
          <Route path="donate" element={<Donate/>} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);