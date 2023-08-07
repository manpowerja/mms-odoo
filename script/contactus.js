function sendMail() {
    var params = {
        user_name: document.getElementById("txtName").value,
        email_address: document.getElementById("txtEmail").value,
        department: document.getElementById("txtDept").value,
        location: document.getElementById("txtLoc").value,
        message: document.getElementById("txtArea").value
    };
    const serviceID = "service_v8m8z7b";
    const templateID = "template_w8pt92n";

    emailjs
        .send(serviceID, templateID, params)
        .then((res) => {
            document.getElementById("txtName").value = "";
            document.getElementById("txtEmail").value = "";
            document.getElementById("txtDept").value = "";
            document.getElementById("txtLoc").value = "";
            document.getElementById("txtArea").value = "";
        })
        .catch((err) => console.log(err));
}

function validateItemsName(){
    var user_name2= document.getElementById("txtName").value;
    var arr=[];
    var countSym=0;
    var countSym2=0;
    var countSym3=0;
    var countSym4=0;

    var regexNum=/^([^0-9]*)$/;
    var regexSym= /^[a-zA-Z0-9_\-.]*$/;

    var namelength= user_name2.length;
    arr=user_name2.split("");
    
    for(var i=0;i<namelength; i++){
        if(regexSym.test(arr[i])==false){
            countSym=countSym+1;
        }
    }

    countSym2=user_name2.split('\'').length-1;
    countSym3=user_name2.split('-').length-1;
    countSym4=user_name2.split(' ').length-1;

    if(user_name2==""){
        document.getElementById("errName").style.display="initial";
        document.getElementById("errName").innerHTML="This field is required";
        return false;
    }
    else if(user_name2!=""){
        document.getElementById("errName").style.display="none";
    }
    
    if(regexNum.test(user_name2)==false){
        document.getElementById("errNameNum").style.display="initial";
        document.getElementById("errNameNum").innerHTML="Only letters are allowed";
        return false;
    }
    else{
        document.getElementById("errNameNum").style.display="none";
    }

    if(regexSym.test(user_name2)==false && (countSym2+countSym4)!=countSym){
        document.getElementById("errNameSym").innerHTML="Symbols are not allowed";
        document.getElementById("errNameSym").style.display="initial";
        return false;
    }
    else{
        document.getElementById("errNameSym").style.display="none";
    }
    return true;
}

function validateItemsEmail(){
    var email_address2= document.getElementById("txtEmail").value;
    var regexEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(email_address2==""){
        document.getElementById("errEmail").innerHTML="This field is required";
        document.getElementById("errEmail").style.display="initial";
        return false;
    }
    else{
        document.getElementById("errEmail").style.display="none";
    }

    if((regexEmail.test(email_address2))==false && email_address2!=""){
        document.getElementById("errEmailFor").innerHTML="Please enter valid email";
        document.getElementById("errEmailFor").style.display="initial";
        return false;
    }
    else{
        document.getElementById("errEmailFor").style.display="none";
    }
    return true;
}

function validateItemsDept(){
    var department2= document.getElementById("txtDept").value;
    var regexNum2=/^([^0-9]*)$/;
    
    if(department2==""){
        document.getElementById("errDept").innerHTML="This field is required";
        document.getElementById("errDept").style.display="initial";
        return false;
    }
    else{
        document.getElementById("errDept").style.display="none";
    }

    if(regexNum2.test(department2)==false){
        document.getElementById("errDeptNum").style.display="initial";
        document.getElementById("errDeptNum").innerHTML="No numbers allowed";
        return false;
    }
    else{
        document.getElementById("errDeptNum").style.display="none";
    }
    return true;
}

function validateItemsLocation(){
    var location2= document.getElementById("txtLoc").value;

    if(location2==""){
        document.getElementById("errLocation").innerHTML="This is a required field";
        document.getElementById("errLocation").style.display="initial";
        return false;
    }
    else{
        document.getElementById("errLocation").style.display="none";
    }
    return true;
}

function validateItemsComplaint(){
    var message2= document.getElementById("txtArea").value;

    if(message2==""){
        document.getElementById("errComplain").innerHTML="This is a required field";
        return false;
    }
    else{
        document.getElementById("errComplain").style.display="none";
    }
    return true;
}

function function2(){
    var checktest=document.getElementById("errName").style.display;
    var checktest2=document.getElementById("errNameNum").style.display;
    var checktest3=document.getElementById("errNameSym").style.display;
    var checktest4=document.getElementById("errEmail").style.display;
    var checktest5=document.getElementById("errEmailFor").style.display;
    var checktest6=document.getElementById("errDept").style.display;
    var checktest7=document.getElementById("errDeptNum").style.display;
    var checktest8=document.getElementById("errLocation").style.display;
    var checktest9=document.getElementById("errComplain").style.display;

    if(checktest=="none" && checktest2=="none" && checktest3=="none" && checktest4=="none" && checktest5=="none"&&
    checktest6=="none" && checktest7=="none" && checktest8=="none" && checktest9=="none"){
        return false;
    }
    else{
        sendMail();
        alert("Your complaint has been successfully logged");
        return false;
    }
}