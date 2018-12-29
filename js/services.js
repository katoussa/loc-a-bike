var services = {
    getData: function(url) {
        var thisData = new Promise(function(resolve, reject) {
            $.get(url, function(dataPromise) {
                if (dataPromise) {
                    return resolve(dataPromise);
                }else {
                    return reject(err)
                }
            })
        });
        return thisData;
    },

    getLocalStorage: function(name, firstname, setName, setFirstname){
        currentName = localStorage.getItem(setName);
        currentFirstname = localStorage.getItem(setFirstname);
        if(form.name in sessionStorage){
            console.log("localStorage nom = " + currentName);
            return currentName;
        };
        if(form.firstname in sessionStorage){
            console.log("localStorage prénom = " + currentFirstname);
            return currentFirstname;
        };
    }
};
