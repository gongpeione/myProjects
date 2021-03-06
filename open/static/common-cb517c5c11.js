!
function(a, b) {
	"object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
		if (!a.document) throw new Error("jQuery requires a window with a document");
		return b(a)
	} : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
	var c = [],
		d = a.document,
		e = c.slice,
		f = c.concat,
		g = c.push,
		h = c.indexOf,
		i = {},
		j = i.toString,
		k = i.hasOwnProperty,
		l = {},
		m = "1.12.0",
		n = function(a, b) {
			return new n.fn.init(a, b)
		},
		o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
		p = /^-ms-/,
		q = /-([\da-z])/gi,
		r = function(a, b) {
			return b.toUpperCase()
		};
	n.fn = n.prototype = {
		jquery: m,
		constructor: n,
		selector: "",
		length: 0,
		toArray: function() {
			return e.call(this)
		},
		get: function(a) {
			return null != a ? 0 > a ? this[a + this.length] : this[a] : e.call(this)
		},
		pushStack: function(a) {
			var b = n.merge(this.constructor(), a);
			return b.prevObject = this, b.context = this.context, b
		},
		each: function(a) {
			return n.each(this, a)
		},
		map: function(a) {
			return this.pushStack(n.map(this, function(b, c) {
				return a.call(b, c, b)
			}))
		},
		slice: function() {
			return this.pushStack(e.apply(this, arguments))
		},
		first: function() {
			return this.eq(0)
		},
		last: function() {
			return this.eq(-1)
		},
		eq: function(a) {
			var b = this.length,
				c = +a + (0 > a ? b : 0);
			return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
		},
		end: function() {
			return this.prevObject || this.constructor()
		},
		push: g,
		sort: c.sort,
		splice: c.splice
	}, n.extend = n.fn.extend = function() {
		var a, b, c, d, e, f, g = arguments[0] || {},
			h = 1,
			i = arguments.length,
			j = !1;
		for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++) if (null != (e = arguments[h])) for (d in e) a = g[d], c = e[d], g !== c && (j && c && (n.isPlainObject(c) || (b = n.isArray(c))) ? (b ? (b = !1, f = a && n.isArray(a) ? a : []) : f = a && n.isPlainObject(a) ? a : {}, g[d] = n.extend(j, f, c)) : void 0 !== c && (g[d] = c));
		return g
	}, n.extend({
		expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
		isReady: !0,
		error: function(a) {
			throw new Error(a)
		},
		noop: function() {},
		isFunction: function(a) {
			return "function" === n.type(a)
		},
		isArray: Array.isArray ||
		function(a) {
			return "array" === n.type(a)
		},
		isWindow: function(a) {
			return null != a && a == a.window
		},
		isNumeric: function(a) {
			var b = a && a.toString();
			return !n.isArray(a) && b - parseFloat(b) + 1 >= 0
		},
		isEmptyObject: function(a) {
			var b;
			for (b in a) return !1;
			return !0
		},
		isPlainObject: function(a) {
			var b;
			if (!a || "object" !== n.type(a) || a.nodeType || n.isWindow(a)) return !1;
			try {
				if (a.constructor && !k.call(a, "constructor") && !k.call(a.constructor.prototype, "isPrototypeOf")) return !1
			} catch (c) {
				return !1
			}
			if (!l.ownFirst) for (b in a) return k.call(a, b);
			for (b in a);
			return void 0 === b || k.call(a, b)
		},
		type: function(a) {
			return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? i[j.call(a)] || "object" : typeof a
		},
		globalEval: function(b) {
			b && n.trim(b) && (a.execScript ||
			function(b) {
				a.eval.call(a, b)
			})(b)
		},
		camelCase: function(a) {
			return a.replace(p, "ms-").replace(q, r)
		},
		nodeName: function(a, b) {
			return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
		},
		each: function(a, b) {
			var c, d = 0;
			if (s(a)) {
				for (c = a.length; c > d; d++) if (b.call(a[d], d, a[d]) === !1) break
			} else for (d in a) if (b.call(a[d], d, a[d]) === !1) break;
			return a
		},
		trim: function(a) {
			return null == a ? "" : (a + "").replace(o, "")
		},
		makeArray: function(a, b) {
			var c = b || [];
			return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : g.call(c, a)), c
		},
		inArray: function(a, b, c) {
			var d;
			if (b) {
				if (h) return h.call(b, a, c);
				for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++) if (c in b && b[c] === a) return c
			}
			return -1
		},
		merge: function(a, b) {
			var c = +b.length,
				d = 0,
				e = a.length;
			while (c > d) a[e++] = b[d++];
			if (c !== c) while (void 0 !== b[d]) a[e++] = b[d++];
			return a.length = e, a
		},
		grep: function(a, b, c) {
			for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
			return e
		},
		map: function(a, b, c) {
			var d, e, g = 0,
				h = [];
			if (s(a)) for (d = a.length; d > g; g++) e = b(a[g], g, c), null != e && h.push(e);
			else for (g in a) e = b(a[g], g, c), null != e && h.push(e);
			return f.apply([], h)
		},
		guid: 1,
		proxy: function(a, b) {
			var c, d, f;
			return "string" == typeof b && (f = a[b], b = a, a = f), n.isFunction(a) ? (c = e.call(arguments, 2), d = function() {
				return a.apply(b || this, c.concat(e.call(arguments)))
			}, d.guid = a.guid = a.guid || n.guid++, d) : void 0
		},
		now: function() {
			return +new Date
		},
		support: l
	}), "function" == typeof Symbol && (n.fn[Symbol.iterator] = c[Symbol.iterator]), n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(a, b) {
		i["[object " + b + "]"] = b.toLowerCase()
	});

	function s(a) {
		var b = !! a && "length" in a && a.length,
			c = n.type(a);
		return "function" === c || n.isWindow(a) ? !1 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
	}
	var t = function(a) {
			var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date,
				v = a.document,
				w = 0,
				x = 0,
				y = ga(),
				z = ga(),
				A = ga(),
				B = function(a, b) {
					return a === b && (l = !0), 0
				},
				C = 1 << 31,
				D = {}.hasOwnProperty,
				E = [],
				F = E.pop,
				G = E.push,
				H = E.push,
				I = E.slice,
				J = function(a, b) {
					for (var c = 0, d = a.length; d > c; c++) if (a[c] === b) return c;
					return -1
				},
				K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
				L = "[\\x20\\t\\r\\n\\f]",
				M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
				N = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + L + "*\\]",
				O = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + N + ")*)|.*)\\)|)",
				P = new RegExp(L + "+", "g"),
				Q = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
				R = new RegExp("^" + L + "*," + L + "*"),
				S = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
				T = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
				U = new RegExp(O),
				V = new RegExp("^" + M + "$"),
				W = {
					ID: new RegExp("^#(" + M + ")"),
					CLASS: new RegExp("^\\.(" + M + ")"),
					TAG: new RegExp("^(" + M + "|[*])"),
					ATTR: new RegExp("^" + N),
					PSEUDO: new RegExp("^" + O),
					CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
					bool: new RegExp("^(?:" + K + ")$", "i"),
					needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
				},
				X = /^(?:input|select|textarea|button)$/i,
				Y = /^h\d$/i,
				Z = /^[^{]+\{\s*\[native \w/,
				$ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
				_ = /[+~]/,
				aa = /'|\\/g,
				ba = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
				ca = function(a, b, c) {
					var d = "0x" + b - 65536;
					return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
				},
				da = function() {
					m()
				};
			try {
				H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType
			} catch (ea) {
				H = {
					apply: E.length ?
					function(a, b) {
						G.apply(a, I.call(b))
					} : function(a, b) {
						var c = a.length,
							d = 0;
						while (a[c++] = b[d++]);
						a.length = c - 1
					}
				}
			}
			function fa(a, b, d, e) {
				var f, h, j, k, l, o, r, s, w = b && b.ownerDocument,
					x = b ? b.nodeType : 9;
				if (d = d || [], "string" != typeof a || !a || 1 !== x && 9 !== x && 11 !== x) return d;
				if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
					if (11 !== x && (o = $.exec(a))) if (f = o[1]) {
						if (9 === x) {
							if (!(j = b.getElementById(f))) return d;
							if (j.id === f) return d.push(j), d
						} else if (w && (j = w.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d
					} else {
						if (o[2]) return H.apply(d, b.getElementsByTagName(a)), d;
						if ((f = o[3]) && c.getElementsByClassName && b.getElementsByClassName) return H.apply(d, b.getElementsByClassName(f)), d
					}
					if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
						if (1 !== x) w = b, s = a;
						else if ("object" !== b.nodeName.toLowerCase()) {
							(k = b.getAttribute("id")) ? k = k.replace(aa, "\\$&") : b.setAttribute("id", k = u), r = g(a), h = r.length, l = V.test(k) ? "#" + k : "[id='" + k + "']";
							while (h--) r[h] = l + " " + qa(r[h]);
							s = r.join(","), w = _.test(a) && oa(b.parentNode) || b
						}
						if (s) try {
							return H.apply(d, w.querySelectorAll(s)), d
						} catch (y) {} finally {
							k === u && b.removeAttribute("id")
						}
					}
				}
				return i(a.replace(Q, "$1"), b, d, e)
			}
			function ga() {
				var a = [];

				function b(c, e) {
					return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
				}
				return b
			}
			function ha(a) {
				return a[u] = !0, a
			}
			function ia(a) {
				var b = n.createElement("div");
				try {
					return !!a(b)
				} catch (c) {
					return !1
				} finally {
					b.parentNode && b.parentNode.removeChild(b), b = null
				}
			}
			function ja(a, b) {
				var c = a.split("|"),
					e = c.length;
				while (e--) d.attrHandle[c[e]] = b
			}
			function ka(a, b) {
				var c = b && a,
					d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
				if (d) return d;
				if (c) while (c = c.nextSibling) if (c === b) return -1;
				return a ? 1 : -1
			}
			function la(a) {
				return function(b) {
					var c = b.nodeName.toLowerCase();
					return "input" === c && b.type === a
				}
			}
			function ma(a) {
				return function(b) {
					var c = b.nodeName.toLowerCase();
					return ("input" === c || "button" === c) && b.type === a
				}
			}
			function na(a) {
				return ha(function(b) {
					return b = +b, ha(function(c, d) {
						var e, f = a([], c.length, b),
							g = f.length;
						while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
					})
				})
			}
			function oa(a) {
				return a && "undefined" != typeof a.getElementsByTagName && a
			}
			c = fa.support = {}, f = fa.isXML = function(a) {
				var b = a && (a.ownerDocument || a).documentElement;
				return b ? "HTML" !== b.nodeName : !1
			}, m = fa.setDocument = function(a) {
				var b, e, g = a ? a.ownerDocument || a : v;
				return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ia(function(a) {
					return a.className = "i", !a.getAttribute("className")
				}), c.getElementsByTagName = ia(function(a) {
					return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length
				}), c.getElementsByClassName = Z.test(n.getElementsByClassName), c.getById = ia(function(a) {
					return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length
				}), c.getById ? (d.find.ID = function(a, b) {
					if ("undefined" != typeof b.getElementById && p) {
						var c = b.getElementById(a);
						return c ? [c] : []
					}
				}, d.filter.ID = function(a) {
					var b = a.replace(ba, ca);
					return function(a) {
						return a.getAttribute("id") === b
					}
				}) : (delete d.find.ID, d.filter.ID = function(a) {
					var b = a.replace(ba, ca);
					return function(a) {
						var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
						return c && c.value === b
					}
				}), d.find.TAG = c.getElementsByTagName ?
				function(a, b) {
					return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0
				} : function(a, b) {
					var c, d = [],
						e = 0,
						f = b.getElementsByTagName(a);
					if ("*" === a) {
						while (c = f[e++]) 1 === c.nodeType && d.push(c);
						return d
					}
					return f
				}, d.find.CLASS = c.getElementsByClassName &&
				function(a, b) {
					return "undefined" != typeof b.getElementsByClassName && p ? b.getElementsByClassName(a) : void 0
				}, r = [], q = [], (c.qsa = Z.test(n.querySelectorAll)) && (ia(function(a) {
					o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
				}), ia(function(a) {
					var b = n.createElement("input");
					b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
				})), (c.matchesSelector = Z.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ia(function(a) {
					c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", O)
				}), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Z.test(o.compareDocumentPosition), t = b || Z.test(o.contains) ?
				function(a, b) {
					var c = 9 === a.nodeType ? a.documentElement : a,
						d = b && b.parentNode;
					return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
				} : function(a, b) {
					if (b) while (b = b.parentNode) if (b === a) return !0;
					return !1
				}, B = b ?
				function(a, b) {
					if (a === b) return l = !0, 0;
					var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
					return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1)
				} : function(a, b) {
					if (a === b) return l = !0, 0;
					var c, d = 0,
						e = a.parentNode,
						f = b.parentNode,
						g = [a],
						h = [b];
					if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
					if (e === f) return ka(a, b);
					c = a;
					while (c = c.parentNode) g.unshift(c);
					c = b;
					while (c = c.parentNode) h.unshift(c);
					while (g[d] === h[d]) d++;
					return d ? ka(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0
				}, n) : n
			}, fa.matches = function(a, b) {
				return fa(a, null, null, b)
			}, fa.matchesSelector = function(a, b) {
				if ((a.ownerDocument || a) !== n && m(a), b = b.replace(T, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try {
					var d = s.call(a, b);
					if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
				} catch (e) {}
				return fa(b, n, null, [a]).length > 0
			}, fa.contains = function(a, b) {
				return (a.ownerDocument || a) !== n && m(a), t(a, b)
			}, fa.attr = function(a, b) {
				(a.ownerDocument || a) !== n && m(a);
				var e = d.attrHandle[b.toLowerCase()],
					f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
				return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
			}, fa.error = function(a) {
				throw new Error("Syntax error, unrecognized expression: " + a)
			}, fa.uniqueSort = function(a) {
				var b, d = [],
					e = 0,
					f = 0;
				if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
					while (b = a[f++]) b === a[f] && (e = d.push(f));
					while (e--) a.splice(d[e], 1)
				}
				return k = null, a
			}, e = fa.getText = function(a) {
				var b, c = "",
					d = 0,
					f = a.nodeType;
				if (f) {
					if (1 === f || 9 === f || 11 === f) {
						if ("string" == typeof a.textContent) return a.textContent;
						for (a = a.firstChild; a; a = a.nextSibling) c += e(a)
					} else if (3 === f || 4 === f) return a.nodeValue
				} else while (b = a[d++]) c += e(b);
				return c
			}, d = fa.selectors = {
				cacheLength: 50,
				createPseudo: ha,
				match: W,
				attrHandle: {},
				find: {},
				relative: {
					">": {
						dir: "parentNode",
						first: !0
					},
					" ": {
						dir: "parentNode"
					},
					"+": {
						dir: "previousSibling",
						first: !0
					},
					"~": {
						dir: "previousSibling"
					}
				},
				preFilter: {
					ATTR: function(a) {
						return a[1] = a[1].replace(ba, ca), a[3] = (a[3] || a[4] || a[5] || "").replace(ba, ca), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
					},
					CHILD: function(a) {
						return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || fa.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && fa.error(a[0]), a
					},
					PSEUDO: function(a) {
						var b, c = !a[6] && a[2];
						return W.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && U.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
					}
				},
				filter: {
					TAG: function(a) {
						var b = a.replace(ba, ca).toLowerCase();
						return "*" === a ?
						function() {
							return !0
						} : function(a) {
							return a.nodeName && a.nodeName.toLowerCase() === b
						}
					},
					CLASS: function(a) {
						var b = y[a + " "];
						return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function(a) {
							return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
						})
					},
					ATTR: function(a, b, c) {
						return function(d) {
							var e = fa.attr(d, a);
							return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(P, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
						}
					},
					CHILD: function(a, b, c, d, e) {
						var f = "nth" !== a.slice(0, 3),
							g = "last" !== a.slice(-4),
							h = "of-type" === b;
						return 1 === d && 0 === e ?
						function(a) {
							return !!a.parentNode
						} : function(b, c, i) {
							var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
								q = b.parentNode,
								r = h && b.nodeName.toLowerCase(),
								s = !i && !h,
								t = !1;
							if (q) {
								if (f) {
									while (p) {
										m = b;
										while (m = m[p]) if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
										o = p = "only" === a && !o && "nextSibling"
									}
									return !0
								}
								if (o = [g ? q.firstChild : q.lastChild], g && s) {
									m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n];
									while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) if (1 === m.nodeType && ++t && m === b) {
										k[a] = [w, n, t];
										break
									}
								} else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1) while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b)) break;
								return t -= e, t === d || t % d === 0 && t / d >= 0
							}
						}
					},
					PSEUDO: function(a, b) {
						var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fa.error("unsupported pseudo: " + a);
						return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ha(function(a, c) {
							var d, f = e(a, b),
								g = f.length;
							while (g--) d = J(a, f[g]), a[d] = !(c[d] = f[g])
						}) : function(a) {
							return e(a, 0, c)
						}) : e
					}
				},
				pseudos: {
					not: ha(function(a) {
						var b = [],
							c = [],
							d = h(a.replace(Q, "$1"));
						return d[u] ? ha(function(a, b, c, e) {
							var f, g = d(a, null, e, []),
								h = a.length;
							while (h--)(f = g[h]) && (a[h] = !(b[h] = f))
						}) : function(a, e, f) {
							return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop()
						}
					}),
					has: ha(function(a) {
						return function(b) {
							return fa(a, b).length > 0
						}
					}),
					contains: ha(function(a) {
						return a = a.replace(ba, ca), function(b) {
							return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
						}
					}),
					lang: ha(function(a) {
						return V.test(a || "") || fa.error("unsupported lang: " + a), a = a.replace(ba, ca).toLowerCase(), function(b) {
							var c;
							do
							if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
							while ((b = b.parentNode) && 1 === b.nodeType);
							return !1
						}
					}),
					target: function(b) {
						var c = a.location && a.location.hash;
						return c && c.slice(1) === b.id
					},
					root: function(a) {
						return a === o
					},
					focus: function(a) {
						return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !! (a.type || a.href || ~a.tabIndex)
					},
					enabled: function(a) {
						return a.disabled === !1
					},
					disabled: function(a) {
						return a.disabled === !0
					},
					checked: function(a) {
						var b = a.nodeName.toLowerCase();
						return "input" === b && !! a.checked || "option" === b && !! a.selected
					},
					selected: function(a) {
						return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
					},
					empty: function(a) {
						for (a = a.firstChild; a; a = a.nextSibling) if (a.nodeType < 6) return !1;
						return !0
					},
					parent: function(a) {
						return !d.pseudos.empty(a)
					},
					header: function(a) {
						return Y.test(a.nodeName)
					},
					input: function(a) {
						return X.test(a.nodeName)
					},
					button: function(a) {
						var b = a.nodeName.toLowerCase();
						return "input" === b && "button" === a.type || "button" === b
					},
					text: function(a) {
						var b;
						return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
					},
					first: na(function() {
						return [0]
					}),
					last: na(function(a, b) {
						return [b - 1]
					}),
					eq: na(function(a, b, c) {
						return [0 > c ? c + b : c]
					}),
					even: na(function(a, b) {
						for (var c = 0; b > c; c += 2) a.push(c);
						return a
					}),
					odd: na(function(a, b) {
						for (var c = 1; b > c; c += 2) a.push(c);
						return a
					}),
					lt: na(function(a, b, c) {
						for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
						return a
					}),
					gt: na(function(a, b, c) {
						for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
						return a
					})
				}
			}, d.pseudos.nth = d.pseudos.eq;
			for (b in {
				radio: !0,
				checkbox: !0,
				file: !0,
				password: !0,
				image: !0
			}) d.pseudos[b] = la(b);
			for (b in {
				submit: !0,
				reset: !0
			}) d.pseudos[b] = ma(b);

			function pa() {}
			pa.prototype = d.filters = d.pseudos, d.setFilters = new pa, g = fa.tokenize = function(a, b) {
				var c, e, f, g, h, i, j, k = z[a + " "];
				if (k) return b ? 0 : k.slice(0);
				h = a, i = [], j = d.preFilter;
				while (h) {
					(!c || (e = R.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = S.exec(h)) && (c = e.shift(), f.push({
						value: c,
						type: e[0].replace(Q, " ")
					}), h = h.slice(c.length));
					for (g in d.filter)!(e = W[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
						value: c,
						type: g,
						matches: e
					}), h = h.slice(c.length));
					if (!c) break
				}
				return b ? h.length : h ? fa.error(a) : z(a, i).slice(0)
			};

			function qa(a) {
				for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
				return d
			}
			function ra(a, b, c) {
				var d = b.dir,
					e = c && "parentNode" === d,
					f = x++;
				return b.first ?
				function(b, c, f) {
					while (b = b[d]) if (1 === b.nodeType || e) return a(b, c, f)
				} : function(b, c, g) {
					var h, i, j, k = [w, f];
					if (g) {
						while (b = b[d]) if ((1 === b.nodeType || e) && a(b, c, g)) return !0
					} else while (b = b[d]) if (1 === b.nodeType || e) {
						if (j = b[u] || (b[u] = {}), i = j[b.uniqueID] || (j[b.uniqueID] = {}), (h = i[d]) && h[0] === w && h[1] === f) return k[2] = h[2];
						if (i[d] = k, k[2] = a(b, c, g)) return !0
					}
				}
			}
			function sa(a) {
				return a.length > 1 ?
				function(b, c, d) {
					var e = a.length;
					while (e--) if (!a[e](b, c, d)) return !1;
					return !0
				} : a[0]
			}
			function ta(a, b, c) {
				for (var d = 0, e = b.length; e > d; d++) fa(a, b[d], c);
				return c
			}
			function ua(a, b, c, d, e) {
				for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
				return g
			}
			function va(a, b, c, d, e, f) {
				return d && !d[u] && (d = va(d)), e && !e[u] && (e = va(e, f)), ha(function(f, g, h, i) {
					var j, k, l, m = [],
						n = [],
						o = g.length,
						p = f || ta(b || "*", h.nodeType ? [h] : h, []),
						q = !a || !f && b ? p : ua(p, m, a, h, i),
						r = c ? e || (f ? a : o || d) ? [] : g : q;
					if (c && c(q, r, h, i), d) {
						j = ua(r, n), d(j, [], h, i), k = j.length;
						while (k--)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
					}
					if (f) {
						if (e || a) {
							if (e) {
								j = [], k = r.length;
								while (k--)(l = r[k]) && j.push(q[k] = l);
								e(null, r = [], j, i)
							}
							k = r.length;
							while (k--)(l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
						}
					} else r = ua(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r)
				})
			}
			function wa(a) {
				for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ra(function(a) {
					return a === b
				}, h, !0), l = ra(function(a) {
					return J(b, a) > -1
				}, h, !0), m = [function(a, c, d) {
					var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
					return b = null, e
				}]; f > i; i++) if (c = d.relative[a[i].type]) m = [ra(sa(m), c)];
				else {
					if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
						for (e = ++i; f > e; e++) if (d.relative[a[e].type]) break;
						return va(i > 1 && sa(m), i > 1 && qa(a.slice(0, i - 1).concat({
							value: " " === a[i - 2].type ? "*" : ""
						})).replace(Q, "$1"), c, e > i && wa(a.slice(i, e)), f > e && wa(a = a.slice(e)), f > e && qa(a))
					}
					m.push(c)
				}
				return sa(m)
			}
			function xa(a, b) {
				var c = b.length > 0,
					e = a.length > 0,
					f = function(f, g, h, i, k) {
						var l, o, q, r = 0,
							s = "0",
							t = f && [],
							u = [],
							v = j,
							x = f || e && d.find.TAG("*", k),
							y = w += null == v ? 1 : Math.random() || .1,
							z = x.length;
						for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
							if (e && l) {
								o = 0, g || l.ownerDocument === n || (m(l), h = !p);
								while (q = a[o++]) if (q(l, g || n, h)) {
									i.push(l);
									break
								}
								k && (w = y)
							}
							c && ((l = !q && l) && r--, f && t.push(l))
						}
						if (r += s, c && s !== r) {
							o = 0;
							while (q = b[o++]) q(t, u, g, h);
							if (f) {
								if (r > 0) while (s--) t[s] || u[s] || (u[s] = F.call(i));
								u = ua(u)
							}
							H.apply(i, u), k && !f && u.length > 0 && r + b.length > 1 && fa.uniqueSort(i)
						}
						return k && (w = y, j = v), t
					};
				return c ? ha(f) : f
			}
			return h = fa.compile = function(a, b) {
				var c, d = [],
					e = [],
					f = A[a + " "];
				if (!f) {
					b || (b = g(a)), c = b.length;
					while (c--) f = wa(b[c]), f[u] ? d.push(f) : e.push(f);
					f = A(a, xa(e, d)), f.selector = a
				}
				return f
			}, i = fa.select = function(a, b, e, f) {
				var i, j, k, l, m, n = "function" == typeof a && a,
					o = !f && g(a = n.selector || a);
				if (e = e || [], 1 === o.length) {
					if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
						if (b = (d.find.ID(k.matches[0].replace(ba, ca), b) || [])[0], !b) return e;
						n && (b = b.parentNode), a = a.slice(j.shift().value.length)
					}
					i = W.needsContext.test(a) ? 0 : j.length;
					while (i--) {
						if (k = j[i], d.relative[l = k.type]) break;
						if ((m = d.find[l]) && (f = m(k.matches[0].replace(ba, ca), _.test(j[0].type) && oa(b.parentNode) || b))) {
							if (j.splice(i, 1), a = f.length && qa(j), !a) return H.apply(e, f), e;
							break
						}
					}
				}
				return (n || h(a, o))(f, b, !p, e, !b || _.test(a) && oa(b.parentNode) || b), e
			}, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !! l, m(), c.sortDetached = ia(function(a) {
				return 1 & a.compareDocumentPosition(n.createElement("div"))
			}), ia(function(a) {
				return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
			}) || ja("type|href|height|width", function(a, b, c) {
				return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
			}), c.attributes && ia(function(a) {
				return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
			}) || ja("value", function(a, b, c) {
				return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
			}), ia(function(a) {
				return null == a.getAttribute("disabled")
			}) || ja(K, function(a, b, c) {
				var d;
				return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
			}), fa
		}(a);
	n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.uniqueSort = n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;
	var u = function(a, b, c) {
			var d = [],
				e = void 0 !== c;
			while ((a = a[b]) && 9 !== a.nodeType) if (1 === a.nodeType) {
				if (e && n(a).is(c)) break;
				d.push(a)
			}
			return d
		},
		v = function(a, b) {
			for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
			return c
		},
		w = n.expr.match.needsContext,
		x = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
		y = /^.[^:#\[\.,]*$/;

	function z(a, b, c) {
		if (n.isFunction(b)) return n.grep(a, function(a, d) {
			return !!b.call(a, d, a) !== c
		});
		if (b.nodeType) return n.grep(a, function(a) {
			return a === b !== c
		});
		if ("string" == typeof b) {
			if (y.test(b)) return n.filter(b, a, c);
			b = n.filter(b, a)
		}
		return n.grep(a, function(a) {
			return n.inArray(a, b) > -1 !== c
		})
	}
	n.filter = function(a, b, c) {
		var d = b[0];
		return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function(a) {
			return 1 === a.nodeType
		}))
	}, n.fn.extend({
		find: function(a) {
			var b, c = [],
				d = this,
				e = d.length;
			if ("string" != typeof a) return this.pushStack(n(a).filter(function() {
				for (b = 0; e > b; b++) if (n.contains(d[b], this)) return !0
			}));
			for (b = 0; e > b; b++) n.find(a, d[b], c);
			return c = this.pushStack(e > 1 ? n.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c
		},
		filter: function(a) {
			return this.pushStack(z(this, a || [], !1))
		},
		not: function(a) {
			return this.pushStack(z(this, a || [], !0))
		},
		is: function(a) {
			return !!z(this, "string" == typeof a && w.test(a) ? n(a) : a || [], !1).length
		}
	});
	var A, B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
		C = n.fn.init = function(a, b, c) {
			var e, f;
			if (!a) return this;
			if (c = c || A, "string" == typeof a) {
				if (e = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : B.exec(a), !e || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
				if (e[1]) {
					if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), x.test(e[1]) && n.isPlainObject(b)) for (e in b) n.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
					return this
				}
				if (f = d.getElementById(e[2]), f && f.parentNode) {
					if (f.id !== e[2]) return A.find(a);
					this.length = 1, this[0] = f
				}
				return this.context = d, this.selector = a, this
			}
			return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? "undefined" != typeof c.ready ? c.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this))
		};
	C.prototype = n.fn, A = n(d);
	var D = /^(?:parents|prev(?:Until|All))/,
		E = {
			children: !0,
			contents: !0,
			next: !0,
			prev: !0
		};
	n.fn.extend({
		has: function(a) {
			var b, c = n(a, this),
				d = c.length;
			return this.filter(function() {
				for (b = 0; d > b; b++) if (n.contains(this, c[b])) return !0
			})
		},
		closest: function(a, b) {
			for (var c, d = 0, e = this.length, f = [], g = w.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++) for (c = this[d]; c && c !== b; c = c.parentNode) if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
				f.push(c);
				break
			}
			return this.pushStack(f.length > 1 ? n.uniqueSort(f) : f)
		},
		index: function(a) {
			return a ? "string" == typeof a ? n.inArray(this[0], n(a)) : n.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
		},
		add: function(a, b) {
			return this.pushStack(n.uniqueSort(n.merge(this.get(), n(a, b))))
		},
		addBack: function(a) {
			return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
		}
	});

	function F(a, b) {
		do a = a[b];
		while (a && 1 !== a.nodeType);
		return a
	}
	n.each({
		parent: function(a) {
			var b = a.parentNode;
			return b && 11 !== b.nodeType ? b : null
		},
		parents: function(a) {
			return u(a, "parentNode")
		},
		parentsUntil: function(a, b, c) {
			return u(a, "parentNode", c)
		},
		next: function(a) {
			return F(a, "nextSibling")
		},
		prev: function(a) {
			return F(a, "previousSibling")
		},
		nextAll: function(a) {
			return u(a, "nextSibling")
		},
		prevAll: function(a) {
			return u(a, "previousSibling")
		},
		nextUntil: function(a, b, c) {
			return u(a, "nextSibling", c)
		},
		prevUntil: function(a, b, c) {
			return u(a, "previousSibling", c)
		},
		siblings: function(a) {
			return v((a.parentNode || {}).firstChild, a)
		},
		children: function(a) {
			return v(a.firstChild)
		},
		contents: function(a) {
			return n.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : n.merge([], a.childNodes)
		}
	}, function(a, b) {
		n.fn[a] = function(c, d) {
			var e = n.map(this, b, c);
			return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (E[a] || (e = n.uniqueSort(e)), D.test(a) && (e = e.reverse())), this.pushStack(e)
		}
	});
	var G = /\S+/g;

	function H(a) {
		var b = {};
		return n.each(a.match(G) || [], function(a, c) {
			b[c] = !0
		}), b
	}
	n.Callbacks = function(a) {
		a = "string" == typeof a ? H(a) : n.extend({}, a);
		var b, c, d, e, f = [],
			g = [],
			h = -1,
			i = function() {
				for (e = a.once, d = b = !0; g.length; h = -1) {
					c = g.shift();
					while (++h < f.length) f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1)
				}
				a.memory || (c = !1), b = !1, e && (f = c ? [] : "")
			},
			j = {
				add: function() {
					return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) {
						n.each(b, function(b, c) {
							n.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== n.type(c) && d(c)
						})
					}(arguments), c && !b && i()), this
				},
				remove: function() {
					return n.each(arguments, function(a, b) {
						var c;
						while ((c = n.inArray(b, f, c)) > -1) f.splice(c, 1), h >= c && h--
					}), this
				},
				has: function(a) {
					return a ? n.inArray(a, f) > -1 : f.length > 0
				},
				empty: function() {
					return f && (f = []), this
				},
				disable: function() {
					return e = g = [], f = c = "", this
				},
				disabled: function() {
					return !f
				},
				lock: function() {
					return e = !0, c || j.disable(), this
				},
				locked: function() {
					return !!e
				},
				fireWith: function(a, c) {
					return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this
				},
				fire: function() {
					return j.fireWith(this, arguments), this
				},
				fired: function() {
					return !!d
				}
			};
		return j
	}, n.extend({
		Deferred: function(a) {
			var b = [
				["resolve", "done", n.Callbacks("once memory"), "resolved"],
				["reject", "fail", n.Callbacks("once memory"), "rejected"],
				["notify", "progress", n.Callbacks("memory")]
			],
				c = "pending",
				d = {
					state: function() {
						return c
					},
					always: function() {
						return e.done(arguments).fail(arguments), this
					},
					then: function() {
						var a = arguments;
						return n.Deferred(function(c) {
							n.each(b, function(b, f) {
								var g = n.isFunction(a[b]) && a[b];
								e[f[1]](function() {
									var a = g && g.apply(this, arguments);
									a && n.isFunction(a.promise) ? a.promise().progress(c.notify).done(c.resolve).fail(c.reject) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
								})
							}), a = null
						}).promise()
					},
					promise: function(a) {
						return null != a ? n.extend(a, d) : d
					}
				},
				e = {};
			return d.pipe = d.then, n.each(b, function(a, f) {
				var g = f[2],
					h = f[3];
				d[f[1]] = g.add, h && g.add(function() {
					c = h
				}, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
					return e[f[0] + "With"](this === e ? d : this, arguments), this
				}, e[f[0] + "With"] = g.fireWith
			}), d.promise(e), a && a.call(e, e), e
		},
		when: function(a) {
			var b = 0,
				c = e.call(arguments),
				d = c.length,
				f = 1 !== d || a && n.isFunction(a.promise) ? d : 0,
				g = 1 === f ? a : n.Deferred(),
				h = function(a, b, c) {
					return function(d) {
						b[a] = this, c[a] = arguments.length > 1 ? e.call(arguments) : d, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
					}
				},
				i, j, k;
			if (d > 1) for (i = new Array(d), j = new Array(d), k = new Array(d); d > b; b++) c[b] && n.isFunction(c[b].promise) ? c[b].promise().progress(h(b, j, i)).done(h(b, k, c)).fail(g.reject) : --f;
			return f || g.resolveWith(k, c), g.promise()
		}
	});
	var I;
	n.fn.ready = function(a) {
		return n.ready.promise().done(a), this
	}, n.extend({
		isReady: !1,
		readyWait: 1,
		holdReady: function(a) {
			a ? n.readyWait++ : n.ready(!0)
		},
		ready: function(a) {
			(a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (I.resolveWith(d, [n]), n.fn.triggerHandler && (n(d).triggerHandler("ready"), n(d).off("ready"))))
		}
	});

	function J() {
		d.addEventListener ? (d.removeEventListener("DOMContentLoaded", K), a.removeEventListener("load", K)) : (d.detachEvent("onreadystatechange", K), a.detachEvent("onload", K))
	}
	function K() {
		(d.addEventListener || "load" === a.event.type || "complete" === d.readyState) && (J(), n.ready())
	}
	n.ready.promise = function(b) {
		if (!I) if (I = n.Deferred(), "complete" === d.readyState) a.setTimeout(n.ready);
		else if (d.addEventListener) d.addEventListener("DOMContentLoaded", K), a.addEventListener("load", K);
		else {
			d.attachEvent("onreadystatechange", K), a.attachEvent("onload", K);
			var c = !1;
			try {
				c = null == a.frameElement && d.documentElement
			} catch (e) {}
			c && c.doScroll && !
			function f() {
				if (!n.isReady) {
					try {
						c.doScroll("left")
					} catch (b) {
						return a.setTimeout(f, 50)
					}
					J(), n.ready()
				}
			}()
		}
		return I.promise(b)
	}, n.ready.promise();
	var L;
	for (L in n(l)) break;
	l.ownFirst = "0" === L, l.inlineBlockNeedsLayout = !1, n(function() {
		var a, b, c, e;
		c = d.getElementsByTagName("body")[0], c && c.style && (b = d.createElement("div"), e = d.createElement("div"), e.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(e).appendChild(b), "undefined" != typeof b.style.zoom && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", l.inlineBlockNeedsLayout = a = 3 === b.offsetWidth, a && (c.style.zoom = 1)), c.removeChild(e))
	}), function() {
		var a = d.createElement("div");
		l.deleteExpando = !0;
		try {
			delete a.test
		} catch (b) {
			l.deleteExpando = !1
		}
		a = null
	}();
	var M = function(a) {
			var b = n.noData[(a.nodeName + " ").toLowerCase()],
				c = +a.nodeType || 1;
			return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b
		},
		N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		O = /([A-Z])/g;

	function P(a, b, c) {
		if (void 0 === c && 1 === a.nodeType) {
			var d = "data-" + b.replace(O, "-$1").toLowerCase();
			if (c = a.getAttribute(d), "string" == typeof c) {
				try {
					c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : N.test(c) ? n.parseJSON(c) : c
				} catch (e) {}
				n.data(a, b, c)
			} else c = void 0
		}
		return c
	}
	function Q(a) {
		var b;
		for (b in a) if (("data" !== b || !n.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
		return !0
	}
	function R(a, b, d, e) {
		if (M(a)) {
			var f, g, h = n.expando,
				i = a.nodeType,
				j = i ? n.cache : a,
				k = i ? a[h] : a[h] && h;
			if (k && j[k] && (e || j[k].data) || void 0 !== d || "string" != typeof b) return k || (k = i ? a[h] = c.pop() || n.guid++ : h), j[k] || (j[k] = i ? {} : {
				toJSON: n.noop
			}), ("object" == typeof b || "function" == typeof b) && (e ? j[k] = n.extend(j[k], b) : j[k].data = n.extend(j[k].data, b)), g = j[k], e || (g.data || (g.data = {}), g = g.data), void 0 !== d && (g[n.camelCase(b)] = d), "string" == typeof b ? (f = g[b], null == f && (f = g[n.camelCase(b)])) : f = g, f
		}
	}
	function S(a, b, c) {
		if (M(a)) {
			var d, e, f = a.nodeType,
				g = f ? n.cache : a,
				h = f ? a[n.expando] : n.expando;
			if (g[h]) {
				if (b && (d = c ? g[h] : g[h].data)) {
					n.isArray(b) ? b = b.concat(n.map(b, n.camelCase)) : b in d ? b = [b] : (b = n.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length;
					while (e--) delete d[b[e]];
					if (c ? !Q(d) : !n.isEmptyObject(d)) return
				}(c || (delete g[h].data, Q(g[h]))) && (f ? n.cleanData([a], !0) : l.deleteExpando || g != g.window ? delete g[h] : g[h] = void 0)
			}
		}
	}
	n.extend({
		cache: {},
		noData: {
			"applet ": !0,
			"embed ": !0,
			"object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
		},
		hasData: function(a) {
			return a = a.nodeType ? n.cache[a[n.expando]] : a[n.expando], !! a && !Q(a)
		},
		data: function(a, b, c) {
			return R(a, b, c)
		},
		removeData: function(a, b) {
			return S(a, b)
		},
		_data: function(a, b, c) {
			return R(a, b, c, !0)
		},
		_removeData: function(a, b) {
			return S(a, b, !0)
		}
	}), n.fn.extend({
		data: function(a, b) {
			var c, d, e, f = this[0],
				g = f && f.attributes;
			if (void 0 === a) {
				if (this.length && (e = n.data(f), 1 === f.nodeType && !n._data(f, "parsedAttrs"))) {
					c = g.length;
					while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), P(f, d, e[d])));
					n._data(f, "parsedAttrs", !0)
				}
				return e
			}
			return "object" == typeof a ? this.each(function() {
				n.data(this, a)
			}) : arguments.length > 1 ? this.each(function() {
				n.data(this, a, b)
			}) : f ? P(f, a, n.data(f, a)) : void 0
		},
		removeData: function(a) {
			return this.each(function() {
				n.removeData(this, a)
			})
		}
	}), n.extend({
		queue: function(a, b, c) {
			var d;
			return a ? (b = (b || "fx") + "queue", d = n._data(a, b), c && (!d || n.isArray(c) ? d = n._data(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0
		},
		dequeue: function(a, b) {
			b = b || "fx";
			var c = n.queue(a, b),
				d = c.length,
				e = c.shift(),
				f = n._queueHooks(a, b),
				g = function() {
					n.dequeue(a, b)
				};
			"inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
		},
		_queueHooks: function(a, b) {
			var c = b + "queueHooks";
			return n._data(a, c) || n._data(a, c, {
				empty: n.Callbacks("once memory").add(function() {
					n._removeData(a, b + "queue"), n._removeData(a, c)
				})
			})
		}
	}), n.fn.extend({
		queue: function(a, b) {
			var c = 2;
			return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function() {
				var c = n.queue(this, a, b);
				n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a)
			})
		},
		dequeue: function(a) {
			return this.each(function() {
				n.dequeue(this, a)
			})
		},
		clearQueue: function(a) {
			return this.queue(a || "fx", [])
		},
		promise: function(a, b) {
			var c, d = 1,
				e = n.Deferred(),
				f = this,
				g = this.length,
				h = function() {
					--d || e.resolveWith(f, [f])
				};
			"string" != typeof a && (b = a, a = void 0), a = a || "fx";
			while (g--) c = n._data(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
			return h(), e.promise(b)
		}
	}), function() {
		var a;
		l.shrinkWrapBlocks = function() {
			if (null != a) return a;
			a = !1;
			var b, c, e;
			return c = d.getElementsByTagName("body")[0], c && c.style ? (b = d.createElement("div"), e = d.createElement("div"), e.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(e).appendChild(b), "undefined" != typeof b.style.zoom && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", b.appendChild(d.createElement("div")).style.width = "5px", a = 3 !== b.offsetWidth), c.removeChild(e), a) : void 0
		}
	}();
	var T = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
		U = new RegExp("^(?:([+-])=|)(" + T + ")([a-z%]*)$", "i"),
		V = ["Top", "Right", "Bottom", "Left"],
		W = function(a, b) {
			return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a)
		};

	function X(a, b, c, d) {
		var e, f = 1,
			g = 20,
			h = d ?
		function() {
			return d.cur()
		} : function() {
			return n.css(a, b, "")
		}, i = h(), j = c && c[3] || (n.cssNumber[b] ? "" : "px"), k = (n.cssNumber[b] || "px" !== j && +i) && U.exec(n.css(a, b));
		if (k && k[3] !== j) {
			j = j || k[3], c = c || [], k = +i || 1;
			do f = f || ".5", k /= f, n.style(a, b, k + j);
			while (f !== (f = h() / i) && 1 !== f && --g)
		}
		return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e
	}
	var Y = function(a, b, c, d, e, f, g) {
			var h = 0,
				i = a.length,
				j = null == c;
			if ("object" === n.type(c)) {
				e = !0;
				for (h in c) Y(a, b, h, c[h], !0, f, g)
			} else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
				return j.call(n(a), c)
			})), b)) for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
			return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
		},
		Z = /^(?:checkbox|radio)$/i,
		$ = /<([\w:-]+)/,
		_ = /^$|\/(?:java|ecma)script/i,
		aa = /^\s+/,
		ba = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";

	function ca(a) {
		var b = ba.split("|"),
			c = a.createDocumentFragment();
		if (c.createElement) while (b.length) c.createElement(b.pop());
		return c
	}!
	function() {
		var a = d.createElement("div"),
			b = d.createDocumentFragment(),
			c = d.createElement("input");
		a.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", l.leadingWhitespace = 3 === a.firstChild.nodeType, l.tbody = !a.getElementsByTagName("tbody").length, l.htmlSerialize = !! a.getElementsByTagName("link").length, l.html5Clone = "<:nav></:nav>" !== d.createElement("nav").cloneNode(!0).outerHTML, c.type = "checkbox", c.checked = !0, b.appendChild(c), l.appendChecked = c.checked, a.innerHTML = "<textarea>x</textarea>", l.noCloneChecked = !! a.cloneNode(!0).lastChild.defaultValue, b.appendChild(a), c = d.createElement("input"), c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), a.appendChild(c), l.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, l.noCloneEvent = !! a.addEventListener, a[n.expando] = 1, l.attributes = !a.getAttribute(n.expando)
	}();
	var da = {
		option: [1, "<select multiple='multiple'>", "</select>"],
		legend: [1, "<fieldset>", "</fieldset>"],
		area: [1, "<map>", "</map>"],
		param: [1, "<object>", "</object>"],
		thead: [1, "<table>", "</table>"],
		tr: [2, "<table><tbody>", "</tbody></table>"],
		col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
		td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
		_default: l.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
	};
	da.optgroup = da.option, da.tbody = da.tfoot = da.colgroup = da.caption = da.thead, da.th = da.td;

	function ea(a, b) {
		var c, d, e = 0,
			f = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : void 0;
		if (!f) for (f = [], c = a.childNodes || a; null != (d = c[e]); e++)!b || n.nodeName(d, b) ? f.push(d) : n.merge(f, ea(d, b));
		return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], f) : f
	}
	function fa(a, b) {
		for (var c, d = 0; null != (c = a[d]); d++) n._data(c, "globalEval", !b || n._data(b[d], "globalEval"))
	}
	var ga = /<|&#?\w+;/,
		ha = /<tbody/i;

	function ia(a) {
		Z.test(a.type) && (a.defaultChecked = a.checked)
	}
	function ja(a, b, c, d, e) {
		for (var f, g, h, i, j, k, m, o = a.length, p = ca(b), q = [], r = 0; o > r; r++) if (g = a[r], g || 0 === g) if ("object" === n.type(g)) n.merge(q, g.nodeType ? [g] : g);
		else if (ga.test(g)) {
			i = i || p.appendChild(b.createElement("div")), j = ($.exec(g) || ["", ""])[1].toLowerCase(), m = da[j] || da._default, i.innerHTML = m[1] + n.htmlPrefilter(g) + m[2], f = m[0];
			while (f--) i = i.lastChild;
			if (!l.leadingWhitespace && aa.test(g) && q.push(b.createTextNode(aa.exec(g)[0])), !l.tbody) {
				g = "table" !== j || ha.test(g) ? "<table>" !== m[1] || ha.test(g) ? 0 : i : i.firstChild, f = g && g.childNodes.length;
				while (f--) n.nodeName(k = g.childNodes[f], "tbody") && !k.childNodes.length && g.removeChild(k)
			}
			n.merge(q, i.childNodes), i.textContent = "";
			while (i.firstChild) i.removeChild(i.firstChild);
			i = p.lastChild
		} else q.push(b.createTextNode(g));
		i && p.removeChild(i), l.appendChecked || n.grep(ea(q, "input"), ia), r = 0;
		while (g = q[r++]) if (d && n.inArray(g, d) > -1) e && e.push(g);
		else if (h = n.contains(g.ownerDocument, g), i = ea(p.appendChild(g), "script"), h && fa(i), c) {
			f = 0;
			while (g = i[f++]) _.test(g.type || "") && c.push(g)
		}
		return i = null, p
	}!
	function() {
		var b, c, e = d.createElement("div");
		for (b in {
			submit: !0,
			change: !0,
			focusin: !0
		}) c = "on" + b, (l[b] = c in a) || (e.setAttribute(c, "t"), l[b] = e.attributes[c].expando === !1);
		e = null
	}();
	var ka = /^(?:input|select|textarea)$/i,
		la = /^key/,
		ma = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		na = /^(?:focusinfocus|focusoutblur)$/,
		oa = /^([^.]*)(?:\.(.+)|)/;

	function pa() {
		return !0
	}
	function qa() {
		return !1
	}
	function ra() {
		try {
			return d.activeElement
		} catch (a) {}
	}
	function sa(a, b, c, d, e, f) {
		var g, h;
		if ("object" == typeof b) {
			"string" != typeof c && (d = d || c, c = void 0);
			for (h in b) sa(a, h, c, d, b[h], f);
			return a
		}
		if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = qa;
		else if (!e) return a;
		return 1 === f && (g = e, e = function(a) {
			return n().off(a), g.apply(this, arguments)
		}, e.guid = g.guid || (g.guid = n.guid++)), a.each(function() {
			n.event.add(this, b, e, d, c)
		})
	}
	n.event = {
		global: {},
		add: function(a, b, c, d, e) {
			var f, g, h, i, j, k, l, m, o, p, q, r = n._data(a);
			if (r) {
				c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = n.guid++), (g = r.events) || (g = r.events = {}), (k = r.handle) || (k = r.handle = function(a) {
					return "undefined" == typeof n || a && n.event.triggered === a.type ? void 0 : n.event.dispatch.apply(k.elem, arguments)
				}, k.elem = a), b = (b || "").match(G) || [""], h = b.length;
				while (h--) f = oa.exec(b[h]) || [], o = q = f[1], p = (f[2] || "").split(".").sort(), o && (j = n.event.special[o] || {}, o = (e ? j.delegateType : j.bindType) || o, j = n.event.special[o] || {}, l = n.extend({
					type: o,
					origType: q,
					data: d,
					handler: c,
					guid: c.guid,
					selector: e,
					needsContext: e && n.expr.match.needsContext.test(e),
					namespace: p.join(".")
				}, i), (m = g[o]) || (m = g[o] = [], m.delegateCount = 0, j.setup && j.setup.call(a, d, p, k) !== !1 || (a.addEventListener ? a.addEventListener(o, k, !1) : a.attachEvent && a.attachEvent("on" + o, k))), j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, l) : m.push(l), n.event.global[o] = !0);
				a = null
			}
		},
		remove: function(a, b, c, d, e) {
			var f, g, h, i, j, k, l, m, o, p, q, r = n.hasData(a) && n._data(a);
			if (r && (k = r.events)) {
				b = (b || "").match(G) || [""], j = b.length;
				while (j--) if (h = oa.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
					l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = k[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = m.length;
					while (f--) g = m[f], !e && q !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (m.splice(f, 1), g.selector && m.delegateCount--, l.remove && l.remove.call(a, g));
					i && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete k[o])
				} else for (o in k) n.event.remove(a, o + b[j], c, d, !0);
				n.isEmptyObject(k) && (delete r.handle, n._removeData(a, "events"))
			}
		},
		trigger: function(b, c, e, f) {
			var g, h, i, j, l, m, o, p = [e || d],
				q = k.call(b, "type") ? b.type : b,
				r = k.call(b, "namespace") ? b.namespace.split(".") : [];
			if (i = m = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !na.test(q + n.event.triggered) && (q.indexOf(".") > -1 && (r = q.split("."), q = r.shift(), r.sort()), h = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b), b.isTrigger = f ? 2 : 3, b.namespace = r.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : n.makeArray(c, [b]), l = n.event.special[q] || {}, f || !l.trigger || l.trigger.apply(e, c) !== !1)) {
				if (!f && !l.noBubble && !n.isWindow(e)) {
					for (j = l.delegateType || q, na.test(j + q) || (i = i.parentNode); i; i = i.parentNode) p.push(i), m = i;
					m === (e.ownerDocument || d) && p.push(m.defaultView || m.parentWindow || a)
				}
				o = 0;
				while ((i = p[o++]) && !b.isPropagationStopped()) b.type = o > 1 ? j : l.bindType || q, g = (n._data(i, "events") || {})[b.type] && n._data(i, "handle"), g && g.apply(i, c), g = h && i[h], g && g.apply && M(i) && (b.result = g.apply(i, c), b.result === !1 && b.preventDefault());
				if (b.type = q, !f && !b.isDefaultPrevented() && (!l._default || l._default.apply(p.pop(), c) === !1) && M(e) && h && e[q] && !n.isWindow(e)) {
					m = e[h], m && (e[h] = null), n.event.triggered = q;
					try {
						e[q]()
					} catch (s) {}
					n.event.triggered = void 0, m && (e[h] = m)
				}
				return b.result
			}
		},
		dispatch: function(a) {
			a = n.event.fix(a);
			var b, c, d, f, g, h = [],
				i = e.call(arguments),
				j = (n._data(this, "events") || {})[a.type] || [],
				k = n.event.special[a.type] || {};
			if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
				h = n.event.handlers.call(this, a, j), b = 0;
				while ((f = h[b++]) && !a.isPropagationStopped()) {
					a.currentTarget = f.elem, c = 0;
					while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped())(!a.rnamespace || a.rnamespace.test(g.namespace)) && (a.handleObj = g, a.data = g.data, d = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== d && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()))
				}
				return k.postDispatch && k.postDispatch.call(this, a), a.result
			}
		},
		handlers: function(a, b) {
			var c, d, e, f, g = [],
				h = b.delegateCount,
				i = a.target;
			if (h && i.nodeType && ("click" !== a.type || isNaN(a.button) || a.button < 1)) for (; i != this; i = i.parentNode || this) if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
				for (d = [], c = 0; h > c; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) > -1 : n.find(e, this, null, [i]).length), d[e] && d.push(f);
				d.length && g.push({
					elem: i,
					handlers: d
				})
			}
			return h < b.length && g.push({
				elem: this,
				handlers: b.slice(h)
			}), g
		},
		fix: function(a) {
			if (a[n.expando]) return a;
			var b, c, e, f = a.type,
				g = a,
				h = this.fixHooks[f];
			h || (this.fixHooks[f] = h = ma.test(f) ? this.mouseHooks : la.test(f) ? this.keyHooks : {}), e = h.props ? this.props.concat(h.props) : this.props, a = new n.Event(g), b = e.length;
			while (b--) c = e[b], a[c] = g[c];
			return a.target || (a.target = g.srcElement || d), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !! a.metaKey, h.filter ? h.filter(a, g) : a
		},
		props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
		fixHooks: {},
		keyHooks: {
			props: "char charCode key keyCode".split(" "),
			filter: function(a, b) {
				return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
			}
		},
		mouseHooks: {
			props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
			filter: function(a, b) {
				var c, e, f, g = b.button,
					h = b.fromElement;
				return null == a.pageX && null != b.clientX && (e = a.target.ownerDocument || d, f = e.documentElement, c = e.body, a.pageX = b.clientX + (f && f.scrollLeft || c && c.scrollLeft || 0) - (f && f.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (f && f.scrollTop || c && c.scrollTop || 0) - (f && f.clientTop || c && c.clientTop || 0)), !a.relatedTarget && h && (a.relatedTarget = h === a.target ? b.toElement : h), a.which || void 0 === g || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0), a
			}
		},
		special: {
			load: {
				noBubble: !0
			},
			focus: {
				trigger: function() {
					if (this !== ra() && this.focus) try {
						return this.focus(), !1
					} catch (a) {}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					return this === ra() && this.blur ? (this.blur(), !1) : void 0
				},
				delegateType: "focusout"
			},
			click: {
				trigger: function() {
					return n.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
				},
				_default: function(a) {
					return n.nodeName(a.target, "a")
				}
			},
			beforeunload: {
				postDispatch: function(a) {
					void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
				}
			}
		},
		simulate: function(a, b, c) {
			var d = n.extend(new n.Event, c, {
				type: a,
				isSimulated: !0
			});
			n.event.trigger(d, null, b), d.isDefaultPrevented() && c.preventDefault()
		}
	}, n.removeEvent = d.removeEventListener ?
	function(a, b, c) {
		a.removeEventListener && a.removeEventListener(b, c)
	} : function(a, b, c) {
		var d = "on" + b;
		a.detachEvent && ("undefined" == typeof a[d] && (a[d] = null), a.detachEvent(d, c))
	}, n.Event = function(a, b) {
		return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? pa : qa) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void(this[n.expando] = !0)) : new n.Event(a, b)
	}, n.Event.prototype = {
		constructor: n.Event,
		isDefaultPrevented: qa,
		isPropagationStopped: qa,
		isImmediatePropagationStopped: qa,
		preventDefault: function() {
			var a = this.originalEvent;
			this.isDefaultPrevented = pa, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
		},
		stopPropagation: function() {
			var a = this.originalEvent;
			this.isPropagationStopped = pa, a && !this.isSimulated && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
		},
		stopImmediatePropagation: function() {
			var a = this.originalEvent;
			this.isImmediatePropagationStopped = pa, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
		}
	}, n.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function(a, b) {
		n.event.special[a] = {
			delegateType: b,
			bindType: b,
			handle: function(a) {
				var c, d = this,
					e = a.relatedTarget,
					f = a.handleObj;
				return (!e || e !== d && !n.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
			}
		}
	}), l.submit || (n.event.special.submit = {
		setup: function() {
			return n.nodeName(this, "form") ? !1 : void n.event.add(this, "click._submit keypress._submit", function(a) {
				var b = a.target,
					c = n.nodeName(b, "input") || n.nodeName(b, "button") ? n.prop(b, "form") : void 0;
				c && !n._data(c, "submit") && (n.event.add(c, "submit._submit", function(a) {
					a._submitBubble = !0
				}), n._data(c, "submit", !0))
			})
		},
		postDispatch: function(a) {
			a._submitBubble && (delete a._submitBubble, this.parentNode && !a.isTrigger && n.event.simulate("submit", this.parentNode, a))
		},
		teardown: function() {
			return n.nodeName(this, "form") ? !1 : void n.event.remove(this, "._submit")
		}
	}), l.change || (n.event.special.change = {
		setup: function() {
			return ka.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (n.event.add(this, "propertychange._change", function(a) {
				"checked" === a.originalEvent.propertyName && (this._justChanged = !0)
			}), n.event.add(this, "click._change", function(a) {
				this._justChanged && !a.isTrigger && (this._justChanged = !1), n.event.simulate("change", this, a)
			})), !1) : void n.event.add(this, "beforeactivate._change", function(a) {
				var b = a.target;
				ka.test(b.nodeName) && !n._data(b, "change") && (n.event.add(b, "change._change", function(a) {
					!this.parentNode || a.isSimulated || a.isTrigger || n.event.simulate("change", this.parentNode, a)
				}), n._data(b, "change", !0))
			})
		},
		handle: function(a) {
			var b = a.target;
			return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0
		},
		teardown: function() {
			return n.event.remove(this, "._change"), !ka.test(this.nodeName)
		}
	}), l.focusin || n.each({
		focus: "focusin",
		blur: "focusout"
	}, function(a, b) {
		var c = function(a) {
				n.event.simulate(b, a.target, n.event.fix(a))
			};
		n.event.special[b] = {
			setup: function() {
				var d = this.ownerDocument || this,
					e = n._data(d, b);
				e || d.addEventListener(a, c, !0), n._data(d, b, (e || 0) + 1)
			},
			teardown: function() {
				var d = this.ownerDocument || this,
					e = n._data(d, b) - 1;
				e ? n._data(d, b, e) : (d.removeEventListener(a, c, !0), n._removeData(d, b))
			}
		}
	}), n.fn.extend({
		on: function(a, b, c, d) {
			return sa(this, a, b, c, d)
		},
		one: function(a, b, c, d) {
			return sa(this, a, b, c, d, 1)
		},
		off: function(a, b, c) {
			var d, e;
			if (a && a.preventDefault && a.handleObj) return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
			if ("object" == typeof a) {
				for (e in a) this.off(e, b, a[e]);
				return this
			}
			return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = qa), this.each(function() {
				n.event.remove(this, a, c, b)
			})
		},
		trigger: function(a, b) {
			return this.each(function() {
				n.event.trigger(a, b, this)
			})
		},
		triggerHandler: function(a, b) {
			var c = this[0];
			return c ? n.event.trigger(a, b, c, !0) : void 0
		}
	});
	var ta = / jQuery\d+="(?:null|\d+)"/g,
		ua = new RegExp("<(?:" + ba + ")[\\s/>]", "i"),
		va = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
		wa = /<script|<style|<link/i,
		xa = /checked\s*(?:[^=]|=\s*.checked.)/i,
		ya = /^true\/(.*)/,
		za = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
		Aa = ca(d),
		Ba = Aa.appendChild(d.createElement("div"));

	function Ca(a, b) {
		return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
	}
	function Da(a) {
		return a.type = (null !== n.find.attr(a, "type")) + "/" + a.type, a
	}
	function Ea(a) {
		var b = ya.exec(a.type);
		return b ? a.type = b[1] : a.removeAttribute("type"), a
	}
	function Fa(a, b) {
		if (1 === b.nodeType && n.hasData(a)) {
			var c, d, e, f = n._data(a),
				g = n._data(b, f),
				h = f.events;
			if (h) {
				delete g.handle, g.events = {};
				for (c in h) for (d = 0, e = h[c].length; e > d; d++) n.event.add(b, c, h[c][d])
			}
			g.data && (g.data = n.extend({}, g.data))
		}
	}
	function Ga(a, b) {
		var c, d, e;
		if (1 === b.nodeType) {
			if (c = b.nodeName.toLowerCase(), !l.noCloneEvent && b[n.expando]) {
				e = n._data(b);
				for (d in e.events) n.removeEvent(b, d, e.handle);
				b.removeAttribute(n.expando)
			}
			"script" === c && b.text !== a.text ? (Da(b).text = a.text, Ea(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), l.html5Clone && a.innerHTML && !n.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && Z.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
		}
	}
	function Ha(a, b, c, d) {
		b = f.apply([], b);
		var e, g, h, i, j, k, m = 0,
			o = a.length,
			p = o - 1,
			q = b[0],
			r = n.isFunction(q);
		if (r || o > 1 && "string" == typeof q && !l.checkClone && xa.test(q)) return a.each(function(e) {
			var f = a.eq(e);
			r && (b[0] = q.call(this, e, f.html())), Ha(f, b, c, d)
		});
		if (o && (k = ja(b, a[0].ownerDocument, !1, a, d), e = k.firstChild, 1 === k.childNodes.length && (k = e), e || d)) {
			for (i = n.map(ea(k, "script"), Da), h = i.length; o > m; m++) g = k, m !== p && (g = n.clone(g, !0, !0), h && n.merge(i, ea(g, "script"))), c.call(a[m], g, m);
			if (h) for (j = i[i.length - 1].ownerDocument, n.map(i, Ea), m = 0; h > m; m++) g = i[m], _.test(g.type || "") && !n._data(g, "globalEval") && n.contains(j, g) && (g.src ? n._evalUrl && n._evalUrl(g.src) : n.globalEval((g.text || g.textContent || g.innerHTML || "").replace(za, "")));
			k = e = null
		}
		return a
	}
	function Ia(a, b, c) {
		for (var d, e = b ? n.filter(b, a) : a, f = 0; null != (d = e[f]); f++) c || 1 !== d.nodeType || n.cleanData(ea(d)), d.parentNode && (c && n.contains(d.ownerDocument, d) && fa(ea(d, "script")), d.parentNode.removeChild(d));
		return a
	}
	n.extend({
		htmlPrefilter: function(a) {
			return a.replace(va, "<$1></$2>")
		},
		clone: function(a, b, c) {
			var d, e, f, g, h, i = n.contains(a.ownerDocument, a);
			if (l.html5Clone || n.isXMLDoc(a) || !ua.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (Ba.innerHTML = a.outerHTML, Ba.removeChild(f = Ba.firstChild)), !(l.noCloneEvent && l.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a))) for (d = ea(f), h = ea(a), g = 0; null != (e = h[g]); ++g) d[g] && Ga(e, d[g]);
			if (b) if (c) for (h = h || ea(a), d = d || ea(f), g = 0; null != (e = h[g]); g++) Fa(e, d[g]);
			else Fa(a, f);
			return d = ea(f, "script"), d.length > 0 && fa(d, !i && ea(a, "script")), d = h = e = null, f
		},
		cleanData: function(a, b) {
			for (var d, e, f, g, h = 0, i = n.expando, j = n.cache, k = l.attributes, m = n.event.special; null != (d = a[h]); h++) if ((b || M(d)) && (f = d[i], g = f && j[f])) {
				if (g.events) for (e in g.events) m[e] ? n.event.remove(d, e) : n.removeEvent(d, e, g.handle);
				j[f] && (delete j[f], k || "undefined" == typeof d.removeAttribute ? d[i] = void 0 : d.removeAttribute(i), c.push(f))
			}
		}
	}), n.fn.extend({
		domManip: Ha,
		detach: function(a) {
			return Ia(this, a, !0)
		},
		remove: function(a) {
			return Ia(this, a)
		},
		text: function(a) {
			return Y(this, function(a) {
				return void 0 === a ? n.text(this) : this.empty().append((this[0] && this[0].ownerDocument || d).createTextNode(a))
			}, null, a, arguments.length)
		},
		append: function() {
			return Ha(this, arguments, function(a) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var b = Ca(this, a);
					b.appendChild(a)
				}
			})
		},
		prepend: function() {
			return Ha(this, arguments, function(a) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var b = Ca(this, a);
					b.insertBefore(a, b.firstChild)
				}
			})
		},
		before: function() {
			return Ha(this, arguments, function(a) {
				this.parentNode && this.parentNode.insertBefore(a, this)
			})
		},
		after: function() {
			return Ha(this, arguments, function(a) {
				this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
			})
		},
		empty: function() {
			for (var a, b = 0; null != (a = this[b]); b++) {
				1 === a.nodeType && n.cleanData(ea(a, !1));
				while (a.firstChild) a.removeChild(a.firstChild);
				a.options && n.nodeName(a, "select") && (a.options.length = 0)
			}
			return this
		},
		clone: function(a, b) {
			return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
				return n.clone(this, a, b)
			})
		},
		html: function(a) {
			return Y(this, function(a) {
				var b = this[0] || {},
					c = 0,
					d = this.length;
				if (void 0 === a) return 1 === b.nodeType ? b.innerHTML.replace(ta, "") : void 0;
				if ("string" == typeof a && !wa.test(a) && (l.htmlSerialize || !ua.test(a)) && (l.leadingWhitespace || !aa.test(a)) && !da[($.exec(a) || ["", ""])[1].toLowerCase()]) {
					a = n.htmlPrefilter(a);
					try {
						for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (n.cleanData(ea(b, !1)), b.innerHTML = a);
						b = 0
					} catch (e) {}
				}
				b && this.empty().append(a)
			}, null, a, arguments.length)
		},
		replaceWith: function() {
			var a = [];
			return Ha(this, arguments, function(b) {
				var c = this.parentNode;
				n.inArray(this, a) < 0 && (n.cleanData(ea(this)), c && c.replaceChild(b, this))
			}, a)
		}
	}), n.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function(a, b) {
		n.fn[a] = function(a) {
			for (var c, d = 0, e = [], f = n(a), h = f.length - 1; h >= d; d++) c = d === h ? this : this.clone(!0), n(f[d])[b](c), g.apply(e, c.get());
			return this.pushStack(e)
		}
	});
	var Ja, Ka = {
		HTML: "block",
		BODY: "block"
	};

	function La(a, b) {
		var c = n(b.createElement(a)).appendTo(b.body),
			d = n.css(c[0], "display");
		return c.detach(), d
	}
	function Ma(a) {
		var b = d,
			c = Ka[a];
		return c || (c = La(a, b), "none" !== c && c || (Ja = (Ja || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = (Ja[0].contentWindow || Ja[0].contentDocument).document, b.write(), b.close(), c = La(a, b), Ja.detach()), Ka[a] = c), c
	}
	var Na = /^margin/,
		Oa = new RegExp("^(" + T + ")(?!px)[a-z%]+$", "i"),
		Pa = function(a, b, c, d) {
			var e, f, g = {};
			for (f in b) g[f] = a.style[f], a.style[f] = b[f];
			e = c.apply(a, d || []);
			for (f in b) a.style[f] = g[f];
			return e
		},
		Qa = d.documentElement;
	!
	function() {
		var b, c, e, f, g, h, i = d.createElement("div"),
			j = d.createElement("div");
		if (j.style) {
			j.style.cssText = "float:left;opacity:.5", l.opacity = "0.5" === j.style.opacity, l.cssFloat = !! j.style.cssFloat, j.style.backgroundClip = "content-box", j.cloneNode(!0).style.backgroundClip = "", l.clearCloneStyle = "content-box" === j.style.backgroundClip, i = d.createElement("div"), i.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", j.innerHTML = "", i.appendChild(j), l.boxSizing = "" === j.style.boxSizing || "" === j.style.MozBoxSizing || "" === j.style.WebkitBoxSizing, n.extend(l, {
				reliableHiddenOffsets: function() {
					return null == b && k(), f
				},
				boxSizingReliable: function() {
					return null == b && k(), e
				},
				pixelMarginRight: function() {
					return null == b && k(), c
				},
				pixelPosition: function() {
					return null == b && k(), b
				},
				reliableMarginRight: function() {
					return null == b && k(), g
				},
				reliableMarginLeft: function() {
					return null == b && k(), h
				}
			});

			function k() {
				var k, l, m = d.documentElement;
				m.appendChild(i), j.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", b = e = h = !1, c = g = !0, a.getComputedStyle && (l = a.getComputedStyle(j), b = "1%" !== (l || {}).top, h = "2px" === (l || {}).marginLeft, e = "4px" === (l || {
					width: "4px"
				}).width, j.style.marginRight = "50%", c = "4px" === (l || {
					marginRight: "4px"
				}).marginRight, k = j.appendChild(d.createElement("div")), k.style.cssText = j.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", k.style.marginRight = k.style.width = "0", j.style.width = "1px", g = !parseFloat((a.getComputedStyle(k) || {}).marginRight), j.removeChild(k)), j.style.display = "none", f = 0 === j.getClientRects().length, f && (j.style.display = "", j.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", k = j.getElementsByTagName("td"), k[0].style.cssText = "margin:0;border:0;padding:0;display:none", f = 0 === k[0].offsetHeight, f && (k[0].style.display = "", k[1].style.display = "none", f = 0 === k[0].offsetHeight)), m.removeChild(i)
			}
		}
	}();
	var Ra, Sa, Ta = /^(top|right|bottom|left)$/;
	a.getComputedStyle ? (Ra = function(b) {
		var c = b.ownerDocument.defaultView;
		return c.opener || (c = a), c.getComputedStyle(b)
	}, Sa = function(a, b, c) {
		var d, e, f, g, h = a.style;
		return c = c || Ra(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, c && ("" !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), !l.pixelMarginRight() && Oa.test(g) && Na.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 === g ? g : g + ""
	}) : Qa.currentStyle && (Ra = function(a) {
		return a.currentStyle
	}, Sa = function(a, b, c) {
		var d, e, f, g, h = a.style;
		return c = c || Ra(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), Oa.test(g) && !Ta.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), h.left = "fontSize" === b ? "1em" : g, g = h.pixelLeft + "px", h.left = d, f && (e.left = f)), void 0 === g ? g : g + "" || "auto"
	});

	function Ua(a, b) {
		return {
			get: function() {
				return a() ? void delete this.get : (this.get = b).apply(this, arguments)
			}
		}
	}
	var Va = /alpha\([^)]*\)/i,
		Wa = /opacity\s*=\s*([^)]*)/i,
		Xa = /^(none|table(?!-c[ea]).+)/,
		Ya = new RegExp("^(" + T + ")(.*)$", "i"),
		Za = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		},
		$a = {
			letterSpacing: "0",
			fontWeight: "400"
		},
		_a = ["Webkit", "O", "Moz", "ms"],
		ab = d.createElement("div").style;

	function bb(a) {
		if (a in ab) return a;
		var b = a.charAt(0).toUpperCase() + a.slice(1),
			c = _a.length;
		while (c--) if (a = _a[c] + b, a in ab) return a
	}
	function cb(a, b) {
		for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = n._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && W(d) && (f[g] = n._data(d, "olddisplay", Ma(d.nodeName)))) : (e = W(d), (c && "none" !== c || !e) && n._data(d, "olddisplay", e ? c : n.css(d, "display"))));
		for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
		return a
	}
	function db(a, b, c) {
		var d = Ya.exec(b);
		return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
	}
	function eb(a, b, c, d, e) {
		for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2)"margin" === c && (g += n.css(a, c + V[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + V[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + V[f] + "Width", !0, e))) : (g += n.css(a, "padding" + V[f], !0, e), "padding" !== c && (g += n.css(a, "border" + V[f] + "Width", !0, e)));
		return g
	}
	function fb(b, c, e) {
		var f = !0,
			g = "width" === c ? b.offsetWidth : b.offsetHeight,
			h = Ra(b),
			i = l.boxSizing && "border-box" === n.css(b, "boxSizing", !1, h);
		if (d.msFullscreenElement && a.top !== a && b.getClientRects().length && (g = Math.round(100 * b.getBoundingClientRect()[c])), 0 >= g || null == g) {
			if (g = Sa(b, c, h), (0 > g || null == g) && (g = b.style[c]), Oa.test(g)) return g;
			f = i && (l.boxSizingReliable() || g === b.style[c]), g = parseFloat(g) || 0
		}
		return g + eb(b, c, e || (i ? "border" : "content"), f, h) + "px"
	}
	n.extend({
		cssHooks: {
			opacity: {
				get: function(a, b) {
					if (b) {
						var c = Sa(a, "opacity");
						return "" === c ? "1" : c
					}
				}
			}
		},
		cssNumber: {
			animationIterationCount: !0,
			columnCount: !0,
			fillOpacity: !0,
			flexGrow: !0,
			flexShrink: !0,
			fontWeight: !0,
			lineHeight: !0,
			opacity: !0,
			order: !0,
			orphans: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0
		},
		cssProps: {
			"float": l.cssFloat ? "cssFloat" : "styleFloat"
		},
		style: function(a, b, c, d) {
			if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
				var e, f, g, h = n.camelCase(b),
					i = a.style;
				if (b = n.cssProps[h] || (n.cssProps[h] = bb(h) || h), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c) return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
				if (f = typeof c, "string" === f && (e = U.exec(c)) && e[1] && (c = X(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (n.cssNumber[h] ? "" : "px")), l.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), !(g && "set" in g && void 0 === (c = g.set(a, c, d))))) try {
					i[b] = c
				} catch (j) {}
			}
		},
		css: function(a, b, c, d) {
			var e, f, g, h = n.camelCase(b);
			return b = n.cssProps[h] || (n.cssProps[h] = bb(h) || h), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (f = g.get(a, !0, c)), void 0 === f && (f = Sa(a, b, d)), "normal" === f && b in $a && (f = $a[b]), "" === c || c ? (e = parseFloat(f), c === !0 || isFinite(e) ? e || 0 : f) : f
		}
	}), n.each(["height", "width"], function(a, b) {
		n.cssHooks[b] = {
			get: function(a, c, d) {
				return c ? Xa.test(n.css(a, "display")) && 0 === a.offsetWidth ? Pa(a, Za, function() {
					return fb(a, b, d)
				}) : fb(a, b, d) : void 0
			},
			set: function(a, c, d) {
				var e = d && Ra(a);
				return db(a, c, d ? eb(a, b, d, l.boxSizing && "border-box" === n.css(a, "boxSizing", !1, e), e) : 0)
			}
		}
	}), l.opacity || (n.cssHooks.opacity = {
		get: function(a, b) {
			return Wa.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
		},
		set: function(a, b) {
			var c = a.style,
				d = a.currentStyle,
				e = n.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
				f = d && d.filter || c.filter || "";
			c.zoom = 1, (b >= 1 || "" === b) && "" === n.trim(f.replace(Va, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = Va.test(f) ? f.replace(Va, e) : f + " " + e)
		}
	}), n.cssHooks.marginRight = Ua(l.reliableMarginRight, function(a, b) {
		return b ? Pa(a, {
			display: "inline-block"
		}, Sa, [a, "marginRight"]) : void 0
	}), n.cssHooks.marginLeft = Ua(l.reliableMarginLeft, function(a, b) {
		return b ? (parseFloat(Sa(a, "marginLeft")) || (n.contains(a.ownerDocument, a) ? a.getBoundingClientRect().left - Pa(a, {
			marginLeft: 0
		}, function() {
			return a.getBoundingClientRect().left
		}) : 0)) + "px" : void 0
	}), n.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function(a, b) {
		n.cssHooks[a + b] = {
			expand: function(c) {
				for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + V[d] + b] = f[d] || f[d - 2] || f[0];
				return e
			}
		}, Na.test(a) || (n.cssHooks[a + b].set = db)
	}), n.fn.extend({
		css: function(a, b) {
			return Y(this, function(a, b, c) {
				var d, e, f = {},
					g = 0;
				if (n.isArray(b)) {
					for (d = Ra(a), e = b.length; e > g; g++) f[b[g]] = n.css(a, b[g], !1, d);
					return f
				}
				return void 0 !== c ? n.style(a, b, c) : n.css(a, b)
			}, a, b, arguments.length > 1)
		},
		show: function() {
			return cb(this, !0)
		},
		hide: function() {
			return cb(this)
		},
		toggle: function(a) {
			return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
				W(this) ? n(this).show() : n(this).hide()
			})
		}
	});

	function gb(a, b, c, d, e) {
		return new gb.prototype.init(a, b, c, d, e)
	}
	n.Tween = gb, gb.prototype = {
		constructor: gb,
		init: function(a, b, c, d, e, f) {
			this.elem = a, this.prop = c, this.easing = e || n.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px")
		},
		cur: function() {
			var a = gb.propHooks[this.prop];
			return a && a.get ? a.get(this) : gb.propHooks._default.get(this)
		},
		run: function(a) {
			var b, c = gb.propHooks[this.prop];
			return this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : gb.propHooks._default.set(this), this
		}
	}, gb.prototype.init.prototype = gb.prototype, gb.propHooks = {
		_default: {
			get: function(a) {
				var b;
				return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0)
			},
			set: function(a) {
				n.fx.step[a.prop] ? n.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[n.cssProps[a.prop]] && !n.cssHooks[a.prop] ? a.elem[a.prop] = a.now : n.style(a.elem, a.prop, a.now + a.unit)
			}
		}
	}, gb.propHooks.scrollTop = gb.propHooks.scrollLeft = {
		set: function(a) {
			a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
		}
	}, n.easing = {
		linear: function(a) {
			return a
		},
		swing: function(a) {
			return .5 - Math.cos(a * Math.PI) / 2
		},
		_default: "swing"
	}, n.fx = gb.prototype.init, n.fx.step = {};
	var hb, ib, jb = /^(?:toggle|show|hide)$/,
		kb = /queueHooks$/;

	function lb() {
		return a.setTimeout(function() {
			hb = void 0
		}), hb = n.now()
	}
	function mb(a, b) {
		var c, d = {
			height: a
		},
			e = 0;
		for (b = b ? 1 : 0; 4 > e; e += 2 - b) c = V[e], d["margin" + c] = d["padding" + c] = a;
		return b && (d.opacity = d.width = a), d
	}
	function nb(a, b, c) {
		for (var d, e = (qb.tweeners[b] || []).concat(qb.tweeners["*"]), f = 0, g = e.length; g > f; f++) if (d = e[f].call(c, b, a)) return d
	}
	function ob(a, b, c) {
		var d, e, f, g, h, i, j, k, m = this,
			o = {},
			p = a.style,
			q = a.nodeType && W(a),
			r = n._data(a, "fxshow");
		c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() {
			h.unqueued || i()
		}), h.unqueued++, m.always(function() {
			m.always(function() {
				h.unqueued--, n.queue(a, "fx").length || h.empty.fire()
			})
		})), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [p.overflow, p.overflowX, p.overflowY], j = n.css(a, "display"), k = "none" === j ? n._data(a, "olddisplay") || Ma(a.nodeName) : j, "inline" === k && "none" === n.css(a, "float") && (l.inlineBlockNeedsLayout && "inline" !== Ma(a.nodeName) ? p.zoom = 1 : p.display = "inline-block")), c.overflow && (p.overflow = "hidden", l.shrinkWrapBlocks() || m.always(function() {
			p.overflow = c.overflow[0], p.overflowX = c.overflow[1], p.overflowY = c.overflow[2]
		}));
		for (d in b) if (e = b[d], jb.exec(e)) {
			if (delete b[d], f = f || "toggle" === e, e === (q ? "hide" : "show")) {
				if ("show" !== e || !r || void 0 === r[d]) continue;
				q = !0
			}
			o[d] = r && r[d] || n.style(a, d)
		} else j = void 0;
		if (n.isEmptyObject(o))"inline" === ("none" === j ? Ma(a.nodeName) : j) && (p.display = j);
		else {
			r ? "hidden" in r && (q = r.hidden) : r = n._data(a, "fxshow", {}), f && (r.hidden = !q), q ? n(a).show() : m.done(function() {
				n(a).hide()
			}), m.done(function() {
				var b;
				n._removeData(a, "fxshow");
				for (b in o) n.style(a, b, o[b])
			});
			for (d in o) g = nb(q ? r[d] : 0, d, m), d in r || (r[d] = g.start, q && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
		}
	}
	function pb(a, b) {
		var c, d, e, f, g;
		for (c in a) if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) {
			f = g.expand(f), delete a[d];
			for (c in f) c in a || (a[c] = f[c], b[c] = e)
		} else b[d] = e
	}
	function qb(a, b, c) {
		var d, e, f = 0,
			g = qb.prefilters.length,
			h = n.Deferred().always(function() {
				delete i.elem
			}),
			i = function() {
				if (e) return !1;
				for (var b = hb || lb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
				return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
			},
			j = h.promise({
				elem: a,
				props: n.extend({}, b),
				opts: n.extend(!0, {
					specialEasing: {},
					easing: n.easing._default
				}, c),
				originalProperties: b,
				originalOptions: c,
				startTime: hb || lb(),
				duration: c.duration,
				tweens: [],
				createTween: function(b, c) {
					var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
					return j.tweens.push(d), d
				},
				stop: function(b) {
					var c = 0,
						d = b ? j.tweens.length : 0;
					if (e) return this;
					for (e = !0; d > c; c++) j.tweens[c].run(1);
					return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this
				}
			}),
			k = j.props;
		for (pb(k, j.opts.specialEasing); g > f; f++) if (d = qb.prefilters[f].call(j, a, k, j.opts)) return n.isFunction(d.stop) && (n._queueHooks(j.elem, j.opts.queue).stop = n.proxy(d.stop, d)), d;
		return n.map(k, nb, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, {
			elem: a,
			anim: j,
			queue: j.opts.queue
		})), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
	}
	n.Animation = n.extend(qb, {
		tweeners: {
			"*": [function(a, b) {
				var c = this.createTween(a, b);
				return X(c.elem, a, U.exec(b), c), c
			}]
		},
		tweener: function(a, b) {
			n.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(G);
			for (var c, d = 0, e = a.length; e > d; d++) c = a[d], qb.tweeners[c] = qb.tweeners[c] || [], qb.tweeners[c].unshift(b)
		},
		prefilters: [ob],
		prefilter: function(a, b) {
			b ? qb.prefilters.unshift(a) : qb.prefilters.push(a)
		}
	}), n.speed = function(a, b, c) {
		var d = a && "object" == typeof a ? n.extend({}, a) : {
			complete: c || !c && b || n.isFunction(a) && a,
			duration: a,
			easing: c && b || b && !n.isFunction(b) && b
		};
		return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() {
			n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue)
		}, d
	}, n.fn.extend({
		fadeTo: function(a, b, c, d) {
			return this.filter(W).css("opacity", 0).show().end().animate({
				opacity: b
			}, a, c, d)
		},
		animate: function(a, b, c, d) {
			var e = n.isEmptyObject(a),
				f = n.speed(b, c, d),
				g = function() {
					var b = qb(this, n.extend({}, a), f);
					(e || n._data(this, "finish")) && b.stop(!0)
				};
			return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
		},
		stop: function(a, b, c) {
			var d = function(a) {
					var b = a.stop;
					delete a.stop, b(c)
				};
			return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() {
				var b = !0,
					e = null != a && a + "queueHooks",
					f = n.timers,
					g = n._data(this);
				if (e) g[e] && g[e].stop && d(g[e]);
				else for (e in g) g[e] && g[e].stop && kb.test(e) && d(g[e]);
				for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
				(b || !c) && n.dequeue(this, a)
			})
		},
		finish: function(a) {
			return a !== !1 && (a = a || "fx"), this.each(function() {
				var b, c = n._data(this),
					d = c[a + "queue"],
					e = c[a + "queueHooks"],
					f = n.timers,
					g = d ? d.length : 0;
				for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
				for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
				delete c.finish
			})
		}
	}), n.each(["toggle", "show", "hide"], function(a, b) {
		var c = n.fn[b];
		n.fn[b] = function(a, d, e) {
			return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(mb(b, !0), a, d, e)
		}
	}), n.each({
		slideDown: mb("show"),
		slideUp: mb("hide"),
		slideToggle: mb("toggle"),
		fadeIn: {
			opacity: "show"
		},
		fadeOut: {
			opacity: "hide"
		},
		fadeToggle: {
			opacity: "toggle"
		}
	}, function(a, b) {
		n.fn[a] = function(a, c, d) {
			return this.animate(b, a, c, d)
		}
	}), n.timers = [], n.fx.tick = function() {
		var a, b = n.timers,
			c = 0;
		for (hb = n.now(); c < b.length; c++) a = b[c], a() || b[c] !== a || b.splice(c--, 1);
		b.length || n.fx.stop(), hb = void 0
	}, n.fx.timer = function(a) {
		n.timers.push(a), a() ? n.fx.start() : n.timers.pop()
	}, n.fx.interval = 13, n.fx.start = function() {
		ib || (ib = a.setInterval(n.fx.tick, n.fx.interval))
	}, n.fx.stop = function() {
		a.clearInterval(ib), ib = null
	}, n.fx.speeds = {
		slow: 600,
		fast: 200,
		_default: 400
	}, n.fn.delay = function(b, c) {
		return b = n.fx ? n.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function(c, d) {
			var e = a.setTimeout(c, b);
			d.stop = function() {
				a.clearTimeout(e)
			}
		})
	}, function() {
		var a, b = d.createElement("input"),
			c = d.createElement("div"),
			e = d.createElement("select"),
			f = e.appendChild(d.createElement("option"));
		c = d.createElement("div"), c.setAttribute("className", "t"), c.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", a = c.getElementsByTagName("a")[0], b.setAttribute("type", "checkbox"), c.appendChild(b), a = c.getElementsByTagName("a")[0], a.style.cssText = "top:1px", l.getSetAttribute = "t" !== c.className, l.style = /top/.test(a.getAttribute("style")), l.hrefNormalized = "/a" === a.getAttribute("href"), l.checkOn = !! b.value, l.optSelected = f.selected, l.enctype = !! d.createElement("form").enctype, e.disabled = !0, l.optDisabled = !f.disabled, b = d.createElement("input"), b.setAttribute("value", ""), l.input = "" === b.getAttribute("value"), b.value = "t", b.setAttribute("type", "radio"), l.radioValue = "t" === b.value
	}();
	var rb = /\r/g;
	n.fn.extend({
		val: function(a) {
			var b, c, d, e = this[0]; {
				if (arguments.length) return d = n.isFunction(a), this.each(function(c) {
					var e;
					1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function(a) {
						return null == a ? "" : a + ""
					})), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
				});
				if (e) return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(rb, "") : null == c ? "" : c)
			}
		}
	}), n.extend({
		valHooks: {
			option: {
				get: function(a) {
					var b = n.find.attr(a, "value");
					return null != b ? b : n.trim(n.text(a))
				}
			},
			select: {
				get: function(a) {
					for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++) if (c = d[i], (c.selected || i === e) && (l.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !n.nodeName(c.parentNode, "optgroup"))) {
						if (b = n(c).val(), f) return b;
						g.push(b)
					}
					return g
				},
				set: function(a, b) {
					var c, d, e = a.options,
						f = n.makeArray(b),
						g = e.length;
					while (g--) if (d = e[g], n.inArray(n.valHooks.option.get(d), f) >= 0) try {
						d.selected = c = !0
					} catch (h) {
						d.scrollHeight
					} else d.selected = !1;
					return c || (a.selectedIndex = -1), e
				}
			}
		}
	}), n.each(["radio", "checkbox"], function() {
		n.valHooks[this] = {
			set: function(a, b) {
				return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) > -1 : void 0
			}
		}, l.checkOn || (n.valHooks[this].get = function(a) {
			return null === a.getAttribute("value") ? "on" : a.value
		})
	});
	var sb, tb, ub = n.expr.attrHandle,
		vb = /^(?:checked|selected)$/i,
		wb = l.getSetAttribute,
		xb = l.input;
	n.fn.extend({
		attr: function(a, b) {
			return Y(this, n.attr, a, b, arguments.length > 1)
		},
		removeAttr: function(a) {
			return this.each(function() {
				n.removeAttr(this, a)
			})
		}
	}), n.extend({
		attr: function(a, b, c) {
			var d, e, f = a.nodeType;
			if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), e = n.attrHooks[b] || (n.expr.match.bool.test(b) ? tb : sb)), void 0 !== c ? null === c ? void n.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = n.find.attr(a, b), null == d ? void 0 : d))
		},
		attrHooks: {
			type: {
				set: function(a, b) {
					if (!l.radioValue && "radio" === b && n.nodeName(a, "input")) {
						var c = a.value;
						return a.setAttribute("type", b), c && (a.value = c), b
					}
				}
			}
		},
		removeAttr: function(a, b) {
			var c, d, e = 0,
				f = b && b.match(G);
			if (f && 1 === a.nodeType) while (c = f[e++]) d = n.propFix[c] || c, n.expr.match.bool.test(c) ? xb && wb || !vb.test(c) ? a[d] = !1 : a[n.camelCase("default-" + c)] = a[d] = !1 : n.attr(a, c, ""), a.removeAttribute(wb ? c : d)
		}
	}), tb = {
		set: function(a, b, c) {
			return b === !1 ? n.removeAttr(a, c) : xb && wb || !vb.test(c) ? a.setAttribute(!wb && n.propFix[c] || c, c) : a[n.camelCase("default-" + c)] = a[c] = !0, c
		}
	}, n.each(n.expr.match.bool.source.match(/\w+/g), function(a, b) {
		var c = ub[b] || n.find.attr;
		xb && wb || !vb.test(b) ? ub[b] = function(a, b, d) {
			var e, f;
			return d || (f = ub[b], ub[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, ub[b] = f), e
		} : ub[b] = function(a, b, c) {
			return c ? void 0 : a[n.camelCase("default-" + b)] ? b.toLowerCase() : null
		}
	}), xb && wb || (n.attrHooks.value = {
		set: function(a, b, c) {
			return n.nodeName(a, "input") ? void(a.defaultValue = b) : sb && sb.set(a, b, c)
		}
	}), wb || (sb = {
		set: function(a, b, c) {
			var d = a.getAttributeNode(c);
			return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "", "value" === c || b === a.getAttribute(c) ? b : void 0
		}
	}, ub.id = ub.name = ub.coords = function(a, b, c) {
		var d;
		return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null
	}, n.valHooks.button = {
		get: function(a, b) {
			var c = a.getAttributeNode(b);
			return c && c.specified ? c.value : void 0
		},
		set: sb.set
	}, n.attrHooks.contenteditable = {
		set: function(a, b, c) {
			sb.set(a, "" === b ? !1 : b, c)
		}
	}, n.each(["width", "height"], function(a, b) {
		n.attrHooks[b] = {
			set: function(a, c) {
				return "" === c ? (a.setAttribute(b, "auto"), c) : void 0
			}
		}
	})), l.style || (n.attrHooks.style = {
		get: function(a) {
			return a.style.cssText || void 0
		},
		set: function(a, b) {
			return a.style.cssText = b + ""
		}
	});
	var yb = /^(?:input|select|textarea|button|object)$/i,
		zb = /^(?:a|area)$/i;
	n.fn.extend({
		prop: function(a, b) {
			return Y(this, n.prop, a, b, arguments.length > 1)
		},
		removeProp: function(a) {
			return a = n.propFix[a] || a, this.each(function() {
				try {
					this[a] = void 0, delete this[a]
				} catch (b) {}
			})
		}
	}), n.extend({
		prop: function(a, b, c) {
			var d, e, f = a.nodeType;
			if (3 !== f && 8 !== f && 2 !== f) return 1 === f && n.isXMLDoc(a) || (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
		},
		propHooks: {
			tabIndex: {
				get: function(a) {
					var b = n.find.attr(a, "tabindex");
					return b ? parseInt(b, 10) : yb.test(a.nodeName) || zb.test(a.nodeName) && a.href ? 0 : -1
				}
			}
		},
		propFix: {
			"for": "htmlFor",
			"class": "className"
		}
	}), l.hrefNormalized || n.each(["href", "src"], function(a, b) {
		n.propHooks[b] = {
			get: function(a) {
				return a.getAttribute(b, 4)
			}
		}
	}), l.optSelected || (n.propHooks.selected = {
		get: function(a) {
			var b = a.parentNode;
			return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
		}
	}), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
		n.propFix[this.toLowerCase()] = this
	}), l.enctype || (n.propFix.enctype = "encoding");
	var Ab = /[\t\r\n\f]/g;

	function Bb(a) {
		return n.attr(a, "class") || ""
	}
	n.fn.extend({
		addClass: function(a) {
			var b, c, d, e, f, g, h, i = 0;
			if (n.isFunction(a)) return this.each(function(b) {
				n(this).addClass(a.call(this, b, Bb(this)))
			});
			if ("string" == typeof a && a) {
				b = a.match(G) || [];
				while (c = this[i++]) if (e = Bb(c), d = 1 === c.nodeType && (" " + e + " ").replace(Ab, " ")) {
					g = 0;
					while (f = b[g++]) d.indexOf(" " + f + " ") < 0 && (d += f + " ");
					h = n.trim(d), e !== h && n.attr(c, "class", h)
				}
			}
			return this
		},
		removeClass: function(a) {
			var b, c, d, e, f, g, h, i = 0;
			if (n.isFunction(a)) return this.each(function(b) {
				n(this).removeClass(a.call(this, b, Bb(this)))
			});
			if (!arguments.length) return this.attr("class", "");
			if ("string" == typeof a && a) {
				b = a.match(G) || [];
				while (c = this[i++]) if (e = Bb(c), d = 1 === c.nodeType && (" " + e + " ").replace(Ab, " ")) {
					g = 0;
					while (f = b[g++]) while (d.indexOf(" " + f + " ") > -1) d = d.replace(" " + f + " ", " ");
					h = n.trim(d), e !== h && n.attr(c, "class", h)
				}
			}
			return this
		},
		toggleClass: function(a, b) {
			var c = typeof a;
			return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : n.isFunction(a) ? this.each(function(c) {
				n(this).toggleClass(a.call(this, c, Bb(this), b), b)
			}) : this.each(function() {
				var b, d, e, f;
				if ("string" === c) {
					d = 0, e = n(this), f = a.match(G) || [];
					while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
				} else(void 0 === a || "boolean" === c) && (b = Bb(this), b && n._data(this, "__className__", b), n.attr(this, "class", b || a === !1 ? "" : n._data(this, "__className__") || ""))
			})
		},
		hasClass: function(a) {
			var b, c, d = 0;
			b = " " + a + " ";
			while (c = this[d++]) if (1 === c.nodeType && (" " + Bb(c) + " ").replace(Ab, " ").indexOf(b) > -1) return !0;
			return !1
		}
	}), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
		n.fn[b] = function(a, c) {
			return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
		}
	}), n.fn.extend({
		hover: function(a, b) {
			return this.mouseenter(a).mouseleave(b || a)
		}
	});
	var Cb = a.location,
		Db = n.now(),
		Eb = /\?/,
		Fb = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
	n.parseJSON = function(b) {
		if (a.JSON && a.JSON.parse) return a.JSON.parse(b + "");
		var c, d = null,
			e = n.trim(b + "");
		return e && !n.trim(e.replace(Fb, function(a, b, e, f) {
			return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, "")
		})) ? Function("return " + e)() : n.error("Invalid JSON: " + b)
	}, n.parseXML = function(b) {
		var c, d;
		if (!b || "string" != typeof b) return null;
		try {
			a.DOMParser ? (d = new a.DOMParser, c = d.parseFromString(b, "text/xml")) : (c = new a.ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b))
		} catch (e) {
			c = void 0
		}
		return c && c.documentElement && !c.getElementsByTagName("parsererror").length || n.error("Invalid XML: " + b), c
	};
	var Gb = /#.*$/,
		Hb = /([?&])_=[^&]*/,
		Ib = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
		Jb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		Kb = /^(?:GET|HEAD)$/,
		Lb = /^\/\//,
		Mb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
		Nb = {},
		Ob = {},
		Pb = "*/".concat("*"),
		Qb = Cb.href,
		Rb = Mb.exec(Qb.toLowerCase()) || [];

	function Sb(a) {
		return function(b, c) {
			"string" != typeof b && (c = b, b = "*");
			var d, e = 0,
				f = b.toLowerCase().match(G) || [];
			if (n.isFunction(c)) while (d = f[e++])"+" === d.charAt(0) ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
		}
	}
	function Tb(a, b, c, d) {
		var e = {},
			f = a === Ob;

		function g(h) {
			var i;
			return e[h] = !0, n.each(a[h] || [], function(a, h) {
				var j = h(b, c, d);
				return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
			}), i
		}
		return g(b.dataTypes[0]) || !e["*"] && g("*")
	}
	function Ub(a, b) {
		var c, d, e = n.ajaxSettings.flatOptions || {};
		for (d in b) void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
		return c && n.extend(!0, a, c), a
	}
	function Vb(a, b, c) {
		var d, e, f, g, h = a.contents,
			i = a.dataTypes;
		while ("*" === i[0]) i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
		if (e) for (g in h) if (h[g] && h[g].test(e)) {
			i.unshift(g);
			break
		}
		if (i[0] in c) f = i[0];
		else {
			for (g in c) {
				if (!i[0] || a.converters[g + " " + i[0]]) {
					f = g;
					break
				}
				d || (d = g)
			}
			f = f || d
		}
		return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
	}
	function Wb(a, b, c, d) {
		var e, f, g, h, i, j = {},
			k = a.dataTypes.slice();
		if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
		f = k.shift();
		while (f) if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ("*" === f) f = i;
		else if ("*" !== i && i !== f) {
			if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
				g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
				break
			}
			if (g !== !0) if (g && a["throws"]) b = g(b);
			else try {
				b = g(b)
			} catch (l) {
				return {
					state: "parsererror",
					error: g ? l : "No conversion from " + i + " to " + f
				}
			}
		}
		return {
			state: "success",
			data: b
		}
	}
	n.extend({
		active: 0,
		lastModified: {},
		etag: {},
		ajaxSettings: {
			url: Qb,
			type: "GET",
			isLocal: Jb.test(Rb[1]),
			global: !0,
			processData: !0,
			async: !0,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			accepts: {
				"*": Pb,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
			contents: {
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
			},
			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},
			converters: {
				"* text": String,
				"text html": !0,
				"text json": n.parseJSON,
				"text xml": n.parseXML
			},
			flatOptions: {
				url: !0,
				context: !0
			}
		},
		ajaxSetup: function(a, b) {
			return b ? Ub(Ub(a, n.ajaxSettings), b) : Ub(n.ajaxSettings, a)
		},
		ajaxPrefilter: Sb(Nb),
		ajaxTransport: Sb(Ob),
		ajax: function(b, c) {
			"object" == typeof b && (c = b, b = void 0), c = c || {};
			var d, e, f, g, h, i, j, k, l = n.ajaxSetup({}, c),
				m = l.context || l,
				o = l.context && (m.nodeType || m.jquery) ? n(m) : n.event,
				p = n.Deferred(),
				q = n.Callbacks("once memory"),
				r = l.statusCode || {},
				s = {},
				t = {},
				u = 0,
				v = "canceled",
				w = {
					readyState: 0,
					getResponseHeader: function(a) {
						var b;
						if (2 === u) {
							if (!k) {
								k = {};
								while (b = Ib.exec(g)) k[b[1].toLowerCase()] = b[2]
							}
							b = k[a.toLowerCase()]
						}
						return null == b ? null : b
					},
					getAllResponseHeaders: function() {
						return 2 === u ? g : null
					},
					setRequestHeader: function(a, b) {
						var c = a.toLowerCase();
						return u || (a = t[c] = t[c] || a, s[a] = b), this
					},
					overrideMimeType: function(a) {
						return u || (l.mimeType = a), this
					},
					statusCode: function(a) {
						var b;
						if (a) if (2 > u) for (b in a) r[b] = [r[b], a[b]];
						else w.always(a[w.status]);
						return this
					},
					abort: function(a) {
						var b = a || v;
						return j && j.abort(b), y(0, b), this
					}
				};
			if (p.promise(w).complete = q.add, w.success = w.done, w.error = w.fail, l.url = ((b || l.url || Qb) + "").replace(Gb, "").replace(Lb, Rb[1] + "//"), l.type = c.method || c.type || l.method || l.type, l.dataTypes = n.trim(l.dataType || "*").toLowerCase().match(G) || [""], null == l.crossDomain && (d = Mb.exec(l.url.toLowerCase()), l.crossDomain = !(!d || d[1] === Rb[1] && d[2] === Rb[2] && (d[3] || ("http:" === d[1] ? "80" : "443")) === (Rb[3] || ("http:" === Rb[1] ? "80" : "443")))), l.data && l.processData && "string" != typeof l.data && (l.data = n.param(l.data, l.traditional)), Tb(Nb, l, c, w), 2 === u) return w;
			i = n.event && l.global, i && 0 === n.active++ && n.event.trigger("ajaxStart"), l.type = l.type.toUpperCase(), l.hasContent = !Kb.test(l.type), f = l.url, l.hasContent || (l.data && (f = l.url += (Eb.test(f) ? "&" : "?") + l.data, delete l.data), l.cache === !1 && (l.url = Hb.test(f) ? f.replace(Hb, "$1_=" + Db++) : f + (Eb.test(f) ? "&" : "?") + "_=" + Db++)), l.ifModified && (n.lastModified[f] && w.setRequestHeader("If-Modified-Since", n.lastModified[f]), n.etag[f] && w.setRequestHeader("If-None-Match", n.etag[f])), (l.data && l.hasContent && l.contentType !== !1 || c.contentType) && w.setRequestHeader("Content-Type", l.contentType), w.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + Pb + "; q=0.01" : "") : l.accepts["*"]);
			for (e in l.headers) w.setRequestHeader(e, l.headers[e]);
			if (l.beforeSend && (l.beforeSend.call(m, w, l) === !1 || 2 === u)) return w.abort();
			v = "abort";
			for (e in {
				success: 1,
				error: 1,
				complete: 1
			}) w[e](l[e]);
			if (j = Tb(Ob, l, c, w)) {
				if (w.readyState = 1, i && o.trigger("ajaxSend", [w, l]), 2 === u) return w;
				l.async && l.timeout > 0 && (h = a.setTimeout(function() {
					w.abort("timeout")
				}, l.timeout));
				try {
					u = 1, j.send(s, y)
				} catch (x) {
					if (!(2 > u)) throw x;
					y(-1, x)
				}
			} else y(-1, "No Transport");

			function y(b, c, d, e) {
				var k, s, t, v, x, y = c;
				2 !== u && (u = 2, h && a.clearTimeout(h), j = void 0, g = e || "", w.readyState = b > 0 ? 4 : 0, k = b >= 200 && 300 > b || 304 === b, d && (v = Vb(l, w, d)), v = Wb(l, v, w, k), k ? (l.ifModified && (x = w.getResponseHeader("Last-Modified"), x && (n.lastModified[f] = x), x = w.getResponseHeader("etag"), x && (n.etag[f] = x)), 204 === b || "HEAD" === l.type ? y = "nocontent" : 304 === b ? y = "notmodified" : (y = v.state, s = v.data, t = v.error, k = !t)) : (t = y, (b || !y) && (y = "error", 0 > b && (b = 0))), w.status = b, w.statusText = (c || y) + "", k ? p.resolveWith(m, [s, y, w]) : p.rejectWith(m, [w, y, t]), w.statusCode(r), r = void 0, i && o.trigger(k ? "ajaxSuccess" : "ajaxError", [w, l, k ? s : t]), q.fireWith(m, [w, y]), i && (o.trigger("ajaxComplete", [w, l]), --n.active || n.event.trigger("ajaxStop")))
			}
			return w
		},
		getJSON: function(a, b, c) {
			return n.get(a, b, c, "json")
		},
		getScript: function(a, b) {
			return n.get(a, void 0, b, "script")
		}
	}), n.each(["get", "post"], function(a, b) {
		n[b] = function(a, c, d, e) {
			return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax(n.extend({
				url: a,
				type: b,
				dataType: e,
				data: c,
				success: d
			}, n.isPlainObject(a) && a))
		}
	}), n._evalUrl = function(a) {
		return n.ajax({
			url: a,
			type: "GET",
			dataType: "script",
			cache: !0,
			async: !1,
			global: !1,
			"throws": !0
		})
	}, n.fn.extend({
		wrapAll: function(a) {
			if (n.isFunction(a)) return this.each(function(b) {
				n(this).wrapAll(a.call(this, b))
			});
			if (this[0]) {
				var b = n(a, this[0].ownerDocument).eq(0).clone(!0);
				this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
					var a = this;
					while (a.firstChild && 1 === a.firstChild.nodeType) a = a.firstChild;
					return a
				}).append(this)
			}
			return this
		},
		wrapInner: function(a) {
			return n.isFunction(a) ? this.each(function(b) {
				n(this).wrapInner(a.call(this, b))
			}) : this.each(function() {
				var b = n(this),
					c = b.contents();
				c.length ? c.wrapAll(a) : b.append(a)
			})
		},
		wrap: function(a) {
			var b = n.isFunction(a);
			return this.each(function(c) {
				n(this).wrapAll(b ? a.call(this, c) : a)
			})
		},
		unwrap: function() {
			return this.parent().each(function() {
				n.nodeName(this, "body") || n(this).replaceWith(this.childNodes)
			}).end()
		}
	});

	function Xb(a) {
		return a.style && a.style.display || n.css(a, "display")
	}
	function Yb(a) {
		while (a && 1 === a.nodeType) {
			if ("none" === Xb(a) || "hidden" === a.type) return !0;
			a = a.parentNode
		}
		return !1
	}
	n.expr.filters.hidden = function(a) {
		return l.reliableHiddenOffsets() ? a.offsetWidth <= 0 && a.offsetHeight <= 0 && !a.getClientRects().length : Yb(a)
	}, n.expr.filters.visible = function(a) {
		return !n.expr.filters.hidden(a)
	};
	var Zb = /%20/g,
		$b = /\[\]$/,
		_b = /\r?\n/g,
		ac = /^(?:submit|button|image|reset|file)$/i,
		bc = /^(?:input|select|textarea|keygen)/i;

	function cc(a, b, c, d) {
		var e;
		if (n.isArray(b)) n.each(b, function(b, e) {
			c || $b.test(a) ? d(a, e) : cc(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d)
		});
		else if (c || "object" !== n.type(b)) d(a, b);
		else for (e in b) cc(a + "[" + e + "]", b[e], c, d)
	}
	n.param = function(a, b) {
		var c, d = [],
			e = function(a, b) {
				b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
			};
		if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) n.each(a, function() {
			e(this.name, this.value)
		});
		else for (c in a) cc(c, a[c], b, e);
		return d.join("&").replace(Zb, "+")
	}, n.fn.extend({
		serialize: function() {
			return n.param(this.serializeArray())
		},
		serializeArray: function() {
			return this.map(function() {
				var a = n.prop(this, "elements");
				return a ? n.makeArray(a) : this
			}).filter(function() {
				var a = this.type;
				return this.name && !n(this).is(":disabled") && bc.test(this.nodeName) && !ac.test(a) && (this.checked || !Z.test(a))
			}).map(function(a, b) {
				var c = n(this).val();
				return null == c ? null : n.isArray(c) ? n.map(c, function(a) {
					return {
						name: b.name,
						value: a.replace(_b, "\r\n")
					}
				}) : {
					name: b.name,
					value: c.replace(_b, "\r\n")
				}
			}).get()
		}
	}), n.ajaxSettings.xhr = void 0 !== a.ActiveXObject ?
	function() {
		return this.isLocal ? hc() : d.documentMode > 8 ? gc() : /^(get|post|head|put|delete|options)$/i.test(this.type) && gc() || hc()
	} : gc;
	var dc = 0,
		ec = {},
		fc = n.ajaxSettings.xhr();
	a.attachEvent && a.attachEvent("onunload", function() {
		for (var a in ec) ec[a](void 0, !0)
	}), l.cors = !! fc && "withCredentials" in fc, fc = l.ajax = !! fc, fc && n.ajaxTransport(function(b) {
		if (!b.crossDomain || l.cors) {
			var c;
			return {
				send: function(d, e) {
					var f, g = b.xhr(),
						h = ++dc;
					if (g.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields) for (f in b.xhrFields) g[f] = b.xhrFields[f];
					b.mimeType && g.overrideMimeType && g.overrideMimeType(b.mimeType), b.crossDomain || d["X-Requested-With"] || (d["X-Requested-With"] = "XMLHttpRequest");
					for (f in d) void 0 !== d[f] && g.setRequestHeader(f, d[f] + "");
					g.send(b.hasContent && b.data || null), c = function(a, d) {
						var f, i, j;
						if (c && (d || 4 === g.readyState)) if (delete ec[h], c = void 0, g.onreadystatechange = n.noop, d) 4 !== g.readyState && g.abort();
						else {
							j = {}, f = g.status, "string" == typeof g.responseText && (j.text = g.responseText);
							try {
								i = g.statusText
							} catch (k) {
								i = ""
							}
							f || !b.isLocal || b.crossDomain ? 1223 === f && (f = 204) : f = j.text ? 200 : 404
						}
						j && e(f, i, j, g.getAllResponseHeaders())
					}, b.async ? 4 === g.readyState ? a.setTimeout(c) : g.onreadystatechange = ec[h] = c : c()
				},
				abort: function() {
					c && c(void 0, !0)
				}
			}
		}
	});

	function gc() {
		try {
			return new a.XMLHttpRequest
		} catch (b) {}
	}
	function hc() {
		try {
			return new a.ActiveXObject("Microsoft.XMLHTTP")
		} catch (b) {}
	}
	n.ajaxPrefilter(function(a) {
		a.crossDomain && (a.contents.script = !1)
	}), n.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function(a) {
				return n.globalEval(a), a
			}
		}
	}), n.ajaxPrefilter("script", function(a) {
		void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
	}), n.ajaxTransport("script", function(a) {
		if (a.crossDomain) {
			var b, c = d.head || n("head")[0] || d.documentElement;
			return {
				send: function(e, f) {
					b = d.createElement("script"), b.async = !0, a.scriptCharset && (b.charset = a.scriptCharset), b.src = a.url, b.onload = b.onreadystatechange = function(a, c) {
						(c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || f(200, "success"))
					}, c.insertBefore(b, c.firstChild)
				},
				abort: function() {
					b && b.onload(void 0, !0)
				}
			}
		}
	});
	var ic = [],
		jc = /(=)\?(?=&|$)|\?\?/;
	n.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function() {
			var a = ic.pop() || n.expando + "_" + Db++;
			return this[a] = !0, a
		}
	}), n.ajaxPrefilter("json jsonp", function(b, c, d) {
		var e, f, g, h = b.jsonp !== !1 && (jc.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && jc.test(b.data) && "data");
		return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(jc, "$1" + e) : b.jsonp !== !1 && (b.url += (Eb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
			return g || n.error(e + " was not called"), g[0]
		}, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
			g = arguments
		}, d.always(function() {
			void 0 === f ? n(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, ic.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0
		}), "script") : void 0
	}), l.createHTMLDocument = function() {
		if (!d.implementation.createHTMLDocument) return !1;
		var a = d.implementation.createHTMLDocument("");
		return a.body.innerHTML = "<form></form><form></form>", 2 === a.body.childNodes.length
	}(), n.parseHTML = function(a, b, c) {
		if (!a || "string" != typeof a) return null;
		"boolean" == typeof b && (c = b, b = !1), b = b || (l.createHTMLDocument ? d.implementation.createHTMLDocument("") : d);
		var e = x.exec(a),
			f = !c && [];
		return e ? [b.createElement(e[1])] : (e = ja([a], b, f), f && f.length && n(f).remove(), n.merge([], e.childNodes))
	};
	var kc = n.fn.load;
	n.fn.load = function(a, b, c) {
		if ("string" != typeof a && kc) return kc.apply(this, arguments);
		var d, e, f, g = this,
			h = a.indexOf(" ");
		return h > -1 && (d = n.trim(a.slice(h, a.length)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && n.ajax({
			url: a,
			type: e || "GET",
			dataType: "html",
			data: b
		}).done(function(a) {
			f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a)
		}).always(c &&
		function(a, b) {
			g.each(function() {
				c.apply(g, f || [a.responseText, b, a])
			})
		}), this
	}, n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
		n.fn[b] = function(a) {
			return this.on(b, a)
		}
	}), n.expr.filters.animated = function(a) {
		return n.grep(n.timers, function(b) {
			return a === b.elem
		}).length
	};

	function lc(a) {
		return n.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
	}
	n.offset = {
		setOffset: function(a, b, c) {
			var d, e, f, g, h, i, j, k = n.css(a, "position"),
				l = n(a),
				m = {};
			"static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && n.inArray("auto", [f, i]) > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, n.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
		}
	}, n.fn.extend({
		offset: function(a) {
			if (arguments.length) return void 0 === a ? this : this.each(function(b) {
				n.offset.setOffset(this, a, b)
			});
			var b, c, d = {
				top: 0,
				left: 0
			},
				e = this[0],
				f = e && e.ownerDocument;
			if (f) return b = f.documentElement, n.contains(b, e) ? ("undefined" != typeof e.getBoundingClientRect && (d = e.getBoundingClientRect()), c = lc(f), {
				top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
				left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
			}) : d
		},
		position: function() {
			if (this[0]) {
				var a, b, c = {
					top: 0,
					left: 0
				},
					d = this[0];
				return "fixed" === n.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (c = a.offset()), c.top += n.css(a[0], "borderTopWidth", !0) - a.scrollTop(), c.left += n.css(a[0], "borderLeftWidth", !0) - a.scrollLeft()), {
					top: b.top - c.top - n.css(d, "marginTop", !0),
					left: b.left - c.left - n.css(d, "marginLeft", !0)
				}
			}
		},
		offsetParent: function() {
			return this.map(function() {
				var a = this.offsetParent;
				while (a && !n.nodeName(a, "html") && "static" === n.css(a, "position")) a = a.offsetParent;
				return a || Qa
			})
		}
	}), n.each({
		scrollLeft: "pageXOffset",
		scrollTop: "pageYOffset"
	}, function(a, b) {
		var c = /Y/.test(b);
		n.fn[a] = function(d) {
			return Y(this, function(a, d, e) {
				var f = lc(a);
				return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void(f ? f.scrollTo(c ? n(f).scrollLeft() : e, c ? e : n(f).scrollTop()) : a[d] = e)
			}, a, d, arguments.length, null)
		}
	}), n.each(["top", "left"], function(a, b) {
		n.cssHooks[b] = Ua(l.pixelPosition, function(a, c) {
			return c ? (c = Sa(a, b), Oa.test(c) ? n(a).position()[b] + "px" : c) : void 0
		})
	}), n.each({
		Height: "height",
		Width: "width"
	}, function(a, b) {
		n.each({
			padding: "inner" + a,
			content: b,
			"": "outer" + a
		}, function(c, d) {
			n.fn[d] = function(d, e) {
				var f = arguments.length && (c || "boolean" != typeof d),
					g = c || (d === !0 || e === !0 ? "margin" : "border");
				return Y(this, function(b, c, d) {
					var e;
					return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g)
				}, b, f ? d : void 0, f, null)
			}
		})
	}), n.fn.extend({
		bind: function(a, b, c) {
			return this.on(a, null, b, c)
		},
		unbind: function(a, b) {
			return this.off(a, null, b)
		},
		delegate: function(a, b, c, d) {
			return this.on(b, a, c, d)
		},
		undelegate: function(a, b, c) {
			return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
		}
	}), n.fn.size = function() {
		return this.length
	}, n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
		return n
	});
	var mc = a.jQuery,
		nc = a.$;
	return n.noConflict = function(b) {
		return a.$ === n && (a.$ = nc), b && a.jQuery === n && (a.jQuery = mc), n
	}, b || (a.jQuery = a.$ = n), n
});
(function e(t, n, r) {
	function s(o, u) {
		if (!n[o]) {
			if (!t[o]) {
				var a = typeof require == "function" && require;
				if (!u && a) return a(o, !0);
				if (i) return i(o, !0);
				var f = new Error("Cannot find module '" + o + "'");
				throw f.code = "MODULE_NOT_FOUND", f
			}
			var l = n[o] = {
				exports: {}
			};
			t[o][0].call(l.exports, function(e) {
				var n = t[o][1][e];
				return s(n ? n : e)
			}, l, l.exports, e, t, n, r)
		}
		return n[o].exports
	}
	var i = typeof require == "function" && require;
	for (var o = 0; o < r.length; o++) s(r[o]);
	return s
})({
	1: [function(require, module, exports) {
		"use strict";
		Object.defineProperty(exports, "__esModule", {
			value: true
		});
		var _createClass = function() {
				function defineProperties(target, props) {
					for (var i = 0; i < props.length; i++) {
						var descriptor = props[i];
						descriptor.enumerable = descriptor.enumerable || false;
						descriptor.configurable = true;
						if ("value" in descriptor) descriptor.writable = true;
						Object.defineProperty(target, descriptor.key, descriptor)
					}
				}
				return function(Constructor, protoProps, staticProps) {
					if (protoProps) defineProperties(Constructor.prototype, protoProps);
					if (staticProps) defineProperties(Constructor, staticProps);
					return Constructor
				}
			}();
		var _utils = require("./utils");
		var _utils2 = _interopRequireDefault(_utils);

		function _interopRequireDefault(obj) {
			return obj && obj.__esModule ? obj : {
				"default": obj
			}
		}
		function _classCallCheck(instance, Constructor) {
			if (!(instance instanceof Constructor)) {
				throw new TypeError("Cannot call a class as a function")
			}
		}
		var calValLength = function calValLength(str) {
				return str.replace(/(\r\n|\n|\r)/g, "-").length
			};
		var CharacterCount = function() {
				function CharacterCount(options) {
					_classCallCheck(this, CharacterCount);
					var defaults = {
						placeholder: "请输入",
						maxlength: 20
					};
					this.CONF = $.extend({}, defaults, options || {})
				}
				_createClass(CharacterCount, [{
					key: "listen",
					value: function listen(dom) {
						var ele = $(dom);
						var input = ele.find("input,textarea");
						var count = ele.find(".ui-input-count,.ui-textarea-count");
						var max = input.attr("maxlength");
						var cur = count.find("i").eq(0);
						var curLength = calValLength(input.val());
						cur.html(curLength);
						var onInput = function onInput() {
								var prev = input.val();
								var num = calValLength(prev);
								if (parseInt(_utils2["default"].ieVer(), 10) > 9) {
									var newLines = prev.match(/(\r\n|\n|\r)/g);
									var addition = 0;
									if (newLines !== null) {
										addition = newLines.length
									}
									input.attr("maxlength", parseInt(max, 10) - addition)
								}
								if (num > max) {
									ele.addClass("error")
								} else {
									ele.removeClass("error")
								}
								cur.html(num)
							};
						if (window.addEventListener) {
							input.get(0).addEventListener("input", onInput, false)
						} else {
							input.get(0).attachEvent("onpropertychange", onInput)
						}
						if (_utils2["default"].isIE("9")) {
							input.get(0).attachEvent("onkeyup", function() {
								var key = window.event.keyCode;
								(key === 8 || key === 46) && onInput()
							});
							input.get(0).attachEvent("oncut", onInput)
						}
					}
				}]);
				return CharacterCount
			}();
		window._cfCommon = window._cfCommon || {};
		window._cfCommon.characterCount = CharacterCount;
		exports["default"] = CharacterCount;
	}, {
		"./utils": 16
	}],
	2: [function(require, module, exports) {
		"use strict";
		Object.defineProperty(exports, "__esModule", {
			value: true
		});
		var STATIC_URL = exports.STATIC_URL = "//qzs.qq.com/open/video/vopui";
		var RETURN_CODE = exports.RETURN_CODE = {
			needLogin: -1e4,
			completeProfile: 27001
		};
		var TEAM_SCALE = exports.TEAM_SCALE = {
			1: "1-49",
			2: "50-99",
			3: "100-499",
			4: "500-999",
			5: "1000人以上"
		};
		var SERVICE_TIME = exports.SERVICE_TIME = {
			1: "一次性",
			2: "1个月",
			3: "3个月",
			4: "半年",
			5: "一年",
			6: "两年"
		};
		var SERVICE_ONLINE_STATUS = exports.SERVICE_ONLINE_STATUS = {
			NOT_RELEASE: {
				key: 1,
				desc: "未发布"
			},
			STOCK: {
				key: 2,
				desc: "已上架"
			},
			REMOVE: {
				key: 3,
				desc: "已下架"
			}
		};
		var SERVICE_STATUS = exports.SERVICE_STATUS = {
			NOT_AUDIT: {
				key: 1,
				desc: "审核中"
			},
			NEED_REAUDIT: {
				key: 2,
				desc: "审核中"
			},
			MANUAL_CHECKED: {
				key: 3,
				desc: "人工审核通过"
			},
			MANUAL_REJECTED: {
				key: 5,
				desc: "人工审核不通过"
			},
			AUTO_CHECKED: {
				key: 4,
				desc: "系统审核通过"
			},
			AUTO_REJECTED: {
				key: 6,
				desc: "系统审核不通过"
			}
		};
		var SERVICE_DRAFT_STATUS = exports.SERVICE_DRAFT_STATUS = {
			YES: 1,
			NO: 2
		};
		var ORDER_STATUS = exports.ORDER_STATUS = {
			STATUS_TO_PAY: "1",
			STATUS_PAYED: "2",
			STATUS_CONFIRMED: "3",
			STATUS_TO_CHECK: "4",
			STATUS_CHECKED: "5",
			STATUS_SETTLE_FAILED: "6",
			STATUS_SETTLED: "7",
			STATUS_COMPLATE: "8",
			STATUS_REFUND: "9",
			STATUS_REFUNDED: "10",
			STATUS_PAY_FAILED: "11",
			STATUS_CANCEL: "12",
			STATUS_PAY_EXCEPTION: "13",
			STATUS_REFUND_EXCEPTION: "14"
		};
		var PAY_TYPE = exports.PAY_TYPE = {
			WECHAT: 2,
			CAIFUTONG: 5
		};
		var ACTIVITY_TYPE = exports.ACTIVITY_TYPE = {
			ZERO: 1,
			HB: 2,
			TEJIA: 3
		};
		var ERROR_LEVEL = exports.ERROR_LEVEL = {
			WARNING: 1,
			ERROR: 2
		};
		var PLATFORM_QQ = exports.PLATFORM_QQ = "800013811";
		var constants = exports.constants = {
			STATIC_URL: STATIC_URL,
			RETURN_CODE: RETURN_CODE,
			TEAM_SCALE: TEAM_SCALE,
			SERVICE_TIME: SERVICE_TIME,
			ORDER_STATUS: ORDER_STATUS,
			SERVICE_ONLINE_STATUS: SERVICE_ONLINE_STATUS,
			SERVICE_STATUS: SERVICE_STATUS,
			SERVICE_DRAFT_STATUS: SERVICE_DRAFT_STATUS,
			PAY_TYPE: PAY_TYPE,
			ACTIVITY_TYPE: ACTIVITY_TYPE,
			ERROR_LEVEL: ERROR_LEVEL,
			PLATFORM_QQ: PLATFORM_QQ
		};
		window._cfCommon = window._cfCommon || {};
		window._cfCommon.constants = constants;
		exports["default"] = constants;
	}, {}],
	3: [function(require, module, exports) {
		"use strict";
		Object.defineProperty(exports, "__esModule", {
			value: true
		});
		require("./jquery-fileupload");
		var isXHR = supportAjaxUploadWithProgress();

		function supportAjaxUploadProgressEvents() {
			var xhr = new window.XMLHttpRequest;
			return !!(xhr && "upload" in xhr && "onprogress" in xhr.upload)
		}
		function supportFormData() {
			return !!window.FormData
		}
		function supportAjaxUploadWithProgress() {
			return supportAjaxUploadProgressEvents() && supportFormData()
		}
		var MUploader = function MUploader(opt) {
				var that = this;
				var container = opt.container;
				var $fileInput = opt.fileInput;
				var shouldContinue = true;
				var uploadTimer = -1;
				$(container).on("click", function() {
					if (that.onClick) {
						that.onClick()
					}
				});
				$fileInput.bind("fileuploadadd", function(e, data) {
					uploadTimer = setTimeout(function() {
						uploadTimer = -1;
						if (that.onComplete) {
							var result = {
								ret: -1,
								msg: "请求超时，请检查网络状态并确定文件小于5M"
							};
							that.onComplete(result)
						}
					}, 8e3);
					var file = data.files[0];
					if (that.onSelect) {
						shouldContinue = that.onSelect(file);
						if (shouldContinue) {
							clearTimeout(uploadTimer);
							uploadTimer = -1
						}
					}
					return true
				}).bind("fileuploadsubmit", function(e, data) {
					return true
				}).bind("fileuploadsend", function(e, data) {
					var file = data.files[0];
					if (that.onProgress) {
						that.onProgress(file)
					}
					return true
				}).bind("fileuploaddone", function(e, data) {
					if (uploadTimer !== -1) {
						clearTimeout(uploadTimer);
						uploadTimer = -1
					}
					var result = data.result;
					if (!isXHR) {
						result = $.parseJSON(result)
					}
					if (that.onComplete) {
						that.onComplete(result)
					}
				}).bind("fileuploadfail", function(e, data) {
					if (that.onError) {
						that.onError()
					}
				});
				$fileInput.fileupload({
					add: function add(e, data) {
						if (shouldContinue) {
							var file = data.files[0];
							var submitData = void 0;
							if (that.onSubmit) {
								submitData = that.onSubmit(file);
								if (isXHR) {
									data.forceIframeTransport = false;
									data.dataType = submitData.type
								} else {
									data.forceIframeTransport = true;
									data.dataType = "text";
									submitData.data.redirect = window.location.protocol + "//" + window.location.host + "/common/picRedirect?%s"
								}
								data.url = submitData.url;
								data.formData = submitData.data;
								data.formData.Filename = file.name;
								data.submit()
							}
						}
						$fileInput = $(this)
					}
				})
			};
		MUploader.prototype.addListener = function(ls) {
			for (var p in ls) {
				if (typeof ls[p] === "function") {
					this[p] = ls[p]
				}
			}
		};
		window._cfCommon = window._cfCommon || {};
		window._cfCommon.fileuploader = MUploader;
		exports["default"] = MUploader;
	}, {
		"./jquery-fileupload": 5
	}],
	4: [function(require, module, exports) {
		"use strict";
		Object.defineProperty(exports, "__esModule", {
			value: true
		});
		exports.setValidateConfig = setValidateConfig;
		exports.validate = validate;
		exports.blurValidate = blurValidate;
		exports.getFormParam = getFormParam;
		var _utils = require("./utils");
		var _utils2 = _interopRequireDefault(_utils);

		function _interopRequireDefault(obj) {
			return obj && obj.__esModule ? obj : {
				"default": obj
			}
		}
		var getStringByteLength = _utils2["default"].getStringByteLength,
			isBoxAtViewPort = _utils2["default"].isBoxAtViewPort;
		var config = {
			renderTips: function renderTips(el, type, msg) {
				if (type === "error") {
					$(".j_validate_tips", el.parentNode.parentNode.parentNode).html('<b class="form_tips nopass j_error_tips"><i class="ico ico_tips"></i>' + (msg ? msg : "") + "</b>")
				} else if (type === "success") {
					$(".j_validate_tips", el.parentNode.parentNode.parentNode).html('<b class="form_tips pass" style=""><i class="ico ico_tips"></i>' + (msg ? msg : "") + "</b>")
				} else {
					$(".j_validate_tips", el.parentNode.parentNode.parentNode).html(msg ? msg : "")
				}
			},
			errorClass: ".err-tips",
			colClass: ".form-col"
		};
		var regExps = {
			email: /^[0-9A-Za-z\-\_\.]+\@[0-9A-Za-z\-\_]+(\.[0-9A-Za-z\-\_]+)+$/,
			url: /^(http(s)*:\/\/)?[\w-]+(\.[\w-]+)+(:\d+)?(\/[\w.%-]+)*\/?$/i,
			fullUrl: /^(http(s)*:\/\/)?[\w-]+(\.[\w-]+)+(:\d+)?([\/?#][-\w%.!~*'()\/?&=#]*)?$/i,
			phone: /^([0-9]+\-)*[0-9]+$/,
			mobile_phone: /^1\d{10}$/,
			uin: /^[1-9][0-9]{4,9}$/,
			common: /^[0-9a-zA-Z\u4E00-\u9FA5\uF900-\uFA2D]+$/,
			company_idcard: /^[0-9]{10,20}$/,
			person_idcard: /^[0-9xX]{18}$/,
			passport: /^[0-9a-zA-Z]+$/,
			lazy: /^[^<>'"]+$/,
			human_name: /^[a-zA-Z\u4E00-\u9FA5\uF900-\uFA2D][a-zA-Z\u4E00-\u9FA5\uF900-\uFA2D\s]*$/,
			human_name_cn_no_nec: /^([\u4E00-\u9FA5]{2,5}|.{0,0})$/,
			sensetive: /^[^'"<>]+$/,
			num: /(^[1-9][0-9]*$)|(^0$)/,
			num_x: /(^[1-9][0-9]*%?$)/,
			num_positive: /^[1-9][0-9]*$/,
			num_pi: /^(([1-9]\d{0,8})%|[1-9]\d*)$/,
			keyword: /^[a-zA-Z\u4E00-\u9FA5\uF900-\uFA2D;]+$/,
			cn: /[\u4e00-\u9fa5\uF900-\uFA2D]/,
			en: /^[a-zA-Z ]+$/,
			qq: /^[1-9][0-9]{4,11}$/,
			float_num: /^([1-9]\d*|0)(\.\d+)?$/,
			float_num_positive: /^([1-9]\d*(\.\d+)?|0\.\d+)$/,
			percent: /^(100|([1-9]\d?|0)(\.\d+)?)$/,
			percent_positive: /^(100|([1-9]\d?(\.\d+)?)|0\.\d+)$/,
			wechat: /^[A-Za-z][A-Za-z0-9_\-]{5,19}$/,
			percent_int: /^(100|([1-9]\d?))$/,
			licence: /^\d{15}$/,
			YYYYMM: /^(19|20)\d{2}(0[1-9]|1[0-2])$/,
			vcode: /^\d{6}$/,
			discount: /^(0\.[1-9])|([1-9]\.[0-9])$|(^[1-9]$)/,
			pkgname: /^[A-Za-z.1-9_]{0,100}$/,
			company_licence: /(^[0-9a-zA-Z-]{8,20}$)/,
			tax_num: /(^[0-9a-zA-Z-]{1,20}$)/,
			service_vcode: /^[0-9a-zA-Z]{16}$/,
			special_code: /^[，。、；：？！‘’“”《》【】｛｝（）——……￥\r\n\x20-\x7e\u4e00-\u9fbf]*$/
		};
		var validateInput = {
			empty: function empty(el, msg, form, opts) {
				if (opts && opts.ignoreTypes && ~opts.ignoreTypes.indexOf("empty") && !$(el).attr("cant_empty")) {
					config.renderTips(el, "success");
					return true
				}
				var val = void 0;
				if (el.type === "radio") {
					val = getRadioValue(el, form)
				} else if (el.type === "checkbox") {
					val = getCheckboxValue(el, form)
				} else {
					val = $.trim(el.value)
				}
				if (val.length === 0) {
					config.renderTips(el, "error", msg || "该项不能为空");
					return false
				} else {
					return true
				}
			},
			regex: function regex(el, msg, form) {
				var reg = el.getAttribute("validate_regex");
				if (!reg) {
					return true
				}
				var mode = "";
				reg = reg.replace(/\(\?([imgsx]+)\)/, function($, $1) {
					mode = $1;
					return ""
				});
				reg = new RegExp(reg, mode);
				if (!reg.test(el.value)) {
					config.renderTips(el, "error", msg || "请填写符合规范的信息");
					return false
				} else {
					return true
				}
			},
			length: function length(el, msg) {
				var val = $.trim(el.value);
				var maxLength = $(el).attr("maxlen") * 2;
				var minLength = $(el).attr("minlen") * 2 || 0;
				if (getStringByteLength(val) === 0) {
					return true
				}
				if (getStringByteLength(val) > maxLength || getStringByteLength(val) < minLength) {
					config.renderTips(el, "error", msg || "该项不能超过" + maxLength / 2 + "个字");
					return false
				} else {
					return true
				}
			},
			jsLength: function jsLength(el, msg) {
				var val = $.trim(el.value);
				var len = val.replace(/(\r\n|\n|\r)/g, "-").length;
				var maxLength = $(el).attr("maxlen");
				var minLength = $(el).attr("minlen") || 0;
				if (len === 0) {
					return true
				}
				if (len > maxLength || len < minLength) {
					config.renderTips(el, "error", msg || "该项不能超过" + maxLength + "个字");
					return false
				} else {
					return true
				}
			},
			charLength: function charLength(el, msg) {
				var val = $.trim(el.value);
				var maxLength = $(el).attr("maxlen");
				var minLength = $(el).attr("minlen") || 0;
				if (val.length > maxLength || val.length < minLength) {
					config.renderTips(el, "error", msg || "该项不能超过" + maxLength + "个字符");
					return false
				} else {
					return true
				}
			},
			legal: function legal(el, msg) {
				var val = $.trim(el.value) + "";
				var legalType = $(el).attr("legal_type");
				if (val.length !== 0 && legalType.length !== 0) {
					if (regExps[legalType] && regExps[legalType].test(val)) {
						return true
					} else {
						config.renderTips(el, "error", msg || "请填写符合规范的信息");
						return false
					}
				} else {
					return true
				}
			},
			dirtyContent: function dirtyContent(el, msg) {
				var val = $.trim(el.value);
				if (!val) {
					return true
				}
				config.checkDirty(el, function(ret) {
					if (ret.ret === 0) {
						config.renderTips(el, "success", "")
					} else {
						config.renderTips(el, "error", ret.msg || msg || "请填写符合规范的信息")
					}
				});
				return true
			}
		};

		function setValidateConfig(conf) {
			$.extend(config, conf)
		}
		function validate(form, opts) {
			var result = true;
			if (config.clearTips) {
				config.clearTips(form)
			} else {
				$(".validate_tips", form).html("")
			}
			autoValidates(form, opts);
			var errList = $(config.errorClass + ":visible", form) || [];
			for (var i = 0; i < errList.length; i++) {
				if (config.ignoreHidden && isHidden(errList[i], form)) {
					continue
				}
				result = false
			}
			return result
		}
		function blurValidate(form, opts) {
			var validateInputList = $("input[validate],textarea[validate],select[validate]", form);
			validateInputList.each(function(index, elem) {
				elem.onfocus = function() {
					elem._ever_focused = true;
					config.renderTips(elem, "hide", "")
				};
				if ($(elem)[0].nodeName === "SELECT" || $(elem).attr("_type")) {
					$(elem).change(function() {
						autoValidate(elem, null, opts)
					})
				}
				if ($(elem).attr("_type") !== "date") {
					elem.onblur = function() {
						autoValidate(elem, null, opts)
					}
				}
			})
		}
		function getFormParam(form) {
			var param = {};
			$("input,textarea,select", form).each(function(index, elem) {
				if (!elem.name) {
					return
				}
				if (elem.type === "text" || elem.type === "date" || elem.type === "hidden" || elem.type === "textarea" || /^select$/i.test(elem.tagName)) {
					param[elem.name] = $.trim(elem.value)
				}
				if (elem.type === "radio") {
					if (elem.checked) {
						param[elem.name] = $.trim(elem.value)
					}
				}
				if (elem.type === "checkbox") {
					if (elem.checked) {
						if (param[elem.name]) {
							param[elem.name] += "," + $.trim(elem.value)
						} else {
							param[elem.name] = $.trim(elem.value)
						}
					}
				}
			});
			return param
		}
		function autoValidates(form, opts) {
			var validateInputList = $("input[validate],textarea[validate],select[validate]", form);
			var result = true;
			var hasFocus = false;
			var elements = validateInputList;
			for (var i = 0; i < elements.length; i++) {
				result = autoValidate(elements[i], form, opts);
				if (!result && !hasFocus) {
					var x = $(elements[i]).closest(config.colClass).find(config.errorClass).offset();
					if (!isBoxAtViewPort($(elements[i]).closest(config.colClass).find(config.errorClass))) {
						window.scrollTo(0, x.top - 100)
					}
					hasFocus = true
				}
			}
		}
		function autoValidate(el, form, opts) {
			if (config.ignoreHidden && isHidden(el, form)) {
				return true
			}
			var result = true;
			var $el = $(el);
			var validateTypeArray = $el.attr("validate_type") && $el.attr("validate_type").split("|") || [];
			var tipsArray = $el.attr("validate_tip") && $el.attr("validate_tip").split("|") || [];
			for (var i = 0; i < validateTypeArray.length; i++) {
				result = validateInput[validateTypeArray[i]](el, tipsArray[i] || tipsArray[0], form, opts);
				if (!result) {
					break
				}
			}
			if (result) {
				if ($.trim(el.value) !== 0) {
					config.renderTips(el, "success", "")
				}
			}
			return result
		}
		function isHidden(element, form) {
			form = form || element.form || null;
			while (element) {
				if (element.style.display === "none") {
					if (!canHold()) {
						if (element.getAttribute("placeholder") !== "" && element.previousSibling && element.previousSibling.nodeType === 1 && element.previousSibling.getAttribute("_isholder")) {
							if (element.previousSibling.style.display === "none") {
								return true
							} else {
								return false
							}
						} else {
							return true
						}
					}
					return true
				}
				if (element === form) {
					return false
				}
				if (element === document.body) {
					return false
				}
				element = element.parentNode
			}
		}
		function canHold() {
			return "placeholder" in document.createElement("input") && !/Trident\/7\./.test(navigator.userAgent)
		}
		function getRadioValue(el, form) {
			var value = "";
			$("input[name=" + el.name + "]", form).each(function(index, elem) {
				if (elem.checked) {
					value = $.trim(elem.value)
				}
			});
			return value
		}
		function getCheckboxValue(el, form) {
			var value = "";
			$("input[name=" + el.name + "]", form).each(function(index, elem) {
				if (elem.checked) {
					if (value) {
						value += "," + $.trim(elem.value)
					} else {
						value = $.trim(elem.value)
					}
				}
			});
			return value
		}
		var formValidate = {
			regExps: regExps,
			setValidateConfig: setValidateConfig,
			validate: validate,
			blurValidate: blurValidate,
			getFormParam: getFormParam
		};
		window._cfCommon = window._cfCommon || {};
		window._cfCommon.formValidate = formValidate;
		exports["default"] = formValidate;
	}, {
		"./utils": 16
	}],
	5: [function(require, module, exports) {
		"use strict";
		var widget_uuid = 0,
			widget_slice = Array.prototype.slice;
		$.cleanData = function(orig) {
			return function(elems) {
				var events, elem, i;
				for (i = 0;
				(elem = elems[i]) != null; i++) {
					try {
						events = $._data(elem, "events");
						if (events && events.remove) {
							$(elem).triggerHandler("remove")
						}
					} catch (e) {}
				}
				orig(elems)
			}
		}($.cleanData);
		$.widget = function(name, base, prototype) {
			var fullName, existingConstructor, constructor, basePrototype, proxiedPrototype = {},
				namespace = name.split(".")[0];
			name = name.split(".")[1];
			fullName = namespace + "-" + name;
			if (!prototype) {
				prototype = base;
				base = $.Widget
			}
			$.expr[":"][fullName.toLowerCase()] = function(elem) {
				return !!$.data(elem, fullName)
			};
			$[namespace] = $[namespace] || {};
			existingConstructor = $[namespace][name];
			constructor = $[namespace][name] = function(options, element) {
				if (!this._createWidget) {
					return new constructor(options, element)
				}
				if (arguments.length) {
					this._createWidget(options, element)
				}
			};
			$.extend(constructor, existingConstructor, {
				version: prototype.version,
				_proto: $.extend({}, prototype),
				_childConstructors: []
			});
			basePrototype = new base;
			basePrototype.options = $.widget.extend({}, basePrototype.options);
			$.each(prototype, function(prop, value) {
				if (!$.isFunction(value)) {
					proxiedPrototype[prop] = value;
					return
				}
				proxiedPrototype[prop] = function() {
					var _super = function _super() {
							return base.prototype[prop].apply(this, arguments)
						},
						_superApply = function _superApply(args) {
							return base.prototype[prop].apply(this, args)
						};
					return function() {
						var __super = this._super,
							__superApply = this._superApply,
							returnValue;
						this._super = _super;
						this._superApply = _superApply;
						returnValue = value.apply(this, arguments);
						this._super = __super;
						this._superApply = __superApply;
						return returnValue
					}
				}()
			});
			constructor.prototype = $.widget.extend(basePrototype, {
				widgetEventPrefix: existingConstructor ? basePrototype.widgetEventPrefix || name : name
			}, proxiedPrototype, {
				constructor: constructor,
				namespace: namespace,
				widgetName: name,
				widgetFullName: fullName
			});
			if (existingConstructor) {
				$.each(existingConstructor._childConstructors, function(i, child) {
					var childPrototype = child.prototype;
					$.widget(childPrototype.namespace + "." + childPrototype.widgetName, constructor, child._proto)
				});
				delete existingConstructor._childConstructors
			} else {
				base._childConstructors.push(constructor)
			}
			$.widget.bridge(name, constructor);
			return constructor
		};
		$.widget.extend = function(target) {
			var input = widget_slice.call(arguments, 1),
				inputIndex = 0,
				inputLength = input.length,
				key, value;
			for (; inputIndex < inputLength; inputIndex++) {
				for (key in input[inputIndex]) {
					value = input[inputIndex][key];
					if (input[inputIndex].hasOwnProperty(key) && value !== undefined) {
						if ($.isPlainObject(value)) {
							target[key] = $.isPlainObject(target[key]) ? $.widget.extend({}, target[key], value) : $.widget.extend({}, value)
						} else {
							target[key] = value
						}
					}
				}
			}
			return target
		};
		$.widget.bridge = function(name, object) {
			var fullName = object.prototype.widgetFullName || name;
			$.fn[name] = function(options) {
				var isMethodCall = typeof options === "string",
					args = widget_slice.call(arguments, 1),
					returnValue = this;
				if (isMethodCall) {
					this.each(function() {
						var methodValue, instance = $.data(this, fullName);
						if (options === "instance") {
							returnValue = instance;
							return false
						}
						if (!instance) {
							return $.error("cannot call methods on " + name + " prior to initialization; " + "attempted to call method '" + options + "'")
						}
						if (!$.isFunction(instance[options]) || options.charAt(0) === "_") {
							return $.error("no such method '" + options + "' for " + name + " widget instance")
						}
						methodValue = instance[options].apply(instance, args);
						if (methodValue !== instance && methodValue !== undefined) {
							returnValue = methodValue && methodValue.jquery ? returnValue.pushStack(methodValue.get()) : methodValue;
							return false
						}
					})
				} else {
					if (args.length) {
						options = $.widget.extend.apply(null, [options].concat(args))
					}
					this.each(function() {
						var instance = $.data(this, fullName);
						if (instance) {
							instance.option(options || {});
							if (instance._init) {
								instance._init()
							}
						} else {
							$.data(this, fullName, new object(options, this))
						}
					})
				}
				return returnValue
			}
		};
		$.Widget = function() {};
		$.Widget._childConstructors = [];
		$.Widget.prototype = {
			widgetName: "widget",
			widgetEventPrefix: "",
			defaultElement: "<div>",
			options: {
				disabled: false,
				create: null
			},
			_createWidget: function _createWidget(options, element) {
				element = $(element || this.defaultElement || this)[0];
				this.element = $(element);
				this.uuid = widget_uuid++;
				this.eventNamespace = "." + this.widgetName + this.uuid;
				this.bindings = $();
				this.hoverable = $();
				this.focusable = $();
				if (element !== this) {
					$.data(element, this.widgetFullName, this);
					this._on(true, this.element, {
						remove: function remove(event) {
							if (event.target === element) {
								this.destroy()
							}
						}
					});
					this.document = $(element.style ? element.ownerDocument : element.document || element);
					this.window = $(this.document[0].defaultView || this.document[0].parentWindow)
				}
				this.options = $.widget.extend({}, this.options, this._getCreateOptions(), options);
				this._create();
				this._trigger("create", null, this._getCreateEventData());
				this._init()
			},
			_getCreateOptions: $.noop,
			_getCreateEventData: $.noop,
			_create: $.noop,
			_init: $.noop,
			destroy: function destroy() {
				this._destroy();
				this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData($.camelCase(this.widgetFullName));
				this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled " + "ui-state-disabled");
				this.bindings.unbind(this.eventNamespace);
				this.hoverable.removeClass("ui-state-hover");
				this.focusable.removeClass("ui-state-focus")
			},
			_destroy: $.noop,
			widget: function widget() {
				return this.element
			},
			option: function option(key, value) {
				var options = key,
					parts, curOption, i;
				if (arguments.length === 0) {
					return $.widget.extend({}, this.options)
				}
				if (typeof key === "string") {
					options = {};
					parts = key.split(".");
					key = parts.shift();
					if (parts.length) {
						curOption = options[key] = $.widget.extend({}, this.options[key]);
						for (i = 0; i < parts.length - 1; i++) {
							curOption[parts[i]] = curOption[parts[i]] || {};
							curOption = curOption[parts[i]]
						}
						key = parts.pop();
						if (arguments.length === 1) {
							return curOption[key] === undefined ? null : curOption[key]
						}
						curOption[key] = value
					} else {
						if (arguments.length === 1) {
							return this.options[key] === undefined ? null : this.options[key]
						}
						options[key] = value
					}
				}
				this._setOptions(options);
				return this
			},
			_setOptions: function _setOptions(options) {
				var key;
				for (key in options) {
					this._setOption(key, options[key])
				}
				return this
			},
			_setOption: function _setOption(key, value) {
				this.options[key] = value;
				if (key === "disabled") {
					this.widget().toggleClass(this.widgetFullName + "-disabled", !! value);
					if (value) {
						this.hoverable.removeClass("ui-state-hover");
						this.focusable.removeClass("ui-state-focus")
					}
				}
				return this
			},
			enable: function enable() {
				return this._setOptions({
					disabled: false
				})
			},
			disable: function disable() {
				return this._setOptions({
					disabled: true
				})
			},
			_on: function _on(suppressDisabledCheck, element, handlers) {
				var delegateElement, instance = this;
				if (typeof suppressDisabledCheck !== "boolean") {
					handlers = element;
					element = suppressDisabledCheck;
					suppressDisabledCheck = false
				}
				if (!handlers) {
					handlers = element;
					element = this.element;
					delegateElement = this.widget()
				} else {
					element = delegateElement = $(element);
					this.bindings = this.bindings.add(element)
				}
				$.each(handlers, function(event, handler) {
					function handlerProxy() {
						if (!suppressDisabledCheck && (instance.options.disabled === true || $(this).hasClass("ui-state-disabled"))) {
							return
						}
						return (typeof handler === "string" ? instance[handler] : handler).apply(instance, arguments)
					}
					if (typeof handler !== "string") {
						handlerProxy.guid = handler.guid = handler.guid || handlerProxy.guid || $.guid++
					}
					var match = event.match(/^([\w:-]*)\s*(.*)$/),
						eventName = match[1] + instance.eventNamespace,
						selector = match[2];
					if (selector) {
						delegateElement.delegate(selector, eventName, handlerProxy)
					} else {
						element.bind(eventName, handlerProxy)
					}
				})
			},
			_off: function _off(element, eventName) {
				eventName = (eventName || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace;
				element.unbind(eventName).undelegate(eventName);
				this.bindings = $(this.bindings.not(element).get());
				this.focusable = $(this.focusable.not(element).get());
				this.hoverable = $(this.hoverable.not(element).get())
			},
			_delay: function _delay(handler, delay) {
				function handlerProxy() {
					return (typeof handler === "string" ? instance[handler] : handler).apply(instance, arguments)
				}
				var instance = this;
				return setTimeout(handlerProxy, delay || 0)
			},
			_hoverable: function _hoverable(element) {
				this.hoverable = this.hoverable.add(element);
				this._on(element, {
					mouseenter: function mouseenter(event) {
						$(event.currentTarget).addClass("ui-state-hover")
					},
					mouseleave: function mouseleave(event) {
						$(event.currentTarget).removeClass("ui-state-hover")
					}
				})
			},
			_focusable: function _focusable(element) {
				this.focusable = this.focusable.add(element);
				this._on(element, {
					focusin: function focusin(event) {
						$(event.currentTarget).addClass("ui-state-focus")
					},
					focusout: function focusout(event) {
						$(event.currentTarget).removeClass("ui-state-focus")
					}
				})
			},
			_trigger: function _trigger(type, event, data) {
				var prop, orig, callback = this.options[type];
				data = data || {};
				event = $.Event(event);
				event.type = (type === this.widgetEventPrefix ? type : this.widgetEventPrefix + type).toLowerCase();
				event.target = this.element[0];
				orig = event.originalEvent;
				if (orig) {
					for (prop in orig) {
						if (!(prop in event)) {
							event[prop] = orig[prop]
						}
					}
				}
				this.element.trigger(event, data);
				return !($.isFunction(callback) && callback.apply(this.element[0], [event].concat(data)) === false || event.isDefaultPrevented())
			}
		};
		$.each({
			show: "fadeIn",
			hide: "fadeOut"
		}, function(method, defaultEffect) {
			$.Widget.prototype["_" + method] = function(element, options, callback) {
				if (typeof options === "string") {
					options = {
						effect: options
					}
				}
				var hasOptions, effectName = !options ? method : options === true || typeof options === "number" ? defaultEffect : options.effect || defaultEffect;
				options = options || {};
				if (typeof options === "number") {
					options = {
						duration: options
					}
				}
				hasOptions = !$.isEmptyObject(options);
				options.complete = callback;
				if (options.delay) {
					element.delay(options.delay)
				}
				if (hasOptions && $.effects && $.effects.effect[effectName]) {
					element[method](options)
				} else if (effectName !== method && element[effectName]) {
					element[effectName](options.duration, options.easing, callback)
				} else {
					element.queue(function(next) {
						$(this)[method]();
						if (callback) {
							callback.call(element[0])
						}
						next()
					})
				}
			}
		});
		var widget = $.widget;
		var counter = 0;
		$.ajaxTransport("iframe", function(options) {
			if (options.async) {
				var initialIframeSrc = options.initialIframeSrc || "javascript:false;",
					form, iframe, addParamChar;
				return {
					send: function send(_, completeCallback) {
						form = $('<form style="display:none;"></form>');
						form.attr("accept-charset", options.formAcceptCharset);
						addParamChar = /\?/.test(options.url) ? "&" : "?";
						if (options.type === "DELETE") {
							options.url = options.url + addParamChar + "_method=DELETE";
							options.type = "POST"
						} else if (options.type === "PUT") {
							options.url = options.url + addParamChar + "_method=PUT";
							options.type = "POST"
						} else if (options.type === "PATCH") {
							options.url = options.url + addParamChar + "_method=PATCH";
							options.type = "POST"
						}
						counter += 1;
						iframe = $('<iframe src="' + initialIframeSrc + '" name="iframe-transport-' + counter + '"></iframe>').bind("load", function() {
							var fileInputClones, paramNames = $.isArray(options.paramName) ? options.paramName : [options.paramName];
							iframe.unbind("load").bind("load", function() {
								var response;
								try {
									response = iframe.contents();
									if (!response.length || !response[0].firstChild) {
										throw new Error
									}
								} catch (e) {
									response = undefined
								}
								completeCallback(200, "success", {
									iframe: response
								});
								$('<iframe src="' + initialIframeSrc + '"></iframe>').appendTo(form);
								window.setTimeout(function() {
									form.remove()
								}, 0)
							});
							form.prop("target", iframe.prop("name")).prop("action", options.url).prop("method", options.type);
							if (options.formData) {
								$.each(options.formData, function(index, field) {
									$('<input type="hidden"/>').prop("name", field.name).val(field.value).appendTo(form)
								})
							}
							if (options.fileInput && options.fileInput.length && options.type === "POST") {
								fileInputClones = options.fileInput.clone();
								options.fileInput.after(function(index) {
									return fileInputClones[index]
								});
								if (options.paramName) {
									options.fileInput.each(function(index) {
										$(this).prop("name", paramNames[index] || options.paramName)
									})
								}
								form.append(options.fileInput).prop("enctype", "multipart/form-data").prop("encoding", "multipart/form-data");
								options.fileInput.removeAttr("form")
							}
							form.submit();
							if (fileInputClones && fileInputClones.length) {
								options.fileInput.each(function(index, input) {
									var clone = $(fileInputClones[index]);
									$(input).prop("name", clone.prop("name")).attr("form", clone.attr("form"));
									clone.replaceWith(input)
								})
							}
						});
						form.append(iframe).appendTo(document.body)
					},
					abort: function abort() {
						if (iframe) {
							iframe.unbind("load").prop("src", initialIframeSrc)
						}
						if (form) {
							form.remove()
						}
					}
				}
			}
		});
		$.ajaxSetup({
			converters: {
				"iframe text": function iframeText(iframe) {
					return iframe && $(iframe[0].body).text()
				},
				"iframe json": function iframeJson(iframe) {
					return iframe && $.parseJSON($(iframe[0].body).text())
				},
				"iframe html": function iframeHtml(iframe) {
					return iframe && $(iframe[0].body).html()
				},
				"iframe xml": function iframeXml(iframe) {
					var xmlDoc = iframe && iframe[0];
					return xmlDoc && $.isXMLDoc(xmlDoc) ? xmlDoc : $.parseXML(xmlDoc.XMLDocument && xmlDoc.XMLDocument.xml || $(xmlDoc.body).html())
				},
				"iframe script": function iframeScript(iframe) {
					return iframe && $.globalEval($(iframe[0].body).text())
				}
			}
		});
		$.support.fileInput = !(new RegExp("(Android (1\\.[0156]|2\\.[01]))" + "|(Windows Phone (OS 7|8\\.0))|(XBLWP)|(ZuneWP)|(WPDesktop)" + "|(w(eb)?OSBrowser)|(webOS)" + "|(Kindle/(1\\.0|2\\.[05]|3\\.0))").test(window.navigator.userAgent) || $('<input type="file">').prop("disabled"));
		$.support.xhrFileUpload = !! (window.ProgressEvent && window.FileReader);
		$.support.xhrFormDataFileUpload = !! window.FormData;
		$.support.blobSlice = window.Blob && (Blob.prototype.slice || Blob.prototype.webkitSlice || Blob.prototype.mozSlice);

		function getDragHandler(type) {
			var isDragOver = type === "dragover";
			return function(e) {
				e.dataTransfer = e.originalEvent && e.originalEvent.dataTransfer;
				var dataTransfer = e.dataTransfer;
				if (dataTransfer && $.inArray("Files", dataTransfer.types) !== -1 && this._trigger(type, $.Event(type, {
					delegatedEvent: e
				})) !== false) {
					e.preventDefault();
					if (isDragOver) {
						dataTransfer.dropEffect = "copy"
					}
				}
			}
		}
		$.widget("blueimp.fileupload", {
			options: {
				dropZone: $(document),
				pasteZone: undefined,
				fileInput: undefined,
				replaceFileInput: true,
				paramName: undefined,
				singleFileUploads: true,
				limitMultiFileUploads: undefined,
				limitMultiFileUploadSize: undefined,
				limitMultiFileUploadSizeOverhead: 512,
				sequentialUploads: false,
				limitConcurrentUploads: undefined,
				forceIframeTransport: false,
				redirect: undefined,
				redirectParamName: undefined,
				postMessage: undefined,
				multipart: true,
				maxChunkSize: undefined,
				uploadedBytes: undefined,
				recalculateProgress: true,
				progressInterval: 100,
				bitrateInterval: 500,
				autoUpload: true,
				messages: {
					uploadedBytes: "Uploaded bytes exceed file size"
				},
				i18n: function i18n(message, context) {
					message = this.messages[message] || message.toString();
					if (context) {
						$.each(context, function(key, value) {
							message = message.replace("{" + key + "}", value)
						})
					}
					return message
				},
				formData: function formData(form) {
					return form.serializeArray()
				},
				add: function add(e, data) {
					if (e.isDefaultPrevented()) {
						return false
					}
					if (data.autoUpload || data.autoUpload !== false && $(this).fileupload("option", "autoUpload")) {
						data.process().done(function() {
							data.submit()
						})
					}
				},
				processData: false,
				contentType: false,
				cache: false,
				timeout: 0
			},
			_specialOptions: ["fileInput", "dropZone", "pasteZone", "multipart", "forceIframeTransport"],
			_blobSlice: $.support.blobSlice &&
			function() {
				var slice = this.slice || this.webkitSlice || this.mozSlice;
				return slice.apply(this, arguments)
			},
			_BitrateTimer: function _BitrateTimer() {
				this.timestamp = Date.now ? Date.now() : (new Date).getTime();
				this.loaded = 0;
				this.bitrate = 0;
				this.getBitrate = function(now, loaded, interval) {
					var timeDiff = now - this.timestamp;
					if (!this.bitrate || !interval || timeDiff > interval) {
						this.bitrate = (loaded - this.loaded) * (1e3 / timeDiff) * 8;
						this.loaded = loaded;
						this.timestamp = now
					}
					return this.bitrate
				}
			},
			_isXHRUpload: function _isXHRUpload(options) {
				return !options.forceIframeTransport && (!options.multipart && $.support.xhrFileUpload || $.support.xhrFormDataFileUpload)
			},
			_getFormData: function _getFormData(options) {
				var formData;
				if ($.type(options.formData) === "function") {
					return options.formData(options.form)
				}
				if ($.isArray(options.formData)) {
					return options.formData
				}
				if ($.type(options.formData) === "object") {
					formData = [];
					$.each(options.formData, function(name, value) {
						formData.push({
							name: name,
							value: value
						})
					});
					return formData
				}
				return []
			},
			_getTotal: function _getTotal(files) {
				var total = 0;
				$.each(files, function(index, file) {
					total += file.size || 1
				});
				return total
			},
			_initProgressObject: function _initProgressObject(obj) {
				var progress = {
					loaded: 0,
					total: 0,
					bitrate: 0
				};
				if (obj._progress) {
					$.extend(obj._progress, progress)
				} else {
					obj._progress = progress
				}
			},
			_initResponseObject: function _initResponseObject(obj) {
				var prop;
				if (obj._response) {
					for (prop in obj._response) {
						if (obj._response.hasOwnProperty(prop)) {
							delete obj._response[prop]
						}
					}
				} else {
					obj._response = {}
				}
			},
			_onProgress: function _onProgress(e, data) {
				if (e.lengthComputable) {
					var now = Date.now ? Date.now() : (new Date).getTime(),
						loaded;
					if (data._time && data.progressInterval && now - data._time < data.progressInterval && e.loaded !== e.total) {
						return
					}
					data._time = now;
					loaded = Math.floor(e.loaded / e.total * (data.chunkSize || data._progress.total)) + (data.uploadedBytes || 0);
					this._progress.loaded += loaded - data._progress.loaded;
					this._progress.bitrate = this._bitrateTimer.getBitrate(now, this._progress.loaded, data.bitrateInterval);
					data._progress.loaded = data.loaded = loaded;
					data._progress.bitrate = data.bitrate = data._bitrateTimer.getBitrate(now, loaded, data.bitrateInterval);
					this._trigger("progress", $.Event("progress", {
						delegatedEvent: e
					}), data);
					this._trigger("progressall", $.Event("progressall", {
						delegatedEvent: e
					}), this._progress)
				}
			},
			_initProgressListener: function _initProgressListener(options) {
				var that = this,
					xhr = options.xhr ? options.xhr() : $.ajaxSettings.xhr();
				if (xhr.upload) {
					$(xhr.upload).bind("progress", function(e) {
						var oe = e.originalEvent;
						e.lengthComputable = oe.lengthComputable;
						e.loaded = oe.loaded;
						e.total = oe.total;
						that._onProgress(e, options)
					});
					options.xhr = function() {
						return xhr
					}
				}
			},
			_isInstanceOf: function _isInstanceOf(type, obj) {
				return Object.prototype.toString.call(obj) === "[object " + type + "]"
			},
			_initXHRData: function _initXHRData(options) {
				var that = this,
					formData, file = options.files[0],
					multipart = options.multipart || !$.support.xhrFileUpload,
					paramName = $.type(options.paramName) === "array" ? options.paramName[0] : options.paramName;
				options.headers = $.extend({}, options.headers);
				if (options.contentRange) {
					options.headers["Content-Range"] = options.contentRange
				}
				if (!multipart || options.blob || !this._isInstanceOf("File", file)) {
					options.headers["Content-Disposition"] = 'attachment; filename="' + encodeURI(file.name) + '"'
				}
				if (!multipart) {
					options.contentType = file.type || "application/octet-stream";
					options.data = options.blob || file
				} else if ($.support.xhrFormDataFileUpload) {
					if (options.postMessage) {
						formData = this._getFormData(options);
						if (options.blob) {
							formData.push({
								name: paramName,
								value: options.blob
							})
						} else {
							$.each(options.files, function(index, file) {
								formData.push({
									name: $.type(options.paramName) === "array" && options.paramName[index] || paramName,
									value: file
								})
							})
						}
					} else {
						if (that._isInstanceOf("FormData", options.formData)) {
							formData = options.formData
						} else {
							formData = new FormData;
							$.each(this._getFormData(options), function(index, field) {
								formData.append(field.name, field.value)
							})
						}
						if (options.blob) {
							formData.append(paramName, options.blob, file.name)
						} else {
							$.each(options.files, function(index, file) {
								if (that._isInstanceOf("File", file) || that._isInstanceOf("Blob", file)) {
									formData.append($.type(options.paramName) === "array" && options.paramName[index] || paramName, file, file.uploadName || file.name)
								}
							})
						}
					}
					options.data = formData
				}
				options.blob = null
			},
			_initIframeSettings: function _initIframeSettings(options) {
				var targetHost = $("<a></a>").prop("href", options.url).prop("host");
				options.dataType = "iframe " + (options.dataType || "");
				options.formData = this._getFormData(options);
				if (options.redirect && targetHost && targetHost !== location.host) {
					options.formData.push({
						name: options.redirectParamName || "redirect",
						value: options.redirect
					})
				}
			},
			_initDataSettings: function _initDataSettings(options) {
				if (this._isXHRUpload(options)) {
					if (!this._chunkedUpload(options, true)) {
						if (!options.data) {
							this._initXHRData(options)
						}
						this._initProgressListener(options)
					}
					if (options.postMessage) {
						options.dataType = "postmessage " + (options.dataType || "")
					}
				} else {
					this._initIframeSettings(options)
				}
			},
			_getParamName: function _getParamName(options) {
				var fileInput = $(options.fileInput),
					paramName = options.paramName;
				if (!paramName) {
					paramName = [];
					fileInput.each(function() {
						var input = $(this),
							name = input.prop("name") || "files[]",
							i = (input.prop("files") || [1]).length;
						while (i) {
							paramName.push(name);
							i -= 1
						}
					});
					if (!paramName.length) {
						paramName = [fileInput.prop("name") || "files[]"]
					}
				} else if (!$.isArray(paramName)) {
					paramName = [paramName]
				}
				return paramName
			},
			_initFormSettings: function _initFormSettings(options) {
				if (!options.form || !options.form.length) {
					options.form = $(options.fileInput.prop("form"));
					if (!options.form.length) {
						options.form = $(this.options.fileInput.prop("form"))
					}
				}
				options.paramName = this._getParamName(options);
				if (!options.url) {
					options.url = options.form.prop("action") || location.href
				}
				options.type = (options.type || $.type(options.form.prop("method")) === "string" && options.form.prop("method") || "").toUpperCase();
				if (options.type !== "POST" && options.type !== "PUT" && options.type !== "PATCH") {
					options.type = "POST"
				}
				if (!options.formAcceptCharset) {
					options.formAcceptCharset = options.form.attr("accept-charset")
				}
			},
			_getAJAXSettings: function _getAJAXSettings(data) {
				var options = $.extend({}, this.options, data);
				this._initFormSettings(options);
				this._initDataSettings(options);
				return options
			},
			_getDeferredState: function _getDeferredState(deferred) {
				if (deferred.state) {
					return deferred.state()
				}
				if (deferred.isResolved()) {
					return "resolved"
				}
				if (deferred.isRejected()) {
					return "rejected"
				}
				return "pending"
			},
			_enhancePromise: function _enhancePromise(promise) {
				promise.success = promise.done;
				promise.error = promise.fail;
				promise.complete = promise.always;
				return promise
			},
			_getXHRPromise: function _getXHRPromise(resolveOrReject, context, args) {
				var dfd = $.Deferred(),
					promise = dfd.promise();
				context = context || this.options.context || promise;
				if (resolveOrReject === true) {
					dfd.resolveWith(context, args)
				} else if (resolveOrReject === false) {
					dfd.rejectWith(context, args)
				}
				promise.abort = dfd.promise;
				return this._enhancePromise(promise)
			},
			_addConvenienceMethods: function _addConvenienceMethods(e, data) {
				var that = this,
					getPromise = function getPromise(args) {
						return $.Deferred().resolveWith(that, args).promise()
					};
				data.process = function(resolveFunc, rejectFunc) {
					if (resolveFunc || rejectFunc) {
						data._processQueue = this._processQueue = (this._processQueue || getPromise([this])).pipe(function() {
							if (data.errorThrown) {
								return $.Deferred().rejectWith(that, [data]).promise()
							}
							return getPromise(arguments)
						}).pipe(resolveFunc, rejectFunc)
					}
					return this._processQueue || getPromise([this])
				};
				data.submit = function() {
					if (this.state() !== "pending") {
						data.jqXHR = this.jqXHR = that._trigger("submit", $.Event("submit", {
							delegatedEvent: e
						}), this) !== false && that._onSend(e, this)
					}
					return this.jqXHR || that._getXHRPromise()
				};
				data.abort = function() {
					if (this.jqXHR) {
						return this.jqXHR.abort()
					}
					this.errorThrown = "abort";
					that._trigger("fail", null, this);
					return that._getXHRPromise(false)
				};
				data.state = function() {
					if (this.jqXHR) {
						return that._getDeferredState(this.jqXHR)
					}
					if (this._processQueue) {
						return that._getDeferredState(this._processQueue)
					}
				};
				data.processing = function() {
					return !this.jqXHR && this._processQueue && that._getDeferredState(this._processQueue) === "pending"
				};
				data.progress = function() {
					return this._progress
				};
				data.response = function() {
					return this._response
				}
			},
			_getUploadedBytes: function _getUploadedBytes(jqXHR) {
				var range = jqXHR.getResponseHeader("Range"),
					parts = range && range.split("-"),
					upperBytesPos = parts && parts.length > 1 && parseInt(parts[1], 10);
				return upperBytesPos && upperBytesPos + 1
			},
			_chunkedUpload: function _chunkedUpload(options, testOnly) {
				options.uploadedBytes = options.uploadedBytes || 0;
				var that = this,
					file = options.files[0],
					fs = file.size,
					ub = options.uploadedBytes,
					mcs = options.maxChunkSize || fs,
					slice = this._blobSlice,
					dfd = $.Deferred(),
					promise = dfd.promise(),
					jqXHR, _upload;
				if (!(this._isXHRUpload(options) && slice && (ub || mcs < fs)) || options.data) {
					return false
				}
				if (testOnly) {
					return true
				}
				if (ub >= fs) {
					file.error = options.i18n("uploadedBytes");
					return this._getXHRPromise(false, options.context, [null, "error", file.error])
				}
				_upload = function upload() {
					var o = $.extend({}, options),
						currentLoaded = o._progress.loaded;
					o.blob = slice.call(file, ub, ub + mcs, file.type);
					o.chunkSize = o.blob.size;
					o.contentRange = "bytes " + ub + "-" + (ub + o.chunkSize - 1) + "/" + fs;
					that._initXHRData(o);
					that._initProgressListener(o);
					jqXHR = (that._trigger("chunksend", null, o) !== false && $.ajax(o) || that._getXHRPromise(false, o.context)).done(function(result, textStatus, jqXHR) {
						ub = that._getUploadedBytes(jqXHR) || ub + o.chunkSize;
						if (currentLoaded + o.chunkSize - o._progress.loaded) {
							that._onProgress($.Event("progress", {
								lengthComputable: true,
								loaded: ub - o.uploadedBytes,
								total: ub - o.uploadedBytes
							}), o)
						}
						options.uploadedBytes = o.uploadedBytes = ub;
						o.result = result;
						o.textStatus = textStatus;
						o.jqXHR = jqXHR;
						that._trigger("chunkdone", null, o);
						that._trigger("chunkalways", null, o);
						if (ub < fs) {
							_upload()
						} else {
							dfd.resolveWith(o.context, [result, textStatus, jqXHR])
						}
					}).fail(function(jqXHR, textStatus, errorThrown) {
						o.jqXHR = jqXHR;
						o.textStatus = textStatus;
						o.errorThrown = errorThrown;
						that._trigger("chunkfail", null, o);
						that._trigger("chunkalways", null, o);
						dfd.rejectWith(o.context, [jqXHR, textStatus, errorThrown])
					})
				};
				this._enhancePromise(promise);
				promise.abort = function() {
					return jqXHR.abort()
				};
				_upload();
				return promise
			},
			_beforeSend: function _beforeSend(e, data) {
				if (this._active === 0) {
					this._trigger("start");
					this._bitrateTimer = new this._BitrateTimer;
					this._progress.loaded = this._progress.total = 0;
					this._progress.bitrate = 0
				}
				this._initResponseObject(data);
				this._initProgressObject(data);
				data._progress.loaded = data.loaded = data.uploadedBytes || 0;
				data._progress.total = data.total = this._getTotal(data.files) || 1;
				data._progress.bitrate = data.bitrate = 0;
				this._active += 1;
				this._progress.loaded += data.loaded;
				this._progress.total += data.total
			},
			_onDone: function _onDone(result, textStatus, jqXHR, options) {
				var total = options._progress.total,
					response = options._response;
				if (options._progress.loaded < total) {
					this._onProgress($.Event("progress", {
						lengthComputable: true,
						loaded: total,
						total: total
					}), options)
				}
				response.result = options.result = result;
				response.textStatus = options.textStatus = textStatus;
				response.jqXHR = options.jqXHR = jqXHR;
				this._trigger("done", null, options)
			},
			_onFail: function _onFail(jqXHR, textStatus, errorThrown, options) {
				var response = options._response;
				if (options.recalculateProgress) {
					this._progress.loaded -= options._progress.loaded;
					this._progress.total -= options._progress.total
				}
				response.jqXHR = options.jqXHR = jqXHR;
				response.textStatus = options.textStatus = textStatus;
				response.errorThrown = options.errorThrown = errorThrown;
				this._trigger("fail", null, options)
			},
			_onAlways: function _onAlways(jqXHRorResult, textStatus, jqXHRorError, options) {
				this._trigger("always", null, options)
			},
			_onSend: function _onSend(e, data) {
				if (!data.submit) {
					this._addConvenienceMethods(e, data)
				}
				var that = this,
					jqXHR, aborted, slot, pipe, options = that._getAJAXSettings(data),
					send = function send() {
						that._sending += 1;
						options._bitrateTimer = new that._BitrateTimer;
						jqXHR = jqXHR || ((aborted || that._trigger("send", $.Event("send", {
							delegatedEvent: e
						}), options) === false) && that._getXHRPromise(false, options.context, aborted) || that._chunkedUpload(options) || $.ajax(options)).done(function(result, textStatus, jqXHR) {
							that._onDone(result, textStatus, jqXHR, options)
						}).fail(function(jqXHR, textStatus, errorThrown) {
							that._onFail(jqXHR, textStatus, errorThrown, options)
						}).always(function(jqXHRorResult, textStatus, jqXHRorError) {
							that._onAlways(jqXHRorResult, textStatus, jqXHRorError, options);
							that._sending -= 1;
							that._active -= 1;
							if (options.limitConcurrentUploads && options.limitConcurrentUploads > that._sending) {
								var nextSlot = that._slots.shift();
								while (nextSlot) {
									if (that._getDeferredState(nextSlot) === "pending") {
										nextSlot.resolve();
										break
									}
									nextSlot = that._slots.shift()
								}
							}
							if (that._active === 0) {
								that._trigger("stop")
							}
						});
						return jqXHR
					};
				this._beforeSend(e, options);
				if (this.options.sequentialUploads || this.options.limitConcurrentUploads && this.options.limitConcurrentUploads <= this._sending) {
					if (this.options.limitConcurrentUploads > 1) {
						slot = $.Deferred();
						this._slots.push(slot);
						pipe = slot.pipe(send)
					} else {
						this._sequence = this._sequence.pipe(send, send);
						pipe = this._sequence
					}
					pipe.abort = function() {
						aborted = [undefined, "abort", "abort"];
						if (!jqXHR) {
							if (slot) {
								slot.rejectWith(options.context, aborted)
							}
							return send()
						}
						return jqXHR.abort()
					};
					return this._enhancePromise(pipe)
				}
				return send()
			},
			_onAdd: function _onAdd(e, data) {
				var that = this,
					result = true,
					options = $.extend({}, this.options, data),
					files = data.files,
					filesLength = files.length,
					limit = options.limitMultiFileUploads,
					limitSize = options.limitMultiFileUploadSize,
					overhead = options.limitMultiFileUploadSizeOverhead,
					batchSize = 0,
					paramName = this._getParamName(options),
					paramNameSet, paramNameSlice, fileSet, i, j = 0;
				if (!filesLength) {
					return false
				}
				if (limitSize && files[0].size === undefined) {
					limitSize = undefined
				}
				if (!(options.singleFileUploads || limit || limitSize) || !this._isXHRUpload(options)) {
					fileSet = [files];
					paramNameSet = [paramName]
				} else if (!(options.singleFileUploads || limitSize) && limit) {
					fileSet = [];
					paramNameSet = [];
					for (i = 0; i < filesLength; i += limit) {
						fileSet.push(files.slice(i, i + limit));
						paramNameSlice = paramName.slice(i, i + limit);
						if (!paramNameSlice.length) {
							paramNameSlice = paramName
						}
						paramNameSet.push(paramNameSlice)
					}
				} else if (!options.singleFileUploads && limitSize) {
					fileSet = [];
					paramNameSet = [];
					for (i = 0; i < filesLength; i = i + 1) {
						batchSize += files[i].size + overhead;
						if (i + 1 === filesLength || batchSize + files[i + 1].size + overhead > limitSize || limit && i + 1 - j >= limit) {
							fileSet.push(files.slice(j, i + 1));
							paramNameSlice = paramName.slice(j, i + 1);
							if (!paramNameSlice.length) {
								paramNameSlice = paramName
							}
							paramNameSet.push(paramNameSlice);
							j = i + 1;
							batchSize = 0
						}
					}
				} else {
					paramNameSet = paramName
				}
				data.originalFiles = files;
				$.each(fileSet || files, function(index, element) {
					var newData = $.extend({}, data);
					newData.files = fileSet ? element : [element];
					newData.paramName = paramNameSet[index];
					that._initResponseObject(newData);
					that._initProgressObject(newData);
					that._addConvenienceMethods(e, newData);
					result = that._trigger("add", $.Event("add", {
						delegatedEvent: e
					}), newData);
					return result
				});
				return result
			},
			_replaceFileInput: function _replaceFileInput(data) {
				var input = data.fileInput,
					inputClone = input.clone(true),
					restoreFocus = input.is(document.activeElement);
				data.fileInputClone = inputClone;
				$("<form></form>").append(inputClone)[0].reset();
				input.after(inputClone).detach();
				if (restoreFocus) {
					inputClone.focus()
				}
				$.cleanData(input.unbind("remove"));
				this.options.fileInput = this.options.fileInput.map(function(i, el) {
					if (el === input[0]) {
						return inputClone[0]
					}
					return el
				});
				if (input[0] === this.element[0]) {
					this.element = inputClone
				}
			},
			_handleFileTreeEntry: function _handleFileTreeEntry(entry, path) {
				var that = this,
					dfd = $.Deferred(),
					errorHandler = function errorHandler(e) {
						if (e && !e.entry) {
							e.entry = entry
						}
						dfd.resolve([e])
					},
					successHandler = function successHandler(entries) {
						that._handleFileTreeEntries(entries, path + entry.name + "/").done(function(files) {
							dfd.resolve(files)
						}).fail(errorHandler)
					},
					readEntries = function readEntries() {
						dirReader.readEntries(function(results) {
							if (!results.length) {
								successHandler(entries)
							} else {
								entries = entries.concat(results);
								readEntries()
							}
						}, errorHandler)
					},
					dirReader, entries = [];
				path = path || "";
				if (entry.isFile) {
					if (entry._file) {
						entry._file.relativePath = path;
						dfd.resolve(entry._file)
					} else {
						entry.file(function(file) {
							file.relativePath = path;
							dfd.resolve(file)
						}, errorHandler)
					}
				} else if (entry.isDirectory) {
					dirReader = entry.createReader();
					readEntries()
				} else {
					dfd.resolve([])
				}
				return dfd.promise()
			},
			_handleFileTreeEntries: function _handleFileTreeEntries(entries, path) {
				var that = this;
				return $.when.apply($, $.map(entries, function(entry) {
					return that._handleFileTreeEntry(entry, path)
				})).pipe(function() {
					return Array.prototype.concat.apply([], arguments)
				})
			},
			_getDroppedFiles: function _getDroppedFiles(dataTransfer) {
				dataTransfer = dataTransfer || {};
				var items = dataTransfer.items;
				if (items && items.length && (items[0].webkitGetAsEntry || items[0].getAsEntry)) {
					return this._handleFileTreeEntries($.map(items, function(item) {
						var entry;
						if (item.webkitGetAsEntry) {
							entry = item.webkitGetAsEntry();
							if (entry) {
								entry._file = item.getAsFile()
							}
							return entry
						}
						return item.getAsEntry()
					}))
				}
				return $.Deferred().resolve($.makeArray(dataTransfer.files)).promise()
			},
			_getSingleFileInputFiles: function _getSingleFileInputFiles(fileInput) {
				fileInput = $(fileInput);
				var entries = fileInput.prop("webkitEntries") || fileInput.prop("entries"),
					files, value;
				if (entries && entries.length) {
					return this._handleFileTreeEntries(entries)
				}
				files = $.makeArray(fileInput.prop("files"));
				if (!files.length) {
					value = fileInput.prop("value");
					if (!value) {
						return $.Deferred().resolve([]).promise()
					}
					files = [{
						name: value.replace(/^.*\\/, "")
					}]
				} else if (files[0].name === undefined && files[0].fileName) {
					$.each(files, function(index, file) {
						file.name = file.fileName;
						file.size = file.fileSize
					})
				}
				return $.Deferred().resolve(files).promise()
			},
			_getFileInputFiles: function _getFileInputFiles(fileInput) {
				if (!(fileInput instanceof $) || fileInput.length === 1) {
					return this._getSingleFileInputFiles(fileInput)
				}
				return $.when.apply($, $.map(fileInput, this._getSingleFileInputFiles)).pipe(function() {
					return Array.prototype.concat.apply([], arguments)
				})
			},
			_onChange: function _onChange(e) {
				var that = this,
					data = {
						fileInput: $(e.target),
						form: $(e.target.form)
					};
				this._getFileInputFiles(data.fileInput).always(function(files) {
					data.files = files;
					if (that.options.replaceFileInput) {
						that._replaceFileInput(data)
					}
					if (that._trigger("change", $.Event("change", {
						delegatedEvent: e
					}), data) !== false) {
						that._onAdd(e, data)
					}
				})
			},
			_onPaste: function _onPaste(e) {
				var items = e.originalEvent && e.originalEvent.clipboardData && e.originalEvent.clipboardData.items,
					data = {
						files: []
					};
				if (items && items.length) {
					$.each(items, function(index, item) {
						var file = item.getAsFile && item.getAsFile();
						if (file) {
							data.files.push(file)
						}
					});
					if (this._trigger("paste", $.Event("paste", {
						delegatedEvent: e
					}), data) !== false) {
						this._onAdd(e, data)
					}
				}
			},
			_onDrop: function _onDrop(e) {
				e.dataTransfer = e.originalEvent && e.originalEvent.dataTransfer;
				var that = this,
					dataTransfer = e.dataTransfer,
					data = {};
				if (dataTransfer && dataTransfer.files && dataTransfer.files.length) {
					e.preventDefault();
					this._getDroppedFiles(dataTransfer).always(function(files) {
						data.files = files;
						if (that._trigger("drop", $.Event("drop", {
							delegatedEvent: e
						}), data) !== false) {
							that._onAdd(e, data)
						}
					})
				}
			},
			_onDragOver: getDragHandler("dragover"),
			_onDragEnter: getDragHandler("dragenter"),
			_onDragLeave: getDragHandler("dragleave"),
			_initEventHandlers: function _initEventHandlers() {
				if (this._isXHRUpload(this.options)) {
					this._on(this.options.dropZone, {
						dragover: this._onDragOver,
						drop: this._onDrop,
						dragenter: this._onDragEnter,
						dragleave: this._onDragLeave
					});
					this._on(this.options.pasteZone, {
						paste: this._onPaste
					})
				}
				if ($.support.fileInput) {
					this._on(this.options.fileInput, {
						change: this._onChange
					})
				}
			},
			_destroyEventHandlers: function _destroyEventHandlers() {
				this._off(this.options.dropZone, "dragenter dragleave dragover drop");
				this._off(this.options.pasteZone, "paste");
				this._off(this.options.fileInput, "change")
			},
			_setOption: function _setOption(key, value) {
				var reinit = $.inArray(key, this._specialOptions) !== -1;
				if (reinit) {
					this._destroyEventHandlers()
				}
				this._super(key, value);
				if (reinit) {
					this._initSpecialOptions();
					this._initEventHandlers()
				}
			},
			_initSpecialOptions: function _initSpecialOptions() {
				var options = this.options;
				if (options.fileInput === undefined) {
					options.fileInput = this.element.is('input[type="file"]') ? this.element : this.element.find('input[type="file"]')
				} else if (!(options.fileInput instanceof $)) {
					options.fileInput = $(options.fileInput)
				}
				if (!(options.dropZone instanceof $)) {
					options.dropZone = $(options.dropZone)
				}
				if (!(options.pasteZone instanceof $)) {
					options.pasteZone = $(options.pasteZone)
				}
			},
			_getRegExp: function _getRegExp(str) {
				var parts = str.split("/"),
					modifiers = parts.pop();
				parts.shift();
				return new RegExp(parts.join("/"), modifiers)
			},
			_isRegExpOption: function _isRegExpOption(key, value) {
				return key !== "url" && $.type(value) === "string" && /^\/.*\/[igm]{0,3}$/.test(value)
			},
			_initDataAttributes: function _initDataAttributes() {
				var that = this,
					options = this.options,
					data = this.element.data();
				$.each(this.element[0].attributes, function(index, attr) {
					var key = attr.name.toLowerCase(),
						value;
					if (/^data-/.test(key)) {
						key = key.slice(5).replace(/-[a-z]/g, function(str) {
							return str.charAt(1).toUpperCase()
						});
						value = data[key];
						if (that._isRegExpOption(key, value)) {
							value = that._getRegExp(value)
						}
						options[key] = value
					}
				})
			},
			_create: function _create() {
				this._initDataAttributes();
				this._initSpecialOptions();
				this._slots = [];
				this._sequence = this._getXHRPromise(true);
				this._sending = this._active = 0;
				this._initProgressObject(this);
				this._initEventHandlers()
			},
			active: function active() {
				return this._active
			},
			progress: function progress() {
				return this._progress
			},
			add: function add(data) {
				var that = this;
				if (!data || this.options.disabled) {
					return
				}
				if (data.fileInput && !data.files) {
					this._getFileInputFiles(data.fileInput).always(function(files) {
						data.files = files;
						that._onAdd(null, data)
					})
				} else {
					data.files = $.makeArray(data.files);
					this._onAdd(null, data)
				}
			},
			send: function send(data) {
				if (data && !this.options.disabled) {
					if (data.fileInput && !data.files) {
						var that = this,
							dfd = $.Deferred(),
							promise = dfd.promise(),
							jqXHR, aborted;
						promise.abort = function() {
							aborted = true;
							if (jqXHR) {
								return jqXHR.abort()
							}
							dfd.reject(null, "abort", "abort");
							return promise
						};
						this._getFileInputFiles(data.fileInput).always(function(files) {
							if (aborted) {
								return
							}
							if (!files.length) {
								dfd.reject();
								return
							}
							data.files = files;
							jqXHR = that._onSend(null, data);
							jqXHR.then(function(result, textStatus, jqXHR) {
								dfd.resolve(result, textStatus, jqXHR)
							}, function(jqXHR, textStatus, errorThrown) {
								dfd.reject(jqXHR, textStatus, errorThrown)
							})
						});
						return this._enhancePromise(promise)
					}
					data.files = $.makeArray(data.files);
					if (data.files.length) {
						return this._onSend(null, data)
					}
				}
				return this._getXHRPromise(false, data && data.context)
			}
		});
	}, {}],
	6: [function(require, module, exports) {
		"use strict";
		Object.defineProperty(exports, "__esModule", {
			value: true
		});
		exports.addScrollLoading = addScrollLoading;

		function addScrollLoading() {
			$.fn.scrollLoading = function(options) {
				var defaults = {
					attr: "data-url",
					container: $(window),
					callback: $.noop
				};
				var params = $.extend({}, defaults, options || {});
				params.cache = [];
				$(this).each(function() {
					var node = this.nodeName.toLowerCase();
					var url = $(this).attr(params["attr"]);
					var data = {
						obj: $(this),
						tag: node,
						url: url
					};
					params.cache.push(data)
				});
				var callback = function callback(call, param) {
						if ($.isFunction(params.callback)) {
							params.callback.call(call.get(0), param)
						}
					};
				var loading = function loading() {
						var contHeight = params.container.height();
						var contop = 0;
						if ($(window).get(0) === window) {
							contop = $(window).scrollTop()
						} else {
							contop = params.container.offset().top
						}
						var offset = (contHeight + 100) / 2;
						$.each(params.cache, function(i, data) {
							var o = data.obj;
							var tag = data.tag;
							var url = data.url;
							var post = 0;
							var posb = 0;
							if (o) {
								post = o.offset().top - contop;
								posb = post + o.height();
								if (o.is(":visible") && (post >= 0 - offset && post < contHeight + offset || posb > 0 - offset && posb <= contHeight + offset)) {
									if (url) {
										if (tag === "img") {
											callback(o.attr("src", url))
										} else {
											callback(o, url)
										}
									} else {
										callback(o)
									}
									data.obj = null
								}
							}
						})
					};
				loading();
				params.container.bind("scroll", loading)
			}
		}
		var jqueryPlugins = {
			addScrollLoading: addScrollLoading
		};
		window._cfCommon = window._cfCommon || {};
		window._cfCommon.jqueryPlugins = jqueryPlugins;
		exports["default"] = jqueryPlugins;
	}, {}],
	7: [function(require, module, exports) {
		"use strict";
		Object.defineProperty(exports, "__esModule", {
			value: true
		});
		var locationDataExtend = {
			100549: {
				name: "海外",
				city: {
					100550: "印度新德里",
					100551: "美国硅谷",
					100552: "美国西雅图",
					100553: "以色列"
				}
			}
		};
		window._cfCommon = window._cfCommon || {};
		window._cfCommon.locationDataExtend = locationDataExtend;
		exports["default"] = locationDataExtend;
	}, {}],
	8: [function(require, module, exports) {
		"use strict";
		Object.defineProperty(exports, "__esModule", {
			value: true
		});
		var locationData = {
			100000: {
				name: "北京",
				city: {
					100001: "东城",
					100002: "西城",
					100003: "崇文",
					100004: "宣武",
					100005: "朝阳",
					100006: "丰台",
					100007: "石景山",
					100008: "海淀",
					100009: "门头沟",
					100010: "房山",
					100011: "通州",
					100012: "顺义",
					100013: "昌平",
					100014: "大兴",
					100015: "平谷",
					100016: "怀柔",
					100017: "密云",
					100018: "延庆",
					100019: "其他"
				}
			},
			100020: {
				name: "天津",
				city: {
					100021: "和平",
					100022: "河东",
					100023: "河西",
					100024: "南开",
					100025: "河北",
					100026: "红桥",
					100027: "塘沽",
					100028: "汉沽",
					100029: "大港",
					100030: "东丽",
					100031: "西青",
					100032: "津南",
					100033: "北辰",
					100034: "宁河",
					100035: "武清",
					100036: "静海",
					100037: "宝坻",
					100038: "蓟县",
					100039: "其他"
				}
			},
			100040: {
				name: "河北",
				city: {
					100041: "石家庄",
					100042: "唐山",
					100043: "秦皇岛",
					100044: "邯郸",
					100045: "邢台",
					100046: "保定",
					100047: "张家口",
					100048: "承德",
					100049: "沧州",
					100050: "廊坊",
					100051: "衡水",
					100052: "其他"
				}
			},
			100053: {
				name: "山西",
				city: {
					100054: "太原",
					100055: "大同",
					100056: "阳泉",
					100057: "长治",
					100058: "晋城",
					100059: "朔州",
					100060: "晋中",
					100061: "运城",
					100062: "忻州",
					100063: "临汾",
					100064: "吕梁",
					100065: "其他"
				}
			},
			100066: {
				name: "内蒙古",
				city: {
					100067: "呼和浩特",
					100068: "包头",
					100069: "乌海",
					100070: "赤峰",
					100071: "通辽",
					100072: "鄂尔多斯",
					100073: "呼伦贝尔",
					100074: "巴彦淖尔",
					100075: "乌兰察布",
					100076: "兴安",
					100077: "锡林郭勒",
					100078: "阿拉善",
					100079: "其他"
				}
			},
			100080: {
				name: "辽宁",
				city: {
					100081: "沈阳",
					100082: "大连",
					100083: "鞍山",
					100084: "抚顺",
					100085: "本溪",
					100086: "丹东",
					100087: "锦州",
					100088: "营口",
					100089: "阜新",
					100090: "辽阳",
					100091: "盘锦",
					100092: "铁岭",
					100093: "朝阳",
					100094: "葫芦岛",
					100095: "其他"
				}
			},
			100096: {
				name: "吉林",
				city: {
					100097: "长春",
					100098: "吉林",
					100099: "四平",
					100100: "辽源",
					100101: "通化",
					100102: "白山",
					100103: "松原",
					100104: "白城",
					100105: "延边",
					100106: "其他"
				}
			},
			100107: {
				name: "黑龙江",
				city: {
					100108: "哈尔滨",
					100109: "齐齐哈尔",
					100110: "鸡西",
					100111: "鹤岗",
					100112: "双鸭山",
					100113: "大庆",
					100114: "伊春",
					100115: "佳木斯",
					100116: "七台河",
					100117: "牡丹江",
					100118: "黑河",
					100119: "绥化",
					100120: "大兴安岭",
					100121: "其他"
				}
			},
			100122: {
				name: "上海",
				city: {
					100123: "黄浦",
					100124: "卢湾",
					100125: "徐汇",
					100126: "长宁",
					100127: "静安",
					100128: "普陀",
					100129: "闸北",
					100130: "虹口",
					100131: "杨浦",
					100132: "闵行",
					100133: "宝山",
					100134: "嘉定",
					100135: "浦东新",
					100136: "金山",
					100137: "松江",
					100138: "南汇",
					100139: "奉贤",
					100140: "青浦",
					100141: "崇明",
					100142: "其他"
				}
			},
			100143: {
				name: "江苏",
				city: {
					100144: "南京",
					100145: "无锡",
					100146: "徐州",
					100147: "常州",
					100148: "苏州",
					100149: "南通",
					100150: "连云港",
					100151: "淮安",
					100152: "盐城",
					100153: "扬州",
					100154: "镇江",
					100155: "泰州",
					100156: "宿迁",
					100157: "其他"
				}
			},
			100158: {
				name: "浙江",
				city: {
					100159: "杭州",
					100160: "宁波",
					100161: "温州",
					100162: "嘉兴",
					100163: "湖州",
					100164: "绍兴",
					100165: "金华",
					100166: "衢州",
					100167: "舟山",
					100168: "台州",
					100169: "丽水",
					100170: "其他"
				}
			},
			100171: {
				name: "安徽",
				city: {
					100172: "合肥",
					100173: "芜湖",
					100174: "蚌埠",
					100175: "淮南",
					100176: "马鞍山",
					100177: "淮北",
					100178: "铜陵",
					100179: "安庆",
					100180: "黄山",
					100181: "滁州",
					100182: "阜阳",
					100183: "宿州",
					100184: "巢湖",
					100185: "六安",
					100186: "亳州",
					100187: "池州",
					100188: "宣城",
					100189: "其他"
				}
			},
			100190: {
				name: "福建",
				city: {
					100191: "福州",
					100192: "厦门",
					100193: "莆田",
					100194: "三明",
					100195: "泉州",
					100196: "漳州",
					100197: "南平",
					100198: "龙岩",
					100199: "宁德",
					100200: "其他"
				}
			},
			100201: {
				name: "江西",
				city: {
					100202: "南昌",
					100203: "景德镇",
					100204: "萍乡",
					100205: "九江",
					100206: "新余",
					100207: "鹰潭",
					100208: "赣州",
					100209: "吉安",
					100210: "宜春",
					100211: "抚州",
					100212: "上饶",
					100213: "其他"
				}
			},
			100214: {
				name: "山东",
				city: {
					100215: "济南",
					100216: "青岛",
					100217: "淄博",
					100218: "枣庄",
					100219: "东营",
					100220: "烟台",
					100221: "潍坊",
					100222: "济宁",
					100223: "泰安",
					100224: "威海",
					100225: "日照",
					100226: "莱芜",
					100227: "临沂",
					100228: "德州",
					100229: "聊城",
					100230: "滨州",
					100231: "菏泽",
					100232: "其他"
				}
			},
			100233: {
				name: "河南",
				city: {
					100234: "郑州",
					100235: "开封",
					100236: "洛阳",
					100237: "平顶山",
					100238: "安阳",
					100239: "鹤壁",
					100240: "新乡",
					100241: "焦作",
					100242: "濮阳",
					100243: "许昌",
					100244: "漯河",
					100245: "三门峡",
					100246: "南阳",
					100247: "商丘",
					100248: "信阳",
					100249: "周口",
					100250: "驻马店",
					100251: "济源",
					100252: "其他"
				}
			},
			100253: {
				name: "湖北",
				city: {
					100254: "武汉",
					100255: "黄石",
					100256: "十堰",
					100257: "宜昌",
					100258: "襄樊",
					100259: "鄂州",
					100260: "荆门",
					100261: "孝感",
					100262: "荆州",
					100263: "黄冈",
					100264: "咸宁",
					100265: "随州",
					100266: "恩施",
					100267: "仙桃",
					100268: "潜江",
					100269: "天门",
					100270: "其他",
					100271: "神农架"
				}
			},
			100272: {
				name: "湖南",
				city: {
					100273: "长沙",
					100274: "株洲",
					100275: "湘潭",
					100276: "衡阳",
					100277: "邵阳",
					100278: "岳阳",
					100279: "常德",
					100280: "张家界",
					100281: "益阳",
					100282: "郴州",
					100283: "永州",
					100284: "怀化",
					100285: "娄底",
					100286: "湘西",
					100287: "其他"
				}
			},
			100288: {
				name: "广东",
				city: {
					100289: "广州",
					100290: "韶关",
					100291: "深圳",
					100292: "珠海",
					100293: "汕头",
					100294: "佛山",
					100295: "江门",
					100296: "湛江",
					100297: "茂名",
					100298: "肇庆",
					100299: "惠州",
					100300: "梅州",
					100301: "汕尾",
					100302: "河源",
					100303: "阳江",
					100304: "清远",
					100305: "东莞",
					100306: "中山",
					100307: "潮州",
					100308: "揭阳",
					100309: "云浮",
					100310: "其他"
				}
			},
			100311: {
				name: "广西",
				city: {
					100312: "南宁",
					100313: "柳州",
					100314: "桂林",
					100315: "梧州",
					100316: "北海",
					100317: "防城港",
					100318: "钦州",
					100319: "贵港",
					100320: "玉林",
					100321: "百色",
					100322: "贺州",
					100323: "河池",
					100324: "来宾",
					100325: "崇左",
					100326: "其他"
				}
			},
			100327: {
				name: "海南",
				city: {
					100328: "海口",
					100329: "三亚",
					100330: "五指山",
					100331: "琼海",
					100332: "儋州",
					100333: "文昌",
					100334: "万宁",
					100335: "东方",
					100336: "其它",
					100337: "定安",
					100338: "屯昌",
					100339: "澄迈",
					100340: "临高",
					100341: "白沙",
					100342: "昌江",
					100343: "乐东",
					100344: "陵水",
					100345: "保亭",
					100346: "琼中",
					100347: "西沙",
					100348: "南沙",
					100349: "中沙"
				}
			},
			100350: {
				name: "重庆",
				city: {
					100351: "万州",
					100352: "涪陵",
					100353: "渝中",
					100354: "大渡口",
					100355: "江北",
					100356: "沙坪坝",
					100357: "九龙坡",
					100358: "南岸",
					100359: "北碚",
					100360: "万盛",
					100361: "双桥",
					100362: "渝北",
					100363: "巴南",
					100364: "长寿",
					100365: "綦江",
					100366: "潼南",
					100367: "铜梁",
					100368: "大足",
					100369: "荣昌",
					100370: "璧山",
					100371: "梁平",
					100372: "城口",
					100373: "丰都",
					100374: "垫江",
					100375: "武隆",
					100376: "忠县",
					100377: "开县",
					100378: "云阳",
					100379: "奉节",
					100380: "巫山",
					100381: "巫溪",
					100382: "黔江",
					100383: "石柱",
					100384: "秀山",
					100385: "酉阳",
					100386: "彭水",
					100387: "江津",
					100388: "合川",
					100389: "永川",
					100390: "南川",
					100391: "其他"
				}
			},
			100392: {
				name: "四川",
				city: {
					100393: "成都",
					100394: "自贡",
					100395: "攀枝花",
					100396: "泸州",
					100397: "德阳",
					100398: "绵阳",
					100399: "广元",
					100400: "遂宁",
					100401: "内江",
					100402: "乐山",
					100403: "南充",
					100404: "眉山",
					100405: "宜宾",
					100406: "广安",
					100407: "达州",
					100408: "雅安",
					100409: "巴中",
					100410: "资阳",
					100411: "阿坝",
					100412: "甘孜",
					100413: "凉山",
					100414: "其他"
				}
			},
			100415: {
				name: "贵州",
				city: {
					100416: "贵阳",
					100417: "六盘水",
					100418: "遵义",
					100419: "安顺",
					100420: "铜仁",
					100421: "黔西南",
					100422: "毕节",
					100423: "黔东南",
					100424: "黔南",
					100425: "其他"
				}
			},
			100426: {
				name: "云南",
				city: {
					100427: "昆明",
					100428: "曲靖",
					100429: "玉溪",
					100430: "保山",
					100431: "昭通",
					100432: "丽江",
					100433: "普洱",
					100434: "临沧",
					100435: "楚雄",
					100436: "红河",
					100437: "文山",
					100438: "西双版纳",
					100439: "大理",
					100440: "德宏",
					100441: "怒江",
					100442: "迪庆",
					100443: "其他"
				}
			},
			100444: {
				name: "西藏",
				city: {
					100445: "拉萨",
					100446: "昌都",
					100447: "山南",
					100448: "日喀则",
					100449: "那曲",
					100450: "阿里",
					100451: "林芝",
					100452: "其他"
				}
			},
			100453: {
				name: "陕西",
				city: {
					100454: "西安",
					100455: "铜川",
					100456: "宝鸡",
					100457: "咸阳",
					100458: "渭南",
					100459: "延安",
					100460: "汉中",
					100461: "榆林",
					100462: "安康",
					100463: "商洛",
					100464: "其他"
				}
			},
			100465: {
				name: "甘肃",
				city: {
					100466: "兰州",
					100467: "嘉峪关",
					100468: "金昌",
					100469: "白银",
					100470: "天水",
					100471: "武威",
					100472: "张掖",
					100473: "平凉",
					100474: "酒泉",
					100475: "庆阳",
					100476: "定西",
					100477: "陇南",
					100478: "临夏",
					100479: "甘南",
					100480: "其他"
				}
			},
			100481: {
				name: "青海",
				city: {
					100482: "西宁",
					100483: "海东",
					100484: "海北",
					100485: "黄南",
					100486: "海南",
					100487: "果洛",
					100488: "玉树",
					100489: "海西",
					100490: "其他"
				}
			},
			100491: {
				name: "宁夏",
				city: {
					100492: "银川",
					100493: "石嘴山",
					100494: "吴忠",
					100495: "固原",
					100496: "中卫",
					100497: "其他"
				}
			},
			100498: {
				name: "新疆",
				city: {
					100499: "乌鲁木齐",
					100500: "克拉玛依",
					100501: "吐鲁番",
					100502: "哈密",
					100503: "昌吉",
					100504: "博尔塔拉",
					100505: "巴音郭楞",
					100506: "阿克苏",
					100507: "克孜勒苏",
					100508: "喀什",
					100509: "和田",
					100510: "伊犁",
					100511: "塔城",
					100512: "阿勒泰",
					100513: "石河子",
					100514: "阿拉尔",
					100515: "图木舒克",
					100516: "五家渠",
					100517: "其他"
				}
			},
			100518: {
				name: "台湾",
				city: {
					100519: "台北市",
					100520: "高雄市",
					100521: "基隆市",
					100522: "台中市",
					100523: "台南市",
					100524: "新竹市",
					100525: "嘉义市",
					100526: "台北县",
					100527: "宜兰县",
					100528: "桃园县",
					100529: "新竹县",
					100530: "苗栗县",
					100531: "台中县",
					100532: "彰化县",
					100533: "南投县",
					100534: "云林县",
					100535: "嘉义县",
					100536: "台南县",
					100537: "高雄县",
					100538: "屏东县",
					100539: "澎湖县",
					100540: "台东县",
					100541: "花莲县",
					100542: "其他"
				}
			},
			100543: {
				name: "香港",
				city: {
					100544: "其他"
				}
			},
			100545: {
				name: "澳门",
				city: {
					100546: "其他"
				}
			},
			100547: {
				name: "其它",
				city: {
					100548: "其他"
				}
			}
		};
		window._cfCommon = window._cfCommon || {};
		window._cfCommon.locationData = locationData;
		exports["default"] = locationData;
	}, {}],
	9: [function(require, module, exports) {
		"use strict";
		Object.defineProperty(exports, "__esModule", {
			value: true
		});
		exports.showLoginDialog = showLoginDialog;
		var _index = require("../../ui/popup/index");
		var _index2 = _interopRequireDefault(_index);

		function _interopRequireDefault(obj) {
			return obj && obj.__esModule ? obj : {
				"default": obj
			}
		}
		var jumpUrl = void 0;
		var _loginSuccessCb = void 0;
		var _needRefresh = void 0;

		function showLoginDialog() {
			var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
			opt = opt || {};
			_loginSuccessCb = opt.loginSuccessCb;
			_needRefresh = opt.needRefresh;
			jumpUrl = location.href;
			var proxyUrl = location.protocol + "//" + location.hostname + "/html/proxy/loginSuccess.html";
			var target = "self";
			if (~jumpUrl.indexOf("#")) {
				jumpUrl = jumpUrl.replace(/[&\?]?rand=[^&#]*/g, "");
				var urlArr = jumpUrl.split("#");
				jumpUrl = ~urlArr[0].indexOf("?") ? urlArr[0] + "&rand=" + Math.random() + "#" + urlArr[1] : urlArr[0] + "?rand=" + Math.random() + "#" + urlArr[1]
			}
			if (!/^https?:\/\/[^\/\\]+\.qq\.com\//.test(jumpUrl)) {
				jumpUrl = location.protocol + "//" + location.hostname
			}
			_index2["default"].show({
				id: "loginDialog",
				tmpl: '<iframe name="login_frame" id="login_frame" border="0" frameBorder="0" scrolling="no" width="622" height="368" class="qqlogin-frame" style="background:#fff;" allowTransparency="allowtransparency" src="//xui.ptlogin2.qq.com/cgi-bin/xlogin?appid=710023101&style=20&s_url=' + encodeURIComponent(proxyUrl) + "&target=" + target + '"></iframe>'
			});
			if (typeof window.postMessage !== "undefined") {
				window.onmessage = function(event) {
					var msg = event || window.event;
					var data = void 0;
					if (typeof JSON !== "undefined") {
						data = JSON.parse(msg.data)
					} else {
						data = str2JSON(msg.data)
					}
					switch (data.action) {
					case "close":
						ptlogin2onClose();
						break;
					case "resize":
						ptlogin2onResize(data.width, data.height);
						break;
					default:
						break
					}
				}
			} else {
				navigator.ptlogin_callback = function(msg) {
					var data = str2JSON(msg);
					switch (data.action) {
					case "close":
						ptlogin2onClose();
						break;
					case "resize":
						ptlogin2onResize(data.width, data.height);
						break;
					default:
						break
					}
				}
			}
			function str2JSON(msg) {
				var rvalidchars = /^[\],:{}\s]*$/;
				var rvalidbraces = /(?:^|:|,)(?:\s*\[)+/g;
				var rvalidescape = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g;
				var rvalidtokens = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g;
				if (rvalidchars.test(msg.replace(rvalidescape, "@").replace(rvalidtokens, "]").replace(rvalidbraces, ""))) {
					return new Function("return " + msg)()
				}
				return {}
			}
			function ptlogin2onResize(width, height) {
				var loginFrame = document.getElementById("login_frame");
				if (loginFrame) {
					loginFrame.style.width = width + "px";
					loginFrame.style.height = height + "px"
				}
			}
			function ptlogin2onClose() {
				_index2["default"].hide("loginDialog")
			}
		}
		function loginSuccess() {
			if (_needRefresh) {
				location.href = jumpUrl
			} else {
				hasLogin = true;
				_index2["default"].hide("loginDialog");
				_loginSuccessCb && _loginSuccessCb();
				_loginSuccessCb = null
			}
		}
		window._loginSuccess = loginSuccess;
		var login = {
			showLoginDialog: showLoginDialog
		};
		window._cfCommon = window._cfCommon || {};
		window._cfCommon.login = login;
		exports["default"] = login;
	}, {
		"../../ui/popup/index": 32
	}],
	10: [function(require, module, exports) {
		"use strict";
		Object.defineProperty(exports, "__esModule", {
			value: true
		});
		var _extends = Object.assign ||
		function(target) {
			for (var i = 1; i < arguments.length; i++) {
				var source = arguments[i];
				for (var key in source) {
					if (Object.prototype.hasOwnProperty.call(source, key)) {
						target[key] = source[key]
					}
				}
			}
			return target
		};
		var _createClass = function() {
				function defineProperties(target, props) {
					for (var i = 0; i < props.length; i++) {
						var descriptor = props[i];
						descriptor.enumerable = descriptor.enumerable || false;
						descriptor.configurable = true;
						if ("value" in descriptor) descriptor.writable = true;
						Object.defineProperty(target, descriptor.key, descriptor)
					}
				}
				return function(Constructor, protoProps, staticProps) {
					if (protoProps) defineProperties(Constructor.prototype, protoProps);
					if (staticProps) defineProperties(Constructor, staticProps);
					return Constructor
				}
			}();
		var _utils = require("./utils");
		var _utils2 = _interopRequireDefault(_utils);
		var _returnCodeStat = require("./return-code-stat");
		var _returnCodeStat2 = _interopRequireDefault(_returnCodeStat);
		var _login = require("./login");
		var _constants = require("./constants");

		function _interopRequireDefault(obj) {
			return obj && obj.__esModule ? obj : {
				"default": obj
			}
		}
		function _classCallCheck(instance, Constructor) {
			if (!(instance instanceof Constructor)) {
				throw new TypeError("Cannot call a class as a function")
			}
		}
		var Network = function() {
				function Network() {
					_classCallCheck(this, Network)
				}
				_createClass(Network, [{
					key: "request",
					value: function request(params) {
						params.data = params.data || {};
						params.type = params.type || "GET";
						params.dataType = params.dataType || "json";
						params.cache = false;
						var startTime = new Date;
						var options = _extends({}, params);
						var gtk = _utils2["default"].getToken();
						options.url = _utils2["default"].appendUrlParam(options.url, {
							g_tk: gtk,
							responseType: "json"
						});
						if (options.type.toUpperCase() === "POST" && !options.data.token) {
							options.data.token = gtk
						}
						options.success = function(ret) {
							var endTime = new Date;
							if (ret.code !== 0) {
								_returnCodeStat2["default"].report(options.url, 3, ret.code || 1, endTime - startTime, 1);
								if (ret.code === _constants.RETURN_CODE.needLogin && options.needLogin) {
									(0, _login.showLoginDialog)({
										needRefresh: options.needRefresh,
										loginSuccessCb: options.loginSuccessCb
									})
								}
							} else {
								_returnCodeStat2["default"].report(options.url, 1, ret.code || 1, endTime - startTime, 1)
							}
							params.success && params.success(ret)
						};
						options.error = function(xhr, textStatus, error) {
							params.error && params.error(xhr, textStatus, error);
							var endTime = new Date;
							_returnCodeStat2["default"].report(options.url, 2, 502, endTime - startTime, 1);
							return false
						};
						$.ajax(options)
					}
				}]);
				return Network
			}();
		var network = new Network;
		window._cfCommon = window._cfCommon || {};
		window._cfCommon.network = network;
		exports["default"] = network;
	}, {
		"./constants": 2,
		"./login": 9,
		"./return-code-stat": 14,
		"./utils": 16
	}],
	11: [function(require, module, exports) {
		"use strict";
		Object.defineProperty(exports, "__esModule", {
			value: true
		});
		$.fn.follow = function(trigger, options) {
			var defaults = {
				offsets: {
					x: 0,
					y: 0
				},
				position: "4-1",
				edgeAdjust: true
			};
			var params = $.extend({}, defaults, options || {});
			return $(this).each(function() {
				var target = $(this);
				if (trigger.length == 0) {
					return
				}
				var pos, tri_h = 0,
					tri_w = 0,
					tri_l, tri_t, tar_l, tar_t, cor_l, cor_t, tar_h = target.data("height"),
					tar_w = target.data("width"),
					st = $(window).scrollTop(),
					sl = $(window).scrollLeft(),
					off_x = parseInt(params.offsets.x, 10) || 0,
					off_y = parseInt(params.offsets.y, 10) || 0,
					mousePos = this.cacheData;
				if (!tar_h) {
					tar_h = target.outerHeight()
				}
				if (!tar_w) {
					tar_w = target.outerWidth()
				}
				pos = trigger.offset();
				tri_h = trigger.outerHeight();
				tri_w = trigger.outerWidth();
				tri_l = pos.left;
				tri_t = pos.top;
				if ( !! params.isFixed) {
					target.css({
						position: "fixed",
						left: Math.round(tri_l),
						top: Math.round(tri_t + tri_h - st + 1)
					});
					return
				}
				var funMouseL = function funMouseL() {
						if (tri_l < 0) {
							tri_l = 0
						} else if (tri_l + tri_h > $(window).width()) {
							tri_l = $(window).width() - tri_w
						}
					},
					funMouseT = function funMouseT() {
						if (tri_t < 0) {
							tri_t = 0
						} else if (tri_t + tri_h > $(document).height()) {
							tri_t = $(document).height() - tri_h
						}
					};
				var arrLegalPos = ["4-1", "1-4", "5-7", "2-3", "2-1", "6-8", "3-4", "4-3", "8-6", "1-2", "7-5", "3-2"],
					align = params.position,
					alignMatch = false,
					strDirect;
				$.each(arrLegalPos, function(i, n) {
					if (n === align) {
						alignMatch = true;
						return
					}
				});
				if (!alignMatch) {
					align = defaults.position
				}
				var funDirect = function funDirect(a) {
						var dir = "bottom";
						switch (a) {
						case "1-4":
						case "5-7":
						case "2-3":
							{
								dir = "top";
								break
							}
						case "2-1":
						case "6-8":
						case "3-4":
							{
								dir = "right";
								break
							}
						case "1-2":
						case "8-6":
						case "4-3":
							{
								dir = "left";
								break
							}
						case "4-1":
						case "7-5":
						case "3-2":
							{
								dir = "bottom";
								break
							}
						}
						return dir
					};
				var funCenterJudge = function funCenterJudge(a) {
						if (a === "5-7" || a === "6-8" || a === "8-6" || a === "7-5") {
							return true
						}
						return false
					};
				var funJudge = function funJudge(dir) {
						var totalHeight = 0,
							totalWidth = 0;
						if (dir === "right") {
							totalWidth = tri_l + tri_w + tar_w + off_x;
							if (totalWidth > $(window).width()) {
								return false
							}
						} else if (dir === "bottom") {
							totalHeight = tri_t + tri_h + tar_h + off_y;
							if (totalHeight > st + $(window).height()) {
								return false
							}
						} else if (dir === "top") {
							totalHeight = tar_h + off_y;
							if (totalHeight > tri_t - st) {
								return false
							}
						} else if (dir === "left") {
							totalWidth = tar_w + off_x;
							if (totalWidth > tri_l) {
								return false
							}
						}
						return true
					};
				strDirect = funDirect(align);
				if (params.edgeAdjust) {
					if (funJudge(strDirect)) {
						(function() {
							if (funCenterJudge(align)) {
								return
							}
							var obj = {
								top: {
									right: "2-3",
									left: "1-4"
								},
								right: {
									top: "2-1",
									bottom: "3-4"
								},
								bottom: {
									right: "3-2",
									left: "4-1"
								},
								left: {
									top: "1-2",
									bottom: "4-3"
								}
							};
							var o = obj[strDirect],
								name;
							if (o) {
								for (name in o) {
									if (!funJudge(name)) {
										align = o[name]
									}
								}
							}
						})()
					} else {
						(function() {
							if (funCenterJudge(align)) {
								var center = {
									"5-7": "7-5",
									"7-5": "5-7",
									"6-8": "8-6",
									"8-6": "6-8"
								};
								align = center[align]
							} else {
								var obj = {
									top: {
										left: "3-2",
										right: "4-1"
									},
									right: {
										bottom: "1-2",
										top: "4-3"
									},
									bottom: {
										left: "2-3",
										right: "1-4"
									},
									left: {
										bottom: "2-1",
										top: "3-4"
									}
								};
								var o = obj[strDirect],
									arr = [];
								for (name in o) {
									arr.push(name)
								}
								if (funJudge(arr[0]) || !funJudge(arr[1])) {
									align = o[arr[0]]
								} else {
									align = o[arr[1]]
								}
							}
						})()
					}
				}
				var strNewDirect = funDirect(align),
					strFirst = align.split("-")[0];
				switch (strNewDirect) {
				case "top":
					{
						tar_t = tri_t - tar_h;
						if (strFirst == "1") {
							tar_l = tri_l
						} else if (strFirst === "5") {
							tar_l = tri_l - (tar_w - tri_w) / 2
						} else {
							tar_l = tri_l - (tar_w - tri_w)
						}
						break
					}
				case "right":
					{
						tar_l = tri_l + tri_w;
						if (strFirst == "2") {
							tar_t = tri_t
						} else if (strFirst === "6") {
							tar_t = tri_t - (tar_h - tri_h) / 2
						} else {
							tar_t = tri_t - (tar_h - tri_h)
						}
						break
					}
				case "bottom":
					{
						tar_t = tri_t + tri_h;
						if (strFirst == "4") {
							tar_l = tri_l
						} else if (strFirst === "7") {
							tar_l = tri_l - (tar_w - tri_w) / 2
						} else {
							tar_l = tri_l - (tar_w - tri_w)
						}
						break
					}
				case "left":
					{
						tar_l = tri_l - tar_w;
						if (strFirst == "2") {
							tar_t = tri_t
						} else if (strFirst === "6") {
							tar_t = tri_t - (tar_w - tri_w) / 2
						} else {
							tar_t = tri_t - (tar_h - tri_h)
						}
						break
					}
				}
				if (params.edgeAdjust && funCenterJudge(align)) {
					var winWidth = $(window).width(),
						winHeight = $(window).height();
					if (align == "7-5" || align == "5-7") {
						if (tar_l - sl < .5 * winWidth) {
							if (tar_l - sl < 0) {
								tar_l = sl
							}
						} else if (tar_l - sl + tar_w > winWidth) {
							tar_l = winWidth + sl - tar_w
						}
					} else {
						if (tar_t - st < .5 * winHeight) {
							if (tar_t - st < 0) {
								tar_t = st
							}
						} else if (tar_t - st + tar_h > winHeight) {
							tar_t = winHeight + st - tar_h
						}
					}
				}
				if (strNewDirect == "top" || strNewDirect == "left") {
					tar_l = tar_l - off_x;
					tar_t = tar_t - off_y
				} else {
					tar_l = tar_l + off_x;
					tar_t = tar_t + off_y
				}
				target.css({
					position: "absolute",
					left: Math.round(tar_l),
					top: Math.round(tar_t)
				}).attr("data-align", align)
			})
		};
		var Follow = function Follow(trigger, target, options) {
				target.follow(trigger, options)
			};
		Follow.prototype.hide = function() {
			target.remove()
		};
		exports["default"] = Follow;
	}, {}],
	12: [function(require, module, exports) {
		"use strict";
		(function($) {
			$.fn.menuAim = function(opts) {
				this.each(function() {
					init.call(this, opts)
				});
				return this
			};

			function init(opts) {
				var $menu = $(this),
					activeRow = null,
					mouseLocs = [],
					lastDelayLoc = null,
					timeoutId = null,
					options = $.extend({
						rowSelector: "> li",
						submenuSelector: "*",
						submenuDirection: "right",
						tolerance: 75,
						enter: $.noop,
						exit: $.noop,
						activate: $.noop,
						deactivate: $.noop,
						exitMenu: $.noop
					}, opts);
				var MOUSE_LOCS_TRACKED = 3,
					DELAY = 300;
				var mousemoveDocument = function mousemoveDocument(e) {
						mouseLocs.push({
							x: e.pageX,
							y: e.pageY
						});
						if (mouseLocs.length > MOUSE_LOCS_TRACKED) {
							mouseLocs.shift()
						}
					};
				var mouseleaveMenu = function mouseleaveMenu() {
						if (timeoutId) {
							clearTimeout(timeoutId)
						}
						if (options.exitMenu(this)) {
							if (activeRow) {
								options.deactivate(activeRow)
							}
							activeRow = null
						}
					};
				var mouseenterRow = function mouseenterRow() {
						if (timeoutId) {
							clearTimeout(timeoutId)
						}
						options.enter(this);
						possiblyActivate(this)
					},
					mouseleaveRow = function mouseleaveRow() {
						options.exit(this)
					};
				var activate = function activate(row) {
						if (row == activeRow) {
							return
						}
						if (activeRow) {
							options.deactivate(activeRow)
						}
						options.activate(row);
						activeRow = row
					};
				var possiblyActivate = function possiblyActivate(row) {
						var delay = activationDelay();
						if (delay) {
							timeoutId = setTimeout(function() {
								possiblyActivate(row)
							}, delay)
						} else {
							activate(row)
						}
					};
				var activationDelay = function activationDelay() {
						if (!activeRow || !$(activeRow).is(options.submenuSelector)) {
							return 0
						}
						var offset = $menu.offset(),
							upperLeft = {
								x: offset.left,
								y: offset.top - options.tolerance
							},
							upperRight = {
								x: offset.left + $menu.outerWidth(),
								y: upperLeft.y
							},
							lowerLeft = {
								x: offset.left,
								y: offset.top + $menu.outerHeight() + options.tolerance
							},
							lowerRight = {
								x: offset.left + $menu.outerWidth(),
								y: lowerLeft.y
							},
							loc = mouseLocs[mouseLocs.length - 1],
							prevLoc = mouseLocs[0];
						if (!loc) {
							return 0
						}
						if (!prevLoc) {
							prevLoc = loc
						}
						if (prevLoc.x < offset.left || prevLoc.x > lowerRight.x || prevLoc.y < offset.top || prevLoc.y > lowerRight.y) {
							return 0
						}
						if (lastDelayLoc && loc.x == lastDelayLoc.x && loc.y == lastDelayLoc.y) {
							return 0
						}
						function slope(a, b) {
							return (b.y - a.y) / (b.x - a.x)
						}
						var decreasingCorner = upperRight,
							increasingCorner = lowerRight;
						if (options.submenuDirection == "left") {
							decreasingCorner = lowerLeft;
							increasingCorner = upperLeft
						} else if (options.submenuDirection == "below") {
							decreasingCorner = lowerRight;
							increasingCorner = lowerLeft
						} else if (options.submenuDirection == "above") {
							decreasingCorner = upperLeft;
							increasingCorner = upperRight
						}
						var decreasingSlope = slope(loc, decreasingCorner),
							increasingSlope = slope(loc, increasingCorner),
							prevDecreasingSlope = slope(prevLoc, decreasingCorner),
							prevIncreasingSlope = slope(prevLoc, increasingCorner);
						if (decreasingSlope < prevDecreasingSlope && increasingSlope > prevIncreasingSlope) {
							lastDelayLoc = loc;
							return DELAY
						}
						lastDelayLoc = null;
						return 0
					};
				$menu.mouseleave(mouseleaveMenu).find(options.rowSelector).mouseenter(mouseenterRow).mouseleave(mouseleaveRow);
				$(document).mousemove(mousemoveDocument)
			}
		})(jQuery);
	}, {}],
	13: [function(require, module, exports) {
		"use strict";
		Object.defineProperty(exports, "__esModule", {
			value: true
		});
		exports.setQQWPA = setQQWPA;
		exports.addQQConsultStat = addQQConsultStat;
		var _network = require("./network");
		var _network2 = _interopRequireDefault(_network);

		function _interopRequireDefault(obj) {
			return obj && obj.__esModule ? obj : {
				"default": obj
			}
		}
		var wpaId = 0;
		var reFetchTimer = -1;

		function setQQWPA() {
			if (!window.BizQQWPA) {
				setTimeout(function() {
					setQQWPA()
				}, 500);
				return
			}
			$(".jmod-wpa-qq").off("click").on("click", function(e) {
				if (window.BizQQWPA) {
					return
				}
				if (reFetchTimer !== -1) {
					return
				}
				reFetchTimer = setTimeout(function() {
					reFetchTimer = -1;
					if (!window.BizQQWPA) {
						// $.getScript(location.protocol + "//" + location.host + "/Httpspxy/index?url=" + encodeURIComponent("http://wpa.b.qq.com/cgi/wpa.php"), function() {})
					}
				}, 500)
			});
			$(".jmod-wpa-qq").each(function(index, item) {
				var $item = $(item);
				if ($item.hasClass("jmod-consult-stat")) {
					if (!+hasLogin) {
						return true
					}
				}
				if (!$item.attr("id")) {
					var qq = $item.attr("_wpa_qq");
					var qId = "wpaId" + wpaId++;
					$item.attr("id", qId);
					if (qq && qq.match(/^(400|800)\d{6,7}$/)) {
						BizQQWPA.addCustom({
							aty: "0",
							nameAccount: qq,
							selector: qId
						})
					}
				}
			})
		}
		function addQQConsultStat() {
			$(document).on("click", ".jmod-consult-stat", function(e) {
				var $target = $(e.currentTarget);
				var sURL = location.href;
				if (!+hasLogin) {
					e.stopPropagation();
					e.preventDefault();
					location.href = "//" + location.host + "/user/login?from=" + encodeURIComponent(sURL);
					return false
				} else {
					var csId = $target.data("csid") || 0;
					var cId = $target.data("cid");
					_network2["default"].request({
						url: "/StatLog/reportAsk",
						type: "POST",
						data: {
							csid: csId,
							cid: cId
						}
					})
				}
			})
		}
		var qqUtils = {
			setQQWPA: setQQWPA,
			addQQConsultStat: addQQConsultStat
		};
		window._cfCommon = window._cfCommon || {};
		window._cfCommon.qqUtils = qqUtils;
		exports["default"] = qqUtils;
	}, {
		"./network": 10
	}],
	14: [function(require, module, exports) {
		"use strict";
		Object.defineProperty(exports, "__esModule", {
			value: true
		});
		var _utils = require("./utils");
		var _utils2 = _interopRequireDefault(_utils);

		function _interopRequireDefault(obj) {
			return obj && obj.__esModule ? obj : {
				"default": obj
			}
		}
		var commurl = "//report.huatuo.qq.com/code.cgi";
		var urlParse = /^https?:\/\/([\s\S]*?)(\/[\s\S]*?)(?:\?|$)/;
		var AppId = "20198";
		var Platform = "pc";
		var collector = [];

		function valueStat(uin, exts) {
			var param = [];
			param.push("appid=" + AppId, "platform=" + Platform, "uin=" + uin, "key=" + "domain,cgi,type,code,time,rate", "r=" + Math.random());
			var i = 0;
			if (typeof exts.unshift === "function") {
				while (exts.length) {
					if (param.join("&").length > 1e3) {
						break
					}
					var c = exts.shift();
					param.push([i + 1, 1].join("_") + "=" + c[0]);
					param.push([i + 1, 2].join("_") + "=" + c[1]);
					param.push([i + 1, 3].join("_") + "=" + c[2]);
					param.push([i + 1, 4].join("_") + "=" + c[3]);
					param.push([i + 1, 5].join("_") + "=" + c[4]);
					param.push([i + 1, 6].join("_") + "=" + c[5]);
					i++
				}
			}
			if (i > 0) {
				_utils2["default"].imgPing(commurl + "?" + param.join("&"))
			}
		}
		function toabs(id) {
			if (!id) {
				return ""
			}
			var ret = id;
			if (id.indexOf("://") === 4 || id.indexOf("://") === 5) {
				ret = id
			} else if (id.indexOf("../") === 0) {
				ret = location.protocol + "//" + location.host + "/" + id.replace(/(?:\.\.\/)*/, location.pathname.split("/").slice(1, -1 * id.split("../").length).join("/") + "/")
			} else if (/^[^\/]+\//.test(id) || id.indexOf("./") === 0) {
				if (id.indexOf("./") === 0) {
					id = id.substring(2)
				}
				ret = location.protocol + "//" + location.host + location.pathname.split("/").slice(0, -1).join("/") + "/" + id
			} else if (id.charAt(0) === "/") {
				ret = location.protocol + "//" + location.host + id
			}
			return ret
		}
		function report(url, type, code, time, rate) {
			var u = toabs(url);
			var mtch = u.match(urlParse);
			var cgi = mtch[2];
			var domain = mtch[1];
			collector.push([domain, cgi, type, code || 1, time, rate]);
			valueStat(0, collector)
		}
		var returnCodeStat = {
			report: report
		};
		window._cfCommon = window._cfCommon || {};
		window._cfCommon.returnCodeStat = returnCodeStat;
		exports["default"] = returnCodeStat;
	}, {
		"./utils": 16
	}],
	15: [function(require, module, exports) {
		"use strict";
		Object.defineProperty(exports, "__esModule", {
			value: true
		});
		var _utils = require("./utils");
		var _utils2 = _interopRequireDefault(_utils);

		function _interopRequireDefault(obj) {
			return obj && obj.__esModule ? obj : {
				"default": obj
			}
		}
		var REPORT_URL = "//report.huatuo.qq.com/report.cgi";
		var AppId = "20198";
		var Platform = "pc";
		var Flag1 = "21497";
		var Flag2 = "1";

		function report(spId, defaultStat, customStat) {
			var nParams = ["appid=" + AppId, "platform=" + Platform, "speedparams="];
			var pParams = ["flag1=" + Flag1, "flag2=" + Flag2, "flag3=" + spId, "flag5=" + Math.random()];
			defaultStat.forEach(function(item, index) {
				pParams.push(index + 1 + "=" + item)
			});
			var i = pParams.length - 4;
			customStat.forEach(function(item, index) {
				var newIndex = index + i + 1;
				pParams.push(newIndex + "=" + item)
			});
			_utils2["default"].imgPing(REPORT_URL + "?" + nParams.join("&") + encodeURIComponent(pParams.join("&")))
		}
		function reportTimes() {
			var spId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
			var customStat = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
			var timing = window.performance.timing;
			if (timing.loadEventEnd - timing.navigationStart <= 0) {
				setTimeout(function() {
					reportTimes(spId, customStat)
				}, 200);
				return
			}
			var defaultStat = [timing.loadEventEnd - timing.navigationStart, timing.redirectEnd - timing.redirectStart, timing.domainLookupEnd - timing.domainLookupStart, timing.connectEnd - timing.connectStart, timing.responseStart - timing.navigationStart, timing.responseEnd - timing.requestStart, timing.domComplete - timing.responseEnd, timing.loadEventEnd - timing.loadEventStart, timing.unloadEventEnd - timing.unloadEventStart];
			report(spId, defaultStat, customStat)
		}
		function initReport() {
			var spId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
			var customStat = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
			if (!spId) {
				return
			}
			if (window.performance && window.performance.timing) {
				$(window).load(function() {
					reportTimes(spId, customStat)
				})
			}
		}
		var timeStat = {
			initReport: initReport
		};
		window._cfCommon = window._cfCommon || {};
		window._cfCommon.timeStat = timeStat;
		exports["default"] = timeStat;
	}, {
		"./utils": 16
	}],
	16: [function(require, module, exports) {
		"use strict";
		Object.defineProperty(exports, "__esModule", {
			value: true
		});
		var pingId = 0;
		var utils = {};
		utils.tmpl = function(str) {
			var param = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
			var fn = ["var __=[];"];
			var re = /([\s\S]*?)(?:(?:<%([^=][\s\S]*?)%>)|(?:<%=([\s\S]+?)%>)|$)/g;
			re.lastIndex = 0;
			var m = re.exec(str || "");
			while (m && (m[1] || m[2] || m[3])) {
				m[1] && fn.push("__.push('", m[1].replace(/\\/g, "\\\\").replace(/\n/g, "\\n").replace(/\r/g, "").replace(/\t/g, "\t").replace(/\//g, "\\/").replace(/'/g, "\\'").replace(/"/g, '\\"'), "');");
				m[2] && fn.push(m[2]);
				m[3] && fn.push("__.push(", m[3], ");");
				m = re.exec(str)
			}
			fn.push("return __.join('');");
			var args = [];
			var argv = [];
			for (var key in param) {
				args.push(key);
				argv.push(param[key])
			}
			fn = new Function(args.join(","), fn.join(""));
			return fn.apply(null, argv)
		};
		utils.getCookie = function(name) {
			var regx = new RegExp("(^|;|\\s+)" + name + "=(.*?)(;|$)");
			var cookieMatch = document.cookie.match(regx);
			var r = cookieMatch && cookieMatch.length > 2 ? cookieMatch[2] : "";
			return decodeURIComponent(r)
		};
		utils.getToken = function() {
			var skey = utils.getCookie("skey") || "";
			var hash = 5381;
			for (var i = 0; i < skey.length; i++) {
				hash += (hash << 5) + skey.charCodeAt(i)
			}
			return hash & 2147483647
		};
		utils.getUin = function() {
			var u = utils.getCookie("uin");
			if (!u) {
				return 0
			}
			u = /^o(\d+)$/.exec(u);
			if (u && (u = parseInt(u[1], 10) + 0) > 1e4) {
				return u
			}
			return 0
		};
		utils.appendUrlParam = function(url, param, forHash) {
			if (!url) {
				return ""
			}
			if (!param) {
				return url
			}
			var p = [];
			for (var k in param) {
				if (param.hasOwnProperty(k)) {
					p.push(encodeURIComponent(k) + "=" + encodeURIComponent(param[k]))
				}
			}
			p = p.join("&");
			var hash = url.split("#");
			url = hash[0].split("?");
			hash = hash[1] ? "#" + hash[1] : "";
			param = url[1] ? "?" + url[1] : "";
			url = url[0];
			var v = forHash ? hash : param;
			v = v ? v.lastIndexOf("&") === v.length - 1 ? v + p : v + "&" + p : "?" + p;
			if (forHash) {
				hash = v
			} else {
				param = v
			}
			return url + param + hash
		};
		utils.imgPing = function(url, params, options) {
			var id = "pingImg_" + pingId++;
			var tQueryString = [];
			window[id] = new Image;
			window[id].onload = function() {
				window[id] = window[id].onload = null;
				options && options.callback && options.callback({
					ret: 0
				})
			};
			window[id].onerror = function() {
				window[id] = window[id].onerror = null;
				options && options.callback && options.callback({
					ret: -1
				})
			};
			if (params) {
				try {
					for (var key in params) {
						tQueryString.push(encodeURIComponent(key) + "=" + encodeURIComponent(params[key]))
					}
				} catch (_) {}
				if (tQueryString.length) {
					url = url + (url.indexOf("?") > 0 ? "&" : "?") + tQueryString.join("&")
				}
			}
			window[id].src = url
		};
		utils.isIE = function(ver) {
			var b = document.createElement("b");
			b.innerHTML = "<!--[if IE " + ver + "]><i></i><![endif]-->";
			return b.getElementsByTagName("i").length === 1
		};
		utils.ieVer = function() {
			var ret = {};
			var ua = navigator.userAgent.toLowerCase();
			var s = void 0;
			(s = ua.match(/rv:([\d.]+)\) like gecko/)) ? ret.ie = s[1] : (s = ua.match(/msie ([\d.]+)/)) ? ret.ie = s[1] : 0;
			if (ret.ie) return ret.ie
		};
		utils.formateDate = function(d, requireTime) {
			var getDate = function getDate(dateObj) {
					var month = dateObj.getMonth() + 1;
					var date = dateObj.getDate();
					var result = dateObj.getFullYear() + "-" + (month < 10 ? "0" + month : month) + "-" + (date < 10 ? "0" + date : date);
					if (requireTime) {
						var hour = dateObj.getHours();
						var minute = dateObj.getMinutes();
						var second = dateObj.getSeconds();
						result += " " + (hour < 10 ? "0" + hour : hour) + ":" + (minute < 10 ? "0" + minute : minute) + ":" + (second < 10 ? "0" + second : second)
					}
					return result
				};
			if (d && d.getFullYear && d.getFullYear()) {
				return getDate(d)
			} else if (d !== "") {
				var c = new Date(parseInt(d));
				return getDate(c)
			} else {
				return ""
			}
		};
		utils.getUrlParam = function(key) {
			var curUrl = window.location.href;
			var queryString = curUrl.split("#")[0].split("?")[1] + "&" + curUrl.split("#")[1];
			var paramValue = "";
			if (queryString) {
				queryString = queryString.split("&");
				for (var i = 0, len = queryString.length, param; i < len; i++) {
					param = queryString[i].split("=");
					if (decodeURIComponent(param[0]) === key) {
						paramValue = param[1] ? decodeURIComponent(param[1]) : ""
					}
				}
			}
			return paramValue
		};
		utils.getRandomItemFromList = function(list) {
			var idx = Math.floor(Math.random() * list.length);
			return list[idx]
		};
		utils.getStringByteLength = function(val) {
			var sum = 0;
			var realNum = 0;
			for (var i = 0; i < val.length; i++) {
				if (val.charCodeAt(i) >= 0 && val.charCodeAt(i) <= 255) {
					sum = sum + 1
				} else {
					sum = sum + 2
				}
				realNum = sum
			}
			return realNum
		};
		utils.isBoxAtViewPort = function($node) {
			return !($(window).scrollTop() > $node.offset().top + $node.outerHeight() || $(window).scrollTop() < $node.offset().top - $(window).height())
		};
		utils.restHTML = function(x) {
			if (x == null) {
				return ""
			}
			if (x === "") {
				return ""
			}
			var escHtmlDiv = document.createElement("div");
			escHtmlDiv.innerHTML = x;
			if (escHtmlDiv.firstChild) {
				return escHtmlDiv.firstChild.nodeValue || ""
			}
			return ""
		};
		utils.delayHover = function(trigger, hoverFn, hoverTime, outFn, outTime) {
			trigger.each(function(index, ele) {
				var _hoverFn = hoverFn || $.noop;
				var _outFn = outFn || $.noop;
				var _hoverTime = hoverTime !== undefined ? hoverTime : 200;
				var _outTime = outTime !== undefined ? outTime : 200;
				var _hoverTimer = void 0,
					_outTimer = void 0;
				$(ele).hover(function(event) {
					if (_outTimer) {
						_outTimer = clearTimeout(_outTimer);
						_outTimer = null
					}
					if (_hoverTime > 50) {
						_hoverTimer = setTimeout(function() {
							_hoverFn.call(ele, event)
						}, _hoverTime)
					} else {
						_hoverFn.call(ele, event)
					}
				}, function(event) {
					if (_hoverTimer) {
						_hoverTimer = clearTimeout(_hoverTimer);
						_hoverTimer = null
					}
					if (_outTime > 50) {
						_outTimer = setTimeout(function() {
							_outFn.call(ele, event)
						}, _outTime)
					} else {
						_outFn.call(ele, event)
					}
				})
			})
		};
		utils.toDecimal = function(num, places) {
			places = parseInt(places);
			if (isNaN(places)) {
				places = 2
			}
			var f = parseFloat(num);
			if (isNaN(f)) {
				return 0
			}
			f = Math.round(num * 100) / 100;
			var s = f.toString();
			var rs = s.indexOf(".");
			if (rs < 0) {
				rs = s.length;
				s += "."
			}
			while (s.length <= rs + places) {
				s += "0"
			}
			return s
		};
		utils.formatRemainTime = function(remainTime, unit) {
			if (!unit) {
				unit = 2
			}
			var day = 0;
			var hour = 0;
			var min = 0;
			var sec = 0;
			day = Math.floor(remainTime / 86400);
			hour = Math.floor(remainTime % 86400 / 3600);
			min = Math.floor(remainTime % 3600 / 60);
			sec = Math.floor(remainTime % 60);
			var ret = "";
			while (unit) {
				if (day) {
					ret += day + "天";
					unit--;
					day = 0;
					continue
				}
				if (hour) {
					ret += hour + "小时";
					unit--;
					hour = 0;
					continue
				}
				if (min) {
					ret += min + "分";
					unit--;
					min = 0;
					continue
				}
				if (sec) {
					ret += sec + "秒";
					unit--;
					sec = 0;
					continue
				}
				break
			}
			return ret
		};
		utils.escRegExp = function(str) {
			return String(str).replace(/[.*+?^=!:${}()|[\]\/\\]/g, "\\$&")
		};
		utils.getHash = function(name, hash) {
			var regex = "(?:^|[?&#])" + utils.escRegExp(encodeURIComponent(name)) + "=([^&#?]*)";
			var value = (hash || location.hash).match(new RegExp(regex, "")) || ["", ""];
			return decodeURIComponent(value[1])
		};
		var domainWhiteList = ["zc.open.qq.com", "c.qq.com", "qzs.qq.com", "p.qpic.cn", "*.gtimg.cn", "p.qlogo.cn", "q.qlogo.cn", "zcqzs-dev.sparta.html5.qq.com", "zcqzs-test.sparta.html5.qq.com", "zcqzs-pre.sparta.html5.qq.com", "zcplat-dev.kf0309.3g.qq.com", "zcplat-test.kf0309.3g.qq.com", "zcplat-pre.kf0309.3g.qq.com", "c-dev.sparta.html5.qq.com", "c-test.sparta.html5.qq.com", "c-pre.sparta.html5.qq.com", "zcopen-dev.sparta.html5.qq.com", "zcopen-test.sparta.html5.qq.com", "zcopen-pre.sparta.html5.qq.com"];
		utils.clearProtocol = function(url) {
			var replaceBegin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
			if (!url) {
				return
			}
			var reg = "";
			if (replaceBegin) {
				reg = /^https?:\/\/([\-a-zA-Z0-9\.]*)/i
			} else {
				reg = /https?:\/\/([\-a-zA-z0-9\.]*)/gi
			}
			url = url.replace(reg, function(w, w1) {
				if (~domainWhiteList.indexOf(w1) || ~domainWhiteList.indexOf(w1.replace(/^[^.]*([\-a-zA-z0-9\.])/gi, "*$1"))) {
					return "//" + w1
				}
				return w
			});
			return url
		};
		window._cfCommon = window._cfCommon || {};
		window._cfCommon.utils = utils;
		exports["default"] = utils;
	}, {}],
	17: [function(require, module, exports) {
		"use strict";
		Object.defineProperty(exports, "__esModule", {
			value: true
		});
		exports.report = report;
		exports.reportInit = reportInit;
		var _cookieP = /(?:^|;+|\s+)pgv_pvid=([^;]*)/i;
		var _cookieSSID = /(?:^|;+|\s+)pgv_info=([^;]*)/i;
		var _cookieZID = /(?:^|;+|\s+)zId=([^;]*)/i;
		var _cookieUIN = /(?:^|;+|\s+)uin=o0*([^;]*)/i;
		var _urlSpliter = /[\?\#]/;

		function num2ABC(str) {
			str += "";
			var ABC = "";
			for (var i = 0, len = str.length; i < len; i++) {
				var ch = str[i].charCodeAt(0);
				if (ch > 47 && ch < 58) {
					ABC += String.fromCharCode(ch + 17)
				} else {
					ABC += str[i]
				}
			}
			return ABC
		}
		var tcss = {
			sendPvStat: function sendPvStat(opts) {
				var referDomain = void 0,
					referPath = void 0;
				opts = opts || {};
				opts.referURL = opts.referURL || document.referrer;
				var t = void 0,
					d = void 0,
					r = void 0;
				t = opts.referURL.split(_urlSpliter);
				t = t[0];
				t = t.split("/");
				d = t[2] || "-";
				r = "/" + t.slice(3).join("/");
				referDomain = opts.referDomain || d;
				referPath = opts.referPath || r;
				var url = "//pingfore.qq.com/pingd?tz=-8&vs=3.3" + "&dm=" + opts.domain + "&url=" + encodeURIComponent(location.pathname + location.search) + "&rdm=" + referDomain + "&rurl=" + referPath + "&pgv_pvid=" + opts.pgvPvid + "&sds=" + Math.random();
				url += "&scr=&pf=pc&ct=-&lang=-&java=-&flash=-&ua=-";
				(new Image).src = url
			},
			hotTagStat: function hotTagStat(opts) {
				var actionObj = "000";
				if (opts.actionObj) {
					var o = opts.actionObj.split("|");
					if (parseInt(o[0], 10) === 1) {
						actionObj = o[1]
					}
				}
				var tag = opts.path + "." + opts.slot.split("_").join(".") + "." + actionObj;
				tag = num2ABC(tag);
				var url = ["//pingfore.qq.com/pingd?dm=", opts.domain, ".hot&url=", num2ABC(opts.path), "&hottag=", tag, "&hotx=9999&hoty=9999&rand=", Math.random()].join("");
				(new Image).src = url
			}
		};
		var zcStat = {
			send: function send(opts) {
				var url = "//" + Env.statDomain + "/report?vs=1.0" + "&rts=" + (new Date).getTime() + "&ts=" + (new Date).getTime() + "&dm=" + opts.domain + "&path=" + opts.path + "&rdm=" + (opts.referDomain || "") + "&rpath=" + (opts.referPath || "") + "&slot=" + (opts.slot || "0_0") + "&action=" + (opts.action || 1) + "&actionObj=" + encodeURIComponent(opts.actionObj || "") + "&curl=" + encodeURIComponent(window.location.href) + "&refer=" + encodeURIComponent(document.referrer) + "&pgv_pvid=" + opts.pgvPvid + "&ssid=" + opts.ssid + "&user=" + opts.user + "&sds=" + Math.random();
				(new Image).src = url
			}
		};

		function isBoxAtViewPort($node) {
			return !($(window).scrollTop() > $node.offset().top + $node.outerHeight() || $(window).scrollTop() < $node.offset().top - $(window).height())
		}
		function getUser() {
			var u = document.cookie.match(_cookieUIN);
			u = u ? u[1] : "0";
			var z = document.cookie.match(_cookieZID);
			z = z ? z[1] : "0";
			return "uin_" + u + "|zid_" + z
		}
		function getPgvid() {
			var t = void 0,
				d = void 0,
				h = void 0,
				f = void 0;
			t = document.cookie.match(_cookieP);
			if (t && t.length && t.length > 1) {
				d = t[1]
			} else {
				d = 0;
				while (("" + d).length <= 1) {
					d = Math.round(Math.random() * 2147483647) * (new Date).getUTCMilliseconds() % 1e10
				}
				document.cookie = "pgv_pvid=" + d + "; path=/; domain=qq.com; expires=Sun, 18 Jan 2038 00:00:00 GMT;"
			}
			h = document.cookie.match(_cookieSSID);
			if (!h) {
				f = 0;
				while (("" + f).length <= 1) {
					f = Math.round(Math.random() * 2147483647) * (new Date).getUTCMilliseconds() % 1e10
				}
				document.cookie = "pgv_info=ssid=s" + f + "; path=/; domain=qq.com;"
			}
			return d
		}
		function getSsid() {
			var h = void 0;
			var s = "";
			h = document.cookie.match(_cookieSSID);
			if (h) {
				s = h[1];
				s = s.split("=")[1]
			}
			return s
		}
		function reportTcss(opts) {
			var action = parseInt(opts.action, 10);
			if (action === 2) {
				tcss.hotTagStat(opts)
			} else if (action === 1) {
				tcss.sendPvStat(opts)
			}
		}
		function reportZC(opts) {
			zcStat.send(opts)
		}
		function report(opts) {
			if (!opts.domain) {
				if (location.host.match(/\-(test|dev|pre)/)) {
					opts.domain = "test.zc.open.qq.com"
				} else {
					opts.domain = location.host
				}
			}
			opts.path = opts.path || window.pageId || window.location.pathname;
			opts.pgvPvid = getPgvid();
			opts.user = getUser();
			opts.ssid = getSsid();
			reportTcss(opts);
			reportZC(opts)
		}
		function reportInit() {
			var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
			var path = opts.path || window.pageId || window.location.pathname;
			var extraData = opts.extraData;
			$(document).on("click", "[_stat_click_id]", function(evt) {
				var target = $(this);
				var slot = false;
				var status = "0";
				if (target) {
					slot = target.attr("_stat_click_id");
					status = target.attr("_stat_status");
					var actionObj = target.attr("_stat_action_obj") || "";
					if (slot) {
						report({
							path: path,
							slot: slot,
							status: status || "0",
							actionObj: actionObj,
							action: 2,
							params: extraData || ""
						})
					}
				}
			});
			report({
				path: path,
				slot: "0_0",
				action: 1,
				actionObj: opts.actionObj || "",
				params: extraData || ""
			});
			setInterval(function() {
				var selector = "[_stat_expose_id]";
				var nodes = $(selector);
				for (var i = 0, len = nodes.length; i < len; i++) {
					var node = $(selector).eq(i);
					var slot = node.attr("_stat_expose_id") || "";
					var actionObj = node.attr("_stat_action_obj") || "";
					if (!node.attr("_stat_exposed") && slot) {
						if (isBoxAtViewPort(node)) {
							report({
								path: path,
								slot: node.attr("_stat_expose_id"),
								actionObj: actionObj,
								action: 1,
								params: extraData || ""
							});
							node.attr("_stat_exposed", "1")
						}
					}
				}
			}, 500)
		}
		var valueStat = {
			report: report,
			reportInit: reportInit
		};
		window._cfCommon = window._cfCommon || {};
		window._cfCommon.valueStat = valueStat;
		exports["default"] = valueStat;
	}, {}],
	18: [function(require, module, exports) {
		"use strict";
		Object.defineProperty(exports, "__esModule", {
			value: true
		});
		var _createClass = function() {
				function defineProperties(target, props) {
					for (var i = 0; i < props.length; i++) {
						var descriptor = props[i];
						descriptor.enumerable = descriptor.enumerable || false;
						descriptor.configurable = true;
						if ("value" in descriptor) descriptor.writable = true;
						Object.defineProperty(target, descriptor.key, descriptor)
					}
				}
				return function(Constructor, protoProps, staticProps) {
					if (protoProps) defineProperties(Constructor.prototype, protoProps);
					if (staticProps) defineProperties(Constructor, staticProps);
					return Constructor
				}
			}();
		var _valueStat = require("../../common/js/value-stat");
		var _utils = require("../../common/js/utils");
		var _utils2 = _interopRequireDefault(_utils);
		var _index = require("../../mod/top-bar/index");
		var _index2 = _interopRequireDefault(_index);
		var _index3 = require("../../mod/nav/index");
		var _index4 = _interopRequireDefault(_index3);
		var _index5 = require("../../ui/placeholder/index");
		var _index6 = _interopRequireDefault(_index5);
		var _view = require("./js/view");
		var _view2 = _interopRequireDefault(_view);
		var _model = require("./js/model");
		var _model2 = _interopRequireDefault(_model);
		var _controller = require("./js/controller");
		var _controller2 = _interopRequireDefault(_controller);

		function _interopRequireDefault(obj) {
			return obj && obj.__esModule ? obj : {
				"default": obj
			}
		}
		function _classCallCheck(instance, Constructor) {
			if (!(instance instanceof Constructor)) {
				throw new TypeError("Cannot call a class as a function")
			}
		}
		var Header = function() {
				function Header() {
					_classCallCheck(this, Header)
				}
				_createClass(Header, [{
					key: "init",
					value: function init() {
						var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
						var topBar = new _index2["default"];
						var nav = new _index4["default"];
						topBar.bindUI();
						_index6["default"].initPlaceholder(".jmod_search");
						var headerView = new _view2["default"](nav);
						var headerModel = new _model2["default"];
						var headerController = new _controller2["default"]({
							headerView: headerView,
							headerModel: headerModel
						});
						window.$ = $;
						this.setZcFrom();
						this.setZcTag();
						headerController.getUserInfo();
						this.headerController = headerController;
						if (+hasLogin) {
							headerController.renderLoginQQ()
						}
						if (location.pathname !== "/Portal/index" && location.pathname !== "/" && location.host !== "open.qq.com") {
							headerController.getCateInfo()
						} else {
							nav.init({
								alwaysshow: false
							})
						}(0, _valueStat.reportInit)(opts.statOpts || {})
					}
				}, {
					key: "setZcFrom",
					value: function setZcFrom() {
						var referrer = document.referrer;
						var from = void 0;
						var zcFrom = _utils2["default"].getUrlParam("zcFrom") || "";
						if (!zcFrom) {
							return
						}
						if (zcFrom.toLowerCase() === "wxshare") {
							from = _utils2["default"].getUrlParam("from");
							zcFrom = zcFrom + "." + from
						}
						if (referrer.indexOf("__biz") >= 0) {
							zcFrom = "biz." + _utils2["default"].getUrlParam("__biz")
						}
						if (zcFrom.toLowerCase() === "mqqshare") {
							if (referrer.indexOf("qzone") >= 0) {
								zcFrom = "qzone"
							}
						}
						if (referrer.indexOf("qzone") >= 0) {
							zcFrom = "qzone." + zcFrom
						}
						if (referrer.indexOf("weibo.cn") >= 0) {
							zcFrom = "weibo." + zcFrom
						}
						if (zcFrom) {
							document.cookie = "zcFrom=" + escape(zcFrom)
						}
					}
				}, {
					key: "setZcTag",
					value: function setZcTag() {
						var zctag = _utils2["default"].getUrlParam("zctag");
						if (zctag) {
							var date = new Date;
							var ms = 30 * 24 * 3600 * 1e3;
							date.setTime(date.getTime() + ms);
							var domain = "";
							var hostArr = location.host.split(".");
							var retArr = [];
							for (var i = 0; i < 3; i++) {
								var item = hostArr.pop();
								retArr.push(item)
							}
							var retStr = retArr.reverse().join(".");
							domain = ";domain=." + retStr;
							document.cookie = "zctag=" + zctag + ";expires=" + date.toGMTString() + domain + ";path=/"
						}
					}
				}]);
				return Header
			}();
		var header = new Header;
		header.init();
		exports["default"] = header;
	}, {
		"../../common/js/utils": 16,
		"../../common/js/value-stat": 17,
		"../../mod/nav/index": 23,
		"../../mod/top-bar/index": 24,
		"../../ui/placeholder/index": 30,
		"./js/controller": 19,
		"./js/model": 20,
		"./js/view": 22
	}],
	19: [function(require, module, exports) {
		"use strict";
		Object.defineProperty(exports, "__esModule", {
			value: true
		});
		var _createClass = function() {
				function defineProperties(target, props) {
					for (var i = 0; i < props.length; i++) {
						var descriptor = props[i];
						descriptor.enumerable = descriptor.enumerable || false;
						descriptor.configurable = true;
						if ("value" in descriptor) descriptor.writable = true;
						Object.defineProperty(target, descriptor.key, descriptor)
					}
				}
				return function(Constructor, protoProps, staticProps) {
					if (protoProps) defineProperties(Constructor.prototype, protoProps);
					if (staticProps) defineProperties(Constructor, staticProps);
					return Constructor
				}
			}();
		var _utils = require("../../../common/js/utils");
		var _utils2 = _interopRequireDefault(_utils);

		function _interopRequireDefault(obj) {
			return obj && obj.__esModule ? obj : {
				"default": obj
			}
		}
		function _classCallCheck(instance, Constructor) {
			if (!(instance instanceof Constructor)) {
				throw new TypeError("Cannot call a class as a function")
			}
		}
		var CORP_ROLE = 1;
		var HeaderController = function() {
				function HeaderController(_ref) {
					var headerView = _ref.headerView,
						headerModel = _ref.headerModel;
					_classCallCheck(this, HeaderController);
					this.headerView = headerView;
					this.headerModel = headerModel
				}
				_createClass(HeaderController, [{
					key: "renderLoginQQ",
					value: function renderLoginQQ() {
						this.headerView.renderLoginQQ(_utils2["default"].getUin())
					}
				}, {
					key: "getUnreadNum",
					value: function getUnreadNum() {
						var _this = this;
						this.headerModel.getUnreadNum(function(unreadNum) {
							_this.headerView.renderUnreadNum(unreadNum)
						})
					}
				}, {
					key: "getUserInfo",
					value: function getUserInfo() {
						var _this2 = this;
						this.headerModel.getUserInfo(function(corpStatus) {
							_this2.getUnreadNum();
							if (corpStatus === CORP_ROLE) {
								_this2.headerView.updateNavItem()
							}
						})
					}
				}, {
					key: "getCateInfo",
					value: function getCateInfo() {
						var _this3 = this;
						this.headerModel.getCateInfo(function(cateInfo) {
							_this3.headerView.renderCateInfo(cateInfo)
						})
					}
				}]);
				return HeaderController
			}();
		exports["default"] = HeaderController;
	}, {
		"../../../common/js/utils": 16
	}],
	20: [function(require, module, exports) {
		"use strict";
		Object.defineProperty(exports, "__esModule", {
			value: true
		});
		var _createClass = function() {
				function defineProperties(target, props) {
					for (var i = 0; i < props.length; i++) {
						var descriptor = props[i];
						descriptor.enumerable = descriptor.enumerable || false;
						descriptor.configurable = true;
						if ("value" in descriptor) descriptor.writable = true;
						Object.defineProperty(target, descriptor.key, descriptor)
					}
				}
				return function(Constructor, protoProps, staticProps) {
					if (protoProps) defineProperties(Constructor.prototype, protoProps);
					if (staticProps) defineProperties(Constructor, staticProps);
					return Constructor
				}
			}();
		var _network = require("../../../common/js/network");
		var _network2 = _interopRequireDefault(_network);

		function _interopRequireDefault(obj) {
			return obj && obj.__esModule ? obj : {
				"default": obj
			}
		}
		function _classCallCheck(instance, Constructor) {
			if (!(instance instanceof Constructor)) {
				throw new TypeError("Cannot call a class as a function")
			}
		}
		var hostname = location.hostname;
		var USER_INFO_URL = hostname === "open.qq.com" ? "//c.qq.com/user/get_iscorp" : "/user/get_iscorp";
		var UNREAD_NUM_URL = hostname === "open.qq.com" ? "//c.qq.com/sysmsg/getunreadcount" : "/sysmsg/getunreadcount";
		var CATE_INFO_URL = "/portal/navigatecate";
		var HeaderModel = function() {
				function HeaderModel() {
					_classCallCheck(this, HeaderModel)
				}
				_createClass(HeaderModel, [{
					key: "getUserInfo",
					value: function getUserInfo(callback) {
						_network2["default"].request({
							url: USER_INFO_URL,
							jsonpCallback: "_Callback",
							dataType: "jsonp",
							data: {
								cb: "_Callback"
							},
							success: function success(ret) {
								var corpStatus = parseInt(ret.data.corpStatus, 10);
								var userInfo = ret.data.userInfo;
								if (ret.ret === 0 && userInfo && userInfo.u_id) {
									callback && callback(corpStatus)
								}
							}
						})
					}
				}, {
					key: "getUnreadNum",
					value: function getUnreadNum(callback) {
						_network2["default"].request({
							url: UNREAD_NUM_URL,
							jsonpCallback: "_Callback",
							dataType: "jsonp",
							data: {
								cb: "_Callback"
							},
							success: function success(ret) {
								if (ret.ret === 0) {
									var unReadNum = parseInt(ret.data.notReadNum, 10);
									if (unReadNum === 0) {
										return
									}
									callback(unReadNum)
								}
							}
						})
					}
				}, {
					key: "getCateInfo",
					value: function getCateInfo(callback) {
						_network2["default"].request({
							url: CATE_INFO_URL,
							success: function success(ret) {
								if (ret.ret === 0) {
									var cateInfo = ret.data.navigation || [];
									callback(cateInfo)
								}
							}
						})
					}
				}]);
				return HeaderModel
			}();
		exports["default"] = HeaderModel;
	}, {
		"../../../common/js/network": 10
	}],
	21: [function(require, module, exports) {
		"use strict";
		Object.defineProperty(exports, "__esModule", {
			value: true
		});
		var cateTpl = exports.cateTpl = '\n  <%for(var i = 0, len = cateInfo.length; i < len; i++){var cate1List = cateInfo[i];%>\n    <li>\n      <p class="mod-nav-row <%if(i == len - 1){%>last<%}%>"><%for(var j = 0; j < cate1List.length; j++){var cate1Item = cate1List[j];%><a _stat_click_id="1_4<%=i%><%=j%>" target="_blank" href="<%=clearProtocol(cate1Item.url)%>"><%=cate1Item.name%></a><%}%></p>\n      <div class="mod-nav-submenu">\n        <%for(var j = 0; j < cate1List.length; j++){var cate1Item = cate1List[j];%>\n          <h5 class="mod-nav-topcate"><a _stat_click_id="1_4<%=i%><%=j%>" target="_blank" href="<%=clearProtocol(cate1Item.url)%>"><%=cate1Item.name%></a></h5>\n          <ul>\n            <%for(var k = 0; k < cate1Item.subcate.length; k++){var cate2Item = cate1Item.subcate[k];%>\n              <li><a href="<%=clearProtocol(cate2Item.url)%>" _stat_click_id="1_5<%=i%><%=j%><%=k%>" target="_blank"><%=cate2Item.name%></a></li>\n            <%}%>\n          </ul>\n        <%}%>\n      </div>\n    </li>\n  <%}%>\n';
	}, {}],
	22: [function(require, module, exports) {
		"use strict";
		Object.defineProperty(exports, "__esModule", {
			value: true
		});
		var _createClass = function() {
				function defineProperties(target, props) {
					for (var i = 0; i < props.length; i++) {
						var descriptor = props[i];
						descriptor.enumerable = descriptor.enumerable || false;
						descriptor.configurable = true;
						if ("value" in descriptor) descriptor.writable = true;
						Object.defineProperty(target, descriptor.key, descriptor)
					}
				}
				return function(Constructor, protoProps, staticProps) {
					if (protoProps) defineProperties(Constructor.prototype, protoProps);
					if (staticProps) defineProperties(Constructor, staticProps);
					return Constructor
				}
			}();
		var _login = require("../../../common/js/login");
		var _utils = require("../../../common/js/utils");
		var _utils2 = _interopRequireDefault(_utils);
		var _cate = require("./tpl/cate");

		function _interopRequireDefault(obj) {
			return obj && obj.__esModule ? obj : {
				"default": obj
			}
		}
		function _classCallCheck(instance, Constructor) {
			if (!(instance instanceof Constructor)) {
				throw new TypeError("Cannot call a class as a function")
			}
		}
		var CORP_CENTER_URL = "/order/corpcenter";
		var CORP_MKACC_INFO_URL = "/Mkacc/corpMkaccInfo";
		var LOGOUT_URL = "//imgcache.qq.com/ptlogin/ac/v9/js/ptloginout.js";
		var HeaderView = function() {
				function HeaderView(nav) {
					_classCallCheck(this, HeaderView);
					this.nav = nav;
					this.bindLogout();
					this.bindLogin();
					this.bindSearch();
					this.setDelayHover();
					this.setCurrentNav()
				}
				_createClass(HeaderView, [{
					key: "renderLoginQQ",
					value: function renderLoginQQ(loginQQ) {
						var $nick = $("#navigationUserName a");
						if ($nick.length) {
							if (loginQQ.length > 10) {
								loginQQ = loginQQ.slice(0, 10) + "..."
							}
							$nick.text(loginQQ);
							$(".jmod_nav_username").show();
							$(".jmod_login_btn").hide()
						}
					}
				}, {
					key: "renderUnreadNum",
					value: function renderUnreadNum(unReadNum) {
						unReadNum = unReadNum > 10 ? "10+" : unReadNum;
						$("#msgUnReadNum").html('消息<em class="msgnum">' + unReadNum + "</em>")
					}
				}, {
					key: "renderCateInfo",
					value: function renderCateInfo(cateInfo) {
						var cateHTML = _utils2["default"].tmpl(_cate.cateTpl, {
							cateInfo: cateInfo,
							clearProtocol: _utils2["default"].clearProtocol
						});
						$("#jmod_nav_menu").html(cateHTML);
						this.nav.init({
							alwaysshow: false
						})
					}
				}, {
					key: "bindSearch",
					value: function bindSearch() {
						var f = $(".search-form");
						var input = $(".search-form input");
						var oldTop = void 0;
						$(document).on("click", ".search .btn-wrap", function() {
							oldTop = f.position().top;
							f.animate({
								top: 0
							}, 100);
							input.focus()
						});
						$(document).on("click", ".search-form .close", function() {
							f.animate({
								top: oldTop
							}, 100)
						});
						$(document).on("click", ".jmod_search_btn", function(e) {
							var $target = $(e.currentTarget);
							if (!$.trim($target.parent().find(".jmod_search").val())) {
								return false
							}
							var hostname = location.hostname === "open.qq.com" ? "//c.qq.com" : "";
							var win = window.open(hostname + "/search/s?search_query=" + $.trim($target.parent().find(".jmod_search").val()), "_blank");
							win.focus()
						});
						$(document).on("keydown", ".jmod_search", function(e) {
							var $target = $(e.currentTarget);
							if (e.keyCode === 13) {
								if (!$.trim($target.val())) {
									return false
								}
								var hostname = location.hostname === "open.qq.com" ? "//c.qq.com" : "";
								var win = window.open(hostname + "/search/s?search_query=" + $.trim($target.val()), "_blank");
								win.focus()
							}
						})
					}
				}, {
					key: "bindLogout",
					value: function bindLogout() {
						$(document.body).delegate("#navigationUserLogOut", "click", function() {
							// $.getScript(LOGOUT_URL, function() {
							// 	window.pt_logout && window.pt_logout.logout(function() {
							// 		localStorage.setItem("cf-nickname", "");
							// 		window.location.reload()
							// 	})
							// })
						})
					}
				}, {
					key: "bindLogin",
					value: function bindLogin() {
						$(document.body).delegate(".jmod_login_btn", "click", function() {
							(0, _login.showLoginDialog)({
								needRefresh: true
							})
						})
					}
				}, {
					key: "setDelayHover",
					value: function setDelayHover() {
						delayHover($(".header .nav>ul>li"), function() {
							$(this).addClass("hover")
						}, 200, function() {
							$(this).removeClass("hover")
						}, 0);
						delayHover($(".header .nav-top>ul>li"), function() {
							$(this).addClass("hover")
						}, 200, function() {
							$(this).removeClass("hover")
						}, 0);
						$(".header .sub>ul>li").hover(function() {
							$(this).addClass("hover")
						}, function() {
							$(this).removeClass("hover")
						});
						delayHover($(".user-info .avatar"), function() {
							$(this).addClass("hover")
						}, 200, function() {
							$(this).removeClass("hover")
						}, 0)
					}
				}, {
					key: "setCurrentNav",
					value: function setCurrentNav() {
						var pageId = window.pageId || 1e3;
						$(".jmod_nav_wrap").find('[_page="' + pageId + '"]').closest(".has-sub").addClass("current-page").siblings().removeClass("current-page")
					}
				}, {
					key: "updateNavItem",
					value: function updateNavItem() {
						var $myService = $(".jmod_my_services a");
						var $myHongbao = $(".jmod_my_hongbao a");
						var $myOrder = $(".jmod-header-order");
						var protocol = $myOrder.prop("protocol");
						var host = $myOrder.prop("host");
						var url = protocol + "//" + host + CORP_CENTER_URL;
						$myOrder.attr("href", url);
						$myService.attr("href", url);
						$myHongbao.attr("href", CORP_MKACC_INFO_URL)
					}
				}]);
				return HeaderView
			}();
		exports["default"] = HeaderView;

		function delayHover(trigger, hoverFn, hoverTime, outFn, outTime) {
			trigger.each(function(index, ele) {
				var _arguments = arguments;
				var _hoverFn = hoverFn || $.noop;
				var _outFn = outFn || $.noop;
				var _hoverTime = hoverTime !== undefined ? hoverTime : 200;
				var _outTime = outTime !== undefined ? outTime : 200;
				var _hoverTimer = void 0,
					_outTimer = void 0;
				var self = this;
				$(this).hover(function() {
					if (_outTimer) {
						_outTimer = clearTimeout(_outTimer);
						_outTimer = null
					}
					if (_hoverTime > 50) {
						_hoverTimer = setTimeout(function() {
							_hoverFn.apply(self, _arguments)
						}, _hoverTime)
					} else {
						_hoverFn.apply(self, _arguments)
					}
				}, function() {
					if (_hoverTimer) {
						_hoverTimer = clearTimeout(_hoverTimer);
						_hoverTimer = null
					}
					if (_outTime > 50) {
						_outTimer = setTimeout(function() {
							_outFn.apply(self, _arguments)
						}, _outTime)
					} else {
						_outFn.apply(self, _arguments)
					}
				})
			})
		}
	}, {
		"../../../common/js/login": 9,
		"../../../common/js/utils": 16,
		"./tpl/cate": 21
	}],
	23: [function(require, module, exports) {
		"use strict";
		Object.defineProperty(exports, "__esModule", {
			value: true
		});
		var _createClass = function() {
				function defineProperties(target, props) {
					for (var i = 0; i < props.length; i++) {
						var descriptor = props[i];
						descriptor.enumerable = descriptor.enumerable || false;
						descriptor.configurable = true;
						if ("value" in descriptor) descriptor.writable = true;
						Object.defineProperty(target, descriptor.key, descriptor)
					}
				}
				return function(Constructor, protoProps, staticProps) {
					if (protoProps) defineProperties(Constructor.prototype, protoProps);
					if (staticProps) defineProperties(Constructor, staticProps);
					return Constructor
				}
			}();
		require("../../common/js/nolint/menu-anim");

		function _classCallCheck(instance, Constructor) {
			if (!(instance instanceof Constructor)) {
				throw new TypeError("Cannot call a class as a function")
			}
		}
		var Nav = function() {
				function Nav() {
					_classCallCheck(this, Nav);
					this.menuNode = $("#jmod_nav_menu")
				}
				_createClass(Nav, [{
					key: "init",
					value: function init(_ref) {
						var alwaysshow = _ref.alwaysshow;
						this.menuNode.menuAim({
							activate: this.activateSubmenu,
							deactivate: this.deactivateSubmenu,
							exitMenu: function exitMenu() {
								return true
							}
						});
						alwaysshow && $(".mod-nav").addClass("always")
					}
				}, {
					key: "activateSubmenu",
					value: function activateSubmenu(row) {
						$(row).addClass("active")
					}
				}, {
					key: "deactivateSubmenu",
					value: function deactivateSubmenu(row) {
						$(row).removeClass("active")
					}
				}]);
				return Nav
			}();
		exports["default"] = Nav;
	}, {
		"../../common/js/nolint/menu-anim": 12
	}],
	24: [function(require, module, exports) {
		"use strict";
		Object.defineProperty(exports, "__esModule", {
			value: true
		});
		var _createClass = function() {
				function defineProperties(target, props) {
					for (var i = 0; i < props.length; i++) {
						var descriptor = props[i];
						descriptor.enumerable = descriptor.enumerable || false;
						descriptor.configurable = true;
						if ("value" in descriptor) descriptor.writable = true;
						Object.defineProperty(target, descriptor.key, descriptor)
					}
				}
				return function(Constructor, protoProps, staticProps) {
					if (protoProps) defineProperties(Constructor.prototype, protoProps);
					if (staticProps) defineProperties(Constructor, staticProps);
					return Constructor
				}
			}();

		function _classCallCheck(instance, Constructor) {
			if (!(instance instanceof Constructor)) {
				throw new TypeError("Cannot call a class as a function")
			}
		}
		var TopBar = function() {
				function TopBar() {
					_classCallCheck(this, TopBar);
					this.bar = $("#jmod_topbar");
					this.searchBtn = $("#jmod_search_btn");
					this.searchBox = this.searchBtn.closest(".search");
					this.searchClose = this.searchBox.find(".close")
				}
				_createClass(TopBar, [{
					key: "bindUI",
					value: function bindUI() {
						var _ = this;
						_.searchBtn.click(function(e) {
							_.searchBox.addClass("active")
						});
						_.searchClose.click(function(e) {
							_.searchBox.removeClass("active")
						})
					}
				}]);
				return TopBar
			}();
		exports["default"] = TopBar;
	}, {}],
	25: [function(require, module, exports) {
		"use strict";
		Object.defineProperty(exports, "__esModule", {
			value: true
		});
		var _createClass = function() {
				function defineProperties(target, props) {
					for (var i = 0; i < props.length; i++) {
						var descriptor = props[i];
						descriptor.enumerable = descriptor.enumerable || false;
						descriptor.configurable = true;
						if ("value" in descriptor) descriptor.writable = true;
						Object.defineProperty(target, descriptor.key, descriptor)
					}
				}
				return function(Constructor, protoProps, staticProps) {
					if (protoProps) defineProperties(Constructor.prototype, protoProps);
					if (staticProps) defineProperties(Constructor, staticProps);
					return Constructor
				}
			}();

		function _classCallCheck(instance, Constructor) {
			if (!(instance instanceof Constructor)) {
				throw new TypeError("Cannot call a class as a function")
			}
		}
		var Checkbox = function() {
				function Checkbox() {
					_classCallCheck(this, Checkbox)
				}
				_createClass(Checkbox, [{
					key: "init",
					value: function init(checkboxName) {
						var checkboxs = $('input[name="' + checkboxName + '"]');
						checkboxs.each(function(idx, dom) {
							var node = $(dom);
							if (node.prop("checked")) {
								node.siblings(".ui-checkbox-rect").addClass("checked")
							}
							node.on("change", function() {
								if (node.prop("checked")) {
									node.siblings(".ui-checkbox-rect").addClass("checked")
								} else {
									node.siblings(".ui-checkbox-rect").removeClass("checked")
								}
							})
						})
					}
				}]);
				return Checkbox
			}();
		exports["default"] = Checkbox;
		window._cfUI = window._cfUI || {};
		window._cfUI.checkbox = Checkbox;
	}, {}],
	26: [function(require, module, exports) {
		"use strict";
		Object.defineProperty(exports, "__esModule", {
			value: true
		});
		var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ?
		function(obj) {
			return typeof obj
		} : function(obj) {
			return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj
		};
		var prefixDate = "ui-date-",
			prefixRange = "ui-range-",
			prefixDay = "ui-day-",
			prefixYear = "ui-year-",
			prefixMonth = "ui-month-",
			prefixHour = "ui-hour-",
			prefixMinute = "ui-minute-";
		var SELECTED = "selected",
			ACTIVE = "active";
		var regDate = /\-|\//g;
		String.prototype.toDate = function() {
			var year, month, day;
			var arrDate = this.split(regDate);
			year = arrDate[0] * 1;
			month = arrDate[1] || 1;
			day = arrDate[2] || 1;
			if (!year) {
				return new Date
			}
			return new Date(year, month - 1, day)
		};
		Date.prototype.toArray = function() {
			var year = this.getFullYear(),
				month = this.getMonth() + 1,
				date = this.getDate();

			function p(s) {
				return s < 10 ? "0" + s : s
			}
			return [p(year), p(month), p(date)]
		};
		Date.prototype.getTimeArray = function() {
			var hour = this.getHours(),
				min = this.getMinutes(),
				sec = this.getSeconds();

			function p(s) {
				return s < 10 ? "0" + s : s
			}
			return [p(hour), p(min), p(sec)]
		};
		var DateTime = function DateTime(trigger, options) {
				if (!trigger || !trigger.length) return this;
				var defaults = {
					value: "",
					type: "auto",
					min: "auto",
					max: "auto",
					trigger: ["change"],
					onShow: $.noop,
					onHide: $.noop
				};
				var params = $.extend({}, defaults, options || {});
				this.PARAMS = params;
				var input = null;
				if (trigger.get(0).type) {
					input = trigger;
					trigger = input.parent()
				} else {
					input = trigger.find("input")
				}
				if (input.length == 0) return this;
				input.parent().hover(function() {
					$(this).addClass("hover")
				}, function() {
					$(this).removeClass("hover")
				});
				var type = params.type;
				if (type == "auto") {
					type = "datetime"
				}
				var id = input.attr("id");
				if (!id) {
					id = type + (Math.random() + "").replace("0.", "");
					input.attr("id", id)
				}
				$('<label for="' + id + '"></label>').addClass(prefixDate + "arrow").insertAfter(input);
				var self = this;
				var container = $("<div></div>").addClass(prefixDate + "container").delegate("a", "click", function() {
					var year = 0,
						month = 0,
						date = 0,
						hour = 0;
					switch (container.attr("data-type")) {
					case "date":
					case "datetime":
						{
							if (/prev|next/.test(this.className)) {
								month = $(this).attr("data-month");
								self[SELECTED][1] = month * 1;
								self[SELECTED] = self[SELECTED].join("-").toDate().toArray();
								self.date();
								if (container.find("." + SELECTED).get(0).href) {
									self.val()
								}
							} else if (/item/.test(this.className)) {
								date = this.innerHTML;
								if (/\D/.test(date)) {
									var tmp_date = new Date,
										tmp_time = tmp_date.getTimeArray();
									self[SELECTED] = tmp_date.toArray();
									self.initTimeObj.hour = tmp_time[0];
									self.initTimeObj.min = tmp_time[1];
									self.initTimeObj.sec = tmp_time[2]
								} else {
									if (date < 10) date = "0" + date;
									self[SELECTED][2] = date
								}
								self.val();
								self.date()
							} else if (/confirm/.test(this.className)) {
								self.hide()
							} else if ($(this).attr("data-type") == "month") {
								self.month()
							}
							break
						}
					case "month":
						{
							if (year = $(this).attr("data-year")) {
								self[SELECTED][0] = year * 1;
								self.month();
								if (container.find("." + SELECTED).get(0).href) {
									self.val()
								}
							} else if (/item/.test(this.className)) {
								var value = $(this).attr("data-value");
								if (value) {
									self[SELECTED][1] = value
								} else {
									var arrToday = (new Date).toArray();
									self[SELECTED][0] = arrToday[0];
									self[SELECTED][1] = arrToday[1]
								}
								self.val();
								if (self.type == "month") {
									self.hide()
								} else {
									self.date()
								}
							} else if ($(this).attr("data-type") == "year") {
								self.year()
							}
							break
						}
					case "year":
						{
							if (year = $(this).attr("data-year")) {
								self[SELECTED][0] = year * 1;
								self.year();
								if (container.find("." + SELECTED).get(0).href) {
									self.val()
								}
							} else if (/item/.test(this.className)) {
								if (this.innerHTML == "今年") {
									self[SELECTED][0] = (new Date).getFullYear()
								} else {
									self[SELECTED][0] = this.innerHTML * 1
								}
								self.val();
								if (self.type == "year") {
									self.hide()
								} else {
									self.month()
								}
							}
							break
						}
					}
				}).on("change", ".input-time", function(event) {
					var v = this.value;
					if (/hour/.test(this.className)) {
						self.initTimeObj.hour = v = timevalid(v, /^(0\d{1}|1\d{1}|2[0-3])$/)
					} else if (/min/.test(this.className)) {
						self.initTimeObj.min = v = timevalid(v)
					} else if (/sec/.test(this.className)) {
						self.initTimeObj.sec = v = timevalid(v)
					}
					function timevalid(v, rule) {
						var rule = rule || /^[0-5]\d{1}$/;
						if (/^(\d{1})$/.test(v)) {
							v = "0" + v
						} else if (!rule.test(v)) {
							v = "00"
						}
						return v
					}
					self.val();
					$(this).val(v)
				});
				this.el = {};
				this.el.container = container;
				this.el.trigger = trigger;
				this.el.input = input;
				this.type = type;
				var max = input.attr("max") || params.max,
					min = input.attr("min") || params.min;
				var arr = $.map([min, max], function(min_max, index) {
					if (typeof min_max == "string" && /^\d{8}$/.test(min_max.replace(regDate, "")) == true) {
						min_max = min_max.toDate()
					} else if ((typeof min_max === "undefined" ? "undefined" : _typeof(min_max)) != "object" || !min_max.getTime) {
						min_max = index ? new Date(9999, 0, 1) : new Date(0, 0, 1)
					}
					return min_max
				});
				this.max = arr[1];
				this.min = arr[0];
				this.callback = {
					show: params.onShow,
					hide: params.onHide,
					trigger: params.trigger
				};
				trigger.click($.proxy(function(event) {
					if (!this.display) {
						this.show()
					} else {
						this.hide()
					}
					event.preventDefault()
				}, this));
				$(document).mouseup($.proxy(function(event) {
					var target = event && event.target,
						container = this.el.container.get(0);
					if (target && trigger.get(0) != target && trigger.get(0).contains(target) == false && container != target && container.contains(target) == false) {
						this.hide()
					}
				}, this));
				this.svg = "";
				this.format();
				return this
			};
		DateTime.prototype.format = function() {
			var self = this,
				type = this.type;
			var initValue = this.el.input.val(),
				initTimeObj = {
					hour: "00",
					min: "00",
					sec: "00"
				},
				initValueArr = initValue.split(" "),
				reg_date = /^[0-9]{4}-(((0[13578]|(10|12))-(0[1-9]|[1-2][0-9]|3[0-1]))|(02-(0[1-9]|[1-2][0-9]))|((0[469]|11)-(0[1-9]|[1-2][0-9]|30)))$/,
				reg_time = /^(0\d{1}|1\d{1}|2[0-3]):([0-5]\d{1}):([0-5]\d{1})$/;
			if (!reg_date.test(initValueArr[0])) {
				initValue = ""
			} else if (!reg_time.test(initValueArr[1])) {
				initValueArr[1] = "00:00:00"
			}
			if (initValue == "" && !! this.PARAMS.value) {
				initValueArr = this.PARAMS.value.split(" ")
			}
			if ( !! initValueArr[1]) {
				var timearr = initValueArr[1].split(":");
				initTimeObj.hour = timearr[0];
				initTimeObj.min = timearr[1];
				initTimeObj.sec = timearr[2]
			}
			this.initTimeObj = initTimeObj;
			initValue = initValueArr[0];
			var initDate = initValue.toDate();
			if (initDate < this.min || initDate > this.max) {
				initValue = this.PARAMS.value ? this.PARAMS.value.split(" ")[0] : "", initDate = initValue.toDate()
			}
			this[SELECTED] = initDate.toArray();
			return this
		};
		DateTime.prototype.val = function() {
			var input = this.el.input,
				selected = this[SELECTED],
				value = input.val();
			switch (this.type) {
			case "date":
				{
					input.val(selected.join("-"));
					break
				}
			case "datetime":
				{
					input.val(selected.join("-") + " " + this.initTimeObj.hour + ":" + this.initTimeObj.min + ":" + this.initTimeObj.sec);
					break
				}
			case "month":
				{
					input.val(selected.slice(0, 2).join("-"));
					break
				}
			case "year":
				{
					input.val(selected[0]);
					break
				}
			case "date-range":
				{
					input.val(selected[0].join("-") + " 至 " + selected[1].join("-"));
					break
				}
			case "time":
			case "minute":
				{
					input.val(selected.join(":"));
					break
				}
			case "hour":
				{
					input.val(selected[0] + ":00");
					break
				}
			}
			if (input.val() != value) {
				if ($.isArray(this.callback.trigger)) {
					$.each(this.callback.trigger, function(i, eventType) {
						input.trigger(eventType)
					})
				} else {
					input.trigger(this.callback.trigger)
				}
			}
			return this
		};
		DateTime.prototype._calendar = function(date) {
			var html = "";
			var arrDate = date;
			var input = this.el.input;
			var type = this.type;
			var min = this.min,
				max = this.max;
			var chinese = ["日", "一", "二", "三", "四", "五", "六"];
			var monthDay = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
			var currentDate = arrDate.join("-").toDate();
			if (arrDate[0] % 4 == 0 && arrDate[0] % 100 != 0 || arrDate[0] % 400 == 0) {
				monthDay[1] = 29
			}
			html = html + '<div class="' + prefixDay + 'x">' +
			function() {
				var htmlDay = "";
				$.each(chinese, function(index, value) {
					htmlDay = htmlDay + '<span class="' + prefixDay + 'item">' + value + "</span>"
				});
				return htmlDay
			}() + "</div>";
			var newDate = arrDate.join("-").toDate(),
				dayFirst = 0;
			newDate.setDate(1);
			if (newDate.getDate() == 2) {
				newDate.setDate(0)
			}
			dayFirst = newDate.getDay();
			var lastMonth = newDate.getMonth() - 1;
			if (lastMonth < 0) lastMonth = 11;
			var htmlData = 'data-year="' + arrDate[0] + '" data-month="' + (newDate.getMonth() + 1) + '"';
			html = html + '<div class="' + prefixDate + 'body">' +
			function() {
				var htmlDate = "",
					cl = "";
				for (var tr = 0; tr < 6; tr++) {
					htmlDate = htmlDate + '<div class="' + prefixDate + 'tr">';
					for (var td = 0; td < 7; td++) {
						cl = prefixDate + "item col" + td;
						if (type == "date" || type == "datetime") {
							if (tr == 0 && td < dayFirst) {
								htmlDate = htmlDate + '<span class="' + cl + '">' + (monthDay[lastMonth] - dayFirst + td + 1) + "</span>"
							} else {
								var dayNow = tr * 7 + td - dayFirst + 1;
								if (dayNow <= monthDay[newDate.getMonth()]) {
									var dateNow = new Date(arrDate[0], newDate.getMonth(), dayNow);
									if (currentDate.getDate() == dayNow) {
										cl = cl + " " + SELECTED
									}
									if (dateNow >= min && dateNow <= max) {
										htmlDate = htmlDate + '<a href="javascript:;" ' + htmlData + ' class="' + cl + '">' + dayNow + "</a>"
									} else {
										htmlDate = htmlDate + '<span class="' + cl + '">' + dayNow + "</span>"
									}
								} else {
									htmlDate = htmlDate + '<span class="' + cl + '">' + (dayNow - monthDay[newDate.getMonth()]) + "</span>"
								}
							}
						} else if (type == "date-range") {
							if (tr == 0 && td < dayFirst) {
								htmlDate = htmlDate + '<span class="' + cl + '">&nbsp;</span>'
							} else {
								var dayNow = tr * 7 + td - dayFirst + 1;
								if (dayNow <= monthDay[newDate.getMonth()]) {
									var dateNow = new Date(arrDate[0], newDate.getMonth(), dayNow);
									var dateBegin = this[SELECTED][0].join("-").toDate(),
										dateEnd = this[SELECTED][1].join("-").toDate();
									var timeNow = dateNow.getTime(),
										timeBegin = dateBegin.getTime(),
										timeEnd = dateEnd.getTime();
									if (timeNow >= timeBegin && timeNow <= timeEnd) {
										cl = cl + " " + SELECTED;
										if (timeNow == timeBegin) {
											cl = cl + " " + prefixDate + "begin"
										}
										if (timeNow == timeEnd) {
											cl = cl + " " + prefixDate + "end"
										}
										if (dayNow == 1) {
											cl = cl + " " + prefixDate + "first"
										} else if (dayNow == monthDay[newDate.getMonth()]) {
											cl = cl + " " + prefixDate + "last"
										}
									}
									if (dateNow >= min && dateNow <= max) {
										htmlDate = htmlDate + '<a href="javascript:;" ' + htmlData + ' class="' + cl + '">' + dayNow + "</a>"
									} else {
										htmlDate = htmlDate + '<span class="' + cl + '">' + dayNow + "</span>"
									}
								} else {
									htmlDate = htmlDate + '<span class="' + cl + '">&nbsp;</span>'
								}
							}
						}
					}
					htmlDate += "</div>"
				}
				return htmlDate
			}.call(this) + "</div>";
			return {
				monthDay: monthDay,
				html: html,
				min: min,
				max: max
			}
		};
		DateTime.prototype.date = function() {
			var arrDate = this[SELECTED];
			var currentDate = arrDate.join("-").toDate(),
				prevMonth = arrDate[1] - 1,
				nextMonth = arrDate[1] * 1 + 1;
			var obj = this._calendar(arrDate);
			var html = '<div class="' + prefixDate + 'x">';
			html = html + '<div class="' + prefixDate + 'head">';
			var datePrevMonth = new Date(arrDate[0], prevMonth - 1, arrDate[2]);
			if (new Date(arrDate[0], prevMonth - 1, obj.monthDay[datePrevMonth.getMonth()]) >= obj.min && datePrevMonth <= obj.max) {
				html = html + '<a href="javascript:" class="' + prefixDate + 'prev" data-month="' + prevMonth + '">' + this.svg + "</a>"
			} else {
				html = html + '<span class="' + prefixDate + 'prev">' + this.svg + "</span>"
			}
			var dateNextMonth = new Date(arrDate[0], arrDate[1], arrDate[2]);
			if (dateNextMonth >= obj.min && new Date(arrDate[0], arrDate[1], 1) <= obj.max) {
				html = html + '<a href="javascript:" class="' + prefixDate + 'next" data-month="' + nextMonth + '">' + this.svg + "</a>"
			} else {
				html = html + '<span class="' + prefixDate + 'next">' + this.svg + "</span>"
			}
			html = html + '<a href="javascript:" class="' + prefixDate + 'switch" data-type="month">' + arrDate.slice(0, 2).join("-") + "</a>      </div>";
			html += obj.html;
			var html_now = "";
			if (new Date >= obj.min && new Date <= obj.max) {
				html_now = '<a href="javascript:" class="' + prefixDate + "item " + prefixDate + "now " + (this.type === "datetime" ? prefixDate + "now-time" : "") + '">' + (this.type === "datetime" ? "此刻" : "今日") + "</a>"
			} else {
				html_now = '<span class="' + prefixDate + "item " + prefixDate + "now " + (this.type === "datetime" ? prefixDate + "now-time" : "") + '">' + (this.type === "datetime" ? "此刻" : "今日") + "</span>"
			}
			if (this.type === "datetime") {
				html += '<div class="' + prefixDate + 'foot">' + '<input type="text" value="' + this.initTimeObj.hour + '" class="' + prefixDate + 'hour input-time"><span class="split">:</span>' + '<input type="text" value="' + this.initTimeObj.min + '" class="' + prefixDate + 'min input-time"><span class="split">:</span>' + '<input type="text" value="' + this.initTimeObj.sec + '" class="' + prefixDate + 'sec input-time">' + html_now + '<a href="javascript:" class="' + prefixDate + 'confirm">确定</a>' + "</div>"
			} else {
				html += html_now
			}
			html += "</div>";
			this.el.container.attr("data-type", this.type).html(html);
			return this
		};
		DateTime.prototype.month = function() {
			var arrDate = this[SELECTED];
			var input = this.el.input;
			var min = input.attr("min") || this.min,
				max = input.attr("max") || this.max;
			var arr = $.map([min, max], function(min_max, index) {
				if ((typeof min_max === "undefined" ? "undefined" : _typeof(min_max)) == "object" && min_max.getTime) {
					min_max = min_max.toArray().slice(0, 2).join("")
				} else if (typeof min_max == "string" && /\D/.test(min_max.replace(regDate, "")) == false) {
					min_max = min_max.replace(regDate, "").slice(0, 6)
				} else {
					min_max = index ? 999912 : 0
				}
				return min_max
			});
			min = arr[0];
			max = arr[1];
			var chinese = ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二"];
			var html = '<div class="' + prefixMonth + 'x">';
			var year = arrDate[0] * 1;
			html = html + '<div class="' + prefixDate + 'head">';
			if (year - 1 >= Math.floor(min / 100) && year - 1 <= Math.floor(max / 100)) {
				html = html + '<a href="javascript:" class="' + prefixDate + 'prev" data-year="' + (year - 1) + '">' + this.svg + "</a>"
			} else {
				html = html + '<span class="' + prefixDate + 'prev">' + this.svg + "</span>"
			}
			if (year + 1 >= Math.floor(min / 100) && year + 1 <= Math.floor(max / 100)) {
				html = html + '<a href="javascript:" class="' + prefixDate + 'next" data-year="' + (year + 1) + '">' + this.svg + "</a>"
			} else {
				html = html + '<span class="' + prefixDate + 'next">' + this.svg + "</span>"
			}
			html = html + '<a href="javascript:" class="' + prefixDate + 'switch" data-type="year">' + year + "</a>      </div>";
			html = html + '<div class="' + prefixMonth + 'body">' +
			function() {
				var htmlDate = "",
					cl = "",
					month = "";
				for (var i = 1; i <= 12; i += 1) {
					if (i < 10) {
						month = "0" + i
					} else {
						month = i + ""
					}
					cl = prefixDate + "item";
					if (i == arrDate[1]) {
						cl = cl + " " + SELECTED
					}
					if (year + month >= min && year + month <= max) {
						htmlDate = htmlDate + '<a href="javascript:" class="' + cl + '" data-value="' + month + '">' + chinese[i - 1] + "月</a>"
					} else {
						htmlDate = htmlDate + '<span class="' + cl + '" data-value="' + month + '">' + chinese[i - 1] + "月</span>"
					}
				}
				return htmlDate
			}() + "</div>";
			var thisYearMonth = (new Date).toArray().slice(0, 2).join("");
			if (thisYearMonth >= min && thisYearMonth <= max) {
				html = html + '<a href="javascript:" class="' + prefixDate + "item " + prefixDate + 'now">今月</a>'
			} else {
				html = html + '<span class="' + prefixDate + "item " + prefixDate + 'now">今月</span>'
			}
			html += "</div>";
			this.el.container.attr("data-type", "month").html(html);
			return this
		};
		DateTime.prototype.year = function() {
			var arrDate = this[SELECTED];
			var input = this.el.input;
			var min = input.attr("min") || this.min,
				max = input.attr("max") || this.max;
			if ((typeof min === "undefined" ? "undefined" : _typeof(min)) == "object" && min.getFullYear) {
				min = min.getFullYear()
			} else if (typeof min == "string" && /\D/.test(min.replace(regDate, "")) == false) {
				min = min.toDate().getFullYear()
			} else {
				min = 0
			}
			if ((typeof max === "undefined" ? "undefined" : _typeof(max)) == "object" && max.getFullYear) {
				max = max.getFullYear()
			} else if (typeof max == "string" && /\D/.test(max.replace(regDate, "")) == false) {
				max = max.toDate().getFullYear()
			} else {
				max = 9999
			}
			var html = '<div class="' + prefixYear + 'x">';
			var year = arrDate[0];
			html = html + '<div class="' + prefixDate + 'head">';
			if (year - 12 >= min && year - 12 <= max) {
				html = html + '<a href="javascript:" class="' + prefixDate + 'prev" data-year="' + (year - 12) + '">' + this.svg + "</a>"
			} else {
				html = html + '<span class="' + prefixDate + 'prev">' + this.svg + "</span>"
			}
			if (year + 12 >= min && year + 12 <= max) {
				html = html + '<a href="javascript:" class="' + prefixDate + 'next" data-year="' + (year + 12) + '">' + this.svg + "</a>"
			} else {
				html = html + '<span class="' + prefixDate + 'next">' + this.svg + "</span>"
			}
			html = html + '<span class="' + prefixDate + 'switch">' + [year - 6, year + 5].join("-") + "</span></div>";
			html = html + '<div class="' + prefixYear + 'body">' +
			function() {
				var htmlDate = "",
					cl = "";
				for (var i = year - 6; i < year + 6; i += 1) {
					cl = prefixDate + "item";
					if (i == year) {
						cl = cl + " " + SELECTED
					}
					if (i >= min && i <= max) {
						htmlDate = htmlDate + '<a href="javascript:" class="' + cl + '">' + i + "</a>"
					} else {
						htmlDate = htmlDate + '<span class="' + cl + '">' + i + "</span>"
					}
				}
				return htmlDate
			}() + "</div>";
			var thisYear = (new Date).getFullYear();
			if (thisYear >= min && thisYear <= max) {
				html = html + '<a href="javascript:" class="' + prefixDate + "item " + prefixDate + 'now">今年</a>'
			} else {
				html = html + '<span class="' + prefixDate + "item " + prefixDate + 'now">今年</span>'
			}
			html += "</div>";
			html += "</div>";
			this.el.container.attr("data-type", "year").html(html);
			return this
		};
		DateTime.prototype.show = function() {
			var container = this.el.container;
			this.format();
			this.val();
			if (this.type == "time") {
				this.minute()
			} else if (this.type == "date-range") {
				if (!this._rangeSelected) {
					this._rangeSelected = this[SELECTED]
				}
				this.range()
			} else if (this[this.type]) {
				this[this.type]()
			} else {
				this.date()
			}
			if ($.contains($(document.body), container) == false) {
				$(document.body).append(container)
			}
			container.show().follow(this.el.trigger.addClass(ACTIVE), {
				position: "4-1"
			});
			if ($.isFunction(this.callback.show)) {
				this.callback.show.call(this, this.el.input, container)
			}
			this.display = true;
			return this
		};
		DateTime.prototype.hide = function() {
			this.el.container.hide();
			this.el.trigger.removeClass(ACTIVE);
			if ($.isFunction(this.callback.hide)) {
				this.callback.hide.call(this, this.el.input, this.el.container)
			}
			this.display = false;
			return this
		};
		$.fn.dateTime = function(options) {
			return $(this).each(function() {
				$(this).data("dateTime", new DateTime($(this), options))
			})
		};
		exports["default"] = DateTime;
		window._cfUI = window._cfUI || {};
		window._cfUI.datetime = DateTime;
	}, {}],
	27: [function(require, module, exports) {
		"use strict";
		Object.defineProperty(exports, "__esModule", {
			value: true
		});
		var _createClass = function() {
				function defineProperties(target, props) {
					for (var i = 0; i < props.length; i++) {
						var descriptor = props[i];
						descriptor.enumerable = descriptor.enumerable || false;
						descriptor.configurable = true;
						if ("value" in descriptor) descriptor.writable = true;
						Object.defineProperty(target, descriptor.key, descriptor)
					}
				}
				return function(Constructor, protoProps, staticProps) {
					if (protoProps) defineProperties(Constructor.prototype, protoProps);
					if (staticProps) defineProperties(Constructor, staticProps);
					return Constructor
				}
			}();
		var _utils = require("../../common/js/utils");
		var _utils2 = _interopRequireDefault(_utils);

		function _interopRequireDefault(obj) {
			return obj && obj.__esModule ? obj : {
				"default": obj
			}
		}
		function _classCallCheck(instance, Constructor) {
			if (!(instance instanceof Constructor)) {
				throw new TypeError("Cannot call a class as a function")
			}
		}
		var TPL = '<div class="ui-dialog"<%if(dialogId){%> id="<%=dialogId%>"<%}%>>\n  <a href="#" class="ui-dialog-close jmod-close"></a>\n  <div class="ui-dialog-title"><%=tit%></div>\n  <div class="ui-dialog-body"><%=cont%></div>\n  <div class="ui-dialog-footer">\n  <%if(btnOK){%>\n    <a href="#" class="jmod-ok ui-button<%if(btnOK.theme){%> ui-button-<%=btnOK.theme%><%}%><%if(btnOK.size){%> ui-button-<%=btnOK.size%><%}%>"><%=btnOK.text%></a>\n  <%}%>\n  <%if(btnNo){%>\n    <a href="#" class="jmod-close ui-button<%if(btnNo.theme){%> ui-button-<%=btnNo.theme%><%}%><%if(btnNo.size){%> ui-button-<%=btnNo.size%><%}%>"><%=btnNo.text%></a>\n  <%}%>\n  </div>\n</div>';
		var Dialog = function() {
				function Dialog(options) {
					_classCallCheck(this, Dialog);
					var defaults = {
						triggerBtn: "",
						dialogId: null,
						tit: "提示",
						cont: "",
						btnOK: {
							text: "确定",
							theme: "primary",
							size: null,
							callback: function callback() {}
						},
						btnNo: {
							text: "取消",
							theme: null,
							size: null
						},
						showCallback: function showCallback() {},
						closeCallback: function closeCallback() {}
					};
					this.CONF = $.extend({}, defaults, options || {});
					this.init();
					this.bind()
				}
				_createClass(Dialog, [{
					key: "init",
					value: function init() {
						var _this = this;
						this.wrapNode = $(".ui-dialog-wrap");
						if (this.wrapNode.length <= 0) {
							this.wrapNode = $('<div class="ui-dialog-wrap"></div>');
							$("body").append(this.wrapNode)
						}
						var html = _utils2["default"].tmpl(TPL, this.CONF);
						this.wrapNode.append(this.dialog = $(html));
						if (this.CONF.triggerBtn) {
							$(document).on("click", this.CONF.triggerBtn, function() {
								_this.show();
								return false
							})
						}
					}
				}, {
					key: "show",
					value: function show(dialog) {
						var shownode = dialog ? dialog : this.dialog;
						this.CONF.showCallback && this.CONF.showCallback.call(this);
						this.wrapNode.show();
						shownode.addClass("active")
					}
				}, {
					key: "hide",
					value: function hide(dialog) {
						var hidenode = dialog ? dialog : this.dialog;
						this.CONF.closeCallback && this.CONF.closeCallback();
						hidenode.removeClass("active");
						if ($(".ui-dialog.active").length <= 0) {
							this.wrapNode.hide()
						}
					}
				}, {
					key: "bind",
					value: function bind() {
						var _this2 = this;
						this.dialog.on("click", ".jmod-close", function(e) {
							_this2.hide();
							return false
						}).on("click", ".jmod-ok", function(e) {
							var btnok = _this2.CONF.btnOK;
							btnok && btnok.callback && btnok.callback();
							return false
						})
					}
				}]);
				return Dialog
			}();
		exports["default"] = Dialog;
		window._cfUI = window._cfUI || {};
		window._cfUI.dialog = Dialog;
	}, {
		"../../common/js/utils": 16
	}],
	28: [function(require, module, exports) {
		"use strict";
		Object.defineProperty(exports, "__esModule", {
			value: true
		});
		var _createClass = function() {
				function defineProperties(target, props) {
					for (var i = 0; i < props.length; i++) {
						var descriptor = props[i];
						descriptor.enumerable = descriptor.enumerable || false;
						descriptor.configurable = true;
						if ("value" in descriptor) descriptor.writable = true;
						Object.defineProperty(target, descriptor.key, descriptor)
					}
				}
				return function(Constructor, protoProps, staticProps) {
					if (protoProps) defineProperties(Constructor.prototype, protoProps);
					if (staticProps) defineProperties(Constructor, staticProps);
					return Constructor
				}
			}();
		var _characterCount = require("../../common/js/character-count");
		var _characterCount2 = _interopRequireDefault(_characterCount);

		function _interopRequireDefault(obj) {
			return obj && obj.__esModule ? obj : {
				"default": obj
			}
		}
		function _classCallCheck(instance, Constructor) {
			if (!(instance instanceof Constructor)) {
				throw new TypeError("Cannot call a class as a function")
			}
		}
		var Input = function() {
				function Input(options) {
					_classCallCheck(this, Input);
					var defaults = {
						type: "normal",
						placeholder: "请输入",
						maxlength: 20,
						unit: "单位",
						disabled: false
					};
					this.CONF = $.extend({}, defaults, options || {})
				}
				_createClass(Input, [{
					key: "initnormal",
					value: function initnormal(dom) {
						return
					}
				}, {
					key: "initcount",
					value: function initcount(dom) {
						var cc = new _characterCount2["default"];
						cc.listen(dom)
					}
				}, {
					key: "initmatch",
					value: function initmatch(dom) {}
				}, {
					key: "inituint",
					value: function inituint(dom) {}
				}, {
					key: "init",
					value: function init(el, conf) {
						var _ = this;
						if (!el || el.length <= 0) {
							return
						}
						$.extend(_.CONF, conf);
						el.each(function(k, v) {
							_["init" + _.CONF.type](v)
						})
					}
				}]);
				return Input
			}();
		exports["default"] = Input;
		window._cfUI = window._cfUI || {};
		window._cfUI.input = Input;
	}, {
		"../../common/js/character-count": 1
	}],
	29: [function(require, module, exports) {
		"use strict";
		Object.defineProperty(exports, "__esModule", {
			value: true
		});
		var _createClass = function() {
				function defineProperties(target, props) {
					for (var i = 0; i < props.length; i++) {
						var descriptor = props[i];
						descriptor.enumerable = descriptor.enumerable || false;
						descriptor.configurable = true;
						if ("value" in descriptor) descriptor.writable = true;
						Object.defineProperty(target, descriptor.key, descriptor)
					}
				}
				return function(Constructor, protoProps, staticProps) {
					if (protoProps) defineProperties(Constructor.prototype, protoProps);
					if (staticProps) defineProperties(Constructor, staticProps);
					return Constructor
				}
			}();

		function _classCallCheck(instance, Constructor) {
			if (!(instance instanceof Constructor)) {
				throw new TypeError("Cannot call a class as a function")
			}
		}
		var KEY_ENTER = 13;
		var Pagination = function() {
				function Pagination() {
					var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ".ui-pagination";
					_classCallCheck(this, Pagination);
					this.elem = typeof param === "string" ? $(param) : param
				}
				_createClass(Pagination, [{
					key: "bindEvents",
					value: function bindEvents(handler) {
						var _this = this;
						this.elem.off();
						this.elem.on("click", "a", function(event) {
							var page = parseInt(event.currentTarget.getAttribute("page"), 10);
							handler(page)
						});
						this.elem.on("click", "input[type=button]", function(event) {
							var v = +_this.elem.find("input[type=text]").eq(0).val();
							v = parseInt(v, 10);
							if (v > 0 && v <= _this.maxPage && v !== _this.curPage) {
								handler(v)
							}
						});
						this.elem.on("keydown", "input[type=text]", function(event) {
							if (event.keyCode === KEY_ENTER) {
								var v = +event.currentTarget.value;
								v = parseInt(v, 10);
								if (v > 0 && v <= _this.maxPage && v !== _this.curPage && event.keyCode === KEY_ENTER) {
									handler(v)
								}
							}
						})
					}
				}, {
					key: "render",
					value: function render() {
						var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
						var total = arguments[1];
						var pageSize = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;
						var padding = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 3;
						var htm = [];
						var maxPage = Math.ceil(total / pageSize);
						this.maxPage = maxPage;
						this.curPage = parseInt(page);
						if (this.curPage > this.maxPage) {
							this.curPage = this.maxPage
						}
						if (this.maxPage < 1) {
							this.elem.hide();
							return ""
						}
						this.elem.show();
						htm.push('<li class="ui-pagination-item actived">' + this.curPage + "</li>");
						for (var i = 0; i < padding && this.curPage + i < maxPage; i++) {
							htm.push('<a page="' + (this.curPage + i + 1) + '"><li class="ui-pagination-item">' + (this.curPage + i + 1) + "</li></a>")
						}
						for (var _i = 0; _i < padding && this.curPage - _i > 1; _i++) {
							htm.unshift('<a page="' + (this.curPage - _i - 1) + '"><li class="ui-pagination-item">' + (this.curPage - _i - 1) + "</li></a>")
						}
						if (maxPage - this.curPage > padding + 1) {
							htm.push('<li class="ui-pagination-item ellip">...</li>')
						}
						if (maxPage - this.curPage > padding) {
							htm.push('<a page="' + maxPage + '"><li class="ui-pagination-item">' + maxPage + "</li></a>")
						}
						if (this.curPage > padding + 2) {
							htm.unshift('<li class="ui-pagination-item ellip">...</li>')
						}
						if (this.curPage > padding + 1) {
							htm.unshift('<a page="1"><li class="ui-pagination-item">1</li></a>')
						}
						if (this.curPage > 1) {
							htm.unshift('<a page="' + (this.curPage - 1) + '" title="上一页"><li class="ui-pagination-item prev">< 上一页</li></a>')
						}
						if (this.curPage < maxPage) {
							htm.push('<a page="' + (this.curPage + 1) + '" title="下一页" ><li class="ui-pagination-item next">下一页 ></li></a>')
						}
						htm.unshift('<div class="ui-pagination-wrap"><ul class="ui-pagination-list">');
						htm.push("</ul>");
						htm.push('<div class="ui-pagination-sum">共<span class="ui-pagination-total">' + maxPage + '</span>页 ,</div><div class="ui-pagination-goto">到第<input type="text" value="', this.curPage, '">页<input type="button" value="确定">');
						htm.push("</div>");
						this.elem.html(htm.join(""))
					}
				}]);
				return Pagination
			}();
		exports["default"] = Pagination;
		window._cfUI = window._cfUI || {};
		window._cfUI.pagination = Pagination;
	}, {}],
	30: [function(require, module, exports) {
		"use strict";
		Object.defineProperty(exports, "__esModule", {
			value: true
		});

		function _classCallCheck(instance, Constructor) {
			if (!(instance instanceof Constructor)) {
				throw new TypeError("Cannot call a class as a function")
			}
		}
		var Placeholder = function Placeholder() {
				_classCallCheck(this, Placeholder);
				if (isIE(8) || isIE(9)) {
					var p = $("[placeholder]");
					p.each(function(index, element) {
						setPlaceholder(element)
					})
				}
			};
		exports["default"] = Placeholder;
		Placeholder.initPlaceholder = function(selector) {
			if (isIE(8) || isIE(9)) {
				setPlaceholder(selector)
			}
		};

		function isIE(ver) {
			var b = document.createElement("b");
			b.innerHTML = "<!--[if IE " + ver + "]><i></i><![endif]-->";
			return b.getElementsByTagName("i").length === 1
		}
		function setPlaceholder(element) {
			var self = $(element);
			if (self.attr("disabled")) {
				return
			}
			var value = self.val();
			var inputId = self.attr("id");
			var isShow = value === "" ? "inline-block" : "none";
			var fontSize = self.css("font-size");
			if (!self.parent().hasClass("placeholder-wrap")) {
				var html = $('<label class="placeholder" for="' + inputId + '" style="display:' + isShow + ";font-size:" + fontSize + '">' + self.attr("placeholder") + "</label>");
				self.wrap('<div class="placeholder-wrap"></div>');
				self.parent().append(html);
				html.on("click", function() {
					self.trigger("focus");
					return false
				});
				self.on("focus", function(e) {
					var $wrap = $(e.target).parent();
					$wrap.nextAll(".ui-input-count, .ui-textarea-count").css("visibility", "visible");
					$wrap.find(".placeholder").hide()
				});
				self.on("blur", function(e) {
					var value = $(e.target).val();
					var $wrap = $(e.target).parent();
					$wrap.nextAll(".ui-input-count, .ui-textarea-count").css("visibility", "hidden");
					if (value === "") {
						$wrap.find(".placeholder").show()
					}
				})
			}
		}
		window._cfUI = window._cfUI || {};
		window._cfUI.placeholder = Placeholder;
	}, {}],
	31: [function(require, module, exports) {
		"use strict";
		Object.defineProperty(exports, "__esModule", {
			value: true
		});
		var _extends = Object.assign ||
		function(target) {
			for (var i = 1; i < arguments.length; i++) {
				var source = arguments[i];
				for (var key in source) {
					if (Object.prototype.hasOwnProperty.call(source, key)) {
						target[key] = source[key]
					}
				}
			}
			return target
		};
		var _createClass = function() {
				function defineProperties(target, props) {
					for (var i = 0; i < props.length; i++) {
						var descriptor = props[i];
						descriptor.enumerable = descriptor.enumerable || false;
						descriptor.configurable = true;
						if ("value" in descriptor) descriptor.writable = true;
						Object.defineProperty(target, descriptor.key, descriptor)
					}
				}
				return function(Constructor, protoProps, staticProps) {
					if (protoProps) defineProperties(Constructor.prototype, protoProps);
					if (staticProps) defineProperties(Constructor, staticProps);
					return Constructor
				}
			}();
		require("../../common/js/nolint/follow");

		function _classCallCheck(instance, Constructor) {
			if (!(instance instanceof Constructor)) {
				throw new TypeError("Cannot call a class as a function")
			}
		}
		var Poptips = function() {
				function Poptips(options) {
					_classCallCheck(this, Poptips);
					this.trigger = options.trigger;
					this.direct = options.direct;
					this.align = options.align;
					this.content = options.content || this.trigger.data("title");
					this.eventType = options.eventType;
					this.id = +new Date;
					this.tpl = '<div class="ui-poptips ' + this.direct + " " + this.align + '" id="' + this.id + '" style="display:none;"><span class="arrow"></span><div class="inner">' + this.content + "</div></div>";
					this.el = $(this.tpl);
					this.callback = {
						show: options.onShow,
						hide: options.onHide
					};
					this.position = {
						"top-al-left": "1-4",
						"top-al-center": "5-7",
						"top-al-right": "2-3",
						"right-al-left": "2-1",
						"right-al-center": "6-8",
						"right-al-right": "3-4",
						"bottom-al-left": "4-1",
						"bottom-al-center": "7-5",
						"bottom-al-right": "3-2",
						"left-al-left": "1-2",
						"left-al-center": "8-6",
						"left-al-right": "4-3"
					}
				}
				_createClass(Poptips, [{
					key: "init",
					value: function init() {
						var _this = this;
						$(document.body).append(this.el);
						var self = this;
						if (this.eventType === "hover") {
							this.trigger.hover(function() {
								_this.show()
							}, function() {
								_this.hide()
							});
							$(document).off(".poptips").on({
								"mouseenter.poptips": function mouseenterPoptips() {
									var timer = self.trigger.data("timer");
									if (timer) {
										clearTimeout(timer);
										self.trigger.data("timer", null)
									}
									$(this).show()
								},
								"mouseleave.poptips": function mouseleavePoptips() {
									$(this).hide()
								}
							}, ".ui-poptips")
						}
					}
				}, {
					key: "show",
					value: function show() {
						var offsets = {
							x: 0,
							y: 0
						};
						if (this.direct === "top" || this.direct === "bottom") {
							if (this.align === "al-left" || this.align === "al-right") {
								offsets.x = this.trigger.outerWidth() / 2 - 40
							}
							offsets.y = 12
						} else {
							if (this.align === "al-left" || this.align === "al-right") {
								offsets.y = this.trigger.outerHeight() / 2 - 40
							}
							offsets.x = 12
						}
						this.el.show().follow(this.trigger, {
							offsets: offsets,
							position: this.position[this.direct + "-" + this.align],
							edgeAdjust: false
						});
						this.callback.show.call(this.trigger, this)
					}
				}, {
					key: "hide",
					value: function hide() {
						this.el.hide();
						this.callback.hide.call(this.trigger, this)
					}
				}]);
				return Poptips
			}();
		var poptips = {
			init: function init(ele, options) {
				if (ele.length > 0) {
					var defaults = {
						direct: "top",
						align: "al-center",
						trigger: ele,
						eventType: "hover",
						onShow: $.noop,
						onHide: $.noop
					};
					var param = _extends({}, defaults, options);
					var p = new Poptips(param);
					p.init()
				}
			}
		};
		window._cfUI = window._cfUI || {};
		window._cfUI.poptips = poptips;
		exports["default"] = poptips;
	}, {
		"../../common/js/nolint/follow": 11
	}],
	32: [function(require, module, exports) {
		"use strict";
		Object.defineProperty(exports, "__esModule", {
			value: true
		});
		var _createClass = function() {
				function defineProperties(target, props) {
					for (var i = 0; i < props.length; i++) {
						var descriptor = props[i];
						descriptor.enumerable = descriptor.enumerable || false;
						descriptor.configurable = true;
						if ("value" in descriptor) descriptor.writable = true;
						Object.defineProperty(target, descriptor.key, descriptor)
					}
				}
				return function(Constructor, protoProps, staticProps) {
					if (protoProps) defineProperties(Constructor.prototype, protoProps);
					if (staticProps) defineProperties(Constructor, staticProps);
					return Constructor
				}
			}();

		function _classCallCheck(instance, Constructor) {
			if (!(instance instanceof Constructor)) {
				throw new TypeError("Cannot call a class as a function")
			}
		}
		var Popup = function() {
				function Popup() {
					_classCallCheck(this, Popup)
				}
				_createClass(Popup, [{
					key: "show",
					value: function show(opt) {
						var _this = this;
						var ele = $("#oPopup-" + opt.id);
						var $body = $(document.body);
						if (!ele.length || opt.tmpl) {
							ele.length && ele.remove();
							$body.append($.trim(opt.tmpl || ""));
							var e = document.body.lastChild;
							e.id = "oPopup-" + opt.id;
							ele = $(e);
							ele.delegate("[op-action]", "click", function(event) {
								var action = _this.getAttribute("op-action");
								if (!action) return;
								var o = opt.action || {};
								o[action] && o[action].call(_this, event)
							}).find(".j-close").click(function() {
								_this.hide(opt.id)
							})
						}
						ele.css({
							display: "block",
							position: "fixed",
							zIndex: 5001,
							left: "50%",
							top: "50%",
							marginLeft: -Math.ceil(ele.width()) / 2 + "px",
							marginTop: -Math.ceil(ele.height()) / 2 + "px"
						});
						opt.mask = typeof opt.mask !== "undefined" ? opt.mask : true;
						if (opt.mask) {
							$.maskLayout.create(5e3, null, {
								opacity: .3
							})
						}
						return ele
					}
				}, {
					key: "hide",
					value: function hide(id) {
						$("#oPopup-" + id).remove();
						$.maskLayout.remove()
					}
				}]);
				return Popup
			}();
		$.maskLayout = function() {
			var masker = null;
			var count = 0;
			var qml = function qml(zi, doc, opts) {
					++count;
					if (masker) {
						return count
					}
					zi = zi || 5e3;
					doc = doc || document;
					opts = opts || {};
					var t = parseFloat(opts.opacity, 10);
					opts.opacity = isNaN(t) ? .2 : t;
					t = parseFloat(opts.top, 10);
					opts.top = isNaN(t) ? 0 : t;
					t = parseFloat(opts.left, 10);
					opts.left = isNaN(t) ? 0 : t;
					masker = $('<div class="qz_mask" unselectable="on"></div>')[0];
					$(document.body).append(masker);
					masker.style.cssText = 'background-color:#000;-ms-filter:"alpha(opacity=20)";#filter:alpha(opacity=' + 100 * opts.opacity + ");opacity:" + opts.opacity + "; position:fixed;_position:absolute;left:" + opts.left + "px;top:" + opts.top + "px;z-index:" + zi + ";width:100%;height:100%;";
					return count
				};
			qml.setOpacity = function(ov) {
				if (masker && ov) {
					$(masker).css("opacity", ov)
				}
			};
			qml.getRef = function() {
				return masker
			};
			qml.remove = function(rmAll) {
				count = Math.max(--count, 0);
				if (!count || rmAll) {
					$(masker).remove();
					masker = null;
					rmAll && (count = 0)
				}
			};
			return qml.create = qml
		}();
		var popup = new Popup;
		exports["default"] = popup;
		window._cfUI = window._cfUI || {};
		window._cfUI.popup = popup;
	}, {}],
	33: [function(require, module, exports) {
		"use strict";
		Object.defineProperty(exports, "__esModule", {
			value: true
		});
		var _createClass = function() {
				function defineProperties(target, props) {
					for (var i = 0; i < props.length; i++) {
						var descriptor = props[i];
						descriptor.enumerable = descriptor.enumerable || false;
						descriptor.configurable = true;
						if ("value" in descriptor) descriptor.writable = true;
						Object.defineProperty(target, descriptor.key, descriptor)
					}
				}
				return function(Constructor, protoProps, staticProps) {
					if (protoProps) defineProperties(Constructor.prototype, protoProps);
					if (staticProps) defineProperties(Constructor, staticProps);
					return Constructor
				}
			}();

		function _classCallCheck(instance, Constructor) {
			if (!(instance instanceof Constructor)) {
				throw new TypeError("Cannot call a class as a function")
			}
		}
		var Radio = function() {
				function Radio() {
					_classCallCheck(this, Radio)
				}
				_createClass(Radio, [{
					key: "init",
					value: function init(radioName) {
						var radios = $('input[name="' + radioName + '"]');
						radios.each(function(idx, dom) {
							var node = $(dom);
							if (node.prop("checked")) {
								node.siblings(".ui-radio-btn").addClass("checked")
							}
							node.on("change", function() {
								if (node.prop("checked")) {
									radios.siblings(".ui-radio-btn").removeClass("checked");
									node.siblings(".ui-radio-btn").addClass("checked")
								}
							})
						})
					}
				}]);
				return Radio
			}();
		exports["default"] = Radio;
		window._cfUI = window._cfUI || {};
		window._cfUI.radio = Radio;
	}, {}],
	34: [function(require, module, exports) {
		"use strict";
		Object.defineProperty(exports, "__esModule", {
			value: true
		});
		var _createClass = function() {
				function defineProperties(target, props) {
					for (var i = 0; i < props.length; i++) {
						var descriptor = props[i];
						descriptor.enumerable = descriptor.enumerable || false;
						descriptor.configurable = true;
						if ("value" in descriptor) descriptor.writable = true;
						Object.defineProperty(target, descriptor.key, descriptor)
					}
				}
				return function(Constructor, protoProps, staticProps) {
					if (protoProps) defineProperties(Constructor.prototype, protoProps);
					if (staticProps) defineProperties(Constructor, staticProps);
					return Constructor
				}
			}();
		require("../../common/js/nolint/follow");

		function _classCallCheck(instance, Constructor) {
			if (!(instance instanceof Constructor)) {
				throw new TypeError("Cannot call a class as a function")
			}
		}
		var Search = function() {
				function Search(options) {
					_classCallCheck(this, Search);
					var defaults = {
						keyupcallback: null,
						liclickcallback: null
					};
					this.CONF = $.extend({}, defaults, options || {});
					this.DATA = []
				}
				_createClass(Search, [{
					key: "getlayer",
					value: function getlayer() {
						return '<div class="layer-hint"></div>'
					}
				}, {
					key: "bind",
					value: function bind(el) {
						var _ = this;
						var input = el.find("input");
						$(input).keyup(function(e) {
							if (e.keyCode === 13) {
								_.layer && _.layer.hide()
							}
							_.CONF.keyupcallback(e)
						});
						input.on("focus", function(e) {
							var width = el.outerWidth();
							var layerId = el.data("hint-id");
							if (!layerId) {
								layerId = +new Date;
								el.data("hint-id", layerId)
							}
							_.layer = $("#" + layerId);
							if (_.layer.length < 1) {
								_.layer = $(_.getlayer()).attr("id", layerId).appendTo($("body"))
							}
							_.layer.html("").css("width", width).follow(el)
						}).on("click", function(e) {
							_.CONF.keyupcallback(e);
							return false
						});
						$("body").on("click", ".layer-hint li", function(event) {
							_.CONF.liclickcallback($(event.currentTarget));
							_.layer.hide();
							return false
						});
						$(document).bind("click", function() {
							_.layer && _.layer.hide()
						})
					}
				}, {
					key: "update",
					value: function update() {
						var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
						var _ = this;
						_.DATA = data;
						if (_.layer && _.layer.length >= 1) {
							var tpl = "";
							_.DATA.forEach(function(o) {
								tpl += "<li>" + o + "</li>"
							});
							if (tpl) {
								_.layer.html("<ul>" + tpl + "</ul>").show()
							} else {
								_.layer.html("").hide()
							}
						}
					}
				}, {
					key: "init",
					value: function init(el, conf) {
						var _ = this;
						if (!el || el.length <= 0) {
							return
						}
						$.extend(_.CONF, conf);
						$(el).each(function(i, e) {
							_.bind($(e))
						})
					}
				}]);
				return Search
			}();
		exports["default"] = Search;
		window._cfUI = window._cfUI || {};
		window._cfUI.search = Search;
	}, {
		"../../common/js/nolint/follow": 11
	}],
	35: [function(require, module, exports) {
		"use strict";
		Object.defineProperty(exports, "__esModule", {
			value: true
		});
		var _createClass = function() {
				function defineProperties(target, props) {
					for (var i = 0; i < props.length; i++) {
						var descriptor = props[i];
						descriptor.enumerable = descriptor.enumerable || false;
						descriptor.configurable = true;
						if ("value" in descriptor) descriptor.writable = true;
						Object.defineProperty(target, descriptor.key, descriptor)
					}
				}
				return function(Constructor, protoProps, staticProps) {
					if (protoProps) defineProperties(Constructor.prototype, protoProps);
					if (staticProps) defineProperties(Constructor, staticProps);
					return Constructor
				}
			}();

		function _classCallCheck(instance, Constructor) {
			if (!(instance instanceof Constructor)) {
				throw new TypeError("Cannot call a class as a function")
			}
		}
		var SELECT = "select";
		var SELECTED = "selected";
		var DISABLED = "disabled";
		var ACTIVE = "active";
		var REVERSE = "reverse";
		var Prefix = "";
		var Joiner = "";
		var params = {};
		var Select = function() {
				function Select(options) {
					_classCallCheck(this, Select);
					var defaults = {
						prefix: "ui-",
						trigger: ["change"]
					};
					params = $.extend({}, defaults, options || {});
					Prefix = params.prefix + SELECT;
					Joiner = params.prefix.replace(/[a-z]/gi, "")
				}
				_createClass(Select, [{
					key: "get",
					value: function get(el) {
						var selectedIndex = 0;
						var htmlOptions = "";
						el.find("option").each(function(index, dom) {
							var arrCl = [Prefix + Joiner + "li", dom.className];
							if (dom[SELECTED]) {
								selectedIndex = index;
								arrCl.push(SELECTED)
							}
							if (dom[DISABLED]) {
								arrCl.push(DISABLED)
							}
							htmlOptions = htmlOptions + '<li class="' + arrCl.join(" ") + '" data-index=' + index + ">" + dom.innerHTML + "</li>"
						});
						return {
							index: selectedIndex,
							html: htmlOptions
						}
					}
				}, {
					key: "bind",
					value: function bind(index, element) {
						var _ = this;
						var sel = $(element).data(SELECT);
						$(element).hide();
						if (!sel) {
							sel = $("<div></div>").on("click", "a", function() {
								if ($(element).prop(DISABLED)) return false;
								sel.toggleClass(ACTIVE);
								if (sel.hasClass(ACTIVE)) {
									var ul = sel.find("ul");
									var overflow = ul.offset().top + ul.outerHeight() > Math.max($(document.body).height(), $(window).height());
									sel[overflow ? "addClass" : "removeClass"](REVERSE);
									var arrData = sel.data("scrollTop");
									var selected = ul.find("." + SELECTED);
									if (arrData && arrData[1] === selected.attr("data-index") && arrData[2] === selected.text()) {
										ul.scrollTop(arrData[0]);
										sel.removeData("scrollTop")
									}
								} else {
									sel.removeClass(REVERSE)
								}
							}).on("click", "li", function(event, istrigger) {
								var _this = event.currentTarget;
								var indexOption = $(_this).attr("data-index");
								var scrollTop = $(_this).parent().scrollTop();
								if ($(_this).attr("disabled") || $(_this).hasClass("disabled")) return false;
								sel.removeClass(ACTIVE);
								sel.data("scrollTop", [scrollTop, indexOption, $(_this).text()]);
								$(element).find("option").eq(indexOption).get(0)[SELECTED] = true;
								_.bind(0, element);
								$.each(params.trigger, function(i, eventType) {
									$(element).trigger(eventType, [istrigger])
								})
							});
							$(element).data(SELECT, sel).after(sel);
							$(document).mouseup(function(event) {
								var target = event.target;
								if (target && sel.hasClass(ACTIVE) && sel.get(0) !== target && sel.get(0).contains(target) === false) {
									sel.removeClass(ACTIVE).removeClass(REVERSE)
								}
							})
						}
						var data = _.get($(element));
						var option = $(element).find("option").eq(data.index);
						sel.attr("class", element.className + " " + Prefix).width($(element).outerWidth());
						var button = '<a href="javascript:void(0);" class="' + Prefix + Joiner + 'button">' + '<span class="' + Prefix + Joiner + 'text">' + option.html() + "</span>" + '<i class="' + Prefix + Joiner + 'icon"></i></a>';
						var datalist = '<ul class="' + Prefix + Joiner + 'datalist">' + data.html + "</ul>";
						sel.html(button + datalist)
					}
				}, {
					key: "init",
					value: function init(el) {
						var _ = this;
						if (!el || el.length <= 0) {
							return
						}
						el.each(function(k, v) {
							return _.bind(k, v)
						})
					}
				}]);
				return Select
			}();
		exports["default"] = Select;
		window._cfUI = window._cfUI || {};
		window._cfUI.select = Select;
	}, {}],
	36: [function(require, module, exports) {
		"use strict";
		Object.defineProperty(exports, "__esModule", {
			value: true
		});
		var _createClass = function() {
				function defineProperties(target, props) {
					for (var i = 0; i < props.length; i++) {
						var descriptor = props[i];
						descriptor.enumerable = descriptor.enumerable || false;
						descriptor.configurable = true;
						if ("value" in descriptor) descriptor.writable = true;
						Object.defineProperty(target, descriptor.key, descriptor)
					}
				}
				return function(Constructor, protoProps, staticProps) {
					if (protoProps) defineProperties(Constructor.prototype, protoProps);
					if (staticProps) defineProperties(Constructor, staticProps);
					return Constructor
				}
			}();

		function _classCallCheck(instance, Constructor) {
			if (!(instance instanceof Constructor)) {
				throw new TypeError("Cannot call a class as a function")
			}
		}
		var Slider = function() {
				function Slider(options) {
					_classCallCheck(this, Slider);
					var defaults = {
						curClass: "cur",
						item: ".ban",
						dot: ".ban-index",
						effect: "opacity",
						duration: 3e3,
						isAuto: true,
						isLoop: true,
						prevBtn: ".ban-prev",
						nextBtn: ".ban-next",
						scrollWrap: "",
						gutter: 0,
						piece: 0
					};
					var params = $.extend({}, defaults, options || {});
					this.duration = params.duration;
					this.curClass = params.curClass;
					this.curIndex = 0;
					this.timer = null;
					this.isMoving = false;
					this.length = $(params.item).length || 0;
					this.item = params.item;
					this.effect = params.effect;
					this.dot = params.dot;
					this.isAuto = params.isAuto;
					this.prevBtn = params.prevBtn;
					this.nextBtn = params.nextBtn;
					this.scrollWrap = params.scrollWrap;
					this.isLoop = params.isLoop;
					this.gutter = params.gutter;
					this.piece = params.piece;
					this._scrollClone = $(this.scrollWrap).clone();
					this._loopCurIndex = 0
				}
				_createClass(Slider, [{
					key: "next",
					value: function next() {
						if (this.isMoving === true) return;
						if (this.effect === "opacity") {
							var loop = this.isLoop ? 0 : this.curIndex;
							this.curIndex = ++this.curIndex > this.length - 1 ? loop : this.curIndex;
							this.slide()
						} else if (this.effect === "swipe") {
							var last = this.length - this.curIndex - this.piece;
							if (!this.isLoop && last <= 0) {
								return
							} else {
								this.curIndex = ++this.curIndex > this.length - 1 ? 0 : this.curIndex;
								this._loopCurIndex++
							}
							this.slide()
						}
					}
				}, {
					key: "prev",
					value: function prev() {
						if (this.isMoving === true) return;
						if (this.effect === "opacity") {
							var loop = this.isLoop ? this.length - 1 : this.curIndex;
							this.curIndex = --this.curIndex < 0 ? loop : this.curIndex;
							this.slide()
						} else if (this.effect === "swipe") {
							if (!this.isLoop && this.curIndex === 0) {
								return
							} else {
								this.curIndex = --this.curIndex < 0 ? this.length - 1 : this.curIndex;
								this._loopCurIndex--
							}
							this.slide()
						}
					}
				}, {
					key: "slide",
					value: function slide() {
						this.isMoving = true;
						var self = this;
						if (this.dot) {
							var curDot = $(this.dot + " ." + this.curClass);
							var toDot = $(this.dot + " .index-item").eq(this.curIndex);
							curDot.removeClass(this.curClass);
							toDot.addClass(this.curClass)
						}
						if (this.effect === "opacity") {
							var curEle = $(this.item + "." + this.curClass);
							var toEle = $(this.item).eq(this.curIndex);
							curEle.removeClass(self.curClass);
							toEle.addClass(self.curClass);
							curEle.animate({
								opacity: 0
							}, 1e3, function() {
								self.isMoving = false
							});
							toEle.animate({
								opacity: 1
							}, 1e3, function() {
								self.isMoving = false
							})
						} else if (this.effect === "swipe") {
							$(this.scrollWrap).eq(0).animate({
								marginLeft: -this._loopCurIndex * ($(this.item).outerWidth() + this.gutter)
							}, 300, function() {
								self.checkAndFixed();
								self.isMoving = false
							})
						}
					}
				}, {
					key: "isLast",
					value: function isLast() {
						return this.curIndex + this.piece >= this.length
					}
				}, {
					key: "checkAndFixed",
					value: function checkAndFixed() {
						if (!this.isLoop) return;
						var lastItemNext = $(this.scrollWrap).length * this.length - this._loopCurIndex - this.piece;
						var lastItemPrev = this._loopCurIndex;
						if (lastItemNext === 0) {
							$(this.scrollWrap).parent().append(this._scrollClone.clone())
						}
						if (lastItemPrev === 0) {
							this._loopCurIndex = this.length;
							$(this.scrollWrap).eq(0).css("marginLeft", 0);
							$(this.scrollWrap).parent().prepend(this._scrollClone.clone());
							$(this.scrollWrap).eq(0).css("marginLeft", -this._loopCurIndex * ($(this.item).outerWidth() + this.gutter))
						}
						var marginLeft = $(this.scrollWrap).eq(0).css("marginLeft").replace(/px/g, "") * 1;
						var itemWidth = $(this.item).outerWidth() + this.gutter;
						var lefts = Math.abs(marginLeft) / itemWidth;
						var rights = $(this.scrollWrap).length * this.length - lefts - this.piece;
						if (lefts > this.length) {
							$(this.scrollWrap).eq(0).remove();
							this._loopCurIndex = this._loopCurIndex - this.length;
							$(this.scrollWrap).eq(0).css("marginLeft", marginLeft + itemWidth * this.length)
						}
						if (rights > this.length) {
							$(this.scrollWrap).eq(-1).remove()
						}
					}
				}, {
					key: "resetTimer",
					value: function resetTimer() {
						var self = this;
						if (this.isAuto) {
							this.timer = clearInterval(this.timer);
							this.timer = null;
							setTimeout(function() {
								self.timer = setInterval(function() {
									self.next()
								}, self.duration)
							}, 1e3)
						}
					}
				}, {
					key: "init",
					value: function init() {
						var self = this;
						if (this.effect === "opacity") {
							$(this.item).css("opacity", 0).eq(this.curIndex).addClass(this.curClass).css("opacity", 1)
						}
						if (this.effect === "swipe" && this.isLoop) {
							if (this.length - this.piece < 0) {
								var need = Math.ceil((this.piece - this.length) / this.length);
								var nodes = [];
								var parent = $(this.scrollWrap).parent();
								for (var i = 0; i < need; i++) {
									nodes.push(this._scrollClone.clone())
								}
								parent.append(nodes)
							}
							this.checkAndFixed()
						}
						if (this.dot) {
							var indexItem = $(this.dot).children();
							indexItem.each(function(index, ele) {
								var curEle = $(ele);
								curEle.addClass("index-item").attr("data-index", index);
								if (index === self.curIndex) {
									curEle.addClass(self.curClass)
								}
							});
							$(document).on("click", this.dot + " .index-item", function(e) {
								var index = $(e.currentTarget).data("index");
								if (self.isMoving === true || index === self.curIndex) return;
								self.curIndex = index;
								self._loopCurIndex = index;
								self.slide();
								self.resetTimer()
							})
						}
						if (this.isAuto) {
							self.timer = setInterval(function() {
								self.next()
							}, self.duration)
						}
						if (this.prevBtn) {
							$(document).on("click", this.prevBtn, function() {
								if (self.isMoving === true) return;
								self.prev();
								self.resetTimer()
							})
						}
						if (this.nextBtn) {
							$(document).on("click", this.nextBtn, function() {
								if (self.isMoving === true) return;
								self.next();
								self.resetTimer()
							})
						}
					}
				}]);
				return Slider
			}();
		exports["default"] = Slider;
		window._cfUI = window._cfUI || {};
		window._cfUI.slider = Slider;
	}, {}],
	37: [function(require, module, exports) {
		"use strict";
		Object.defineProperty(exports, "__esModule", {
			value: true
		});
		var _createClass = function() {
				function defineProperties(target, props) {
					for (var i = 0; i < props.length; i++) {
						var descriptor = props[i];
						descriptor.enumerable = descriptor.enumerable || false;
						descriptor.configurable = true;
						if ("value" in descriptor) descriptor.writable = true;
						Object.defineProperty(target, descriptor.key, descriptor)
					}
				}
				return function(Constructor, protoProps, staticProps) {
					if (protoProps) defineProperties(Constructor.prototype, protoProps);
					if (staticProps) defineProperties(Constructor, staticProps);
					return Constructor
				}
			}();

		function _classCallCheck(instance, Constructor) {
			if (!(instance instanceof Constructor)) {
				throw new TypeError("Cannot call a class as a function")
			}
		}
		var Tab = function() {
				function Tab(options) {
					_classCallCheck(this, Tab);
					this.tabs = $(options.tabs);
					this.contents = $(options.contents);
					this.curIndex = options.curIndex || 0;
					this.curClass = options.curClass || "cur"
				}
				_createClass(Tab, [{
					key: "tab",
					value: function tab(index) {
						this.tabs.removeClass(this.curClass);
						this.tabs.eq(index).addClass(this.curClass);
						this.contents.hide().eq(index).show()
					}
				}, {
					key: "init",
					value: function init() {
						var self = this;
						this.contents.hide();
						this.tabs.each(function(index, ele) {
							$(ele).on("click", function(event) {
								event.stopPropagation();
								self.tab(index)
							})
						});
						this.tab(this.curIndex)
					}
				}]);
				return Tab
			}();
		exports["default"] = Tab;
		window._cfUI = window._cfUI || {};
		window._cfUI.tab = Tab;
	}, {}],
	38: [function(require, module, exports) {
		"use strict";
		Object.defineProperty(exports, "__esModule", {
			value: true
		});
		var _characterCount = require("../../common/js/character-count");
		var _characterCount2 = _interopRequireDefault(_characterCount);

		function _interopRequireDefault(obj) {
			return obj && obj.__esModule ? obj : {
				"default": obj
			}
		}
		function _classCallCheck(instance, Constructor) {
			if (!(instance instanceof Constructor)) {
				throw new TypeError("Cannot call a class as a function")
			}
		}
		var Textarea = function Textarea(dom) {
				_classCallCheck(this, Textarea);
				var cc = new _characterCount2["default"];
				cc.listen(dom)
			};
		exports["default"] = Textarea;
		window._cfUI = window._cfUI || {};
		window._cfUI.textarea = Textarea;
	}, {
		"../../common/js/character-count": 1
	}],
	39: [function(require, module, exports) {
		"use strict";
		Object.defineProperty(exports, "__esModule", {
			value: true
		});
		var _createClass = function() {
				function defineProperties(target, props) {
					for (var i = 0; i < props.length; i++) {
						var descriptor = props[i];
						descriptor.enumerable = descriptor.enumerable || false;
						descriptor.configurable = true;
						if ("value" in descriptor) descriptor.writable = true;
						Object.defineProperty(target, descriptor.key, descriptor)
					}
				}
				return function(Constructor, protoProps, staticProps) {
					if (protoProps) defineProperties(Constructor.prototype, protoProps);
					if (staticProps) defineProperties(Constructor, staticProps);
					return Constructor
				}
			}();

		function _classCallCheck(instance, Constructor) {
			if (!(instance instanceof Constructor)) {
				throw new TypeError("Cannot call a class as a function")
			}
		}
		var toastTpl = '\n  <div class="ui-toast hidden jmod_toast_success">\n    <div class="ui-toast-inner"><span class="ui-toast-ico suc"></span><span class="jmod_msg">操作成功</span></div>\n  </div>\n  <div class="ui-toast hidden jmod_toast_fail">\n    <div class="ui-toast-inner"><span class="ui-toast-ico warn"></span><span class="jmod_msg">操作失败</span></div>\n  </div>\n  <div class="ui-toast hidden jmod_toast_loading">\n    <div class="ui-toast-inner"><span class="ui-toast-ico loading"></span><span>正在加载，请稍候...</span></div>\n  </div>\n';
		var Toast = function() {
				function Toast() {
					_classCallCheck(this, Toast);
					if (!$(".jmod_toast_success").length) {
						$(document.body).append(toastTpl)
					}
					this.timer = {
						suc: null,
						fail: null
					}
				}
				_createClass(Toast, [{
					key: "showToast",
					value: function showToast(type, msg, ms) {
						if (!ms) {
							ms = 2
						}
						var el = void 0;
						var timerType = null;
						if (type === "success") {
							el = $(".jmod_toast_success");
							timerType = "suc"
						} else {
							el = $(".jmod_toast_fail");
							timerType = "fail"
						}
						$(".ui-toast").hide();
						el.find(".jmod_msg").text(msg);
						el.show();
						this.timer[timerType] && clearTimeout(this.timer[timerType]);
						this.timer[timerType] = setTimeout(function() {
							el.hide()
						}, ms * 1e3)
					}
				}, {
					key: "toggleLoading",
					value: function toggleLoading(on) {
						if (on) {
							$(".jmod_toast_loading").show()
						} else {
							$(".ui-toast").hide()
						}
					}
				}]);
				return Toast
			}();
		var toast = new Toast;
		exports["default"] = toast;
		window._cfUI = window._cfUI || {};
		window._cfUI.toast = toast;
	}, {}]
}, {}, [18, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 13, 14, 15, 16, 17, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39]); /*  |xGv00|b476d89babb77faaa84848441bbab4bd */