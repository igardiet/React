// Functions in JS

const salute = function (name) {
    return `Hi, ${name}`
}

const salute2 = (name) => {
    return `Hi, ${name}`
}

const salute3 = (name) => `Hi, ${name}`

const salute4 = () => `Hi, John` 

// console.log(salute('John'))

console.log(salute('George'))
console.log(salute2('Paul'))
console.log(salute3('Ringo'))
console.log(salute4())

const getUser = () => ({
    uid: 'example12',
    username: 'exampleX1'
})
const user = getUser()
console.log(user)


// !Exercise:
const getActiveUser = (name) => ({
        uid: '592ibk',
        username: name
}) // Retornando un objeto implicito

const activeUser = getActiveUser('Inaki')
console.log(activeUser)