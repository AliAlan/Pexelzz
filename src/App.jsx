import { useState } from "react";
import { Navbar } from "./components";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import { Home, PhotoDetail, VideoDetail, VideoPage } from "./pages";
function App() {
  return (
    <div className="App bg-[#F9F7F7] w-full min-h-screen">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/VideoPage" element={<VideoPage />} />
          <Route path="/photoDetail/:id" element={<PhotoDetail />} />
          <Route path="/videoDetail/:id" element={<VideoDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
