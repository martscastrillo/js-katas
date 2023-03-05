/* En este desafío debes convertir las llaves y valores de un objeto en propiedades (id y name) de un objeto dentro de un array.
Input
const obj = {
  123: 'Juanito Alcachofa',
  456: 'Juanita Alcaparra',
};
solution(obj);
Output

[
  {
    id: "123",
    name: 'Juanito Alcachofa',
  },
  {
    id: "456",
    name: 'Juanita Alcaparra',
  },
] */

const obj = {
	123: 'Juanito Alcachofa',
	456: 'Juanita Alcaparra',
  };

function solution(obj) {
	console.log( Object.entries(obj).map(value => {return { id: value[0], name: value[1]}}))
 }


solution(obj);