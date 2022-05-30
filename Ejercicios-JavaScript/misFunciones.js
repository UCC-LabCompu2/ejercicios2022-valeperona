/**
 * Descripción
 * @method Nombre de la función
 * @param Parámetro A
 * @param Parámetro B
 * @return Valor que retorna
 */
function cambiarUnidades(id, value){
    if(isNaN(valor)){
        alert("Se ingresó un valor inválido.");
        document.lasUnidades.unid_metro.value="";
        document.lasUnidades.unid_pulgada.value="";
        document.lasUnidades.unid_pie.value=" ";
        document.lasUnidades.unid_yarda.value="";
    }else if (id=="metro"){
        document.lasUnidades.unid_pulgada.value=39.3701*valor;
        document.lasUnidades.unid_pie.value=3.28084*valor;
        document.lasUnidades.unid_yarda.value=1.09361*value;
    }else if(id=="pulgada"){
        document.lasUnidades.unid_metro.value=0.0254*valor;
        document.lasUnidades.unid_pie.value=0.0833*valor;
        document.lasUnidades.unid_yarda.value=0.278*value;
    }else if(id=="yarda"){
        document.lasUnidades.unid_pulgada.value=36*valor;
        document.lasUnidades.unid_pie.value=3*valor;
        document.lasUnidades.unid_metro.value=0.914*value;
    }else if (id=="pie"){
        document.lasUnidades.unid_pulgada.value=12*valor;
        document.lasUnidades.unid_metro.value=0.305*valor;
        document.lasUnidades.unid_yarda.value=0.333*value;
    }
}