import { createApp } from 'vue';
import App from './App';

const modules = import.meta.globEager('./components/glob/*');

console.log('glob', modules);

// for(const path in modules) {
//     modules[path]().then((m) => {
//         console.log(path, m.default);
//     })
// }

createApp(App).mount('#app');