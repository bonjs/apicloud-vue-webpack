#/bin/sh

for((i = 1; i <= 100; i++))
do
	echo "

import Vue from 'vue';
import app from '../components/m$i.vue'

new Vue({
	el: '#app',
	render: function (h) {
		return h(app)
	}
})

if(module.hot) {
	module.hot.accept();
}

" > m$i.js
done
