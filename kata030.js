/* En este desafío vas a recibir un array de objetos. Cada objeto representa a un usuario. Debes encontrar al usuario con cierto ID y retornar su nombre. En caso de no existir, debes retornar false.

Input

const users = [];
users.push({ id: 123, name: 'Juanito Alcachofa' });
users.push({ id: 456, name: 'Juanita Alcaparra' });

solution(users, 456);
solution(users, 999);

Output

Juanita Alcaparra
false */

const users = [];
users.push({ id: 123, name: "Juanito Alcachofa" });
users.push({ id: 456, name: "Juanita Alcaparra" });

function solution(users, id) {
    let result;
	const findId = users.find((element) => {
	
		if (id == element.id) {
			result = element.name;
			console.log(result);
		}
	});
    if (!result)
    {
        console.log(false);
    }
}
solution(users, 456);
solution(users, 999);
