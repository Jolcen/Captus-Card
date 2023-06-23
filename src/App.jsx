import './App.css'
import Amount from './components/Amount'
import Details from './components/Details'

import Heart from './components/Heart'
import Product from './components/Product'

function App() {

  return (
    <div className='app'> 
      <Heart/>
      <Product/>
      <Details/>
      <Amount/>
    </div>
  )
}

export default App
