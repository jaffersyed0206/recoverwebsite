import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';

const App = () => {

  const [mobileView , setMobileView] = useState(false);
  const [desktopview , setDeskTopView] = useState(true);

  useEffect(() => {
    const mobileWidth = window.innerWidth <= 500;
    if (mobileWidth === true) {
        setMobileView(true)
        setDeskTopView(false)
    } else {
      setMobileView(false)
      setDeskTopView(true)
    }

  }, []);


  const MobileView = ({mobileview}) => {
    if (mobileview) {
      return (
        <div>
         <div className="recover-website-mobile">
           <Navbar/>
             <div className="main-content-mobile">
              <div className="container">
                <h1 className="text-center">Run More. Hurt Less. Recover Better.</h1>
                <div className="text-more-padding">
                 <h4 className="text-center">with the first runners-specific strength training app</h4>
                </div>
                <div className="d-flex justify-content-center">
                  <div className="button-container">
                    <button className="recover-button" onClick={() => window.location.href = "https://apps.apple.com/us/app/recover-athletics-running/id1488347465"} >Download The Recover App</button>
                  </div>
                </div>
              </div>
             </div>
              <div className="d-flex justify-content-center">
              <div className="iphone-simulator-mobile-container">
                <img src="https://f.hubspotusercontent00.net/hubfs/3787151/Recover/Interim%20Website%20Assets/Single%20Leg%20Bridge%20Iphone%20.png" alt="IPhone" className="iphone-simulator-mobile" />
               </div>
              </div>
               <div className="text-padding">
                <h4 className="text-center">{`Solve Nagging Pain &`}</h4>
                <h4 className="text-center" >{`Prevent Serious Injury`}</h4>
               </div>
             </div>
        </div>
      )
    } else {
      return null;
    }
  }


  const DeskTopView = ({desktopview}) => {
    if (desktopview === true) {
      return (
        <div className="recover-website">
         <Navbar/>
          <div className="main-content">
           <div className="container">
            <div className="row">
             <div className="col-md-4">
               <div className="iphone-simulator">
                <img src="https://f.hubspotusercontent00.net/hubfs/3787151/Recover/Interim%20Website%20Assets/Single%20Leg%20Bridge%20Iphone%20.png" alt="IPhone" className="iphone-image" />
               </div>
               <div className="text-padding">
                <h4 className="text-center">{`Solve Nagging Pain & Prevent Serious Injury`}</h4>
               </div>
             </div>
             <div className="col-md-8" >
              <div className="main-section-content">
                <h1 className="text-center">Run More. Hurt Less. Recover Better.</h1>
                <div className="text-more-padding">
                 <h4 className="text-center">with the first runners-specific strength training app</h4>
                </div>
                <div className="d-flex justify-content-center">
                  <div className="button-container">
                    <button className="recover-button" onClick={() => window.location.href = "https://apps.apple.com/us/app/recover-athletics-running/id1488347465"} >Download The Recover App</button>
                  </div>
                </div>
              </div>
             </div>
            </div>
           </div>
          </div>
        </div>
      );
    } else  {
      return null;
    }
  }


  return (
    <div>
      <MobileView mobileview={mobileView} />
      <DeskTopView desktopview={desktopview} />
    </div>
  )


}

export default App;
