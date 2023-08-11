import React, {Component} from "react";
import Counter from "./Counter";


class CardProduct extends Component {
    render () {
        return(
                <div className="card">
                    <div className="img-thumb-proud">
                        <img src="https://i.pinimg.com/236x/c2/7b/dc/c27bdc03669b6b895a31b91496e41dbf.jpg" alt=""></img>
                    </div>
                    <p className="product-title">Ayam Bakar Bumbu Rica-Rica </p>
                    <p className="product-price">IDR 410.000</p>
                    <Counter onCounterChange={(value) => this.props.onCounterChange(value)} />
                </div>
        )
    }
}



export default CardProduct; 