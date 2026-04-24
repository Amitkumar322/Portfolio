import './Hero.css'
import face from "../assets/images/face.png"
export const Hero = () =>{
    return(
        <>
            <div className="hero-sec container mb-5">
                <div className="hero-text">
                    <span>FRONT END DEVELOPER</span>
                    <h1>HI, I'M AMIT</h1>
                </div>
                <div className="hero-img">
                     <img src={face} alt="hero-face" />
                </div>
                <div className="row hero-bottom align-items-center">
                    <div className="col-lg-6 col-md-6 col-12 ">
                        <p>I create modern, responsive, and user-friendly websites that help brands grow online.
Focused on clean design, smooth user experience, and high-performance front-end development.
Turning ideas into visually stunning and functional digital experiences.</p>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12 text-lg-end">
                        <a href="https://wa.me/+918284863194"
            target="_blank"
            rel="noreferrer">

                        <button type='button'className='btn '>CONTACT ME</button>
            </a>
                    </div>
                </div>
            </div>
        </>
    )
}