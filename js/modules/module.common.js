define('modules/module.common', function(require, exports, module) {
	"use strict";

	var fnGlobalUrl = require[require.toUrl ? 'toUrl' : 'resolve'];
	var $ = ('undefined' == typeof window.jQuery ? require('jquery') : window.jQuery);
	var $window = $(window),
		$document = $(document);
		require('jt_app');

	/* ============================================================
	 * 前台页面基础类（basePage）
	 * ============================================================ */
	var m_basePage = window.basePage = {
		createNew: function() {
			var $internal = {};
			$internal.wW = parseInt($window.width());
			$internal.wH = parseInt($window.height());

			return $internal;
		}
	};
	window.basePage = m_basePage;
	/* ============================================================
	 * 公共 页面类
	 * ============================================================ */

	var m_Common = {

		createNew: function() {
			var $internal = window.basePage.createNew();
			$internal.tabar = null;

			$internal.init = function() {
				this.tabar = new $stabar();

			}
			var $stabar = new Class({
				initialize: function() {

					this._init();
				}

			});
			$stabar.extend({
				_init: function() {
					jt.init();  },
				_initDom: function() {

				},
				appear: function() {
					
					jt.tabBar(['quality.html','g_tab_nav_popover.html','contact.html','setting.html']);
					
					
				}

			});

			return $internal;
		}
	};
	/* ************************************************************ */
	exports.run = function() {
		var mainTabPage = m_Common.createNew();
				mainTabPage.init();

		$document.ready(function() {
			mainTabPage.tabar.appear();

		});
	};

});