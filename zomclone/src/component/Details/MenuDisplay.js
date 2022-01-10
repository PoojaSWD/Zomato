import React,{Component} from 'react';
import './menuDisplay.css';

class Menudetails extends Component{

    orderId =[];

    addItem = (id) =>{
        this.orderId.push(`${id}`)
        this.props.finalOrder(this.orderId)
    }

    removeItem = (id) =>{
        this.orderId.splice(this.orderId.indexOf(id,toString()), 1)
        this.props.finalOrder(this.orderId)
        
    }

    renderCart =(orders) =>{
        if(orders){
            return orders.map((item,index)=>{
                return(
                    <b key={index}>{item}&nbsp;&nbsp;</b>
                )
            })
        }
    }

    renderMenu =({menuData}) =>{
        if(menuData){
            return menuData.map((item) =>{
                return(
                    <div key={item.menu_id}>
                            <div className="col-md-2">
                            <div className="card">
                                <b>Menu No :  {item.menu_id}</b>
                            <img src={item.menu_image} className="card-img-top" alt={item.menu_name} id="menuimg"/>
                                <div className="card-body">
                                    <h5 className="card-title"><b>{item.menu_name}</b></h5>
                                    <h5><b>Price -</b>  {item.menu_price}   <span id="menutype"><b>{item.menu_type}</b></span></h5>
                                    
                                    <p className="card-text">{item.description}</p>
                                </div>
                            </div>
                            <div className="cartbuttons">
                                        <button className="btn btn-success" id="cartadd" onClick={()=>{this.addItem(item.menu_id)}}>
                                            <span className="glyphicon glyphicon-plus"></span>
                                        </button>
                                        <button className="btn btn-danger" id="cartremove" onClick={()=>{this.removeItem(item.menu_id)}}>
                                            <span className="glyphicon glyphicon-minus"></span>
                                        </button>

                            </div>
                        </div>
                        
                    </div>
                )
            })
        }
    }
    render(){
        return(
            <>
                <div className="col-md-12 bg-warning">
                    <h2>Item Added</h2>
                    <h4>Item Number {this.renderCart(this.orderId)}added </h4>
                </div>
            <div className="col-md-12 bg-light">
                {this.renderMenu(this.props)}
            </div>
            
            </>
            
        )
    }
 
}

export default Menudetails