function loginaccounts(){
    const user_name=document.getElementById("txtUsername").value;
    const pass_word=document.getElementById("txtPassword").value;

    if(user_name=="accounts" && pass_word=="@CCounts2023"){
        window.location.href="accounting.html";
        sessionStorage.setItem('accountingsession','active');
        return false;
    }
    else if(user_name=="inventory" && pass_word=="INV2023S&D"){
        window.location.href="inventory.html";
        sessionStorage.setItem('inentorysession','active');
        return false;
    }
    else if(user_name=="pointofsales" && pass_word=="PO$Sales2023"){
        window.location.href="pointofsales.html";
        sessionStorage.setItem('possession','active');
        return false;
    }
    else if(user_name=="admin" && pass_word=="@DMIN8-4-2023"){1
        window.location.href="admin.html";
        sessionStorage.setItem('adminsession','active');
        return false;
    }
    else if(user_name=="purchasing" && pass_word=="$PURCHASE1990-35"){
        window.location.href="purchasing.html";
        sessionStorage.setItem('purchasesession','active');
        return false;
    }
    else if(user_name=="sales" && pass_word=="MONEY$Sales"){
        window.location.href="sales.html";
        sessionStorage.setItem('salessession','active');
        return false;
    }
    else{
        alert("Username or Password is incorrect");
        return false;
    }
}
