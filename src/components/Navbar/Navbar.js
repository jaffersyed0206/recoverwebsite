import React, {useEffect , useState} from 'react';
import './styles/Navbar.css'

const Navbar = () => {

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
                  <div className="navbar-container">
                     <div className="text-padding-title" >
                        <div className="text-padding">
                            <h6 className="text-center">New Website Coming Soon!</h6>
                         </div>
                     </div>
                     <div className="d-flex justify-content-center">
                      <div className="recover-image-container">
                        <img src="https://f.hubspotusercontent00.net/hubfs/3787151/Recover/Interim%20Website%20Assets/Logo%20no%20text_White.png" alt="Girl in a jacket" className="recover-image-mobile" />
                      </div>
                    </div>
                  </div>
                </div>
            )
        } else {
            return null;
        }
      }

      const DeskTopView = ({desktop}) => {
          if (desktop) {
            return (
                <div>
                <div className="navbar-container">
                       <div className="float-right">
                           <h5>New Website Coming Soon!</h5>
                       </div>
                       <div className="float-left">
                       <div className="recover-image">
                           <img src="https://f.hubspotusercontent00.net/hubfs/3787151/Recover/Interim%20Website%20Assets/Logo%20no%20text_White.png" alt="Girl in a jacket" className="recover-image" />
                       </div>
                       </div>
                </div>
               </div>
            )
          } else {
            return null
          }
      }

    return (
        <div>
         <MobileView mobileview={mobileView}/>
         <DeskTopView desktop={desktopview} />
        </div>
    )
}



export default Navbar;
