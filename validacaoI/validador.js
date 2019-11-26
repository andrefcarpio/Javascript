/**
 * Validação Simples 
 * Exemplo de uso das funçoes do array
 * @author André Carpio
 */

 function validacao(){
     //o metodo abaixo é uzada para capturar dados de formularios diversos
     let formulario = document.forms.frmCadastro
     let nome = formulario.txtNome.value
     let cpf = formulario.txtCpf.value
     let sexo = formulario.sexo.value
     let perfil = formulario.txtPerfil.value
     let erro = false
     
     if (nome.indexOf(' ') === -1){
         alert(" Preencha seu nome completo")
         erro = true
     }

     if (cpf.length != 11){
        alert("Cpf Inválido")
        erro = true
    }

    if (perfil.length < 20){
        alert("Quantidade mínima de caracteres : 20")
        erro = true
    }

    if (erro === true){
        return false
    }else{
        return true
    }




 }