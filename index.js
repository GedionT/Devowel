module.exports = function replace(string) => {

	return string.replace(/[aeiou]/ig, ''); // the i is caseinsenstive and g is global
}



// let findAndReplace = (string) => {

// 	string.split('');
	
// 	for(var i=0; i<string.length; i++){
// 		if(string[i] == 'a' || string[i] ==  'A' || string[i] ==  'e' || string[i] ==  'E' || string[i] ==  'i' || string[i] == 'o' || string[i] ==  'O' || string[i] ==  'u' || string[i] ==  'U' )
// 		{
// 			string[i] == ' ';
// 		}
// 	}
// 		 return string;
// }

// console.log(findAndReplace('Gedion'));