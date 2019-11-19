
import Vue from 'vue';
import app from './components/index.vue'

import '../element-#FE8C00/index.css'

new Vue({
	el: '#app',
	render: function (h) {
		return h(app)
	}
})


if(module.hot) {
	module.hot.accept();
}
