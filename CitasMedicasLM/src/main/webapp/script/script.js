class citaMedica{
	//Constructor
	constructor(idCita,idPaciente,nombre_paciente,apellidos_paciente,centro_medico,consulta,nombre_Medico,fechaCita){
	this.idCita=idCita;
	this.idPaciente=idPaciente;
	this.nombre_paciente=nombre_paciente;
	this.apellidos_paciente=apellidos_paciente;
	this.centro_medico=centro_medico;
	this.consulta=consulta;
	this.nombre_Medico=nombre_Medico;
	this.fechaCita=fechaCita;
	}
}

class interfazCitaMedica{

	static pedirCita(bd){
		//Pedimos los valores
		var idCita=Number(InterfazID.calculaid(bd));
		var idPaciente =Number(prompt("Introduzca su identificador de seguridad social:"));
		var nombre =prompt("Introduzca su nombre:");
		var apellidos =prompt("Introduzca sus apellidos:")
		//---------------------------------------------------------
		//Al no haber base de datos creo datos ficticios depedinedo del numero del paciente
		var centro;
		var consulta;
		var nombreMedico;
		if(idPaciente<3000&&idPaciente>2000)
		{
		centro="Retiro";
		consulta=3;
		nombreMedico="Marta Sanchez"
		}
		if(idPaciente<2000&&idPaciente>1000)
		{
		centro="Macarena";
		consulta=8;
		nombreMedico="Carlos Hernandez"
		}
		if(idPaciente<1000)
		{
		centro="Triana";
		consulta=6;
		nombreMedico="Pablo Fernandez"
		}
		else
		{
		centro="Fatima";
		consulta=4;
		nombreMedico="Marco Perez"	
		}
		//---------------------------------------------------------
		var hora =Number(prompt("Introduzca la hora de la cita:"));
		var diaCita =Number(prompt("Introduzca el dia de la cita:"));
		var mesCita =Number(prompt("Introduzca el mes de la cita:"));
		var anyoCita =Number(prompt("Introduzca el anyo de la cita:"));
		//Comprabamos que haya metido la fecha correctamente 
		var fechaCita = InterfazFecha.calculaFecha(anyoCita,mesCita,diaCita,hora);
		//Creamos la cita
		var cita= new citaMedica(idCita,idPaciente,nombre,apellidos,centro,consulta,nombreMedico,fechaCita);
		//Metemos la cita en la base de datos
		bd.push(cita)
		return bd;
	}

	static borrarCita(bd){
		//Si esta vacia no entra
		if(bd.length!=0){
		var borrar =Number(prompt("Introduzca el id de la Cita Medica:"));
		var borrado =false;
		//Se recorre la lista
		for(var i=0;i<bd.length;i++){
			//Si coincide borra el alumno
			if(bd[i].idCita==borrar){
				bd.splice(i, 1)
				borrado=true;
			}
		}
		//Si no lo encontro
		if(!borrado)
			alert("No se encontro la cita medica");
		return bd;
		}
		//Si esta vacia
		else
			alert("No hay ninguna cita");
		return bd;
	}
	
	static listarCitas(bd){
		//Si no esta vacia
		if(bd.length!=0){
			//Se recorre el Array
			var idPacienteListar=prompt("Indique su id de paciente:");
			for(var e=0;e<bd.length;e++){
				if(bd[e].idPaciente==idPacienteListar)
					alert("ID de Cita: "+bd[e].idCita+"\n Nombre del Paciente: "+bd[e].nombre_paciente+"\nApellidos del Paciente: "+bd[e].apellidos_paciente+"\nFecha de la cita: "+bd[e].fechaCita+"\nMedico de la cita: "+bd[e].nombre_Medico+"\nCentro de la cita: "+bd[e].centro_medico+"\nConsulta de la cita: "+bd[e].consulta)
			}
		}
		else
			alert("No hay ninguna cita");
	}
	
}

class InterfazID{
	/**
	 * Calcula el id de la cita a partir del Array
	 */
	static calculaid(bd){
		//Si no esta vacia
		if(bd.length!=0){
		var id=0;
		//Se reccore la lista para comprobar que id tienen y darles el siguiente
			 for(var i=0;i<bd.length;i++) {
				 var j=bd[i].idCita;
				 if(id<j)
					 id=j;
			 }
			 return id+1;
		}
		//Si esta vacia se le da el primero
		else
			return 0;
	}
}
class InterfazFecha{
	/**
	 * Comprueba la fecha introducido este bien
	 */
	static calculaFecha(anyo,mes,dia,hora){
		do{
			if(hora<8||hora>22)
			hora=Number(prompt("Error Introdujo una hora incorrecta\nIntroduzca ela hora de la cita:"));
			if(anyo<2023)
			anyo=Number(prompt("Error Introdujo un anyo ya pasado\nIntroduzca el anyo de la cita:"));
			if(mes<1||mes>12)
				mes=Number(prompt("Error Introdujo un mes no valido\nIntroduzca el mes de la cita:"));
			if(dia<1||dia>31)
				dia=Number(prompt("Error Introdujo un dia no valido\nIntroduzca el mes de la cita:"));
			else{
				if(anyo%4!=0 && dia>28)
					dia=Number(prompt("Error Introdujo un dia no valido\nIntroduzca el dia de la cita:"));
				if(dia>31&&(mes==1||mes==3||mes==5||mes==7||mes==8||mes==10||mes==12))
					dia=Number(prompt("Error Introdujo un dia no valido\nIntroduzca el dia de la cita:"));
				if(dia>30&&(mes==4||mes==6||mes==9||mes==10))
					dia=Number(prompt("Error Introdujo un dia no valido\nIntroduzca el dia de la cita:"));
				}
				
		}while((hora<8||hora>22)||(anyo<2023)||(mes<1||mes>12)||(anyo%4!=0 &&dia>28)||(dia>31&&(mes==1||mes==3||mes==5||mes==7||mes==8||mes==10||mes==12))||(dia>30&&(mes==4||mes==6||mes==9||mes==10)||dia<1||dia>31));
		//Se crea la el tipo fecha y lo devuelve
		var fechaBien = new Date(anyo,mes-1,dia,hora)
		return fechaBien;
	}
}
function Main(){
 var bd=[];
 do{
 var opcion =Number(prompt("1-Pedir Cita\n2-Borrar Cita\n3-Listar Citas\n0-Salir\n Introduzca una opcion:"));
 
 	switch(opcion){
		case 1:
			 interfazCitaMedica.pedirCita(bd);
			 break;
		case 2:
			 interfazCitaMedica.borrarCita(bd);
			 break;
		case 3:
			interfazCitaMedica.listarCitas(bd);
			break;
	 }

 }while(opcion!=0);
 
}
