import { useParams } from "react-router-dom";
import styles from "./styles/styles2.module.css"
import data from "../../../data.json"


function Details2({propiedad}){
    var param = useParams()
    var personaje = null
    for(var item in data){
        data[item].map(value => {if(value.user === param.personaje){personaje = value}})
    }

    return(
        <div className={styles.div}>
            <div className={styles.user}>
                <h1>{personaje.user}</h1>
                <h3>Gender:{personaje.gender}</h3>
                <h3>Eye color:{personaje.eye_color}</h3>
                <h3>Hair color:{personaje.hair_color}</h3>
                <img src={personaje.user_images} alt="" />
            </div>
            <div className={styles.stand}>
                <h1>{personaje.stand}</h1>
                <h3>{personaje.type.join(" / ")}</h3>
                <img src={personaje.stand_images} alt="" />
            </div>
        </div>
    )
}

export default Details2