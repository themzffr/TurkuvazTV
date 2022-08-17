import React,{Component, useEffect, useState} from 'react';


import {useParams} from 'react-router-dom';


import Header from '../Components/header';
import Footer from '../Components/footer';
import { collection, onSnapshot } from "firebase/firestore";
import {firestorem} from '../config/firebase';

import Modalhoz from '../Components/modalhoz';

import Diziler from '../Components/diziler';

function Category(props) {
  
    const {id} = useParams();
    const[clickedimage, setClickedimage]=useState("");
  const[clickedtitle, setClickedtitle]=useState("");
  const[clickediframe, setClickediframe]=useState("");
  const[clickeddesc, setClickeddesc]=useState("");
  const[clickedid, setClickedid]=useState("");
  function openModal(image, title, iframe, description, id){
      
    if (iframe==null){iframe="#"; setClickediframe(iframe);}else{setClickediframe(iframe);}
            setClickedimage (image);
            setClickedtitle (title);
      
            setClickeddesc(description);
            setClickedid(id);
            console.log("clicked"+ image);
            document.getElementById('myModal').style.display="block";
}
    const categoryPath= id;
    const categoryNewPath = categoryPath.charAt(0).toUpperCase() + categoryPath.slice(1);
    const categoryRef = collection(firestorem, categoryNewPath);
    const useCategoryListener = () => {

        const [category, setCategory] = useState([]);
        useEffect(() => {
    
            return onSnapshot(categoryRef, (snaphot) => { setCategory(snaphot.docs.map(doc => { const datam = doc.data();return { id: doc.id, ...datam } })) });
        }, []);
        
        return category;
    
    }

  
const icerik=useCategoryListener();
console.log(categoryNewPath);

return (<div className="container-fluid" style={{color:"white"}} >

<Header/>
<div id='breadcrumb' className='mobile-top'><h1>{id}</h1></div>
<main className='pt-5 pb-5' id='category-page'>


<Diziler dizilist={icerik} openModal={openModal}/>

</main>
<Modalhoz  dizilist={icerik} clickedimage={clickedimage} clickedtitle={clickedtitle} clickediframe={clickediframe} clickeddesc={clickeddesc} clickedid={clickedid} clickedcategory={categoryNewPath}/>

<footer ><Footer/>
</footer> 
    </div>
 
   );
}

export default Category;