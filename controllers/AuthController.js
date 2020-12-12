exports.authRegister = (req, res) => {
    
    const {firstName, lastName, email, password} = req.body;
    console.log(firstName, lastName, email, password)
    //TODO1: validate the fields
    //TODO2: check already registered
    //TODO3: crpyt password
    //TODO4: save the user DB
    

    res.send("Register Completed")
}

exports.authLogin = (req, res) => {
    //TODO Auth.
    //TODO Login func
    res.send("Login completed")
}