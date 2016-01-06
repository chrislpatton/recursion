// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  // your code here
var container = [];

var findElement = function(node) {
	if (node.classList && node.classList.contains(className)){
			container.push(node);
	}

	if (node.childNodes) {
		for (var i = 0; i < node.childNodes.length; i++){
			findElement(node.childNodes[i]);
		}
	}
}
  findElement(document.body);
  return container;
};
