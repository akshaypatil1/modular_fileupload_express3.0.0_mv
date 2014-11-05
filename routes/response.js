/*
* SEND response 
*/
exports.sendResult = function(objResponse, status, statusInfo, strResult){
  objResponse.send(
  					JSON.stringify(
  						{
  							status:status,
  							statusInfo:statusInfo,
  							data:strResult
  						}
  					)
  				);
}