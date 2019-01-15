var form = {
    init: function(name, firstname, button, messError1, messError2, setName, setFirstame, signature){
        form.name = name;
        form.firstname = firstname;
        form.button = button;
        form.messError1 = messError1;
        form.messError2 = messError2;
        form.setName = setName;
        form.setFirstame = setFirstame;
        form.signature = signature;

        
        form.signature.className = "signature";
        services.getStorageName();
        services.getStorageFirstname();
        form.checkForm();
        form.btnActive();
        form.validForm(form.signature);
    },

    checkForm: function(){
        if(form.name.value.length < 3){
            messError1.className = "messError1v";
        }else{
            messError1.className = "messError1";
        };
        if(form.firstname.value.length < 3){
            messError2.className = "messError2v";
        }else{
            messError2.className = "messError2";
        };

        if(form.name.value.length < 3 || form.firstname.value.length < 3){
            form.button.disabled = true;
        }else if(form.name.value.length > 2 && form.firstname.value.length > 3){
            form.button.disabled = false;
        };
    },

    btnActive: function(){
        form.name.addEventListener("input", form.checkForm.bind(form));
        form.firstname.addEventListener("input", form.checkForm.bind(form));
    },

    validForm: function(signature){
        form.button.addEventListener("click", function(){
            if(form.regName === false || form.regFirstname === false){
                form.signature.className = "signature";
            }else{
                if(typeof sessionStorage!='undefined') {
                    localStorage.setItem("form.setName", form.name.value);
                    localStorage.setItem("form.setFirstname", form.firstname.value);
                  }else {
                    alert("sessionStorage n'est pas supporté");
                  };
                form.signature.className = "signatureVisible";
            };
            sign.noDraw();
        });
    }
};