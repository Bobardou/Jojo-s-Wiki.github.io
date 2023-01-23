import styles from "./card/card.module.css"
import { Link, useParams } from "react-router-dom"

function Card({prop}){
    var param = useParams()
    return(
        <div className={styles.div}>
            
            <img className={styles.back} src="https://static.bandainamcoent.eu/high/jojo/jojo-bizarre-adventure-all-star-battle-r/02-news/JOJOASBR_launchTrailer_thumbnail.jpg" alt="" />
            <img className={styles.img} src={prop?.user_images} alt="" />
            <h1 className={styles.h1}>{prop.user}</h1>
            <h3 className={styles.h3}>{prop.stand}</h3>
            <h3 className={styles.h3}>{prop.gender}</h3>
            <Link to={`./${prop.user}`}><button className={styles.button}>Mas informacion</button></Link>
        </div>
    )
}

export default Card