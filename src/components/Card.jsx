import React from 'react';

const Card = ( props ) => {
    return (
        <div className="col-12 col-lg-4 mx-auto card_hold">
            <div className="card">
                <img src={props.imgsrc} className="card-img-top" alt={props.imgsrc} />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, placeat molestiae explicabo vitae optio...</p>
                    <a href="/#" className="btn btn-primary">Learn More</a>
                </div>
            </div>
        </div>
    )
}

export default Card;