import { useState, useEffect } from "react"
import styles from "./Welcome.module.css"

function Welcome() {
    const [message, setMessage] = useState(<span style={{ color: "#fa8231" }} className={styles.Hello}>"(Hello World!)"</span>);
    const messages = [
        { msg: "Hello World!", color: "#fa8231" },
        { msg: "Merhaba Dünya!", color: "#c678dd" },
        { msg: "¡Hola Mundo!", color: "#a9b0bd" },
        { msg: "Hallo Welt!", color: "#fff" },
        { msg: "Ciao Mondo!", color: "aqua" }]

    useEffect(() => {
        const interval = setInterval(() => {
            const randomMessage = messages[Math.floor(Math.random() * messages.length)]
            setMessage(<span style={{ color: randomMessage.color }} className={styles.Hello}>"({randomMessage.msg})"</span>)
        }, 2000);
        return () => clearInterval(interval);
    }, [message]);

    return (
        <div className={styles.Wrapper}>
            <div className={styles.Title}>
                <div>DEVELOPER</div>
                <div><span>DESIGN</span>ER</div>
            </div>

            <div className={styles.Welcome}>
                <h1 className={styles.Code}>System<span style={{ color: "white" }}>.<span style={{ color: "#e06c75" }}>out</span>.</span>
                    <span style={{ color: "#61afef" }}>println</span>
                    <span>{message}</span></h1>
            </div>
        </div>
    )
}

export default Welcome