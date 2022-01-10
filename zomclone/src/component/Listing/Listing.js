import React,{Component} from 'react';
import './Listing.css';
import  ListingDisplay from './ListingDisplay';
import axios from 'axios';
import CuisineFilter from '../Filter/cusineFilter';
import CostFilter from '../Filter/costFilter';
import SortFilter from '../Filter/sortFilter';


const Url ="https://zomclone.herokuapp.com/filter";

class Listing extends Component{
    constructor(props){
        super(props);

        this.state ={
            restList:''
        }
    }

    setDataPerFilter =(data)=>{
        this.setState({restList:data})
    }

    render(){
        return(
    
            <>
            <div id="main">
                        <h3>Find best Option For Search</h3>
                        <div id="filter">
                                <h2>Filters</h2>
                            <CuisineFilter MealId={this.props.match.params.id}    
                            restPerCuisine={(data) =>{this.setDataPerFilter(data)}} />
                            <CostFilter restPerCost ={(data) =>{this.setDataPerFilter(data)}}/>
                            <SortFilter restPersort ={(data) =>{this.setDataPerFilter(data)}}/>
                        
                        </div>
                    <div id="content_main">
                                
                                   <ListingDisplay restData={this.state.restList}/>
                                
                                
                    </div>
            </div>

           

    </>
        

        )
    }

    componentDidMount(){
        const MealId = this.props.match.params.id;
        sessionStorage.setItem('MealId',MealId);
        axios.get(`${Url}/${MealId}`)
        .then((res) =>{
            this.setState({restList:res.data})
        })

    }
}

export default Listing
