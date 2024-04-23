// import { useState } from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Slider from "./Slider";
import MapPreview from "./MapPreview";
import SvgPopper from "./SvgPopper";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Header />
      {/* <Slider /> */}
      <MapPreview />
      <SvgPopper />
    </>
  );
}

export default App;
