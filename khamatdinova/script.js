var login = prompt("Have you login?");

if (login == "admin") {
	var pass = prompt("It's right login. Please input your pass:");
	if (pass == "111"){
		alert("It is top secret material!");
		}
	else {alert("Wrong pass");}
}
else {alert("Wrong login");}