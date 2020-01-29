function distance(first, second){
	//TODO: implementați funcția
	// TODO: implement the function
	if(!( Array.isArray(first)) ||!( Array.isArray(second))){
		throw new Error("InvalidType");
	}else{
		var unique1 = first.filter((v, i, a) => a.indexOf(v) === i); 
		var unique2 = second.filter((v, i, a) => a.indexOf(v) === i);
		let diff=0;
		let lMax=0;
		if(unique1.length>unique2.length){
			lMax=unique1.length;
		}else{
			lMax=unique2.length;
		}
		for(let i=0;i<=lMax;i++){
			if((!(unique1[i]===unique2[i]))){
				diff++;
			}
			if((typeof unique1[i]=="number" && typeof unique2[i]=="string") ||(typeof unique1[i]=="string" && typeof unique2[i]=="number")  ){
				diff++;
			}
		}
		return diff;
	}
}


		




module.exports.distance = distance