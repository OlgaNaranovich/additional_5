module.exports = function check(str, bracketsConfig) {
  const arr = str.split('');
	while (arr.length > 0) {
		for (let i = 0, len = arr.length; i < len; i++) {
			for (let j = 0, len = bracketsConfig.length; j < len; j++) {
			
				if (arr[i] === bracketsConfig[j][0] && arr[i + 1] === bracketsConfig[j][1]) {
					arr.splice(i, 2); 
					if (arr.length === 0) {
						return true;
					}
				}	
			} continue;
		}
		if (arr.length > 0) { 
			break;
		} 
	} return false;
}
