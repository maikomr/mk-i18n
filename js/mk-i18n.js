(function(){
	window.mki18n = (function() {
	  var observers = new Array();

	  return { // public interface
	    addObserver: function (obj) {
	      observers.push(obj);
	    },
	    notify: function () {
	      for (var i = observers.length - 1; i >= 0; i--) {
	        observers[i].refresh();
	      }
	    },
	    get: function(key) {
				return i18n.t(key);
			}
	  };
	})();
})();