(function(){
	window.Polymer = window.Polymer || {};

	window.Polymer.mki18n = (function() {
	  var observers = new Array();

	  return { // public interface
	    addObserver: function (obj) {
	      observers.push(obj);
	    },
	    notify: function () {
	      for (var i = 0; i < observers.length; i++) {
	        observers[i].refresh();
	      }
	    },
	    get: function(key) {
			return i18n.t(key);
		}
	  };
	})();
})();