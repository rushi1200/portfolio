import styles from './Experience.module.css'
import exl from './exl.jpg'
function Experience(){
    return<> 

        <section id='experience' className={styles.experience}>
        
        <div className={styles.container}>
            <h2 className={styles.heading}>Experience</h2>

            <div className={styles.exp}>

               
                <h2>Associate</h2>
               
                <ul>
                    
                <div className={styles.titleimg}>
                    <img className={styles.img} src={exl} />
                    <p>Exl Service Pvt Limited</p>
                </div>

                    <li>Developed dynamic and responsive user interfaces (UI) using HTML, CSS, and JavaScript, significantly improving user experience (UX) and engagement across various web applications.</li>
                    <li>Partnered with web designers to develop and integrate specific features for festivals and special events, ensuring that each web application reflected both customer preferences and seasonal themes while maintaining visual appeal and functionality.</li>
                    <li>Tailored web applications to meet the unique needs of diverse regional audiences, ensuring that the design and content resonated with local cultures and preferences, while improving the overall user satisfaction.</li>

                </ul>
            </div>



        </div>

        
    </section>
    
    </>
}
export default Experience;