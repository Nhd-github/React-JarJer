import React from "react";
import "../../components/navHeader/style.css";
import "../../assets/css/bootstrap.rtl.min.css";
// Img 
import brandForkImg from "../../assets/images/fork.png";
import categoryImg from "../../assets/images/category.png";
import phoneImg from "../../assets/images/phone.png";
// svg
import facebook from "../../assets/icons/facebook.svg";
import instagram from "../../assets/icons/instagram.svg";
import twitter from "../../assets/icons/twitter.svg";
import whatsapp from "../../assets/icons/whatsapp.svg";
import youtube from "../../assets/icons/youtube.svg";
const NavHeader = () => {
    return (
        <>
            <div className="col-sm-12 col-md-8 text-center logo-top-nav d-flex align-items-center justify-content-between ">

                <div className=" d-flex col-sm-12 col-md-3 ">
                    <img className="p-1" src={brandForkImg} alt="BrandForkImg" />
                    <div className="flex-column">
                        <span className="text-dark m-0 d-inline-block font-30"> JarJer </span>
                        <span className="text-dark d-inline-block"> Food Delivery </span>
                    </div>

                </div>
                <div className="d-flex  col-sm-12 col-md-4 align-items-center justify-content-between m-3 ">
                    <div className="d-flex align-items-center">
                        <img className="category" src={categoryImg} alt="CategoryImg" />
                        <span className="text-dark"> Category </span>
                    </div>
                    <div className="d-flex align-items-center">
                        <img className="phone-contact" src={phoneImg} alt="PhoneImg" />

                        <span className="text-dark "> Contact Us </span>
                    </div>
                </div>
                <div
                    className=" social-icons col-sm-12 col-md-6 d-flex justify-content-between align-items-center text-dark ">
                    <ul className="nav d-flex align-items-center justify-content-between">

                        <li className="nav-item-youtube">
                            <img className="nav-link top-nav-youtube" src={youtube} alt={"youtube"} />


                        </li>
                        <li className="nav-item-twitter">
                            <img className="nav-link top-nav-twitter" src={twitter} alt={"twitter"} />


                        </li>

                        <li className="nav-item-facebook">
                            <img className="nav-link top-nav-facebook" src={facebook} alt={"facebook"} />
                        </li>
                        <li className="nav-item-instagram">
                            <img className="nav-link top-nav-instagram" src={instagram} alt={"instagram"} />

                        </li>
                        <li className="nav-item-whatsapp">
                            <img className="nav-link top-nav-whatsapp " src={whatsapp} alt={"whatsapp"} />

                        </li>
                    </ul>
                </div>

            </div>
        </>
    )
}
export default NavHeader;