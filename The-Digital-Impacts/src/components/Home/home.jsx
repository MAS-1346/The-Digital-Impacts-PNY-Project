import React from "react";
import './home.css';
import homeimg from '../../assets/Home-Image.jpg';
const Home = () => {
    return (
        <>
            <div className="home">
                <img className="homeimage" src={homeimg} />
                <div className="homecontent">
                    <h1>
                        We are full Services <br/>
                        <span>Digital Marketing Agency <br/>
                        Welcome to the Digital Impacts
                        </span>
                    </h1>
                    <div className="line"></div>
                    <p>
                        We partner with our clients with a team of professionals, we are able to provide <br/>
                        the best on our side. We strive to be leaders in digital marketing services worldwide <br/>
                        by revolutionizing the industry and setting new standards of professionalism and success.
                    </p>
                    <button className="msgbtn">Message Us Now</button>
                </div>
            </div>
        </>
    )
}
export default Home;