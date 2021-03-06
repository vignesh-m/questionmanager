/**
* Questions.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
	schema:true,
	autoCreatedAt:false,
	autoUpdatedAt:false,
	autoPK:false,
  	attributes: {

  		idQuestions:{
  			type:'integer',
  			autoIncrement:true,
  			primaryKey:true
  		},

  		strQuestions:{
  			type:'string',
  			defaultsTo:''

  		},

  		active:{
  			type:'integer',
  			defaultsTo:1
  		},

  		idBigBangQues:{
  			type:'integer',
  			defaultsTo:-1
  		}

  	}
};

	