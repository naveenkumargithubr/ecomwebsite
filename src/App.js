import {Component} from 'react'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Products from './components/Products'
import ProductItemDetails from './components/ProductItemDetails'
import Cart from './components/Cart'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import CartContext from './context/CartContext'

import './App.css'

class App extends Component {
  state = {
    cartList: [],
  }

  // addCart item to the cart
  addCartItem = product => {
    // this.setState(prevState => ({cartList: [...prevState.cartList, product]})) => this line is only add the items in the cart in this line the same item is added multiple times
    const {cartList} = this.state
    const productObject = cartList.find(eachItem => eachItem.id === product.id) // here we finding the product id

    if (productObject) {
      this.setState(prevState => ({
        cartList: prevState.cartList.map(eachItem => {
          // here we compare the each item id and product id if the item is same then added to the cart
          if (productObject.id === eachItem.id) {
            const updatedList = eachItem.quantity + product.quantity
            return {...eachItem, quantity: updatedList}
          }
          return eachItem
        }),
      }))
    } else {
      const updatedCartList = [...cartList, product]
      this.setState({cartList: updatedCartList})
    }
  }

  // delete item to the cart
  deleteCartItem = id => {
    const {cartList} = this.state
    const updatedCartList = cartList.filter(eachItem => eachItem.id !== id)
    this.setState({cartList: updatedCartList})
  }

  // increment item to the cart
  incrementCartItemQuantity = id => {
    this.setState(prevState => ({
      cartList: prevState.cartList.map(eachItem => {
        if (id === eachItem.id) {
          const constUpdatedQuantity = eachItem.quantity + 1
          return {...eachItem, quantity: constUpdatedQuantity}
        }
        return eachItem
      }),
    }))
  }

  // decrement item from the cart
  decrementCartItemQuantity = id => {
    const {cartList} = this.state

    const productObjItem = cartList.find(eachObjItem => eachObjItem.id === id)
    if (productObjItem.quantity > 1) {
      this.setState(prevState => ({
        cartList: prevState.cartList.map(eachItem => {
          if (eachItem.id === id) {
            const updatedQuantityList = eachItem.quantity - 1
            return {...eachItem, quantity: updatedQuantityList}
          }
          return eachItem
        }),
      }))
    }
  }

  // remove all cart items
  removeAllCartItems = () => {
    this.setState({cartList: []})
  }

  render() {
    const {cartList} = this.state

    return (
      <BrowserRouter>
        <CartContext.Provider
          value={{
            cartList,
            addCartItem: this.addCartItem,
            deleteCartItem: this.deleteCartItem,
            incrementCartItemQuantity: this.incrementCartItemQuantity,
            decrementCartItemQuantity: this.decrementCartItemQuantity,
            removeAllCartItems: this.removeAllCartItems,
          }}
        >
          <Switch>
            <Route exact path="/login" component={LoginForm} />
            <ProtectedRoute exact path="/" component={Home} />
            <ProtectedRoute exact path="/products" component={Products} />
            <ProtectedRoute
              exact
              path="/products/:id"
              component={ProductItemDetails}
            />
            <ProtectedRoute exact path="/cart" component={Cart} />
            <Route path="/not-found" component={NotFound} />
            <Redirect to="not-found" />
          </Switch>
        </CartContext.Provider>
      </BrowserRouter>
    )
  }
}

export default App
