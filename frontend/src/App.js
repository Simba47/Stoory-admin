import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./components/Landing";
import InfluencerModal from "./components/InfluencerModal";
import BrandModal from "./components/BrandModal";
import Admin from "./pages/Admin";

import "./styles.css";

function App() {
  const [showInfluencer, setShowInfluencer] = useState(false);
  const [showBrand, setShowBrand] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        {/* Landing Page */}
        <Route
          path="/"
          element={
            <>
              <Landing
                onInfluencer={() => setShowInfluencer(true)}
                onBrand={() => setShowBrand(true)}
              />

              {showInfluencer && (
                <InfluencerModal
                  onClose={() => setShowInfluencer(false)}
                />
              )}

              {showBrand && (
                <BrandModal
                  onClose={() => setShowBrand(false)}
                />
              )}
            </>
          }
        />

        {/* Admin Page */}
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
