import React,{Component} from 'react';
import './Search.css';
import {withRouter} from 'react-router-dom';


const locationUrl ="https://zomclone.herokuapp.com/location";
const restUrl = "https://zomclone.herokuapp.com/restaurants?city="
class Search extends Component{

    constructor(props){
        super(props);

        this.state={
            location:'',
            restaurants:''
        }
    }
      
    renderCity = (data) => {
            if(data){
                return data.map((item) =>{
                    return(
                        <option key = {item.location_id} value={item.state_id}>
                            {item.state}
                        </option>
                    
                    )
                } )
            }
    }

    renderRestaurants = (data) => {
        if(data){
            return data.map((item)=>{
                return(
                    <option key ={item.restaurant_id} value={item.restaurant_id}>
                        {item.restaurant_name} | {item.address}
                    </option>
                )
            })
        }
    }

    handleDropdown =(event) =>{
        console.log("in search>>>>",this.props)
        this.props.history.push(`/details/${event.target.value}`)
    }


    handleRest = (event) => {
        console.log(event.target.value)
        fetch(`${restUrl}${event.target.value}`,{method:'GET'})
        .then((res) => res.json())
        .then((data)=>{
            this.setState({restaurants:data})
        })
    }
    
  render(){
    return(
        <React.Fragment>
        <div id="search">
            <div id="logo">
                    <span>Zc!</span>
            </div>
                <div id="heading">
                    Find The Best Place Near You
                </div>
                <div id="dropdown">
                    <select onChange={this.handleRest}>
                        <option>------------------Select City------------------------</option>
                        {this.renderCity(this.state.location)}
                    </select>
                    <select onChange={this.handleDropdown}>
                        <option>----------------Select Restaurants----------------</option>
                        {this.renderRestaurants(this.state.restaurants)}
                    </select>
                </div>

        </div>   
        
            
        </React.Fragment>
    )
  }
   
  //on page load call api method componentDidMount

  componentDidMount(){
      fetch(locationUrl,{method:'GET'})
      .then((res) => res.json())
      .then((data) =>{
          this.setState({location:data})
      })
  }

    
}

export default withRouter(Search);