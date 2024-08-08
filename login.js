function regvalid() {
    let namer = document.getElementById("namer").value;
    let passwordr = document.getElementById("passwordr").value;
    if(namer=='' || passwordr=='')
        {
            window.alert("Enter name or password");
        }
        else{
    localStorage.setItem("name", namer);
    localStorage.setItem("password", passwordr);
    window.location.href = "index.html";
        }
}
function loginvalid()
{
    let nam=document.getElementById("nam").value;
    let pass=document.getElementById("pass").value;
    if(nam=='' || pass=='')
        {
            window.alert("Enter name or password");
        }
        else{
            if(localStorage.getItem("name")==nam && localStorage.getItem("password")==pass)
                {
                    window.location.href = "home.html";
                }
                else{
                    window.alert("incorrect name or password");
                }
        }
}