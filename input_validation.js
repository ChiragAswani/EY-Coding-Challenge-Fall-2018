module.exports = {
	isValidUserName: function (userName) {
		if (userName && /^[a-z0-9]+$/i.test(userName) && 0 < userName.length <= 30){
			return true;
		}
	},
	isValidFirstOrLastName: function (firstOrLastName) {
		if (firstOrLastName && /^[a-zA-Z]+$/.test(firstOrLastName) && 0 <=firstOrLastName.length <= 20){
			return true;
  		}
	},
	isValidAge: function(age){
		if (age && /^\d+$/.test(age) && 0 < age.length <= 3 && age > 0){
			return true;
		}
	}
};