import React, {useState, useEffect, Fragment} from 'react';

const Characters = () => {

    // estados
    const [character, setCharacter] = useState([]);

    // estados
    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
            .then(response => response.json())
            .then(data => setCharacter(data.results))
    },[]);

    return ( 
        <Fragment>
            <div className="container">
                <div className="characters">
                    {
                        character.map(item => (
                            <div className="box" key={item.id}>
                                <img src={item.image} alt={item.name} />
                                <div className="character">
                                    <h3 className="name" >{item.name}</h3>
                                    <p className="especie">{item.species}</p>
                                    <p className="status">{item.status}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </Fragment>
    );
}

export default Characters;
