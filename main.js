/**
 * Created by geeku on 01/04/2017.
 */
const project = new Vue({
	el: '#project',
	data: {
		test: 'test',
		lists: {},
		listKey: 0,
		searchStr: ''
	},
	created () {
		fetch('lists.json')
			.then((r) => r.json())
			.then((data) => {
				this.lists = data;
			});
	},
	computed: {
		listFilted () {
			if (!this.searchStr) {
				return this.lists;
			}
			const filted = {};
			Object.keys(this.lists).forEach(key => {
				filted[key] = this.lists[key].filter(item => {
					return item.title && item.title.indexOf(this.searchStr) >= 0 ||
						item.description &&item.description.indexOf(this.searchStr) >= 0
				});
			});
			return filted;
		}
	}
});