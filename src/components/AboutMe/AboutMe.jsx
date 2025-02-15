import './AboutMe.css'
import MyPircture from '../../assets/download.jpeg'
import Signature from '../../assets/signature.png'

function AboutMe(){
    return(
        <div className='about-me'>
            <img src={MyPircture}></img>
            <div>
                <p>About Me</p>
                <p>
                    Hi there! This is Salim Raji, a Full Stack Developer focusing on mastering MERN Stack.
                    As a full stack developer, I love to develop digital products that meet current market requirements.
                </p>
                
                <p>
                    I have a strong background in Frontend development using React/React Native and in Backend development using Node JS.
                </p>
                
            </div>
        </div>
    )
}

export default AboutMe;