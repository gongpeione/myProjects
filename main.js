/**
 * Created by geeku on 01/04/2017.
 */
let curPopup = null;
document.addEventListener('click', () => {
	if (curPopup && curPopup.classList.contains('popup')) {
		curPopup.style.cssText = '';
		curPopup.classList.remove('popup');
		curPopup = null;
	}
})
new Vue({
	el: '#project',
	data: {
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
	methods: {
		popup (e) {
			let li = e.target;
			if (li.classList.contains('noPop')) {
				return;
			}
			while (li.tagName !== 'LI') {
				li = li.parentNode;
			}
			if (curPopup && curPopup.classList.contains('popup') && curPopup !== li) {
				curPopup.style.cssText = '';
				curPopup.classList.remove('popup');
			}
			curPopup = li;
			if (li.classList.contains('popup')) {
				li.style.cssText = '';
				li.classList.remove('popup');
				return;
			}
			const winWidth = window.innerWidth;
			const winHeight = window.innerHeight;
			let rect = li.getBoundingClientRect();
			rect = {
				x: rect.left,
				y: rect.top,
				width: rect.width,
				height: rect.height
			}

			const translateX = ((winWidth - rect.width) / 2) - rect.x;
			const translateY = ((winHeight - rect.height) / 2) - rect.y;
			li.style.cssText = `transform: translate(${translateX}px, ${translateY}px) scale(2);`;

			li.classList.add('popup');
		}
	},
	computed: {
		listFilted () {
			if (!this.searchStr) {
				return this.lists;
			}
			const filted = {};
			Object.keys(this.lists).forEach(key => {
				filted[key] = this.lists[key].filter(item => {
					return item.title && item.title.toLowerCase().indexOf(this.searchStr.toLowerCase()) >= 0 ||
						item.description &&item.description.toLowerCase().indexOf(this.searchStr.toLowerCase()) >= 0
				});
			});
			return filted;
		}
	}
});