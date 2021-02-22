import { Provider } from 'react-redux'
import ConnectedCounter from './components/ConnectedCounter'
// import Counter from './components/Counter'
import store from './redux/store'
import './App.css'

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        {/* <Counter/> */}
        <ConnectedCounter />
      </div>
    </Provider>
  )
}

export default App
