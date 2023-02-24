import { useState, useEffect } from 'react';

function useWindow() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const [scrollHeight, setScrollHeight] = useState(window.scrollY)
    const maxHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight

    useEffect(() => {
        window.addEventListener('resize', function (event) {
            setWindowWidth(event.target.innerWidth)
        });

        document.addEventListener("scroll", function (event) {
            setScrollHeight(window.scrollY)
        });

    }, []);

    return {
        windowWidth,
        maxHeight,
        scrollHeight,
    };
}

export default useWindow;
