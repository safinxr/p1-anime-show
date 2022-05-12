import React from "react";

const AddPage = () => {
  const animePOst = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const price = e.target.price.value;
    const img = e.target.img.value;
    const postData ={name, price, img};
    fetch('https://tranquil-meadow-04149.herokuapp.com/animes', {
        method:'POST',
        headers:{
            'content-type': 'application/json'
        },
        body:JSON.stringify(postData)    
    })
    .then(res => res.json())
    .then(data =>{
        alert('anime added');
        e.target.reset();
    })
  };
  return (
    <div>
      <h1>Add Anime</h1>
      <form onSubmit={animePOst}>
        <input type="text" name="name" placeholder="title" />
        <input type="text" name="price" placeholder="price" />
        <input type="text" name="img" placeholder="img url" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default AddPage;
