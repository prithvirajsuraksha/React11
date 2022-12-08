import React, { useState } from "react";
import Categories from "./Categories";
const Category = () => {
    const[data,setData]=useState(Categories);
    const filterResult=(catItem)=>{
        const result=Categories.filter((curData)=>{
            return curData.Category===catItem;
        });
        setData(result)
    }
    return(
        <>
        <h1 className="text-center text-info">Let's shop</h1>
        <div className="container-fluid mx-2">
            <div className="row mt-5 mx-2">
                <div className="col-md-3">
                  <button className="btn btn-warning" style={{width:"100%" }} onClick={()=>filterResult('men')} >Men</button> 
                  <button className="btn btn-warning" style={{width:"100%" }} onClick={()=>filterResult('Women')}>Woman</button> 
                  
                  <button className="btn btn-warning" style={{width:"100%" }} onClick={()=>filterResult('black')}>Black</button> 
                  <button className="btn btn-warning" style={{width:"100%" }} onClick={()=>filterResult('white')}>White</button> 
                  <button className="btn btn-warning" style={{width:"100%" }} onClick={()=>setData(Categories)}>All</button>  
                </div>
                <div className="col-md-9">
                    <div className="row">
                        {data.map((values)=>{
                            const{Id,title,price,image}=values;
                            return(
                                <>
                                     <div className="col-md-4 mb-4" key={Id} >
                                <div class="card " style={{backgroundColor:"gray",margin:"10px"}}>
                                    <img className="card-img-top" src={image} alt="Card image cap" />
                                    <div className="card-body">
                                        <h5 className="card-title"> {title}</h5>
                                        <p>Price : {price}</p>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" class="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            
                        </div>
                                </>
                            )
                        })}
                   
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Category;