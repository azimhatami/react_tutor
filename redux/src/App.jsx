import { Provider } from 'react-redux'
import store from './features/store'
import CakeContainer from './components/CakeContainer'
import MilkContainer from './components/MilkContainer'
import UsersList from './components/UsersList'
import './App.css'

function App() {

  return (
    <>
	  <Provider store={store}>
		<h2>Redux</h2>
		<CakeContainer />
		<p>------------------</p>
		<MilkContainer />
		<p>------------------</p>
		<br />
    <UsersList />
	  </Provider>
    </>
  )
}

export default App
