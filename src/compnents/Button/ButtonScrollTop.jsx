import React, { useEffect, useState } from 'react';

const ButtonScrollTop = (props) => {
    const [state, setstate] = useState("scale(0)");
    useEffect(() => {
        document.querySelector(".App").addEventListener("scroll", () => {
            if(document.querySelector(".App").scrollTop > 100) {
                setstate("scale(1)");
            }else {
                setstate("scale(0)");
            }
        });
    }, [])

    return (
        <button className="scroll-top" style={{transform: state}} onClick={() => props.srollToTop(true)}><i className="fas fa-chevron-up"></i></button>
    )
}

export default ButtonScrollTop;
