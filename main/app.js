function distance(first, second){
	//TODO: implementați funcția
	// TODO: implement the function
        if(!( Array.isArray(first)) ||!( Array.isArray(second)) ) {
            throw new Error("InvalidType") 
   }

   let i=0;
   let len=0;
   let len2=0;
   let result=0;
   function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
}
   first=first.filter(onlyUnique);
   second=second.filter(onlyUnique);
   
   if (first.length >=second.length){
       len=second.length
       len2=first.length

   }
   else{
       len=first.length
       len2=second.length
   }
   
   if(first.length==0 && second.length==0)
   {
       return 0;
   }
   else
   {
   while (i<len-1){
       if(first[i] === second[i]){
           i++;
           
       }
         
      else if((String(first[i])==String(second[i]))&&(!(first[i] === second[i])))
           {
               result=result+1
               i++
           }
       
       else
       {
           result=result+1;
           i++
       }
   }
   for(let j=len; j<len2;j++){
       result=result+1;
   }
   return result;
   }
}


		




module.exports.distance = distance