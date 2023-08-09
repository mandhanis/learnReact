import React, {Component} from "react";


class CardProduct extends Component {
    state = {
        order: 1
    }

    handleCounterChange = (newValue) => {
        this.props.onCounterChange(newValue)
    }

    handlePlus = () => {
        this.setState({
            order: this.state.order + 1
        }, () => {
            this.handleCounterChange(this.state.order)
        })
    }

    handleMinus = () => {
        if (this.state.order > 0) {
            this.setState({
                order: this.state.order - 1
            }, () =>{
                this.handleCounterChange(this.state.order)
            } )  
        }
    }
    render () {
        return(
                <div className="card">
                    <div className="img-thumb-proud">
                        <img src="https://i.pinimg.com/236x/c2/7b/dc/c27bdc03669b6b895a31b91496e41dbf.jpg" alt=""></img>
                    </div>
                    <p className="product-title">Ayam Bakar Bumbu Rica-Rica </p>
                    <p className="product-price">IDR 410.000</p>
                    <div className="counter">
                        <button className="minus" onClick={this.handleMinus}>-</button>
                        <input type="text" value={this.state.order} />
                        <button className="plus" onClick={this.handlePlus}>+</button>
                    </div>
                </div>
        )
    }
}



export default CardProduct; 