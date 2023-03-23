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
		var fechaCita = new Date(anyoCita,mesCita-1,diaCita);
		var cita= new citaMedica(idCita,idPaciente,nombre,apellidos,centro,consulta,nombreMedico,fechaCita);
		bd.push(cita)
		return bd;
	}

	static borrarCiIta(bd){
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
	
	static listarAlumno(bd){
		//Si no esta vacia
		if(bd.length!=0){
			//Se recorre el Array
			for(var i=0;i<bd.length;i++) 
				alert("ID del Alumno:"+bd[i].idAlumno+"\nNombre del Alumno: "+bd[i].nombre+"\nApellidos del Alumno: "+bd[i].apellidos+"\nTelefono del Alumno: "+bd[i].telefono+"\nID del Portatil: "+bd[i].idPortatil);
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

function Main(){
 var bd=[];
 do{
 var opcion =Number(prompt("1-Matricular Alumno\n2-Borrar Alumno\n3-Listar Alumno\n0-Salir\n Introduzca una opcion:"));
 
 	switch(opcion){
		case 1:
			 interfazPortatil.matriculaAlumno(bd);
			 break;
		case 2:
			 interfazPortatil.borrarAlumno(bd);
			 break;
		case 3:
			interfazPortatil.listarAlumno(bd);
			break;
	 }

 }while(opcion!=0);
 
}
