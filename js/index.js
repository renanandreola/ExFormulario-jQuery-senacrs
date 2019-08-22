$(document).ready(function() {

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

  //$('#cep').keyup(function() {
  //var cep = $('#cep').value;
  //$.getJSON("https://viacep.com.br/ws/"+ cep +"/json/?callback=?", function(dados) {
    //console.info(dados);
    //console.info(dados.logradouro);
  //});

   function limpa_formulário_cep() {
       // Limpa valores do formulário de cep.
       $("#address").val("");
       $("#neighborhood").val("");
       $("#city").val("");
       $("#uf").val("");
       $("#complement").val("");
   }

   //Quando o campo cep perde o foco.
   $("#cep").keyup(function() {

       //Nova variável "cep" somente com dígitos.
       var cep = $(this).val().replace(/\D/g, '');

       //Verifica se campo cep possui valor informado.
       if (cep != "") {

           //Expressão regular para validar o CEP.
           var validacep = /^[0-9]{8}$/;

           //Valida o formato do CEP.
           if(validacep.test(cep)) {

               //Preenche os campos com "..." enquanto consulta webservice.
               $("#address").val("...");
               $("#neighborhood").val("...");
               $("#city").val("...");
               $("#uf").val("...");
               $("#complement").val("...");

               //Consulta o webservice viacep.com.br/
               $.getJSON("https://viacep.com.br/ws/"+ cep +"/json/?callback=?", function(dados) {

                   if (!("erro" in dados)) {
                       //Atualiza os campos com os valores da consulta.
                       $("#address").val(dados.logradouro);
                       $("#neighborhood").val(dados.bairro);
                       $("#city").val(dados.localidade);
                       $("#uf").val(dados.uf);
                       $("#complement").val(dados.complemento);
                   } //end if.
                   else {
                       //CEP pesquisado não foi encontrado.
                       limpa_formulário_cep();
                       alert("CEP não encontrado.");
                   }
               });
           } //end if.
           else {
               //cep é inválido.
               limpa_formulário_cep();
               alert("Formato de CEP inválido.");
           }
       } //end if.
       else {
           //cep sem valor, limpa formulário.
           limpa_formulário_cep();
       }
   });
});
