import React,{Component} from 'react';
import './Details.css';
import axios from 'axios';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import MenuList from './MenuDisplay';


const Url = "https://zomclone.herokuapp.com/restaurant"
const MealUrl = "https://zomclone.herokuapp.com/menu"

class Details extends Component{
    constructor(props){
        super();
        this .state={

            details:'',
            menulist:'',
            userItem:''
        }
    }

        addToCart = (data) =>{
            this.setState({userItem:data})
        }


        proceed =() =>{
            sessionStorage.setItem('menu',this.state.userItem);
            this.props.history.push(`/placeOrder/${this.state.details.restaurant_name}`)
        }

        render(){
            let details = this.state.details;
            return(
                <div className="main">
                    <div id="content">
                                <div id="imgDiv">
                                    <img src={details.restaurant_thumb}/>
                                </div>
                        <div id="textDiv">
                                    <h1><spna className="detailheading">{details.restaurant_name}</spna></h1>
                                    <i className="fas fa-star checked"></i>
                                    <i className="fas fa-star checked"></i>
                                    <i className="fas fa-star checked"></i>
                                    <i className="fas fa-star checked"></i>
                                    <i className="far fa-star"></i>
                                    <span>&nbsp;&nbsp;  289 Customer Reviews</span>
                                    <h3><strike>Old Price 500</strike>
                                    <span> &nbsp;&nbsp;&nbsp;&nbsp;New Price {details.cost}</span></h3>
                                    <h3>Best Taste of {details.restaurant_name} At your Door or DineIn</h3>
                                    <h4>{details.address}</h4>
                            <div>
                                        <div className="icon">
                                            <img src="https://i.ibb.co/0KzLdwC/No-contact-delivery-final-CB432269791.png" alt="icon"/>
                                            <p>Contact Less Delivery</p>
                                        </div>
                                        <div class="icon">
                                            <img src="https://i.ibb.co/kgcsZ3z/icon-amazon-delivered-CB485933725.png" alt="icon"/>
                                            <p>Free Home Delivery</p>
                                        </div>
                            </div>
                                        <h2 className="stock">
                                            Available Now
                                        </h2>
                                        <div>
                                            <button className="btn btn-atc">Back</button>
                                            <button className="btn btn-checkout" onClick={this.proceed}>Checkout</button>
                                            
                                        </div>
                            
                        </div>
                    </div>
                    <div className="col-md-12">
                        <Tabs>
                            <TabList>
                                <Tab><h4><bold>Details</bold></h4></Tab>
                                <Tab><h4><bold>Contacts</bold></h4></Tab>
                                <Tab><h4><bold>Menu</bold></h4></Tab>
                            </TabList>

                            <TabPanel>                        
                                <h2>{details.restaurant_name}</h2>
                                <p>{details.restaurant_name} is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                                </TabPanel>
                                <TabPanel>
                                <h1>You can connect us @</h1>
                                <h4>{details.address}</h4>
                                <h4>Contact No: 8877662121 </h4>
                                </TabPanel>
                                <TabPanel>
                                <MenuList menuData = {this.state.menulist}
                                finalOrder ={(data) => {this.addToCart(data)}}/>
                                </TabPanel>
                        </Tabs>
                    </div>
                </div>
               
        )
       
    }
    async componentDidMount(){
        const restId = this.props.match.params.id;
        const response = await axios.get(`${Url}/${restId}`)
        const Mealresponse = await axios.get(`${MealUrl}/${restId}`)
            this.setState({details:response.data[0],menulist:Mealresponse.data})
    }
}

export default Details

