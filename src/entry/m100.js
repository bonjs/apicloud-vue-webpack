

import Vue from 'vue';
import app from '../components/m100.vue'

new Vue({
	el: '#app',
	render: function (h) {
		return h(app)
	}
})

if(module.hot) {
	module.hot.accept();
}


