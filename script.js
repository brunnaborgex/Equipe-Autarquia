function showPossessDetails() {
    var possessDetails = document.getElementById("possess-details");
    var possessYes = document.getElementsByName("possess")[1];
    var possessNo = document.getElementsByName("possess")[0];
    var submitButton = document.getElementById("submit-button");
    if (possessYes.checked) {
      possessDetails.style.display = "block";
      //possessNo.disabled = true;
      submitButton.disabled = false;
    } else {
      possessDetails.style.display = "none";
      possessNo.disabled = false;
      submitButton.disabled = true;
    }
  }
  
  function enableSubmitButton() {
    var submitButton = document.getElementById("submit-button");
    submitButton.disabled = false;
  }
  
  
  function showPossuiDetails() {
    var possuiDetails = document.getElementById("possui-details");
    var possuiYes = document.getElementsByName("possui")[1];
    var possuiNo = document.getElementsByName("possui")[0];
    var submitButton = document.getElementById("submit-button");
    if (possuiNo.checked) {
      possuiDetails.style.display = "block";
      //possessNo.disabled = true;
      submitButton.disabled = false;
    } else {
      possuiDetails.style.display = "none";
      possuiNo.disabled = false;
      submitButton.disabled = true;
    }
  }
  
  function enableSubmitButton() {
    var submitButton = document.getElementById("submit-button");
    submitButton.disabled = false;
  }
  
  //Nome
  function validarNome() {
    let campoNome = document.getElementById("name");
    let mensagem = document.getElementById("mensagem");
  
    if (campoNome.checkValidity() == false) {
      mensagem.innerHTML = "Por favor, insira uma informação válida no campo nome completo, apenas são permitidos caracteres de A a Z, maiúsculos ou minúsculos, incluindo acentos e espaços.";
      mensagem.style.color = "red";
    } else {
      mensagem.innerHTML = "";
    }
  }
  //data de nascimento:
  function validaDataNascimento(data) {
    // Expressão regular para validar a data de nascimento no formato dd/mm/yyyy
    const regexData = /^(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|1[0-2])\/((19|20)\d{2})$/;
  
    // Verifica se a data passada como parâmetro está no formato correto
    if (!regexData.test(data)) {
      return false;
    }
  
    // Verifica se a data é uma data válida
    const partesData = data.split('/');
    const dia = parseInt(partesData[0]);
    const mes = parseInt(partesData[1]);
    const ano = parseInt(partesData[2]);
  
    const dataValida = new Date(ano, mes - 1, dia);
  
    if (dataValida.getFullYear() !== ano ||
      dataValida.getMonth() + 1 !== mes ||
      dataValida.getDate() !== dia) {
      return false;
    }
  
    // Se a data passou nas validações, retorna true
    return true;
  }
  console.log(validaDataNascimento('01/01/2000')); // true
  console.log(validaDataNascimento('30/02/2000')); // false (fevereiro não tem 30 dias)
  console.log(validaDataNascimento('31/04/2000')); // false (abril não tem 31 dias)
  console.log(validaDataNascimento('01/13/2000')); // false (mês inválido)
  
  //telefone
  function validarTELEFONE() {
    let campoTELEFONE = document.getElementById("telefone");
    let mensagem = document.getElementById("mensagem");
  
    if (campoTELEFONE.checkValidity() == false) {
      mensagem.innerHTML = "Por favor, insira um telefone válido, apenas números são aceitos.";
      mensagem.style.color = "red";
    } else {
      mensagem.innerHTML = "";
    }
  }
  
  
  //nacionalidade
  function validarNacionalidade() {
    let campoNacionalidade = document.getElementById("nacionalidade");
    let mensagem = document.getElementById("mensagem");
  
    if (campoNacionalidade.checkValidity() == false) {
      mensagem.innerHTML = "Por favor, insira uma nacionalidade válida, apenas são permitidos caracteres de A a Z, maiúsculos ou minúsculos, incluindo acentos e espaços.";
      mensagem.style.color = "red";
    } else {
      mensagem.innerHTML = "";
    }
  }
  
  //endereço
  function validarEndereco() {
    let campoEndereco = document.getElementById("endereco");
    let mensagem = document.getElementById("mensagem");
  
    if (campoEndereco.checkValidity() == false) {
      mensagem.innerHTML = "Por favor, insira um endereço válido";
      mensagem.style.color = "red";
    } else {
      mensagem.innerHTML = "";
    }
  }
  
  //cidade
  function validarCidade() {
    let campoCidade = document.getElementById("cidade");
    let mensagem = document.getElementById("mensagem");
  
    if (campoCidade.checkValidity() == false) {
      mensagem.innerHTML = "Por favor, insira uma cidade válida, apenas são permitidos caracteres de A a Z, maiúsculos ou minúsculos, incluindo acentos e espaços.";
      mensagem.style.color = "red";
    } else {
      mensagem.innerHTML = "";
    }
  }
  
  //estado
  function validarEstado() {
    let campoEstado = document.getElementById("estado");
    let mensagem = document.getElementById("mensagem");
  
    if (campoEstado.checkValidity() == false) {
      mensagem.innerHTML = "Por favor, insira uma estado válido, apenas são permitidos caracteres de A a Z, maiúsculos ou minúsculos, incluindo acentos e espaços.";
      mensagem.style.color = "red";
    } else {
      mensagem.innerHTML = "";
    }
  }
  
  
  
  //CEP
  function validarCEP() {
    let campoCEP = document.getElementById("cep");
    let mensagem = document.getElementById("mensagem");
  
    if (campoCEP.checkValidity() == false) {
      mensagem.innerHTML = "Por favor, insira um CEP válido";
      mensagem.style.color = "red";
    } else {
      mensagem.innerHTML = "";
    }
  }
  
  //CEP
  function validarCEP() {
    let campoCEP = document.getElementById("cep");
    let mensagem = document.getElementById("mensagem");
  
    if (campoCEP.checkValidity() == false) {
      mensagem.innerHTML = "Por favor, insira um CEP válido, apenas números são aceitos.";
      mensagem.style.color = "red";
    } else {
      mensagem.innerHTML = "";
    }
  }
  
  //Habilidades técnicas
  function validarHABILIDADE() {
    let campoHABILIDADE = document.getElementById("tecnica");
    let mensagem = document.getElementById("mensagem");
  
    if (campoHABILIDADE.checkValidity() == false) {
      mensagem.innerHTML = "Por favor, insira uma habilidade técnica válida, apenas são permitidos caracteres de A a Z, maiúsculos ou minúsculos, incluindo acentos e espaços.";
      mensagem.style.color = "red";
    } else {
      mensagem.innerHTML = "";
    }
  }
  
  //Habilidades comportamentais
  function validarHABILIDADEcomportamental() {
    let campoHABILIDADEc = document.getElementById("tecnica2");
    let mensagem = document.getElementById("mensagem");
  
    if (campoHABILIDADEc.checkValidity() == false) {
      mensagem.innerHTML = "Por favor, insira uma habilidade comportamental válida, apenas são permitidos caracteres de A a Z, maiúsculos ou minúsculos, incluindo acentos e espaços.";
      mensagem.style.color = "red";
    } else {
      mensagem.innerHTML = "";
    }
  }
  
  //Salário
  function validarSALARIO() {
    let campoSALARIO = document.getElementById("salario");
    let mensagem = document.getElementById("mensagem");
  
    if (campoHABILIDADEc.checkValidity() == false) {
      mensagem.innerHTML = "Por favor, insira um salário válido, apenas números são aceitos.";
      mensagem.style.color = "red";
    } else {
      mensagem.innerHTML = "";
    }
  }
  //Disponibilidade:
  function validaDisponibilidade(disponibilidade) {
    // Expressão regular para validar a disponiblidade no formato dd/mm/yyyy
    const regexDisponibilidade = /^(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|1[0-2])\/((19|20)\d{2})$/;
  
    // Verifica se a data passada como parâmetro está no formato correto
    if (!regexDisponibilidade.test(disponibilidade)) {
      return false;
    }
  
    // Verifica se a data é uma data válida
    const partesDisponibilidade = disponibilidade.split('/');
    const dia = parseInt(partesDisponibilidade[0]);
    const mes = parseInt(partesDisponibilidade[1]);
    const ano = parseInt(partesDisponibilidade[2]);
  
    const disponibilidadeValida = new Date(ano, mes - 1, dia);
  
    if (disponibilidadeValida.getFullYear() !== ano ||
      disponibilidadeValida.getMonth() + 1 !== mes ||
      disponibilidadeValida.getDate() !== dia) {
      return false;
    }
  }