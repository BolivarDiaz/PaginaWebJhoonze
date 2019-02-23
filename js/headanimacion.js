window.addEventListener('load', calculos, false);
function calculos() {
.........................
var izquierda=10;
    var para=200;
    var tiempo=0;
    function Asigna(id,propi,valor){
      if(document.layers)
        eval('document.'+id+'.'+propi+'='+valor);
      if(document.all)
        eval(id+'.style.'+propi+'='+valor);
      if(!document.all&&document.getElementById)
        eval('document.getElementById("'+id+'").style.'+propi+'='+valor);
    }
    function mueve(){
      izquierda+=5;
      Asigna('capa','left',izquierda);
      if(izquierda<para) setTimeout("mueve();",tiempo)
    }



}