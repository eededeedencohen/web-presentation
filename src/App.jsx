import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import the OldApp. component:
import OldApp from "./pages/OldApp/OldApp.jsx";
// import ShadowCard from './components/ShadowCard/ShadowCard.jsx'
// import the Slide component
import Slide from "./pages/Slide/Slide.jsx";

function App() {
  // replace with OldApp component:
  // return <OldApp />
  return (
    <>
      {/* <ShadowCard /> */}
      {/* <OldApp /> */}
      <Slide />
    </>
  );
}

export default App;
