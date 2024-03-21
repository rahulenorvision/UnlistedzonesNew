
import './App.css';
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import Accountants from './Pages/Accountants/index.jsx';
// import Home from './pages/Home/index.jsx';
import MainPage from './pages/MainPage/MainBody.js';

import RaiseFunding from './pages/RaiseFunding/RaiseFunding.js';

import Unlisted from './pages/Unlisted/index.jsx';
import Drhp from './pages/Drhp/index.jsx';
import Screener from './pages/Screener/index.jsx';
import SellIPOShares from './pages/SellIPOShares/SellIPOShares.js';
import MediaCoverage from './pages/MediaCoverage/MediaCoverage.js';
import ContactUs from './pages/ContactUs/Contact.js';
import Polymatech from './pages/Polymatech/Polymatech.js';
// import Media from './pages/Media/index.jsx';

function App() {
  return (
   <>
    <Router>
      <Routes>
        <Route path="/" element={<Navigate replace to="/mainpage" />} />
        <Route path={'/mainpage'} exact element={<MainPage />}/>
        <Route path={'/raisefunding'} exact element={<RaiseFunding />}/>
        <Route path={'/sellipo'} exact element={<SellIPOShares />}/>
         <Route path={'/unlisted-shares'} exact element={<Unlisted />}/>
        <Route path={'/drhp'} exact element={<Drhp />}/>
        <Route path={'/screener'} exact element={<Screener />}/>
         <Route path={'/media-coverage'} exact element={<MediaCoverage />}/>  
         <Route path={'/contactus'} exact element={<ContactUs />}/>
         <Route path={'/polymatech'} exact element={<Polymatech />}/>
        {/* <Route path={'/signin'} exact element={<Signin />}/>
        <Route path={'/signup'} exact element={<Signup />}/>
        <Route path={'/forgot'} exact element={<Forgot />}/>
        <Route path={'/reset_password'} exact element={<Resetting />}/>
        <Route path={'/settings'} exact element={<Settings />}/>
        <Route path={'/features'} exact element={<Features />}/>
        <Route path={'/defi'} exact element={<Defi />}/>
        <Route path={'/pow'} exact element={<Pow />}/>
        <Route path={'/passive'} exact element={<Passive/>}/>
         <Route path={'/signupp'} exact element={<Signupp  />}/>

        <Route path={'/nft'} exact element={<Nft/>}/>
        <Route path={'/airdrop'} exact element={< Airdrop />}/>
        <Route path={'/about'} exact element={<About/>}/>
         <Route path={'/checkout'} exact element={<Checkout/>}/> 
        <Route path={'/integration'} exact element={<Integration />}/>
        <Route path={'/accountants'} exact element={<Accountants />}/>
        <Route path={'/price'} exact element={<Pricing />}/>
        <Route path={'/blogs'} exact element={<Resources />}/>
        <Route path={'/privacy-policy'} exact element={<Privacy />}/>
        <Route path={'/terms'} exact element={<Terms />}/>
        <Route path={'/dashboard'} exact element={<Dashboard />}/>
        <Route path={'/imports'} exact element={<Import />}/>
        <Route path={'/transactions'} exact element={<Transactions />}/>
        <Route path={'/reports'} exact element={<Reports />}/> */}
      </Routes>
    </Router>
  </>
  );
}

export default App;
