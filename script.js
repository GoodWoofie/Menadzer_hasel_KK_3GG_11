function save() {
var login = document.getElementById("login").value;
var password = document.getElementById("passwd").value;
var site = document.getElementById("site").value;
var data = [login, password, site];
localStorage.setItem('data', JSON.stringify(data));
}