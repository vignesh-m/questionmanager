/**
* Questions.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
	schema:true,
  	attributes: {
  		strQuestions:{
  			type:'string',
  			required:true

  		},

  		active:{
  			type:'integer',
  			defaultsTo:true
  		},

  		idBigBangQues:{
  			type:'integer',
  			defaultsTo:-1
  		}

  	}
};

	