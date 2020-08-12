if (ObjC.available) {

try {  

var className = "NSURLSession"; 
var funcName = "- initWithURL:cachePolicy:timeoutInterval:"; 

var hook = eval('ObjC.classes.' + className + '["' + funcName + '"]');

Interceptor.attach(hook.implementation, {  
   
    onEnter: function(args) 
    {  
    console.log('URL -> ' + ObjC.Object(args[2]).toString() );
    }, 
  
    onLeave: function(returnvalue) 
    {  
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

