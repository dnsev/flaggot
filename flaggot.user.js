// ==UserScript==
// @name        Flaggot
// @description Flag counter for 4chan
// @version     1.0.3
// @author      dnsev
// @namespace   dnsev
// @include     http://boards.4chan.org/*
// @include     https://boards.4chan.org/*
// @grant       GM_setValue
// @grant       GM_getValue
// @homepage    https://github.com/dnsev/flaggot
// @supportURL  https://github.com/dnsev/flaggot/issues
// @updateURL   https://raw.githubusercontent.com/dnsev/flaggot/master/flaggot.user.js
// @downloadURL https://raw.githubusercontent.com/dnsev/flaggot/master/flaggot.user.js
// @icon        data:image/png;base64,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
// @run-at      document-start
// ==/UserScript==

/* jshint eqnull:true, noarg:true, noempty:true, eqeqeq:true, bitwise:false, strict:true, undef:true, curly:false, browser:true, devel:true, newcap:false, maxerr:50 */
/* globals GM_getValue, GM_setValue */
(function () {
	"use strict";

	// Enabled?
	if (!window.MutationObserver || !document.querySelector || !document.documentElement) {
		console.log("Browser is not modern enough to use flaggot");
		return;
	}


	var $$ = function (selector, root) {
		return (root || document).querySelectorAll(selector);
	};
	var $ = (function () {

		var d = document;

		var Module = function (selector, root) {
			return (root || d).querySelector(selector);
		};

		Module.ready = (function () {

			var callbacks = [],
				check_interval = null,
				check_interval_time = 250;

			var callback_check = function () {
				if (
					(document.readyState === "interactive" || document.readyState === "complete") &&
					callbacks !== null
				) {
					var cbs = callbacks,
						cb_count = cbs.length,
						i;

					callbacks = null;

					for (i = 0; i < cb_count; ++i) {
						cbs[i].call(null);
					}

					window.removeEventListener("load", callback_check, false);
					window.removeEventListener("DOMContentLoaded", callback_check, false);
					document.removeEventListener("readystatechange", callback_check, false);

					if (check_interval !== null) {
						clearInterval(check_interval);
						check_interval = null;
					}

					return true;
				}

				return false;
			};

			window.addEventListener("load", callback_check, false);
			window.addEventListener("DOMContentLoaded", callback_check, false);
			document.addEventListener("readystatechange", callback_check, false);

			return function (cb) {
				if (callbacks === null) {
					cb.call(null);
				}
				else {
					callbacks.push(cb);
					if (check_interval === null && callback_check() !== true) {
						check_interval = setInterval(callback_check, check_interval_time);
					}
				}
			};

		})();

		Module.prepend = function (parent, child) {
			return parent.insertBefore(child, parent.firstChild);
		};
		Module.add = function (parent, child) {
			return parent.appendChild(child);
		};
		Module.before = function (root, next, node) {
			return root.insertBefore(node, next);
		};
		Module.after = function (root, prev, node) {
			return root.insertBefore(node, prev.nextSibling);
		};
		Module.replace = function (root, elem) {
			return root.parentNode.replaceChild(elem, root);
		};
		Module.remove = function (elem) {
			return elem.parentNode.removeChild(elem);
		};
		Module.tnode = function (text) {
			return d.createTextNode(text);
		};
		Module.node = function (tag, class_name, text) {
			var elem = d.createElement(tag);
			elem.className = class_name;
			if (text !== undefined) {
				elem.textContent = text;
			}
			return elem;
		};
		Module.node_ns = function (namespace, tag, class_name) {
			var elem = d.createElementNS(namespace, tag);
			elem.setAttribute("class", class_name);
			return elem;
		};
		Module.node_simple = function (tag) {
			return d.createElement(tag);
		};

		return Module;

	})();


	var is_enabled = true;
	var is_showing_unique = false;
	var node_header = null;
	var node_flag_container = null;
	var node_last_highlighted = null;
	var node_mode_status = null;
	var post_queue = null;
	var post_queue_timer = null;
	var has_setup = false;
	var any_user_ids = false;
	var flags = {};
	var posts = {};


	var load_settings = function () {
		is_enabled = GM_getValue("flaggot_enabled", true) || false;
		is_showing_unique = GM_getValue("flaggot_showing_unique", false) || false;
	};


	var start_post_queue = function () {
		if (post_queue_timer !== null) return;

		// Update
		var posts = post_queue.splice(0, 25),
			ii = posts.length,
			any_user_ids_pre = any_user_ids,
			updates, i;
		if (ii === 0) return;

		updates = {};
		for (i = 0; i < ii; ++i) {
			process_post(posts[i], updates);
		}

		if (update_flag_counting(updates)) {
			update_flag_order(node_flag_container);
			if (!any_user_ids_pre && any_user_ids) {
				update_display_status();
			}
		}

		// Continue
		post_queue_timer = setTimeout(function () {
			post_queue_timer = null;
			start_post_queue();
		}, 250);
	};
	var process_post = function (post, updates) {
		var uid, id, flag, flag_data, f;

		if (
			(id = get_id_from_post_container(post)) === null ||
			Object.prototype.hasOwnProperty.call(posts, id) ||
			(flag = get_flag_from_post_container(post)) === null
		) {
			return;
		}

		// Add post
		posts[id] = flag;

		// Setup
		if (!has_setup) setup();

		// Add flag
		f = get_flag_key(flag);
		if (!Object.prototype.hasOwnProperty.call(flags, f)) {
			flags[f] = flag_data = {
				type: flag[0],
				name: flag[1],
				posts: [ id ],
				user_ids: {},
				nodes: create_flag_stat(flag[0], flag[1], f)
			};
			node_flag_container.appendChild(flag_data.nodes.container);
		}
		else {
			flag_data = flags[f];
			flag_data.posts.push(id);
		}

		// Get poster ID
		uid = get_user_id_from_post_container(post);
		if (uid !== null) {
			any_user_ids = true;
			if (Object.prototype.hasOwnProperty.call(flag_data.user_ids, uid)) {
				flag_data.user_ids[uid].push(id);
			}
			else {
				flag_data.user_ids[uid] = [ id ];
			}
		}

		updates[f] = flag_data;
	};

	var get_user_id_from_post_container = function (container) {
		var n = $(".nameBlock>.posteruid>.hand", container);
		return (n === null ? null : n.textContent.trim());
	};
	var get_id_from_post_container = function (container) {
		var id = container.id,
			n, m;

		if (!id) {
			n = $("[id]", container);
			if (n === null) return null;
			id = n.id;
		}

		m = /\d+/.exec(id);
		return (m === null ? null : m[0]);
	};
	var get_flag_from_post_container = function (container) {
		var n, m;

		if (
			(n = $(".nameBlock>.flag", container)) === null ||
			(m = /\bflag-([\w\-\_]+)/.exec(n.className || "")) === null
		) {
			return null;
		}

		return [ m[1], n.getAttribute("title") || "" ];
	};
	var get_flag_key = function (flag_data) {
		return flag_data[1] || flag_data[0];
	};

	var get_header_height = function () {
		var n;
		if ((n = $("#header-bar")) !== null || (n = $("#boardNavMobile")) !== null) {
			return n.getBoundingClientRect().height;
		}
		return 0;
	};
	var get_current_post = function (header_height) {
		var nodes = get_body_post_nodes();

		if (nodes.length === 0) return null;

		var doc_el = document.documentElement,
			body = document.body,
			height = Math.max(body.scrollHeight || 0, body.offsetHeight || 0, doc_el.clientHeight || 0, doc_el.scrollHeight || 0, doc_el.offsetHeight || 0),
			y = (window.pageYOffset || doc_el.scrollTop || 0),
			ii = nodes.length,
			i, n, r;

		// Detect
		i = Math.max(0, Math.min(ii - 1, Math.round(y / height * ii))); // approximate
		n = nodes[i];
		r = n.getBoundingClientRect();
		if (r.top < header_height) {
			for (; i < ii; ++i) {
				n = nodes[i];
				r = n.getBoundingClientRect();
				if (r.top >= header_height) break;
			}
		}
		else {
			for (--i; i >= 0; --i) {
				n = nodes[i];
				r = n.getBoundingClientRect();
				if (r.top < header_height) break;
			}
			++i;
		}

		return [ nodes, i ];
	};

	var get_body_post_nodes = function () {
		return $$(".postContainer");
	};
	var get_all_post_nodes = function (container) {
		return $$(".postContainer,.post.inlined,#quote-preview", container);
	};
	var is_post = function (node) {
		var selector = ".postContainer,.post.inlined,#quote-preview";
		try {
			return node.matches ? node.matches(selector) : node.matchesSelector(selector);
		}
		catch (e) {}
		return false;
	};
	var is_post_group_container = function (node) {
		return node.id === "qp" || node.classList.contains("thread") || node.classList.contains("inline");
	};

	var create_styles = function (s) {
		var n = $.node_simple("style");
		n.textContent = s;
		$.add(document.head, n);
	};

	var setup = function () {
		if (has_setup) return;
		has_setup = true;

		create_styles([ //{
			".flaggot_header{position:fixed;left:0;max-width:100%;top:0;box-sizing:border-box;-moz-box-sizing:border-box;padding:0.5em;margin:0;white-space:normal!important;pointer-events:none;transition:padding 0.25s ease-in-out 0s,font-size 0.25s ease-in-out 0s;}",
			".flaggot_header.flaggot_disabled{padding:0;font-size:0.8em;}",
			".flaggot_header.flaggot_header_standard{z-index:1;}",
			".flaggot_header.flaggot_header_in_4chanx_header{position:absolute;top:100%;}",
			".flaggot_header.flaggot_header_under_inline_header{top:2em;}",
			"div.flaggot_header_bg.post.reply{display:block!important;margin:0!important;padding:0!important;border-radius:0!important;border:0!important;position:absolute;left:0;top:0;bottom:0;width:0!important;opacity:0!important;transition:width 0s ease-in-out 0.25s,opacity 0.25s linear 0s;overflow:visible!important;}",
			".flaggot_header:not(.flaggot_disabled):hover>div.flaggot_header_bg.post.reply{width:100%!important;opacity:0.9!important;transition:width 0.25s ease-in-out 0s,opacity 0s linear 0s;}",
			".flaggot_table{position:relative;display:table;max-width:100%;box-sizing:border-box;-moz-box-sizing:border-box;pointer-events:auto;}",
			".flaggot_row{display:table-row;}",
			".flaggot_cell{display:table-cell;vertical-align:top;width:100%;}",
			".flaggot_cell:first-of-type{width:0;white-space:nowrap!important;}",
			".flaggot_flags{}",
			".flaggot_header.flaggot_disabled .flaggot_flags{display:none;}",
			".flaggot_enabled,.flaggot_enabled+.riceCheck{vertical-align:middle;padding:0;margin:0 0.25em 0 0;transition:margin 0.25s ease-in-out 0s;}",
			".flaggot_header.flaggot_disabled .flaggot_enabled,.flaggot_header.flaggot_disabled .flaggot_enabled+.riceCheck{margin-right:0;}",
			".flaggot_enabled+.riceCheck+.riceCheck{display:none;}",
			".flaggot_label{margin:0;padding:0;cursor:pointer;}",
			".flaggot_label_text,.flaggot_label_text_enabled{font-weight:bold;vertical-align:middle;}",
			".flaggot_header.flaggot_disabled .flaggot_label_text{opacity:0.375;}",
			".flaggot_label_text_enabled{display:none;}",
			".flaggot_enabled:checked~.flaggot_label_text_enabled{display:inline;}",
			".flaggot_stat{display:inline-block;text-align:center;vertical-align:top;margin:0 0 0 0.125em;border:1px solid rgba(0,0,0,0);cursor:pointer;border-radius:0.125em;}",
			".flaggot_stat:hover{background-color:rgba(0,0,0,0.125);border-color:rgba(255,255,255,0.125);}",
			".flaggot_stat_inner{display:block;vertical-align:center;margin-bottom:-0.5em;}",
			".flaggot_flag{margin:0 0.375em;}",
			".flaggot_count{display:inline-block;position:relative;top:-0.5em;font-size:0.8em;}",
		].join("")); //}

		window.addEventListener("scroll", on_window_scroll, false);

		// Setup nodes
		var header = $.node("div", "flaggot_header"),
			table = $.node("div", "flaggot_table"),
			row = $.node("div", "flaggot_row"),
			cell = $.node("div", "flaggot_cell"),
			n1, n2;

		node_header = header;

		$.add(header, $.node("div", "flaggot_header_bg post reply"));

		$.add(header, table);
		$.add(table, row);
		$.add(row, cell);
		$.add(cell, n1 = $.node("label", "flaggot_label"));
		$.add(n1, n2 = $.node("input", "flaggot_enabled"));
		n2.type = "checkbox";
		n2.checked = is_enabled;
		n2.addEventListener("change", function () { return on_enabled_change(this, true); }, false);
		$.add(n1, $.node("span", "riceCheck"));
		$.add(n1, node_mode_status = $.node("span", "flaggot_label_text"));
		$.add(n1, $.node("span", "flaggot_label_text_enabled", ":"));

		$.add(row, cell = $.node("div", "flaggot_cell"));
		$.add(cell, n1 = $.node("div", "flaggot_flags"));
		node_flag_container = n1;

		update_display_status();

		add_header();
	};
	var add_header = function () {
		var n, s;

		n = $("#header-bar");
		if (n !== null) {
			node_header.classList.add("flaggot_header_in_4chanx_header");
			$.add(n, node_header);
		}
		else {
			n = $("#boardNavMobile");
			if (n !== null) {
				try {
					s = document.defaultView.getComputedStyle(n).display;
					if (s !== "none") {
						node_header.classList.add("flaggot_header_under_inline_header");
					}
				}
				catch (e) {}
			}
			node_header.classList.add("flaggot_header_standard");
			$.add(document.body, node_header);
		}
	};
	var create_flag_stat = function (type, title, key) {
		var n1, n2, c;
		n1 = $.node("span", "flaggot_stat");
		n1.title = title;
		n1.addEventListener("click", function (event) { return on_flag_click(event, key); }, false);
		$.add(n1, n2 = $.node("span", "flaggot_stat_inner"));
		$.add(n2, $.node("span", "flaggot_flag flag flag-" + type));
		$.add(n2, $.node_simple("br"));
		$.add(n2, c = $.node("span", "flaggot_count"));
		return {
			container: n1,
			count: c
		};
	};

	var update_flag_order_sort_fn = function (n1, n2) {
		var n1c = (n1.nodeType === Node.ELEMENT_NODE) ? (parseInt(n1.getAttribute("data-count"), 10) || 0) : -1,
			n2c = (n2.nodeType === Node.ELEMENT_NODE) ? (parseInt(n2.getAttribute("data-count"), 10) || 0) : -1;

		if (n1c < n2c) return 1;
		if (n1c > n2c) return -1;
		return 0;
	};
	var update_flag_order = function (container) {
		var nodes = Array.prototype.slice.call(container.children, 0),
			frag = document.createDocumentFragment(),
			i, ii;
		nodes.sort(update_flag_order_sort_fn);
		for (i = 0, ii = nodes.length; i < ii; ++i) {
			frag.appendChild(nodes[i]);
		}
		container.appendChild(frag);
	};

	var update_flag_counting = function (obj) {
		var any = false,
			flag_data, k, c;
		for (k in obj) {
			if (Object.prototype.hasOwnProperty.call(obj, k)) {
				any = true;
				flag_data = obj[k];
				c = (is_showing_unique && any_user_ids) ? Object.keys(flag_data.user_ids).length : flag_data.posts.length;
				flag_data.nodes.count.textContent = c;
				flag_data.nodes.container.setAttribute("data-count", c);
			}
		}
		return any;
	};
	var update_display_status = function () {
		if (is_enabled) {
			node_header.classList.remove("flaggot_disabled");
			node_mode_status.textContent = (is_showing_unique && any_user_ids) ? "Unique" : "Flags";
		}
		else {
			node_header.classList.add("flaggot_disabled");
			node_mode_status.textContent = "Flags";
		}
	};

	var highlight_post = function (node, header_height) {
		var y = (window.pageYOffset || document.documentElement.scrollTop || 0),
			r = node.getBoundingClientRect();

		window_scroll_ignore();
		window.scrollTo(0, y + r.top - header_height);

		node_last_highlighted = node;
	};

	var window_scroll_ignore = function () {
		if (window_scroll_ignore.timer !== null) {
			clearTimeout(window_scroll_ignore.timer);
			window_scroll_ignore.timer = null;
		}
		window_scroll_ignore.timer = setTimeout(function () {
			window_scroll_ignore.timer = null;
		}, 10);
	};
	window_scroll_ignore.timer = null;
	var on_window_scroll = function () {
		if (window_scroll_ignore.timer === null) {
			node_last_highlighted = null;
		}
	};

	var on_enabled_change = function (node, save) {
		if (is_enabled) {
			if (is_showing_unique) {
				is_showing_unique = false;
				is_enabled = false;
			}
			else {
				if (any_user_ids) {
					is_showing_unique = true;
				}
				else {
					is_enabled = false;
				}
			}
			update_flag_counting(flags);
		}
		else {
			is_enabled = true;
			is_showing_unique = false;
		}

		node.checked = is_enabled;
		update_display_status();

		if (save) {
			GM_setValue("flaggot_enabled", is_enabled);
			GM_setValue("flaggot_showing_unique", is_showing_unique);
			if (is_enabled) start_post_queue();
		}
	};

	var on_flag_click = function (event, type) {
		if (typeof(event.which) === "number" && event.which !== 1) return;

		var header_height = get_header_height(),
			p = get_current_post(header_height),
			first = true,
			nodes, flag, i, ii, n, r;

		if (p === null) return;

		// Start from last node (if exists)
		nodes = p[0];
		ii = nodes.length;

		if (node_last_highlighted !== null) {
			for (i = 0; i < ii; ++i) {
				if (nodes[i] === node_last_highlighted) {
					p[1] = i;
					break;
				}
			}
		}

		i = p[1] + 1;

		while (true) {
			for (; i < ii; ++i) {
				n = nodes[i];
				flag = get_flag_from_post_container(n);
				if (flag !== null && get_flag_key(flag) === type) {
					// Scroll to post
					r = node_header.getBoundingClientRect();
					header_height = Math.max(0, r.bottom);
					highlight_post(n, header_height);
					first = false;
					break;
				}
			}

			i = 0;
			ii = p[1] + 1;
			if (first) {
				first = false;
			}
			else {
				break;
			}
		}
	};

	var on_body_observe = function (records) {
		var added_count = 0,
			nodes, node, ns, i, ii, j, jj, k, kk;

		for (i = 0, ii = records.length; i < ii; ++i) {
			nodes = records[i].addedNodes;
			if (!nodes) continue;

			// Find posts
			for (j = 0, jj = nodes.length; j < jj; ++j) {
				node = nodes[j];
				if (node.nodeType === Node.ELEMENT_NODE) {
					if (is_post(node)) {
						post_queue.push(node);
						++added_count;
					}
					else if (is_post_group_container(node)) {
						ns = get_all_post_nodes(node);
						for (k = 0, kk = ns.length; k < kk; ++k) {
							post_queue.push(ns[k]);
						}
						added_count += kk;
					}
				}
			}
		}

		if (added_count > 0) {
			start_post_queue();
		}
	};

	var init = function () {
		var board_has_flags = ($("link[href*='4cdn.org/css/flags']") !== null);
		if (!board_has_flags) return;

		load_settings();

		post_queue = Array.prototype.slice.call(get_body_post_nodes(), 0);

		new MutationObserver(on_body_observe).observe(document.body, { childList: true, subtree: true });

		if (post_queue.length > 0) {
			start_post_queue();
		}
	};


	$.ready(function () { setTimeout(init, 1000); });

})();

