import Home from "./pages/Home";
import React from "react";
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import {QueryClientProvider, QueryClient} from 'react-query';
import Result from './pages/Result'
import Product from './pages/Product';
import { loadStripe} from '@stripe/stripe-js'
import { CartProvider } from "use-shopping-cart";
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';

//for example can caching a request
const queryClient = new QueryClient();

//stripe
const stripePromise = loadStripe('pk_test_51IZ2KLJqqMn5DVokGFoL16prZK62KLDIGU2MB85cIAkiXYlhTEhkrpolsPZiS1FMsrFvWLFEFKYfTMhXBvPyL11Y00kY5zqq5k')


function App() {
  return (<div style={{backgroundColor: "white"}}>
    <QueryClientProvider client={queryClient}>
      <CartProvider
      mode="checkout-session"
      stripe={stripePromise}
      currency="USD">
    <BrowserRouter>
    <Navbar />
    <Toaster position="bottom-center" />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path='/result' component={Result} />
        <Route path='/:productId' component={Product} />
      </Switch>
    </BrowserRouter>
    </CartProvider>
    </QueryClientProvider>
    </div>
  )
}

export default App;
