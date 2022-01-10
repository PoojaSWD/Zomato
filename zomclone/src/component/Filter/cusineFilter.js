import React,{Component} from 'react';
import axios from 'axios';
import './filter.css';

const Url="https://zomclone.herokuapp.com/filter";

class CuisineFilter extends Component{

    CuisineFilter = (event) => {
        let MealId =this.props.MealId;
        let cuisineId = event.target.value;
        let filterUrl;
        if(cuisineId === ""){
            filterUrl = `${Url}/${MealId}`
        }else{
            filterUrl = `${Url}/${MealId}?cuisine=${cuisineId}`
        }
        axios.get(filterUrl)
        .then((res) =>{this.props.restPerCuisine(res.data)})

    }

    render(){

            return(
                <div>
                    <center><h3>Cusine Filter</h3></center>
                    <div className="radioButton" onChange={this.CuisineFilter}>
                        <label className="radio">
                            <input type="radio" name="cuisine" value=""/>All
                        </label>
                        <label className="radio">
                            <input type="radio" name="cuisine" value="1"/>North Indian
                        </label>
                        <label className="radio">
                            <input type="radio" name="cuisine" value="2"/>South Indian
                        </label>
                        <label className="radio">
                            <input type="radio" name="cuisine" value="3"/>Chinese
                        </label>
                        <label className="radio">
                            <input type="radio" name="cuisine" value="4"/>Fast Food
                        </label>
                        <label className="radio">
                            <input type="radio" name="cuisine" value="5"/>Street Food
                        </label>

                    </div>

                </div>
            )
    }

    
}

export default CuisineFilter;