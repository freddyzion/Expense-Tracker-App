import App from './App.js'

const app: HTMLDivElement | null = document.querySelector('#app')

if(app) {
  app.innerHTML = App();
}
