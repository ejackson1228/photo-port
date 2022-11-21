import React from "react";
import { capitalizeFirstLetter } from '../../utils/helpers';
import photo from '../../assets/small/commercial/0.jpg';

function Gallery(props) {
    const currenCategory = {
        name: 'commercial',
        description: 'photos of grocery stores, food trucks, and other commercial projects'
    };
    return (
        <section>
            <h1>{capitalizeFirstLetter(currenCategory.name)}</h1>
            <p>{currenCategory.description}</p>
            <div className="flex-row">
                <img className="img-thumbnail mx-1" src={photo} alt='Commercial Example'/>
            </div>
        </section>
    )
};

export default Gallery;