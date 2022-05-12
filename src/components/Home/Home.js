import React, { useEffect, useState } from 'react';

const Home = () => {
    const [animes, setAnimes] = useState([]);
    useEffect(()=>{
        fetch('https://tranquil-meadow-04149.herokuapp.com/animes')
        .then(res => res.json())
        .then(data => setAnimes(data))
    },[])

    const animeDelete =(id)=>{
        const sure = window.confirm('are you sure')
        if(sure){
            fetch(`https://tranquil-meadow-04149.herokuapp.com/animes/${id}`,{
            method:'DELETE'
        })
        .then(res=> res.json())
        .then(data=>{
            if(data.deletedCount > 0){
               const remaining = animes.filter(anime => anime._id !== id);
               setAnimes(remaining);
            }
        })
        }
    }
    return (
        <div>
            <h1>home</h1>
            {
                animes.map(data => <Display key={data._id} anime={data} click={animeDelete}></Display>)
            }

        </div>
    );
};

const Display =({anime, click}) =>{
    const {img, name, price, _id} = anime;
    return(
        <div>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p>{price}</p>
            <button onClick={()=>click(_id)}>x</button>
        </div>
    )
}

export default Home;