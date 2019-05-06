import React from "react";
import "./style.css";

function Card(props) {
    return (
        <div className="card" onClick={() => props.handleClick(props.id)}>
            <div className="img-container">
            </div>
            <div className="div-content">
                <ul>
                    <li><strong>Id</strong>{props.id}</li>
                    <li><img src={props.image} alt="" id={props.id} />
                    </li></ul></div>
        </div>
    )
}
export default Card;


// const ImageCard = props => (
//     <div className="card">
//         <div className="img-container">
//           <img className="img-fluid" alt={props.imageAlt} src={props.imageSrc} id={props.imageId} key={props.key} onClick={() => props.imageFn(props.imageId)}/>
//         </div>
//     </div>
//   );
