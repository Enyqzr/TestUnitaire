import {expect, test} from "vitest";
import {addTask, checkIndex, deleteTask, doneTask, modifyTask} from "./todo";


test(`Ajout d'une tâche a la liste`, () => {

    let tableau = [];


    let nouvelleTache = {
        label: 'tache en question',
        done: false
    };

    addTask(nouvelleTache, tableau);

    expect(tableau).toHaveLength(1)
    expect(tableau).toContainEqual(nouvelleTache)
})


test(`Ajout d'une tache sans label renseigné`, () => {
    const tableau = [];


    const nouvelleTache = {
        label: '',
        done: false
    };

    expect(tableau).toHaveLength(0)
    expect(() => addTask(nouvelleTache, tableau)).toThrowError()
})


test(`Ajout d'une tache avec label null renseigné`, () => {
    const tableau = [];


    const nouvelleTache = {
        label: null,
        done: false
    };

    expect(tableau).toHaveLength(0)
    expect(() => addTask(nouvelleTache, tableau)).toThrowError()
})


test(`Ajout d'une tache avec la clé done : true`, () => {

    const tableau = [];

    const nouvelleTache = {
        label: 'tache en question',
        done: true
    }

    expect(tableau).toHaveLength(0)
    expect(() => addTask(nouvelleTache, tableau)).toThrowError()

})


test(`Supprimer une tache existante grace a son index dans le tableau`, () => {
    const tableau = [{
        label: 'Tache numéro 1',
        done: false
    },
        {
            label: 'Tache numéro 2',
            done: false
        }]

    let indexChoose = 0

    deleteTask(tableau, indexChoose)
    expect(tableau).toHaveLength(1)
})

test(`Supprimer une tâche inexistante dans le tableau`, () => {

    const tableau = [{
        label: 'Tache numéro 1',
        done: false
    }]

    let indexChoose = 2

    expect(() => deleteTask(indexChoose, tableau)).toThrowError()
})

test('Modifier une tache existante grace a son index', () => {
    const tableau = [{
        label: 'Tache numéro 1',
        done: false
    },
        {
            label: 'Tache numéro 2',
            done: false
        }]

    let indexChoose = 0;

    let newTask = 'Nouvelle tache numéro 2';


    modifyTask(newTask, tableau, indexChoose)
    expect(tableau[indexChoose].label).toBe(newTask);
})


test('Modifier une tâche inexistante dans le tableau', () => {
    const tableau = [{
        label: 'Tache numéro 1',
        done: false
    },
        {
            label: 'Tache numéro 2',
            done: false
        }]

    let indexChoose = 3

    let newTask = 'Nouvelle tache'

    expect(() => modifyTask(newTask, tableau, indexChoose)).toThrowError()
})

test(`Validation d'une tâche`, () => {
    const tableau = [{
        label: 'Tache numéro 1',
        done: false
    },
        {
            label: 'Tache numéro 2',
            done: false
        }]

    let indexChoose = 0

    let newStatus = true

    doneTask(newStatus, tableau, indexChoose)
    expect(tableau[indexChoose].done).toBe(newStatus)
})

test(`Validation d'une tache inexistante`, () => {
    const tableau = [{
        label: 'Tache numéro 1',
        done: false
    },
        {
            label: 'Tache numéro 2',
            done: false
        }]
    let indexChoose = 3

    let newStatus = true

    expect(() => doneTask(newStatus, tableau, indexChoose)).toThrowError()
})

// test(`Validation d'une tache déja validée`, () => {
//     const tableau = [{q
//         label: 'Tache numéro 1',
//         done: true
//     },
//         {
//             label: 'Tache numéro 2',
//             done: false
//         }]
//     let indexChoose = 0
//
//     let newStatus = true
//
//     doneTask(tableau, indexChoose, newStatus)
//     expect(doneTask).toThrowError(`La tache est déja indiqué comme complétée.`)
// })

test(`Vérification de l'index renseigné`, () => {
    const tableau = [{
        label: 'Tache numéro 1',
        done : false
    },
        {
            label: 'Tache numéro 2',
            done: false
        }]

    let indexChoose = 0


    expect(checkIndex(tableau, indexChoose)).toStrictEqual(indexChoose)
})

test (`Vérification d'un index non existant`, () => {
    const tableau = [{
        label: 'Tache numéro 1',
        done: false
    },
        {
            label: 'Tache numéro 2',
            done: false
        }]
    let indexChoose = 3

    expect(() => checkIndex(tableau, indexChoose)).toThrowError()
})


















