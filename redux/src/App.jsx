import { Provider } from 'react-redux'
import store from './redux/store'
import CakeContainer from './components/CakeContainer'
import MilkContainer from './components/MilkContainer'
import './App.css'

function App() {

  return (
    <>
	  <Provider store={store}>
		<h2>Redux</h2>
		<CakeContainer />
		<p>------------------</p>
		<MilkContainer />
	  </Provider>
    </>
  )
}

export default App
