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
		var idCita=InterfazID.calculaid(bd);
		var idPaciente =Number(prompt("Introduzca su identificador de seguridad social:"));
		var nombre =prompt("Introduzca su nombre:");
		var apellidos =prompt("Introduzca sus apellidos:");
		var centro =prompt("Introduzca el centro medico:");
		var consulta =prompt("Introduzca la consulta del medico");
		var nombreMedico =prompt("Introduzca el nombre del medico:");
		var diaCita =prompt("Introduzca el dia de la cita:");
		var mesCita =prompt("Introduzca el mes de la cita:");
		var anyoCita =prompt("Introduzca el año de la cita:");
		var fechaCita = InterfazFecha.calculaFecha(anyoCita,mesCita-1,diaCita);
		var cita= new citaMedica(idCita,idPaciente,nombre,apellidos,centro,consulta,nombreMedico,fechaCita);
		bd.push(cita)
		return bd;
	}

	static borrarCita(bd){
		//Si esta vacia no entra
		if(bd.length!=0){
		var borrar =prompt("Introduzca el id de la Cita Medica:");
		var borrado =false;
		//Se recorre la lista
		for(var i=0;i<bd.length;i++){
			//Si coincide borra el alumno
			if(bd[i].idCIta==borrar){
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
					alert("ID de Cita: "+bd[e].idCIta+"\n Nombre del Paciente: "+bd[e].nombre+"\nApellidos del Paciente: "+bd[e].apellidos)
			}
		}
		else
			alert("No hay ningun alumno");
	}
	
}

class InterfazID{
	/**
	 * Calcula el id del Alumno a partir del Array
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
	static calculaFecha(anyo,mes,dia){
		var fechaHoy = new Date();
		do{
			if(anyo<fechaHoy.getDate)
			prompt("Error Introdujo un año ya pasado\nIntroduzca el año de la cita:");
			if(mes<1||mes>12)
				prompt("Error Introdujo un mes no valido\nIntroduzca el mes de la cita:");
			if(anyo%4!=0 &&(dia>28||dia<1))
				prompt("Error Introdujo un dia no valido\nIntroduzca el dia de la cita:");
			if(dia<1||dia>31&&(mes==1||mes==3||mes==5||mes==7||mes==8||mes==10||mes==12))
				prompt("Error Introdujo un dia no valido\nIntroduzca el dia de la cita:");
			if(dia<1||dia>30&&(mes==4||mes==6||mes==9||mes==10))
				prompt("Error Introdujo un dia no valido\nIntroduzca el dia de la cita:");
		}while((anyo<fechaHoy.getDate)||(mes<1||mes>12)||(anyo%4!=0 &&(dia>28||dia<1))||(dia<1||dia>31&&(mes==1||mes==3||mes==5||mes==7||mes==8||mes==10||mes==12))||(dia<1||dia>30&&(mes==4||mes==6||mes==9||mes==10)));
		var fechaBien = new Date(anyo,mes,dia)
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
