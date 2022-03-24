import React from 'react';
import './App.css';
import RandomCats from "./Components/RandomCats";
import styled from "styled-components";
import Header from "./Components/Header";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import LikedCats from "./Components/LikedCats";
import SignIn from "./Components/User/SignIn";
import SingUp from "./Components/User/SingUp";
function App() {
  return (
      <BrowserRouter>
          <PageRoot>
              <Header/>
              <Routes>
                  <Route path="/nizhgo-cats/" element={<RandomCats/>} />
                  <Route path="nizhgo-cats/liked-cats" element ={<LikedCats/>} />
                  <Route path="nizhgo-cats/signin" element ={<SignIn/>} />
                  <Route path="nizhgo-cats/signup" element ={<SingUp/>} />
              </Routes>
          </PageRoot>
      </BrowserRouter>
  );
}

const PageRoot = styled.div`
display: flex;
flex-direction: column;
max-width: 1440px;
margin: auto`


export default App;
