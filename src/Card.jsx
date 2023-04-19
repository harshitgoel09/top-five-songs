import React from 'react';

function Card(props) {

    return (
        <>
            <div className='card'>
                <div className='card-body'> 
                    <img src={props.imgsrc} alt='img-error' className='card-img' />
                    <div className='card-info'>
                        <span className='card-type'>Song</span>
                        <h3 className='card-name'>{props.name}</h3>
                        <a href={props.link} target='_blank'>
                            <button> Watch Now </button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;