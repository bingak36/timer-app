
import './App.css'
import SquareCale from './components/SquareCale'
import SortableList from './components/SortableList'
import PeopleList from './components/PeopleList'
function App() {

  return (
    <div className='app-container'>
      <h1>제곱근 앱</h1>
      <SortableList />
      <SquareCale />
      <PeopleList />
    </div>
  )
}

export default App
