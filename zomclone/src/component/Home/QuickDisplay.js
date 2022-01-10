import React from 'react';
import {Link} from 'react-router-dom';

const QuickDisplay = (props) =>{
   
    const renderMeal = ({quickData}) =>{
        if (quickData){
            return quickData.map((item)=>{
                return(
                    <Link to={`/list/${item.mealtype_id}`} key={item.mealtype_id}>
                    <div class="subtilecontainer">
                        <div class="tilecomponent1">
                            <img src={item.meal_image} alt="snacks"/>
                        </div>
                        <div class="tilecomponent2">
                            <div class="componentheading">
                                <p>{item.mealtype}</p>
                            </div>
                                <div class="componentsubheading">
                                   {item.content}
                                </div>
                        </div>
                    </div>
                
                    </Link>
                )
            })
            
        }
    }
        

    
    return(
        <div class="maintilecontainer">
            {renderMeal(props)}     
        </div>
    
    )

}
export default QuickDisplay