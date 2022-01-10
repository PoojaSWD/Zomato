import React,{Component} from 'react';
import QuickDisplay  from './QuickDisplay';
import './Quicksearch.css';

const MealUrl = "https://zomclone.herokuapp.com/mealType";

class Quicksearch extends Component{
    constructor(props){
        super(props);

        this.state ={
            Mealtype:''
        }
    }

    render(){
        return(
            <React.Fragment>
    <div id="quicksearch">
                <span id="quickheading">Quick Searches</span>
                <span id="quicksubheading">Discover Restaurants By Type</span>
        <QuickDisplay quickData={this.state.Mealtype}/>
    </div>
    </React.Fragment>
        )
    }
    
    //api call
    componentDidMount(){
        fetch(MealUrl, {method:'GET'})
        .then((res) => res.json())
        .then ((data) =>{
            this.setState({Mealtype:data})
        })
    }

}

export default Quicksearch;