
import styles from '../HOME/Home.module.css';
import self from "./img.png";
 
// import { faInstagram } from '@fortawesome/free-solid-svg-icons'

function Home(){   
 
    
    return<>

    <div className={styles.container}>
        <nav >
            <div className={styles.logo}>Rushikesh Takaras<b>.</b></div>
                <ul className={styles.navItems}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#skill">skills</a></li> 
                    <li><a href="#project">Project</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>

          
        </nav>

        <div className={styles.wrapper}>
            
            <div className={styles.cols} id={styles.cols0}>
                <span className={styles.topline}>Hello</span>
                <h1>I'm <span className={styles.multiText}>Web Developer</span></h1>
                <p> Always curious and excited to learn, especially when it comes to technology. I enjoy diving into new challenges and finding smart ways to improve systems and solve problems. </p>

                {/* <div className={styles.links}>
                    <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
                    <a href="#"><FontAwesomeIcon icon={faGithubSquare} /></a>
                    <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                </div> */}

                  <a className={styles.cv} href="#">Download CV</a>
                  
            </div>

            <div className={styles.cols} id={styles.cols1}>
                <div className={styles.imgbox}>
                    
                    <img src={self} alt="self"/>
                   

                </div>
            </div>

        </div>

    </div>
    </>
}

export default Home