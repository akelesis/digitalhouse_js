var textoLivro = document.getElementsByClassName('overlay');
var textoNome = document.getElementById('search_bar');
var divLivro = document.getElementsByClassName('card');
var categoria = document.getElementById('category');
var preco = document.getElementById('price_range');

function pesquisaNome(){
   
    if( textoNome.value == null && preco.value == "" && categoria.value == "" ){
        window.alert("Preencha todos os campos para a pesquisa.")
    }
    
    else{
//--------------------------------------------------Bloco 01 ----------------------------------------
        if( textoNome.value != null && preco.value != "" && categoria.value != "" ){
            for(var i = 0; i < textoLivro.length; i++){
                if(textoLivro[i].textContent.toUpperCase().match(texto.toUpperCase())){
                        if(textoLivro[i].textContent.match("CATEGORIA:"+categoria.value)){
                            if(textoLivro[i].textContent.match("PREÇO:"+preco.value)){
                                divLivro[i].style.display = "block";
                            }
                            else{  divLivro[i].style.display = "none"; }
                        }  
                        else{  divLivro[i].style.display = "none"; }        
                    }
                    else{  divLivro[i].style.display = "none"; }
                 }}
 //--------------------------------------------------Bloco 02 ----------------------------------------
               
        if( textoNome.value != null && categoria.value != "" ){
            for(var i = 0; i < textoLivro.length; i++){
                if(textoLivro[i].textContent.toUpperCase().match(texto.toUpperCase())){
                            buscarCategoria(categoria.value);                 
                            }}}
 //--------------------------------------------------Bloco 03 ----------------------------------------              
         if( textoNome.value != null && preco.value != "" ){
                    for(var i = 0; i < textoLivro.length; i++){
                        if(textoLivro[i].textContent.toUpperCase().match(texto.toUpperCase())){
                                    buscarPreco(preco.value);
                                                             
                                }}}
//--------------------------------------------------Bloco 04 ----------------------------------------   
          if( textoNome.value != null ){
                buscarTexto(textoNome.value);
        }

//--------------------------------------------------Bloco 05 ----------------------------------------  
           if( preco.value != "" ){
                    buscarPreco(preco.value);
               }
//--------------------------------------------------Bloco 06 ----------------------------------------  
          if( categoria.value != "" ){
                buscarCategoria(categoria.value);
          }
                                        
   }
} 

function buscarTexto(texto){
    for(var i = 0; i < textoLivro.length; i++){
        if(textoLivro[i].textContent.toUpperCase().match(texto.toUpperCase())){
             divLivro[i].style.display = "block";
                        }  
       else{  divLivro[i].style.display = "none"; }                       
                }
}
function buscarCategoria(categoria){
    for(var i = 0; i < textoLivro.length; i++){                                  
        if(textoLivro[i].textContent.match("CATEGORIA:"+categoria)){     
              divLivro[i].style.display = "block";
                                        }  
        else{  divLivro[i].style.display = "none"; }
  } 

}

function buscarPreco(preco){
    for(var i = 0; i < textoLivro.length; i++){        
        var text = removeTexto(textoLivro[i].textContent);   
        var doub = passarParaDouble(text);        
              if(preco == "barato" && doub >= 1 && doub <= 20){     
                          divLivro[i].style.display = "block";
                                }
            else if(preco == "medio" && doub >= 21 && doub <= 40){     
                          divLivro[i].style.display = "block";
                                }  
           else  if(preco == "caro" && doub >= 41 && doub <= 60){     
                 divLivro[i].style.display = "block";
                                          }
            else  if(preco == "mais caro" &&  doub > 61){     
                                            divLivro[i].style.display = "block";
              }
           else{  divLivro[i].style.display = "none"; }          
   }
}

function mostrarTodosLivros(livros){
    for(var i = 0; i < livros.length; i++){
        if(livros[i].textContent.match("")){
             divLivro[i].style.display = "block";
                        }  
       else{  divLivro[i].style.display = "none"; }                       
                }
}
//----------------------------------------------funções diversas-----------------------------------------
     function verPreco(preco){
        var val = 0;
        if(preco == "barato"){
            return val = 20;
        }
        else if(preco =="medio"){
            return val = 40;
        }
        else if( preco == "caro"){
            return val = 60;
        }
        else if( preco == "mais caro"){
            return val = 61;
        }
     }

     function removeTexto(texto){
         var mud = texto.replace(/\D+/g, "");
         return mud;
     }

     function passarParaDouble(texto){
         var doub = texto / 100;
         return doub;
     }

     function limpar(){
         textoNome.value = null;
         preco.value = "";
         categoria.value = "";
         mostrarTodosLivros(textoLivro);
     }