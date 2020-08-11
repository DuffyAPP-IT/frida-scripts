//Paste numerical values as hexdump in CyberChef -> output to ASCII.

if (ObjC.available) {

try {  

var className = "NSURLRequest"; 
var funcName = "- HTTPBody"; 

var hook = eval('ObjC.classes.' + className + '["' + funcName + '"]');

Interceptor.attach(hook.implementation, {  
    
       
    onEnter: function(args) 
    {  
    }, 
  
    onLeave: function(returnvalue) 
    {  
        var arrayPtr = ptr(returnvalue)
        var size = 0x80
        var buffer = Memory.readByteArray(arrayPtr, size)
        console.log('test ->' + buffer);
        console.log('Request Body: ' + Memory.readByteArray(returnvalue,6000));
    }  
 
    }); 
   
} 
catch(error) 
{
 console.log("[!] Exception: " + error.message); 
} 
}  

else { 

console.log("Objective-C Runtime is not available!"); 

}

