import React from "react";
import "./style.css";

function Card(props) {
    return (
        <div className="card">
            <div className="img-container">
            </div>
            <div className="content">
                <ul>
                    <li><strong>Id</strong>{props.id}</li></ul></div>
        </div>
    )
}
export default Card;