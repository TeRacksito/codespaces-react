import { Route, Routes } from "react-router-dom";
import FullLayout from "./components/FullLayout/FullLayout";
import { HomePage } from "./pages/HomePage";
import { VideoPage } from "./pages/VideoPage";

function App() {
  return (
    <FullLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/video" element={<VideoPage />} />
      </Routes>
    </FullLayout>
  );
}

export default App;
