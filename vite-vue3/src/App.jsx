import { defineComponent } from 'vue';

import 'styles/index.css'

export default defineComponent({
    setup() {
        return () => {
            return <div class="text-blue">Hello vue3 jsx</div>
        }
    }
})