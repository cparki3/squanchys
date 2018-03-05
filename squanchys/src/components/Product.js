import React, {Component} from 'react';

class Product extends Component{
	constructor(props){
		super(props);
        this.state = {
            selectedProduct: {},
            quickViewProdcut: {},
            buttonLabel: "SQUANCH IT!",
        }
    }
    addToCart(image, name, price, id, quantity){
        this.setState({
            selectedProduct: {
                image: image,
                name: name,
                price: price,
                id: id,
                quantity: 1
            }
        }, function(){
            this.props.addToCart(this.state.selectedProduct);
        })
        this.setState({
            buttonLabel: "SQUANCHED!"
        }, function(){
            setTimeout(() => {
                this.setState({
                    buttonLabel: "SQUANCH IT!",
                    selectedProduct: {}
                });
            }, 5000);
        });
    }
    quickView(image, name, price, id, quantity, desc){
        this.setState({
            quickViewProdcut: {
                image: image,
                name: name,
                price: price,
                id: id,
								quantity: quantity,
								desc: desc,
            }
        }, function(){
            this.props.openModal(this.state.quickViewProdcut);
        })
    }
    render(){
        let image = this.props.image;
        let name = this.props.name;
        let price = this.props.price;
        let id = this.props.id;
				let desc = this.props.desc;
        let quantity = this.props.productQuantity;
        return(
            <div className="product">
                <div className="product-image">
                    <img src={process.env.PUBLIC_URL + image} alt={this.props.name} onClick={this.quickView.bind(this, image, name, price, id, quantity, desc)}/>
                </div>
                <h4 className="product-name">{this.props.name}</h4>
                <p className="product-price">{this.props.price}</p>
                <div className="product-action">
                    <button type="button" onClick={this.addToCart.bind(this, image, name, price, id, quantity)}>{this.state.buttonLabel}</button>
                </div>
            </div>
        )
    }
}

export default Product;
