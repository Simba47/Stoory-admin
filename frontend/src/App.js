import { useState } from "react";
import Landing from "./components/Landing";
import InfluencerModal from "./components/InfluencerModal";
import BrandModal from "./components/BrandModal";
import "./styles.css";
import Admin from "./pages/Admin";
<Route path="/admin" element={<Admin />} />


function App() {
  const [showInfluencer, setShowInfluencer] = useState(false);
  const [showBrand, setShowBrand] = useState(false);

  return (
    <>
      <Landing
        onInfluencer={() => setShowInfluencer(true)}
        onBrand={() => setShowBrand(true)}
      />

      {showInfluencer && (
        <InfluencerModal onClose={() => setShowInfluencer(false)} />
      )}

      {showBrand && (
        <BrandModal onClose={() => setShowBrand(false)} />
      )}
    </>
  );
}

export default App;
