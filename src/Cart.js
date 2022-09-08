import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component{
    constructor() {
        super(); /* Since we are inheriting properties from React and in inheritance if I call the child class before calling parent then the properties of parent's won't be accessible to the child hence we call parent first and then we call the child constructor */
        this.state = {
            products: [
                {
                    id: 1,
                    title: "Watch",
                    price: 5000,
                    qty: 1,
                    img: 'https://m.media-amazon.com/images/I/71qNX0wixBL._UX679_.jpg',
                    id:1
                },
                {
                    id: 2,
                    title: "I-Phone 14",
                    price: 100000,
                    qty: 1,
                    img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-model-unselect-gallery-2-202209_GEO_US?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1660753617560',
                    id:2
                },
                {
                    id: 3,
                    title: "MackBook Pro",
                    price: 150000,
                    qty: 1,
                    img: 'https://i0.wp.com/maplestore.in/wp-content/uploads/2021/10/MacBook_Pro_16-in_Silver_PDP_Image_Position-1__en-IN-scaled.jpg?fit=2560%2C2560&ssl=1',
                    id:3
                }
            ]
        }
    }

    handleIncreaseQuantity = (product) => {
        const {products} = this.state;
        const indx = products.indexOf(product);

        products[indx].qty += 1;

        this.setState({
            products: products
        })
    }

    handleDecreaseQuantity = (product) => {
        if(product.qty == 0) return;
        
        const {products} = this.state;
        const indx = products.indexOf(product);

        products[indx].qty -= 1;

        this.setState({
            products
        })
    }

    render() {
        const { products } = this.state;
        return (
           <div className='cart'>
                {
                products.map((product) => {
                    return (
                        <CartItem 
                        products={product} 
                        key={product.id} 
                        onIncreaseQuant={this.handleIncreaseQuantity}
                        onDecreaseQuant={this.handleDecreaseQuantity}
                        />
                    )
                })
                }
           </div>
        );
    }
}

export default Cart;