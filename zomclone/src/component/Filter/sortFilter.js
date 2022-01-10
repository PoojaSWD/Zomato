import React,{Component} from 'react';
import axios from 'axios';
import './filter.css';

const SortUrl="https://zomclone.herokuapp.com/filter";

class SortFilter extends Component{

    SortFilter = (event) => {
        let MealId =sessionStorage.getItem('MealId');
        let sortId = event.target.value;
        let filterUrl;
        if(sortId === ""){
            filterUrl = `${SortUrl}/${MealId}`
        }else{
            filterUrl = `${SortUrl}/${MealId}?sortKey=${sortId}`
        }
        axios.get(filterUrl)
        .then((res) =>{this.props.restPersort(res.data)})

    }

    render(){

            return(
                <div>
                    <center><h3>Sort Filter</h3></center>
                    <div className="radioButton" onChange={this.SortFilter}>
                        <label className="radio">
                            <input type="radio" name="cuisine" value="-1"/>High to Low
                        </label>
                        <label className="radio">
                            <input type="radio" name="cuisine" value="1"/>Low to High
                        </label>
                        
                      
                       

                    </div>

                </div>
            )
    }

    
}

export default SortFilter;