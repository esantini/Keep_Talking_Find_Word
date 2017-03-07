
//	https://repl.it/Ccnp 
(function() {


	var words =	['about', 'after', 'again', 'below',
				 'could', 'every', 'first', 'found',
				 'great', 'house', 'large', 'learn',
				 'never', 'other', 'place', 'plant',
				 'point', 'right', 'small', 'sound',
				 'spell', 'steal', 'study', 'their',
				 'there', 'these', 'thing', 'think',
				 'three', 'water', 'where', 'which',
				 'world', 'would', 'write'];

	var buffer = [];

	window.input1 = function(letters, l4) {
		buffer = [];

		for (var i = 0; i < words.length; i++) {
			var l = words[i][0];

			for (var j = 0; j < letters.length; j++) {
				if(letters[j] == l) {
					buffer.push(words[i]);
				}
			};
		};
		console.log(buffer);
		if(l4) input4(l4);
	}

	window.input4 = function(letters) {
		var tmpBuffer = [];
		for (var i = 0; i < buffer.length; i++) {
			var l = buffer[i][3];
			for (var j = 0; j < letters.length; j++) {
				if(letters[j] == l) {
					tmpBuffer.push(buffer[i]);
				}
			};
		};
		buffer = tmpBuffer;
		console.log(buffer);
	}

	window.input3 = function(letters) {
		var tmpBuffer = [];
		for (var i = 0; i < buffer.length; i++) {
			var l = buffer[i][2];
			for (var j = 0; j < letters.length; j++) {
				if(letters[j] == l) {
					tmpBuffer.push(buffer[i]);
				}
			};
		};
		buffer = tmpBuffer;
		console.log(buffer);
	}
})();
