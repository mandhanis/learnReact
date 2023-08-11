import React, {Component, Fragment} from "react";
import './Product.css'
import Logo from '../../../assets/JipenFood.png'
import Cart from '../../../assets/cart.png'
import CardProduct from "./CardProduct/CardProduct";
import { connect } from "react-redux";

class Product extends Component {
    state = {
        order: 1
    }
    
    handleCounterChange = (newValue) => {
        this.setState({
            order: newValue
        })
    }

    render () {
        return(
            <Fragment>
                <div className="header">
                    <div className="logo">
                    <img src={Logo} alt="Pict" className='pict' style={{width: '150px', marginTop: '7px'}}/>
                    </div>
                    <div className="troley">
                        <img src={Cart} alt=""></img>
                        <div className="count">{this.props.order}</div>
                    </div>
                </div>
                <CardProduct onCounterChange={(value)=> this.handleCounterChange(value)} />
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        order: state.totalOrder
    }
}


export default connect(mapStateToProps)(Product); 