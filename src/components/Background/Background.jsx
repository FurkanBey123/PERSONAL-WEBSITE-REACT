import ReactDOM from 'react-dom';
import styles from './Background.module.css'
import bgXl from '../../assets/images/bg 2880x1800.jpeg'
import bgL from '../../assets/images/bg 1920x1080.jpeg'
import bgM from '../../assets/images/bg 1170x2532.jpeg'
import useWindow from '../../hooks/use-window';

function Background() {
    const { windowWidth, maxHeight, scrollHeight } = useWindow()
    const maxHeightOptimized = (maxHeight) / 4
    let src;
    let opacity;

    if (windowWidth >= 1440) {
        src = bgXl;
    } else if (850 < windowWidth && windowWidth < 1440) {
        src = bgL;
    } else {
        src = bgM
    };

    if (scrollHeight < maxHeightOptimized) {
        opacity = (1 - (scrollHeight / (maxHeightOptimized)))
    } else if (scrollHeight > (maxHeightOptimized) && scrollHeight < (2 * maxHeightOptimized)) {
        opacity = 0
    }
    else {
        opacity = ((scrollHeight / (2 * maxHeightOptimized) - 1))
    }

    return ReactDOM.createPortal(
        <div className={styles.Main}>
            <picture>
                <img style={{ opacity: `${opacity}` }} src={src} alt="background image" />
            </picture>
        </div>,
        document.querySelector('.bg-container')
    );
}


export default Background;
