import { useParams } from "react-router-dom"
import Card from "./Card"
import styles from "./card/cards.module.css"

function Cards({characters}){
    var prop = useParams()
    var param = prop.temporada
    return (
        <div className={styles.div}>{
            characters[param].map((value) => <Card prop={value}></Card>)
            }</div>
    )
}

export default Cards