function sessionAcc(){
    if(sessionStorage.getItem('accountingsession')!='active'){
        window.location.href="login.html";
    }
}

function sessionAdmin(){
    if(sessionStorage.getItem('adminsession')!='active'){
        window.location.href="login.html";
    }
}

function sessionPOS(){

    if(sessionStorage.getItem('possession')!='active'){
        window.location.href="login.html";
    }
}

function sessionInv(){
    if(sessionStorage.getItem('inentorysession')!='active'){
        window.location.href="login.html";
    }
}

function sessionPurchasing(){

    if(sessionStorage.getItem('purchasesession')!='active'){
        window.location.href="login.html";
    }
}

function sessionSales(){

    if(sessionStorage.getItem('salessession')!='active'){
        window.location.href="login.html";
    }
}