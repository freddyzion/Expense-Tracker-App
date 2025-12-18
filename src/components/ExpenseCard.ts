import type { Template } from '../types'

const ExpenseCard: Template = () => {
  return `
    <div class="expense-card">
      <small class="history-link">View history &gt;</small>
      <div>
        <p class="msg-1">You've spent</p>
        <p class="figure"><small>$</small>15.65</p>
        <p class="msg-2">over the past week</p>
      </div>
      <button>Track</button>
    </div>
  `
}

export default ExpenseCard;