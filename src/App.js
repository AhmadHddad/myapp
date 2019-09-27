import React from 'react';
import './App.css';
import Layout from "./Component/Layout/Layout";
import Spinner from "./Component/UI/Spinner/Spinner";

function App() {
  return (
    <div className="App">
        <Spinner message={"{Developing}"}/>
      <Layout/>
    </div>
  );
}

export default App;
