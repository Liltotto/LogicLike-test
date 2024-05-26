

import { useState } from 'react';
import './App.scss'
import Courses from './components/Courses/Courses'
import Filter from './components/Filter/Filter'

function App() {

  const [filter, setFilter] = useState<string>('Все темы');

  return (
    <div className="App">
        <Filter setFilter={setFilter} filter={filter}/>
        <Courses filter={filter} />
    </div>
  )
}

export default App
