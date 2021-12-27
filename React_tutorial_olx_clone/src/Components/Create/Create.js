import React, { Fragment, useState,useContext } from 'react';
import './Create.css';
import Header from '../Header/Header';
import { AuthContext,FirebaseContext } from '../../store/Context';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
const Create = () => {
  const {firebase} = useContext(FirebaseContext)
  const {user} = useContext(AuthContext)
  const history = useHistory()
  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState('')
  const [image, setImage] = useState(null)
  const date = new Date()
  const handleSubmit =()=>{
  
    firebase.storage().ref(`/image/${image.name}`).put(image).then(({ref})=>{
      ref.getDownloadURL().then((url)=>{
      console.log(url);
      firebase.firestore().collection('products').add({
        name,
        category,
        price,
        url,
        userId:user.uid,
        createdAt:date.toDateString()
      })
      history.push('/')
    })})
  }
  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
         
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="Name"
              value={name}
              onChange={(event)=>{setName(event.target.value)}}
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="category"
              value={category}
              onChange={(event)=>{setCategory(event.target.value)}}
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input value={price} onChange={(event)=>{setPrice(event.target.value)}} className="input" type="number" id="fname" name="Price" />
            <br />
          
          <br />
          <img alt="Posts"  width="200px" height="200px" src={image?URL.createObjectURL(image):''}></img>
          
            <br />
            <input onChange={(event)=>{setImage(event.target.files[0])}} type="file" />
            <br />
            <button onClick={handleSubmit} className="uploadBtn">upload and Submit</button>
          
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
