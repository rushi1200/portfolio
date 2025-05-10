import styles from './Contact.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'


function Contact(){

    return<>
    <div id='contact' className={styles.contact}>
         
            <header>
                <h1>Get in Touch</h1>
                <p className={styles.ilove}>I'm eager to join a collaborative team where I can contribute my skills and learn from others. If you have an exciting project, let's discuss how I can be valuable asset. I'm Actively seeking a new opportunity to apply my skills and continue growing.
                 </p>
        </header>

        <main className={styles.container}>
                <div className={styles.box}>
                    <a href="mailto:takarasrushikesh@gmail.com">takarasrushikesh@gmail.com</a>
                </div>

                <div className={styles.box}>
                    <FontAwesomeIcon icon={faLinkedin} />
                    <a href="https://www.linkedin.com/in/rushikesh-takaras-781b57205/">Linkedin</a>
                </div>

                <div className={styles.box}>
                    <span href="">7083209522</span>
                </div>
        </main>
        <div className={styles.you}>I'd love to hear from you!......🙂</div>
    </div>

    <div className={styles.arrow}></div> 

    </>
}
export default Contact;