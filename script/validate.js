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

function function3(){
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

    var email_address2= document.getElementById("txtEmail").value;
    var regexEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    var department2= document.getElementById("txtDept").value;
    var regexNum2=/^([^0-9]*)$/;

    var location2= document.getElementById("txtLoc").value;

    var message2= document.getElementById("txtArea").value;

    if(user_name2=="" || regexNum.test(user_name2)==false || (regexSym.test(user_name2)==false && (countSym2+countSym4)!=countSym)|| email_address2==""|| ((regexEmail.test(email_address2))==false && email_address2!="")
    || department2==""|| regexNum2.test(department2)==false|| location2=="" || message2==""){
        return false;
    }
    else{
        sendMail();
        alert("working");
        return false;
    }
    
}