import React from 'react';
import Cart from './Cart';

class CartItem extends React.Component{
    increaseQuantity = () => {
        // this.state.qty += 1; increments but does not re-renders the value
        /* 
        method 1: this way it updates as well as re-renders the value on screen 
        this method is called shallow merging, in this type only the state change 
        is made no extra work just mention the place and it will go and do the work.
        */
        // this.setState({ qty: this.state.qty + 1 });

        /*
        method 2: in this method it itrates over the key's and upon reaching the matching 
        query key it grabs it's previous value from prevState and we are free to do our desired operations 
        on it through that.
        */

        // Both method 1(object form) and 2(callback form) are async function or method and hence we can attach a callback func to it and perform more operations. 
       this.setState((prevState) => {
        return {
            qty: prevState.qty + 1
        }
       });
    } 

    decreaseQuantity = () => {
        if(this.state.qty == 0) return;
        else {
            this.setState((prevState) => {
                return {
                    qty: prevState.qty - 1
                }
            });
        }
    }

    render() {
        console.log('this.props.product', this.props.products);
        const { title, price, qty, id, img } = this.props.products; /* Object destructuring */
        return (
            <div className='cart-item'>
                <div className='left-block'>
                    <img src={img} style={styles.image}/>
                </div>
                <div className='right-block'>
                    <div style={ {fontSize: 25}  }>{title}</div>
                    <div style={ {color: '#777'} }>Rs {price}</div>
                    <div style={ {color: '#777'} }>Qty: {qty}</div>
                    <div className='cart-item-actions'>
                        {/* BUTTONS HERE */}
                        <img 
                        alt="increase" 
                        className='action-icons' 
                        src='https://cdn-icons-png.flaticon.com/512/992/992651.png'
                        onClick={this.increaseQuantity} 
                        />
                        <img 
                        alt="decrease" 
                        className='action-icons' 
                        src='https://cdn-icons-png.flaticon.com/512/992/992683.png'
                        onClick={this.decreaseQuantity} 
                        />
                        <img 
                        alt="delete" 
                        className='action-icons' 
                        src='https://cdn-icons-png.flaticon.com/512/1214/1214428.png'
                        onClick={this.deleteItem} 
                        />
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        backgroundColor: '#ccc'
    }
}

export default CartItem;