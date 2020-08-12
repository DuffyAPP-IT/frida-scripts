if (ObjC.available) {

try {  

var className = "NMSSHChannel"; 
var funcName = "- execute:error:timeout:"; 

var hook = eval('ObjC.classes.' + className + '["' + funcName + '"]');

Interceptor.attach(hook.implementation, {  
   
    onEnter: function(args) 
    {  
    console.log("Executed On Device -> " + ObjC.Object(args[2]).toString());
    console.log("Command Timeout -> " + args[4] );
    }, 
  
    onLeave: function(returnvalue) 
    {  
    // console.log('Return Value: ' + ObjC.Object(returnvalue).toString());
    }  
 
    }); 
   
} 
catch(error) {
    console.log("[!] Exception: " + error.message); 
    } 
}  

else { 

console.log("Objective-C Runtime is not available!"); 

}

