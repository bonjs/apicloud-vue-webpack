
import Vue from 'vue';
import app from '../components/m138.vue'

new Vue({
	el: '#app',
	render: function (h) {
		return h(app)
	}
})
/*
if(module.hot) {
	module.hot.accept();
}
*/


