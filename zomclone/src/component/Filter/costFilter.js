import React,{Component} from 'react';
import axios from 'axios';
import './filter.css';

const CostUrl="https://zomclone.herokuapp.com/filter";

class CostFilter extends Component{

    CostFilter = (event) => {
        let MealId =sessionStorage.getItem('MealId');
        let cost = (event.target.value).split('-')
        let lcost = cost[0];
        let hcost = cost[1];
        let filterUrl;
        if(event.target.value === ""){
            filterUrl = `${CostUrl}/${MealId}`
        }else{
            filterUrl = `${CostUrl}/${MealId}?lcost=${lcost}&hcost=${hcost}`
        }
        axios.get(filterUrl)
        .then((res) =>{this.props.restPerCost(res.data)})

    }

    render(){

            return(
                <div>
                    <center><h3>Cost Filter</h3></center>
                    <div className="radioButton" onChange={this.CostFilter}>
                        <label className="radio">
                            <input type="radio" name="cuisine" value=""/>All
                        </label>
                        <label className="radio">
                            <input type="radio" name="cuisine" value="100-300"/>100-300
                        </label>
                        <label className="radio">
                            <input type="radio" name="cuisine" value="301-500"/>301-500
                        </label>
                        <label className="radio">
                            <input type="radio" name="cuisine" value="501-700"/>501-700
                        </label>
                        <label className="radio">
                            <input type="radio" name="cuisine" value="701-1500"/>701-1500
                        </label>
                      
                       

                    </div>

                </div>
            )
    }

    
}

export default CostFilter;