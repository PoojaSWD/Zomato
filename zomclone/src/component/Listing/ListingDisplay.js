import React from 'react';
import {Link} from 'react-router-dom';


const ListingDisplay = (props)  => {

    const renderData =({restData}) =>{
        if (restData){
            if(restData.length>0){
                return restData.map((item) =>{
                    return(
                  
                                    <>
                                <div className="content">
                                    <div className="container">    
                                        <div className="tcomponent1">
                                                <img src={item.restaurant_thumb} alt={item.restaurant_name}/>
                                        </div>
                                    <div className="tcomponent2">
                                        <div className="theading">
                                            {item.restaurant_name}
                                        </div>
                                        <div className="tsubheading">
                                            {item.address}
                                        </div>
                                    
                                        <div className="tinfo">
                                            <p>Rating : {item.average_rating} star</p>
                                            <p>Cost: &#8377;{item.cost} /2 person</p> 
                                        </div>
                                        <div className="Mealabel">
                                            <span className="label label-warning">{item.mealTypes[0].mealtype_name}</span>
                                            <span className="label label-success">{item.mealTypes[1].mealtype_name}</span>
                                            
                                        </div>
                                        <div className="Cuisnelabel">
                                        <span className="label label-primary">{item.cuisines[0].cuisine_name}</span>
                                        <span className="label label-info">{item.cuisines[1].cuisine_name}</span> 
                                        </div>                    

                                        <Link to={`/details/${item.restaurant_id}`} className="btn btn-danger">Proceed</Link>
                                        
                                        </div>
                                    </div> 
                                </div>
                                    </>
                )
            })
            }else{
                return(
                    <div>
                        <h3>No data Found</h3>
                    </div>
                )
            } 


        }else{
            return(
                <div>
                    <img src="https://i.ibb.co/LPYQ5c3/loader.gif" alt="loader"/>
                </div>
            )
            
        }
    }     
            return(
                    <>
                    
                    {renderData(props)}
                
                    </>
                    
                
            )
}

export default ListingDisplay