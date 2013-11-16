var login = prompt("Have you login?");

if (login == "admin") {
		var i = 0;
	do {
		var pass = prompt("It's right login. Please input your pass:");
	

		if (pass == "111"){
			alert("It is top secret material!"); break;
		}
		else {alert("Wrong pass"); i++;}
	}
	while (i<5);
	alert("Authorization rejected. Sorry!");
}
else {alert("Wrong login");}