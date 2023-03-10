// Criar um script que calcula o IMC da pessoa, verifica antes se os dados de entrada
// são válidos e exibe uma mensagem de erro caso não sejam.

// Função de validação de entrada da altura - Recebe o dado do input altura,
// verifica se é número , se for retorna true senão false.

// Função de validação de entrada do Peso - Recebe o dado do input peso,
// verifica se é número , se for retorna true senão false.

// Função IMC - Recebe Altura e Peso e retorna IMC

// Função Nível IMC - Pega o retorno do IMC e retorna o nível IMC
// no Resultado

// Função final - Faz a chamadas das Funções e retorna o IMC com a descrição

function _valida_Altura() {
  const _h4 = document.getElementById("_resultado")
  const _result = document.querySelector("#_resultado") // _result aponta para #_resultado no HTML
  const _input_Altura = document.querySelector("#_altura") // _input_ALtura aponra  para #_altura no HTML
  const altura = _input_Altura.value // altura recebe o conteudo de _input_Altura
  let isOk = true
  if (isNaN(altura) || altura === "") {
    _h4.style.backgroundColor = "rgb(130,63,50,0.5)"
    return (_result.innerHTML = "Altura Inválida")
  } else if (altura < 0.3) {
    _h4.style.backgroundColor = "rgb(130,63,50,0.5)"
    _result.innerHTML = `Altura Minima 0.3 mts`
  } else if (altura > 2.5) {
    _h4.style.backgroundColor = "rgb(130,63,50,0.5)"
    _result.innerHTML = `Altura Maxima 2.5 mts`
  } else {
    _h4.style.backgroundColor = "rgb(121, 162, 162)"

    return altura //  Se for numero retorna numero senao a msg de erro
  }
}
function _valida_Peso() {
  const _h3 = document.getElementById("_resultado")
  const _result = document.querySelector("#_resultado")
  const _input_Peso = document.querySelector("#_peso")
  const peso = _input_Peso.value

  if (isNaN(peso) || peso === "") {
    _h3.style.backgroundColor = "rgb(130,63,50,0.5)"
    return (_result.innerHTML = "Peso Inválido")
  } else if (peso < 10) {
    _h3.style.backgroundColor = "rgb(130,63,50,0.5)"
    _result.innerHTML = `Peso Minimo 10kg`
  } else if (peso > 300) {
    const _res = document.querySelector("#_resultado")
    _h3.style.backgroundColor = "rgb(130,63,50,0.5)"
    _result.innerHTML = `Peso Máximo 300kg`
  } else {
    // _h3.style.backgroundColor = "rgb(77, 73, 71)" - se
    // colocar esse atualiza a cor e tira o erro do input altura
    // pois é checado depois

    return peso
  }
}

//********* Função que retorna IMC ***********/

function _formula_IMC(altura, peso) {
  const _IMC = peso / Math.pow(altura, 2)
  console.log(_IMC)
  return _IMC
}

//********* Função que retorna categoria do IMC ***********/

function _Categoria_IMC() {
  const _IMC = _formula_IMC(_valida_Altura(), _valida_Peso())

  let _level = ["Abaixo do Peso", " com Peso Normal", " com Obesidade Moderada", " com Obesidade nível I", " com Obesidade nível II", " com Obesidade Nível III"]

  if (_IMC > 39.9) return _level[5]
  if (_IMC >= 34.9) return _level[4]
  if (_IMC >= 29.9) return _level[3]
  if (_IMC >= 24.9) return _level[2]
  if (_IMC >= 18.5) return _level[1]
  if (_IMC < 18.5) return _level[0]
}

// **************  Função que envia o resultado ***************************

function _result() {
  const _Altura = _valida_Altura()
  const _Peso = _valida_Peso()

  const _res_IMC = _formula_IMC(_valida_Altura(), _valida_Peso()).toFixed(2)

  if (isNaN(_Altura) || isNaN(_Peso)) {
  } else {
    const _res = document.querySelector("#_resultado")
    _res.innerHTML = `Seu IMC é ${_res_IMC} e você está ${_Categoria_IMC()}`
  }
}

// ******** Esta é a chamada final do botão **********//

function _calcula_IMC() {
  _valida_Altura()
  _valida_Peso()
  _result()
}

// **************************************************//

function _limpa_Forms() {
  
  const _input_Altura = document.querySelector("#_altura")
  const _input_Peso = document.querySelector("#_peso")
  const _result = document.querySelector("#_resultado")

  _input_Peso.value = ""
  _input_Altura.value = ""
  _result.innerHTML = ""
  _result.style.padding = '0px'
}
