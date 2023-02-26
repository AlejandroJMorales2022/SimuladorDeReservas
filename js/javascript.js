//Variables de Js que definen el perfil de color del proyecto (paleta de colores)
let rootElement = document.documentElement;
let colorCuerpo = "#c7b69f";
let colorFuenteCuerpo="#69503c";
let colorPie="#ab9680";
let colorComponente="#c9beb0";
let colorComponenteInvertido="rgb(65, 62, 62)";
let colorFuenteInvertido="rgb(250, 241, 241)";

rootElement.style.setProperty("--colorCuerpo",colorCuerpo);
rootElement.style.setProperty("--colorFuenteCuerpo",colorFuenteCuerpo);
rootElement.style.setProperty("--colorPie",colorPie);
rootElement.style.setProperty("--colorComponente",colorComponente);
rootElement.style.setProperty("--colorComponenteInvertido",colorComponenteInvertido);
rootElement.style.setProperty("--colorFuenteInvertido",colorFuenteInvertido );





//*************** Inicio Simulador de Reservas *****************
//Variables Globales
let huespedes =0;
let minHuespedes=1000;
let maxHuespedes=0;
let promHuespedes=0;
let totHuespedes=0;
let totalEstadia=0;
let cantReservas=0;
let maxEstadia=0;
let promEstadia=0;
let totalFacturado=0;
let=promFacturado=0;
let costo=0;
let fechaIn="00/00/0000";
let fechaOut="00/00/0000";
let estadia;

//FUNCIONES ***********************************

//Calculo de huespedes promedio
function calculoHuespedes(){
  return promHuespedes= totHuespedes/cantReservas;
    
}
//calculo del promedio de noches de pernocte
function calculoEstadia(){
   return promEstadia = totalEstadia/cantReservas;
    
 }
 //Calcula valor promedio facturado por reserva
 function calculoPromedioFacturacion(){
   return promFacturado = totalFacturado/totalEstadia;
 }
//Funcion que solicita el ingreso de Fecha de Ingreso y Egreso
const ingresarFecha=(queFecha)=>{
    let fecha1;
    let fechaSplited;
    let mes,dia,anio;
    if(queFecha==="fechaIn"){
        fecha1=prompt("Ingrese la Fecha de Ingreso al Alojamiento");
        fechaSplited=fecha1.split("/");
        dia=fechaSplited[0];
        mes=fechaSplited[1];
        anio=fechaSplited[2];
        fechaIn= new Date(+fechaSplited[2],fechaSplited[1]-1, +fechaSplited[0]);
    }else if(queFecha==="fechaOut"){
        fecha1=prompt("Ingrese la Fecha de Egreso del Alojamiento");
        fechaSplited=fecha1.split("/");
        dia=fechaSplited[0];
        mes=fechaSplited[1];
        anio=fechaSplited[2];
        fechaOut= new Date(+fechaSplited[2],fechaSplited[1]-1, +fechaSplited[0]);
    }
    fechaOk=validarFecha(dia,mes,anio);
}
 //Funcion de VALIDACION DE FECHAS
 let validarFecha= (dia,mes,anio) => {
        let diaF=parseInt(dia);
        let mesF=parseInt(mes);
        let anioF=parseInt(anio);

        if(mesF<1 || mesF>12){
            alert("El Mes Ingresado es Incorrecto");
            return false;
        }

        if(mesF==2){
            if (diaF>28 || diaF<=0){
                alert("El Día Ingresado es Incorrecto")
                return false;
            }
        }else if(mesF==1||mesF==3||mesF==5||mesF==7||mesF==8||mesF==10||mesF==12){
            if (diaF>31 || diaF<=0){
                alert("El Día Ingresado es Incorrecto")
                return false;
            }
        }else if(mesF==4||mesF==6||mesF==9||mesF==11){
            if (diaF>30 || diaF<=0){
                alert("El Día Ingresado es Incorrecto")
                return false;
        }
    }
}
//Funcion de Ingreso del NOMBRE DEL TITULAR DE LA RESERVA o Finalizar Carga de Datos
let ingresarNombre=()=>{
   nombre=prompt("Ingrese el Nombre del Titular de la Reserva o 'F' para Finalizar la Carga")
    while(nombre =="" ){
        nombre=prompt("Ingrese el Nombre del Titular de la Reserva o 'F' para Finalizar la Carga")
    }
    return nombre;
}
//Funcion que devuelve el COSTO POR NOCHE de la habitacion, segun la cantidad de pasajeros
const calcularCostos=(pasajeros)=>{
    switch(pasajeros){
        case 1:
            costo=14500;
            return costo;
        case 2:
            costo=16500;
            return costo;
        case 3:
            costo=18500;
            return costo;
        case 4:
            costo=22000;
            return costo;
        case 5:
            costo=25500;
            return costo;
        default: return 0;

    }
}
//Función que Imprime por Consola Detalle de Cada Reserva
const imprimirReserva = ()=>{
    console.log(`******  RESERVA Nro${cantReservas} ******`);
    console.log(`A nombre de: ${nombreHuesped}`);
    console.log(`Cantidad de Huéspedes ${huespedes} Noches`);
    console.log(`Fecha de Ingreso: ${fechaIn}`);
    console.log(`Fecha de Egreso: ${fechaOut}`);
    console.log(`Cantidad de Noches Contratadas: ${estadia}`);
    console.log(`Valor Total de la Reserva: $${estadia*costo}`);
    console.log(`---------------------------------------------`);
}
//Función que imprime Resumen de Ventas de Reservas 
const imprimirTotalesReserva =()=>{
    console.log("");
    console.log("");
    console.log(`---------------------------------------------`);
    console.log(`----------RESUMEN DE VENTAS------------------`);
    console.log(`---------------------------------------------`);
    console.log("******  RESERVAS ******");
    console.log(`Se vendieron en Total: ${cantReservas} Reservas`);
    console.log(`La Estadía Pormedio fue de ${estadiaPromedio} Noches`);
    console.log(`La Estadía Más Larga fue de ${maxEstadia}`);
    console.log("******  FACTURACIÓN ******");
    console.log(`El Total Facturado es de $${totalFacturado}`);
    console.log(`El Promedio Facturado por Noche de Alojamiento es de $${facturacionPromedio.toFixed(2)}`);
    console.log("******  HUÉSPEDES ******");
    console.log(`La Cantidad Total de Huéspedes Alojados fue de ${totHuespedes}`);
    console.log(`Se Alojaron en Promedio ${huespedesPromedio} Pasajeros por Reserva`); 
    console.log(`La Estadía con Más Pasajeros Alojados tuvo ${maxHuespedes} huéspedes`);
    console.log(`La Estadía con Menos Pasajeros Alojados tuvo ${minHuespedes} huéspedes`);

}

