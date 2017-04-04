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
});
const browser = {
	versions: function () {
		var u = navigator.userAgent, app = navigator.appVersion;
		return {
			trident: u.indexOf('Trident') > -1, //IE内核
			presto: u.indexOf('Presto') > -1, //opera内核
			webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
			gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,//火狐内核
			mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
			ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
			android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
			iPhone: u.indexOf('iPhone') > -1 , //是否为iPhone或者QQHD浏览器
			iPad: u.indexOf('iPad') > -1, //是否iPad
			webApp: u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部
			weixin: u.indexOf('MicroMessenger') > -1, //是否微信 （2015-01-22新增）
			qq: u.match(/\sQQ/i) == " qq" //是否QQ
		};
	}(),
	language:(navigator.browserLanguage || navigator.language).toLowerCase()
}
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
			if(
				browser.versions.mobile ||
				browser.versions.android ||
				browser.versions.ios
			){
				return;
			}
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