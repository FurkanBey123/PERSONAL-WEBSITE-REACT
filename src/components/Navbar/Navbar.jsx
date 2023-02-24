import styles from "./Navbar.module.css"
import logo from '../../assets/images/sign.png'
import useWindow from '../../hooks/use-window';

function Navbar() {
    const { scrollHeight, maxHeight } = useWindow()
    const value = (scrollHeight / (maxHeight)) * 100;

    return (
        <div className={styles.Wrapper}>
            <div className={styles.Navbar}>
                <div>
                    <img src={logo} alt="logo" />
                </div>
                <h3>FULL-STACK DEVELOPER || WEB DESIGNER</h3>
                <div className={styles.NavbarRight}>
                    <h5>ABOUT</h5>
                    <h5>PROJECTS</h5>
                    <h5>CONTACT</h5>
                </div>
            </div>
            <progress max="100" value={value.toLocaleString()}></progress>
        </div>
    )
}

export default Navbar
