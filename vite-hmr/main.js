import './style.css'

// 切记需要export
export function render() {
  document.querySelector('#app').innerHTML = `
    <h1>Hello Vite!</h1>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation1</a>
  `
}

// build的代码没有hot，开发环境才需要开启热更新
if(import.meta.hot) {
  import.meta.hot.accept((newModule) => {
    newModule.render();
  });
}