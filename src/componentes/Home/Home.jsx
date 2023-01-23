import styles from "./styles/home.module.css"
import {Link} from "react-router-dom"
import { useState } from "react"

function Home(){
    const [temporada, setTemporada] = useState("")
    return(
    <div className={styles.div}>
        <h1>Bienvenidos a wiki de</h1>
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/af/JoJo%27s_Bizarre_Adventure_-_Stardust_Crusaders_logo.png" alt="" />
        <h1>Selecciona una temporada</h1>
        <Link to={`/${temporada}`}>
            <button onClick={() => setTemporada("Diamond is Unbreakable")}>Diamond is Unbreakable</button>
            <button onClick={() => setTemporada("Stardust Crusaders")}>Stardust Crusaders</button>
            <button onClick={() => setTemporada("Stone Ocean")}>Ocean Stone</button>
            <button onClick={() => setTemporada("Vento Aureo")}>Vento Aureo</button>
        </Link>
    </div>
    )
}

export default Home