import { Provider } from 'react-redux'
import TaskInput from './components/TaskInput'
import store from './redux/store'

function App() {
  return (
    <>
      <Provider store={store}>
        <TaskInput />
      </Provider>
    </>
  )
}


export default App
