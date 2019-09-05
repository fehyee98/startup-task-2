function validation(){

    var name = document.getElementById("name").Value;
    var Email = document.getElementById("Email").Value;
    var message = document.getElementById("message").Value;

    if (name==null || name==""){  
        alert("Name can't be blank");  
        return false;  
    }
   else if (name.length <5){
        alert("Please enter more characters");
        return false;

    }
    if (Email==null || Email==""){  
        alert("Email can't be blank");  
        return false;  
    }
    else  if (Email.IndexOf ("@", 0) < 0){  
        alert("Please Enter Valid Email");  
        return false; 
    }
    else  if (Email.IndexOf ("@",0) < 0){  
        alert("Please Enter Valid Email");  
        return false; 
    }
    else if (message.length < 140 ){
        alert(" message must be less than 140 character")
        return false;
    }
    else {return true:}
