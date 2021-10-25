'use strict'

const activeClass = {
   btn: '.js-active',
   init: function() {
      var t = this;
      $(t.btn).on('click', function (e) {
         e.preventDefault()
         $(t.btn).removeClass('is-active');
         $(this).addClass('is-active');
      });

   }
}

const activeBtn = {
   btn: '.js-active-btn button',
   init: function() {
      var t = this;
      $(t.btn).on('click', function (){
         $(t.btn).removeClass('is-active');
         $(this).addClass('is-active');
      })
   }
}

const gTabs = {
	parentTabs: '.js-tabs-parent',
	captionTab: '.js-tab-caption',
	blockTab: '.js-tab-block',
	init: function(){
		var t = this;
		$(t.captionTab).on('click', function(){
			t.activeTab(this)
		})
	},
	activeTab: function(obj){
		var t = this, p = $(obj).closest(t.parentTabs);

		p.find(t.captionTab).removeClass('is-active')
		$(obj).addClass('is-active');

		let idx = p.find(t.captionTab).index($(obj));
		p.find(t.blockTab).removeClass('is-active');
		p.find(t.blockTab).eq(idx).addClass('is-active');

		gProduct.reactive();
	}
}

$('a.scroll-to').on('click', function(e){
   e.preventDefault();
   var anchor = $(this).attr('href');
   $('html, body').stop().animate({
         scrollTop: $(anchor).offset().top - 60
   }, 800);
});



$(function() {
   activeClass.init(); // add is-active class
   gTabs.init();
   activeBtn.init(); // actibe button size
});
