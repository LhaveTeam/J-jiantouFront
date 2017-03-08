define('modules/quality', function(require, exports, module) {
    "use strict";
    
    var fnGlobalUrl = require[require.toUrl ? 'toUrl' : 'resolve'];
    var $ = ('undefined' == typeof window.jQuery ? require('jquery') : window.jQuery);
    var $window = $(window), $document = $(document);
			require('pullToRefresh');
			
			require('pullToRefresh_material');
			var jt_app=require('jt_app');
    
    /* ============================================================
     * Quality  页面类
     * ============================================================ */
    
    var m_Quality = {
    	
    	createNew: function(){
    		var $internal = window.basePage.createNew();
    		$internal.scrollNav=null;
    		
    		$internal.init=function(){
    			
    			this.scrollNav=new $scrollNav();
    			
    		}
    		var $scrollNav= new Class({
    			init: function(){
    				
    				this._init();
    			}
    			
    		});
    		$scrollNav.extend({
    			_init:function(){},
    			_initDom: function(){
    				
    				
    			},
    			appear: function(){
    				
				jt.init();
				
    				
    			}
    			
    			
    		});
    		
    		return $internal;
    	}
    	
 
    };
    /* ************************************************************ */
    exports.run = function() {
        var indexPage = m_Quality.createNew();
            indexPage.init();
            
        $document.ready(function() {
        	
            indexPage.scrollNav.appear();
           
        });
    };
    
    
    
    
    /* ************************************************************ */
//  exports.run = function() {  
//      $document.ready(function() {
//			mui.init();
//			(function($) {
//				//阻尼系数
//				var deceleration = mui.os.ios?0.003:0.0009;
//				$('.mui-scroll-wrapper').scroll({
//					bounce: false,
//					indicators: true, //是否显示滚动条
//					deceleration:deceleration
//				});
//				$.ready(function() {
//					//循环初始化所有下拉刷新，上拉加载。
//					
//					$.each(document.querySelectorAll('.mui-slider-group .mui-scroll'), function(index, pullRefreshEl) {
//						$(pullRefreshEl).pullToRefresh({
//							down: {
//								callback: function() {
//									var self = this;
//									setTimeout(function() {
//										var ul = self.element.querySelector('.mui-table-view');
//										ul.insertBefore(createFragment(ul, index, 10, true), ul.firstChild);
//										self.endPullDownToRefresh();
//									}, 1000);
//								}
//							},
//							up: {
//								callback: function() {
//									var self = this;
//									setTimeout(function() {
//										var ul = self.element.querySelector('.mui-table-view');
//										ul.appendChild(createFragment(ul, index, 5));
//										self.endPullUpToRefresh();
//									}, 1000);
//								}
//							}
//						});
//					});
//					var createFragment = function(ul, index, count, reverse) {
//						var length = ul.querySelectorAll('li').length;
//						var fragment = document.createDocumentFragment();
//						var li;
//						for (var i = 0; i < count; i++) {
//							li = document.createElement('li');
//							li.className = 'mui-table-view-cell';
//							li.innerHTML = '第' + (index + 1) + '个选项卡子项-' + (length + (reverse ? (count - i) : (i + 1)));
//							fragment.appendChild(li);
//						}
//						return fragment;
//					};
//
//				});
//			})(mui);
//			
//      });
//  };
});