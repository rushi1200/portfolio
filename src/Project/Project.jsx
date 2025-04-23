
import styles from './Project.module.css'
import amazon from './amazon.jpeg'
import calcy from './calcy.jpeg'
import Netflix from './Netflix.jpeg'
import paperfolding from './Paperfolding.jpeg'
import planet from './planet.avif'
import stonepaperscissors from './stonepapersissors.jpg'


export default function(){

    return<>  
     
    <div id='project' className={styles.body} >

    <div className={styles.heading}>
         <p>Browse my project</p>
         <h3>Project</h3>
    </div>
    
    <div className={styles.container}>
        <div className={styles.pro}>
            <div className={styles.imgbox}><img src={planet} alt="Planetry weight"/></div>
            <div className={styles.btncon}>
                <h3>Weight on Planet</h3>
                <div className={styles.button}>
                <a href="https://github.com/rushi1200/Weight-on-Every-Planet.git"><button>Github</button> </a>
                    <a href="https://rushi1200.github.io/Weight-on-Every-Planet/"><button>Live Demo</button> </a>
                </div>
            </div>
        </div>

        <div className={styles.pro}>
            <div className={styles.imgbox}><img src={paperfolding} alt="Paper Folding"/></div>
            <div className={styles.btncon}>
                <h3>Paper Folding</h3>
                <div className={styles.button}>
                    <a href="https://github.com/rushi1200/Folding-Page-Power.git"><button>Github</button> </a>
                    <a href="https://rushi1200.github.io/Folding-Page-Power/"><button>Live Demo</button> </a>
                </div>
            </div>
        </div>

        <div className={styles.pro}>
            <div className={styles.imgbox}><img src={stonepaperscissors} alt="Rock Paper Scissor"/></div>
            <div className={styles.btncon}>
                <h3>Rock Paper Scissor</h3>
                <div className={styles.button}>
                    <a href="https://github.com/rushi1200/RockPaperScissor.git"><button>Github</button> </a>
                    <a href="https://rushi1200.github.io/RockPaperScissor/"><button>Live Demo</button> </a>
                </div>
            </div>
        </div>

        
    </div>

    </div>
    </>
}