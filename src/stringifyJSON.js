// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  	if (typeof obj ==='function'){
  		return null;
  	}

  	if (typeof obj === 'undefined') {
  		return null;
  	}

  	if (typeof obj === 'string') {
  		return '"' + obj + '"';
  	}

  	if (typeof obj === 'number') {
  		return String(obj);
  	}

  	if (obj === null) {
  		return String(obj);
  	}

  	if (typeof obj === 'boolean') {
  		return String(obj);
  	}

  	if (Array.isArray(obj)) {
  		var arrContainer = [];
  		for (var i = 0; i < obj.length; i++) {
  			arrContainer.push(stringifyJSON(obj[i]));
  		}
  		return '[' + arrContainer + ']';
  	}

  	if (obj instanceof Object) {
  		if (Object.keys(obj).length < 1) {
  			return "{}";
  		}
  		var objContainer = [];
		for (var key in obj) {
  			if (stringifyJSON(obj[key]) !== null) {
  				objContainer.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));  			
  			}
  		}
  		
  		return '{' + objContainer + '}';
  	}
  };
