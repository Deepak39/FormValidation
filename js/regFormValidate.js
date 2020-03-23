function validateRegForm() {

    /*---------------------------
    This file do not check empty 
    feilds. So make sure you use
    'required' property to necessary 
    input fiels of html file.
    ----------------------------*/
    
    var name = document.regform.name;
    var email = document.regform.email;
    var phone_no = document.regform.phone_no;
    var address = document.regform.address;
    var phoneno = /^\d{10}$/;       // regex that satisfy phone no

    // window.alert(name.value + "\n" + email.value + "\n" + phone_no.value + "\n" + address.value);

    if(name.value.length < 3 || name.value.length > 20){
        window.alert("Please enter name atleast 3 and less than 20 characters.");
        name.focus();
        return false;
    }

    // window.alert( !phone_no.value.match(phoneno));

    if( !phone_no.value.match(phoneno)) {
        window.alert("Please enter correct phone number.");
        phone_no.focus();
        return false;
    }
    if(email.value.length > 30){
        window.alert("enter email less than 30 characters.");
        email.value.length;
        return false;
    }
    if(address.value.length > 250){
        window.alert("enter address less than 250 characters.");
        address.focus();
        return false;
    }

    window.alert("Form submitted successfully!\nPress OK.");
    return true;
}
