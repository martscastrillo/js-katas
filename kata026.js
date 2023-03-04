/*  BACK TO BASICS

Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:
const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
} */

function suscription(tipoDeSuscripcion) {
  if (tipoDeSuscripcion == 'Free') {
    console.log("Solo puedes tomar los cursos gratis");
  }
  else if (tipoDeSuscripcion == 'Basic') {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
  }
  else if (tipoDeSuscripcion == 'Expert') {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
  }
  else {
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
  }
}

suscription('Free');
suscription('Basic');
suscription('Expert');
suscription('ExpertPlus');