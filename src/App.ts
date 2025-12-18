import Navbar from './components/Navbar.js'
import ExpenseCard from './components/ExpenseCard.js'
import type { Template } from './types'

const App: Template = () => {
  return `
    ${Navbar()}
    ${ExpenseCard()}
  `
}

export default App;