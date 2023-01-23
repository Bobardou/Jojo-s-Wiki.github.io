import data from "../../data.json"
import styles from "./styles/nav.module.css"
import Card from "../Cards/Card"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"

function Nav(){
    const [busqueda, setBusqueda] = useState("")

    console.log(busqueda);
    var navigate = useNavigate()

    function handleInput(evento){
        setBusqueda(evento.target.value)
    }

    function handleClick(){
        for(var item in data){
            console.log(item.split(" "));
            data[item].map(value => value.user.toUpperCase().split(" ")[0] === busqueda.toUpperCase().split(" ")[0] ? navigate(`search/${value.user}`): console.log(":v"))
        }
    }

    return (
        <div className={styles.back}>
            <div className={styles.links}>
                <Link to="/" className={styles.link}><p>Home</p></Link>
                <p>About</p>
            </div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6e/JoJo%27s_Bizarre_Adventure_logo.png" alt="" className={styles.logo}/>
            <div className={styles.div2}>
                <input type="text" onChange={handleInput} className={styles.input}/>
                <button className={styles.button} onClick={() => handleClick()}>Buscar</button>
            </div>
        </div>
    )
}

export default Nav