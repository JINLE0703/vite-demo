import { defineComponent } from 'vue';

import 'styles/index.css';
import 'styles/test.scss';

import Test from './test?raw';
console.log(Test); // 文件内容

import pak from '../package.json';
console.log(pak);

import classes from 'styles/test.module.css';

import logo from './assets/logo.png';

export default defineComponent({
  setup() {
    return () => {
      return (
        <div class={`text-blue root ${classes.moduleClass}`}>
          Hello vue3 jsx
          {/* <div>my name is {jinle.name}</div> */}
          <img src={logo} />
        </div>
      );
    };
  },
});
