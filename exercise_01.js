//for(var i = 0; i < str.length; i++){
function confirmEnding(str, target) {
		if(str.substr(str.length-1) === target){
			return true;
			} else {
	return false;
console.log(str);
}
}


console.log(confirmEnding("Bastian", "n")); // true
console.log(confirmEnding("Hold on", "o")); // false)
