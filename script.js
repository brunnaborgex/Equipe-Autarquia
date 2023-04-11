

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
  function validarNome() {
    const inputField = document.getElementById("name");
    const regex = /^[A-Za-zÀ-ú ]+$/;
    const inputValue = inputField.value;
    
    if (!regex.test(inputValue)) {
      const newValue = inputValue.replace(/[^A-Za-zÀ-ú ]/g, '');
      inputField.value = newValue;
    }
  }
  
  function validarNacionalidade() {
    const inputField = document.getElementById("nacionalidade");
    const regex = /^[A-Za-zÀ-ú ]+$/;
    const inputValue = inputField.value;
    
    if (!regex.test(inputValue)) {
      const newValue = inputValue.replace(/[^A-Za-zÀ-ú ]/g, '');
      inputField.value = newValue;
    }
  }
  
  function validarCidade() {
    const inputField = document.getElementById("cidade");
    const regex = /^[A-Za-zÀ-ú ]+$/;
    const inputValue = inputField.value;
    
    if (!regex.test(inputValue)) {
      const newValue = inputValue.replace(/[^A-Za-zÀ-ú ]/g, '');
      inputField.value = newValue;
    }
  }
  
  function validarEstado() {
    const inputField = document.getElementById("estado");
    const regex = /^[A-Za-zÀ-ú ]+$/;
    const inputValue = inputField.value;
    
    if (!regex.test(inputValue)) {
      const newValue = inputValue.replace(/[^A-Za-zÀ-ú ]/g, '');
      inputField.value = newValue;
    }
  }
  
  function validarCep() {
    const inputField = document.getElementById("cep");
    const regex = /^[0-9]+$/;
    const inputValue = inputField.value;
    
    if (!regex.test(inputValue)) {
      const newValue = inputValue.replace(/[^0-9]/g, '');
      inputField.value = newValue;
    }
  }
  
  function validarTelefone() {
    const inputField = document.getElementById("telefone");
    const regex = /^[0-9]+$/;
    const inputValue = inputField.value;
    
    if (!regex.test(inputValue)) {
      const newValue = inputValue.replace(/[^0-9]/g, '');
      inputField.value = newValue;
    }
  }
  
  function validarTecnica() {
    const inputField = document.getElementById("tecnica");
    const regex = /^[A-Za-zÀ-ú ]+$/;
    const inputValue = inputField.value;
    
    if (!regex.test(inputValue)) {
      const newValue = inputValue.replace(/[^A-Za-zÀ-ú ]/g, '');
      inputField.value = newValue;
    }
  }
  
  function validarTecnica2() {
    const inputField = document.getElementById("tecnica2");
    const regex = /^[A-Za-zÀ-ú ]+$/;
    const inputValue = inputField.value;
    
    if (!regex.test(inputValue)) {
      const newValue = inputValue.replace(/[^A-Za-zÀ-ú ]/g, '');
      inputField.value = newValue;
    }
  }
  
  function validarSalario() {
    const inputField = document.getElementById("salario");
    const regex = /^[0-9]+$/;
    const inputValue = inputField.value;
    
    if (!regex.test(inputValue)) {
      const newValue = inputValue.replace(/[^0-9]/g, '');
      inputField.value = newValue;
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
  