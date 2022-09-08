import React from 'react';
import Cart from './Cart';

class CartItem extends React.Component{
    render() {
        // console.log('this.props.product', this.props.products);
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
                        onClick={() => this.props.onIncreaseQuant(this.props.products)} 
                        />
                        <img 
                        alt="decrease" 
                        className='action-icons' 
                        src='https://cdn-icons-png.flaticon.com/512/992/992683.png'
                        onClick={() => this.props.onDecreaseQuant(this.props.products)} 
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