import React from "react";
import "./style.css";

function Card(props) {
    return (
        <div className="card" onClick={() => props.handleClick(props.id)}>
            <div className="img-container">
                <img
                    key={props.id}
                    src={props.image}
                    alt={"image-" + props.id}
                    id={props.id}
                    height="190px"
                    width="190px"
                />        <div className="div-content">
                    <p><strong>Id</strong>{props.id}</p>
                </div>
            </div>
        </div>
    )
}

export default Card;
