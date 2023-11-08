export function addTask(object, array){
    if(object.label.trim() === '') {
        throw new Error("Impossible d'ajouter une tache vide.")
    }
    if (object.done){
        throw new Error("Impossible d'ajouter une tache déja terminé.")
    }
    array.push(object)
}

export function deleteTask(array, index){

    checkIndex(array, index)
    array.splice(index, 1)
}

export function modifyTask(newLabel, array, index){
    checkIndex(array, index)
    array[index].label = newLabel
}

export function doneTask(newStatus , array, index){
    checkIndex(array, index)
    array[index].done = newStatus
}

export function checkIndex(array, index){
    if (index < 0 || index > array.length ) {
        throw new Error ("L'index séléctionné est introuvable ou n'éxiste pas")
    }
    return index
}


// /* c8 ignore next 3 */
// function toto (){
//     console.log('jtm math')
// }