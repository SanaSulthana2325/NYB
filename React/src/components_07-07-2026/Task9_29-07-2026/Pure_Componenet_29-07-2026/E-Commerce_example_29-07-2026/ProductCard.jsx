import React,{PureComponent} from "react";

class ProductCard extends PureComponent{
    render(){
        console.log("Product Card Rendered");

        return(
            <div className="border rounded-xl p-4 shadow bg-green">

                <h2 className="text-lg font-bold">{this.props.name}</h2>

                <p className="text-pink-600">${this.props.price}</p>
            </div>
        )
    }
}

export default ProductCard;