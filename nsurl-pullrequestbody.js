//Paste numerical values as hexdump in CyberChef -> output to ASCII.

console.log('Listening For Requests...');

if (ObjC.available) {

try {  

var className = "NSURLSession"; 
var funcName = "- dataTaskWithRequest:completionHandler:"; 

var hook = eval('ObjC.classes.' + className + '["' + funcName + '"]');

Interceptor.attach(hook.implementation, {  
    
       
    onEnter: function(args) 
    {  
        console.log('REQUEST TYPE ->' + ObjC.Object(args[2]).HTTPMethod() );
        console.log('URL -> ' + ObjC.Object(args[2]).URL() )
        
        var httpbody_nsdata = ObjC.Object(args[2]).HTTPBody();
        var httpbody_nsstring = ObjC.classes.NSString.alloc().initWithData_encoding_(httpbody_nsdata, 4);
        
        console.log ('string is -> ' + httpbody_nsstring);
        if (httpbody_nsstring += null) {
            console.log("BODY -> " + httpbody_nsstring);
        } else{
            console.log("BODY EMPTY");
        }
        
        //need to add headers
    }, 
  
    onLeave: function(returnvalue) 
    {  
        // var arrayPtr = ptr(returnvalue)
        // var size = 0x80
        // var buffer = Memory.readByteArray(arrayPtr, size)
        // console.log('test ->' + buffer);
        // console.log('Request Body: ' + Memory.readByteArray(returnvalue,6000));
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

