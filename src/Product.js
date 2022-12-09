import React from 'react'

const Product = ({data}) => {
  return (
    <>
    <div className="row">
        {data.map(data =>  
        <div className="col-md-4">
            <div className="card" style={{"width": "18rem"}}>
            <img className="card-img-top" src={data.recipe.image} alt="Cardimagecap" />
            <div className="card-body">
            <center>
                <h5 className="card-title">{data.recipe.label}</h5>
                <p className="card-text">Total Amount Of Calories : {Math.round(data.recipe.calories)}</p>
               
                </center>
            </div>
            </div>
        </div>
        )}
    </div>
</>
  )
}

export default Product
