import Nav from   "../src/components/Nav"
import './App.css';
// Import Components
import AppWorking from './pages/home/AppWorking';
import React from "react";
import Banner from "./pages/home/banner";
import DownloadInfo from "./pages/home/DownloadInfo";

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Banner /> 
     <AppWorking /> 
     <DownloadInfo></DownloadInfo>
      <Banner />
      <AppWorking />
    </div>
  );
}

export default App;
