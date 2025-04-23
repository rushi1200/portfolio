import styles from './Skills.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJava } from '@fortawesome/free-brands-svg-icons'
import javascript from './javascript.png'
import bootstrap from './bootstrap.png'
import css from './css.png'
import java from './java.png'
import json from './json.png'
import linux from './linux.png'
import node from './node.png'
import html from './html.png'
import react from './react.png'

export default function Skills() {
 
    return <> 
        <div id='skill' className={styles.skill}>
           
            <div className={styles.container}>
                    <h3>Technical Skills</h3>

                    <div className={styles.skillbox}> 
                        <div className={styles.eachskill}> 
                        <img src={javascript} alt="Javascript" />
                            <h1>Javacript</h1>
                            <p>Expertised</p>
                        </div>
                        <div className={styles.eachskill}> 
                        <img src={react} alt="Javascript" />
                            <h1>React</h1>
                            <p>Intermidiate</p>
                        </div>
                        <div className={styles.eachskill}> 
                        <img src={html} alt="Javascript" />
                            <h1>HTML</h1>
                            <p>Expertised</p>
                        </div>
                        <div className={styles.eachskill}> 
                        <img src={css} alt="Javascript" />
                            <h1>CSS</h1>
                            <p>Expertised</p>
                        </div>
                        <div className={styles.eachskill}> 
                        <img src={node} alt="Javascript" />
                            <h1>Node.js</h1>
                            <p>Basic</p>
                        </div>
                        <div className={styles.eachskill}> 
                        <img src={bootstrap} alt="Javascript" />                         
                            <h1>BootStrap</h1>
                            <p>Intermidiate</p>
                        </div>
                                             
                        <div className={styles.eachskill}> 
                        <img src={json} alt="Javascript" />
                            <h1>JSON</h1>
                            <p>Intermidiate</p>
                        </div>
                         
                        <div className={styles.eachskill}> 
                        <img src={java} alt="Javascript" />
                            <h1>Java</h1>
                            <p>Basic</p>
                        </div>
                        <div className={styles.eachskill}> 
                        <img src={linux} alt="Javascript" />
                            <h1>Linux</h1>
                            <p>Intermidiate</p>
                        </div>
                        
                    </div> 
            </div>

            

        </div> 


           
    </>
}