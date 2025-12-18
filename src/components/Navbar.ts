import type { Template } from '../types'

const Navbar: Template = () => {
  return `
    <div class="nav">
      <div class="avatar">
        <img src="/assets/avatar.jpg" alt="Avatar Image" />
        <p>Hi Freddy!</p>
      </div>
    </div>
  `
}

export default Navbar