//Inicio de Ciclo de Procesamiento de Datos ***************************************
let nombreHuesped=ingresarNombre();//Si se ingresa f o f, Fin de la Carga de Datos.

while ((nombreHuesped != "F") && (nombreHuesped !="f")){
    //Ingreso Cantidad de huespedes a Alojarse
    do{
        huespedes=prompt("Ingrese la Cantidad de Huéspedes por favor (1 a 5 pasajeros):");
        
    }while(huespedes <=0 || /\D/.test(huespedes) || huespedes>5) //Hacer mientras la cantidad de huespedes sea un número y este entre 1 y 5 pasajeros
        
    totHuespedes+=parseInt(huespedes); //totalizador de huespedes

    if (huespedes<minHuespedes){ //verifica si la cantidad de huespedes en menor a la almacenada
        minHuespedes=huespedes;
    }
    if (huespedes>maxHuespedes){//verifica si la cantidad de huespedes en mayor a la ingresada
        maxHuespedes=huespedes;
    }
    //Ingreso de Fecha de checkIn
    do{
        ingresarFecha("fechaIn");
    }while(fechaOk==false)
    //Ingreso de Fecha de checkOut
    do{
        ingresarFecha("fechaOut")
        if(fechaOut<=fechaIn){
            alert("La Fecha de Egreso debe ser Posterior a la de Ingreso")
        }
    }while((fechaOk==false)||(fechaOut<=fechaIn))

    estadia=(fechaOut-fechaIn)/1000/60/60/24;//Los reseultado son en milisegundos, entonces /1000 pasa a segundos, /60 pasa a minutos /60 asa a horas /24 pasa a dias.
    
    totalEstadia+=estadia;//totalizador de noches de alojamiento vendidas
    cantReservas++; //totalizador de Reservas vendidas
    
    if (estadia>maxEstadia){
        maxEstadia=estadia; //actualiza la reserva mas larga, si la acual en mayor que la almacenada
    }
    costo=calcularCostos(parseInt(huespedes));
    totalFacturado+=parseFloat(costo*estadia);
    //Imprimir por consola los Resultados
    imprimirReserva();
    //Ingresar detos de Nueva Reserva
    nombreHuesped=ingresarNombre();
}//Fin Ciclo while

//Llamo Funciones de Calculos
let facturacionPromedio= calculoPromedioFacturacion();
let estadiaPromedio=calculoEstadia();
let huespedesPromedio=calculoHuespedes();
//Imprimir por consola los Resultados
imprimirTotalesReserva();
    
   