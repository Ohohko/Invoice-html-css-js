let price;
let quantity;
let amount;
let prod_name;
let ids;
let tax = 50;

function calculate() {
  ids = document.getElementById("ids").value;
  price = document.getElementById("prc").value;
  quantity = document.getElementById("qty").value;
  amount = price * quantity;
  document.getElementById("amnt").value = amount;

}


function addData() {
  prod_name = document.getElementById("product").value;
  document.getElementById('newtr').innerHTML += '<tr><td>' + ids + '</td><td>' + prod_name + '</td><td>' + price + '</td> <td>' + quantity + '</td><td>' + amount + '</td></tr>'
  document.getElementById("ids").value = "";
  document.getElementById("product").value = "";
  document.getElementById("prc").value = "";
  document.getElementById("qty").value = "";
  document.getElementById("amnt").value = "";
  document.getElementById("subtotal-amount").innerHTML = price * quantity;
  document.getElementById("total-amount").innerHTML = price * quantity;
  document.getElementById("total").innerHTML = price * quantity;
}