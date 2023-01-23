import styles from "../Cards/card/card.module.css"
import { Link, useLocation, useParams } from "react-router-dom"
import data from "../../data.json"

function CardSearch(prop){
    var location = useParams()
    var nuevoObjeto = null

    for(var item in data){
        data[item].map(value => {if(value.user === location.personaje){ nuevoObjeto = value}})
    };

    var param = useParams()
    return(
        <div className={styles.div}>
            
            <img className={styles.back} src="https://static.bandainamcoent.eu/high/jojo/jojo-bizarre-adventure-all-star-battle-r/02-news/JOJOASBR_launchTrailer_thumbnail.jpg" alt="" />
            <img className={styles.img} src={nuevoObjeto?.user_images} alt="" />
            <h1 className={styles.h1}>{nuevoObjeto.user}</h1>
            <h3 className={styles.h3}>{nuevoObjeto.stand}</h3>
            <h3 className={styles.h3}>{nuevoObjeto.gender}</h3>
            <Link to={`./${nuevoObjeto.stand}`}><button className={styles.button}>Mas informacion</button></Link>
        </div>
    )
}

export default CardSearch