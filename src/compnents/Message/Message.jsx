import React, { useEffect } from 'react';

const Message = (props) => {
    useEffect(() => {
       if(props.message) {
            document.querySelector(".toast").classList.add("toast--active");
            const time = setTimeout(() => {
                document.querySelector(".toast").classList.remove("toast--active");
            }, 1000)
            return () => {
                clearTimeout(time);
            }
       }
    }, [props])
    return (
        <div className="toast">
            <div className="toast_icom">
                <i className="far fa-check-circle"></i>
            </div>
            <p className="toast_text">Thêm vào giỏ hàng thành công</p>
        </div>
    )
}

export default Message;
