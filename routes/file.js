exports.upload = function(req, res){
  	var user_id = req.body.user_id;
	jsonObject=req.files;
	var myarray=[];
	//console.log(jsonObject.pic);
	//console.log(isArray(jsonObject.pic));
	if(isArray(jsonObject.pic))
	{
		//console.log(jsonObject);
		for (var i=0; i<jsonObject['pic'].length; i++)
		{
			var timenow = new Date().getTime();
			var name = jsonObject['pic'][i].name;
			var arr = name.split('.');
			name = user_id+'_'+i+'_'+timenow+'_.'+arr[arr.length-1];
			
			path="./public/photos/"+name;
			myarray[i]= base_path +"photos/"+ name;
			mv(jsonObject['pic'][i].path, path, function(err) {});
			if (i == (jsonObject['pic'].length-1))
			{
				insertimgs(res, myarray, user_id);
			};
		}
	}
	else
	{
		//profile
		var timenow = new Date().getTime();
		var name = req.files.pic.name;
		var arr = name.split('.');
		name = user_id+'_'+timenow+'_.'+arr[arr.length-1];
			
		path="./public/profile/"+name;
		myarray[0]= base_path +"profile/"+ name;
		mv(req.files.pic.path, path, function(err) {
			if(!err)
			{
				insertimgs(res, myarray, user_id);
			}
			else
			{
				response.sendResult(res,0,'error',err);
			}
		});
	}
};

function isArray(myArray) {
    //return myArray.constructor.toString().indexOf("Array") > -1;
    return toString.call(myArray) === "[object Array]";
}

function insertimgs(res, myarray, user_id)
{
	//console.log(myarray.length);
	if (myarray.length>1)
	{
		var query = "INSERT INTO user_album (id,user_id,photo_path) VALUES ";
	}
	else
	{
		var query = "INSERT INTO user_profile_pic (id,user_id,pic_path) VALUES ";
	}

	//var insertdata='';
    for (var i in myarray) 
    {
      	filepath = myarray[i].replace(/\\/g,"&#92;");
       	if (i==0)
       	{
       		query += '(NULL,'+user_id+','+'"'+filepath+'")';
       	}
       	else
       	{
       		query += ',(NULL,'+user_id+','+'"'+filepath+'")';
       	}	
	};

	objDB.query(
                query,
                function ( objError, objRows, objFields ){
                    if( objError ){
                        response.sendResult(res,0,'error',objError);
                    }else
                    {
                       	response.sendResult(res,1,'success');
                    }
                }
            );
}