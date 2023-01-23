import { useParams } from "react-router-dom";
import styles from "./styles/styles.module.css"

function Details({propiedad}){
    var param = useParams()
    var arrayimg1 = []
    var arrayimg2 = []
    var img1 = propiedad[param.temporada].map((value) => {if(value.user === param.personaje){arrayimg1.push(value.user_images)}})
    var img2 = propiedad[param.temporada].map((value) => {if(value.user === param.personaje){arrayimg2.push(value.stand_images)}})
    return(
        <div className={styles.div}>
                <div className={styles.user}>
                    <h1 className={styles.h1}>{propiedad[param.temporada].map((value) => {if(value.user === param.personaje){return value.user}})}</h1>
                    <h3 className={styles.h32}>Genero: {propiedad[param.temporada].map((value) => {if(value.user === param.personaje){return value.gender}})}</h3>
                    <h3 className={styles.h32}>Pelo: {propiedad[param.temporada].map((value) => {if(value.user === param.personaje){return value.hair_color}})}</h3>
                    <h3 className={styles.h32}>Ojos: {propiedad[param.temporada].map((value) => {if(value.user === param.personaje){return value.eye_color}})}</h3>
                    <img className={styles.img1} src={arrayimg1} alt="" />
                <div className={styles.stand}>
                    <h1 className={styles.h31}>{propiedad[param.temporada].map((value) => {if(value.user === param.personaje){return value.stand}})}</h1>
                    <h3 className={styles.h33}>{propiedad[param.temporada].map((value) => {if(value.user === param.personaje){return value.type.join(" / ")}})}</h3>
                    <img className={styles.img2} src={arrayimg2} alt="" />
            </div>
            </div>
        </div>
    )
}

export default Details