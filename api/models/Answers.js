/**
* Answers.js
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
  		idAnswers:{
  			type:'integer',
  			autoIncrement:true,
  			primaryKey:true
  		},

  		idQuestions:{
  			type:'integer',
  			required:true
  		},

  		answer:{
  			type:'string',
  			required:true
  		},

  		email:{
  			type:'string',
  			required:true
  		}
  	}
};
