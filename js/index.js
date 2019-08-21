function send (event) {

  event.preventDefault();
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var age = parseInt(document.getElementById("age").value);
  var phone = parseInt(document.getElementById("phone").value);
  var address = document.getElementById("address").value;
  var errors = [];

  if (name.split(" ").length < 2) {
    errors.push("Favor preencher o nome e sobrenome");
  }
  if (email=="") {
    errors.push("Favor informar o e-mail");
  }
  if (isNaN(age)) {
    errors.push("Campo idade obrigatório");
  } else {
    if (age < 18){
    errors.push("Permitido somente maiores de 18 anos");
    }
  }
  if (phone=="" ) {
    errors.push("Campo telefone obrigatório");
  } else {
    if (isNaN(phone)){
    errors.push("Favor informar somente numeros")
    }
  }
  if (address=="") {
    errors.push("Campo endereço obrigatório");
  }
  if (errors.length>0) {
    result.innerHTML = errors.join("</br>");
  }
  else {
    result.innerHTML = (name + ", parabéns! seus dados foram preenchidos com sucesso.");
    clear();
  }
}

function clear (){
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  parseInt(document.getElementById("age").value) = "";
  parseInt(document.getElementById("phone").value) = "";
  document.getElementById("address").value = "";
}

function updateCities(event) {
  event.preventDefault();
  var state = document.getElementById("state").value;

  var citiesRS = ['Erechim', 'Passo Fundo', 'Gaurama', 'Barão de Cotegipe', 'Sapucaia do Sul'];
    citiesRS = citiesRS.sort();
  var citiesSC = ['Chapecó', 'Blumenau', 'Florianópolis'];
    citiesSC = citiesSC.sort();
  var citiesSP = ['São Paulo', 'Barretos', 'Sorocaba', 'Cajamar'];
    citiesSP = citiesSP.sort();

  var cities = document.getElementById("cities");

  if(state === "RS"){
    var result = "";
      for( var i = 0; i < citiesRS.length; i++) {
          result+= "<option>" + citiesRS[i] + "</option>";
      }   cities.innerHTML = result;
  }
  if(state === "SC"){
    var result = "";
      for( var i = 0; i < citiesSC.length; i++) {
          result+= "<option>" + citiesSC[i] + "</option>";
      }   cities.innerHTML = result;
  }
  if(state === "SP"){
    var result = "";
      for( var i = 0; i < citiesSP.length; i++) {
          result+= "<option>" + citiesSP[i] + "</option>";
      }   cities.innerHTML = result;
  }
}
