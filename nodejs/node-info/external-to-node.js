// FUNCTIONS
const sing = () => {
	console.log('Sing!');
}

const one = () => {
	console.log('one!')
}

const two = () => {
	console.log('two!')
}

// EXPORTING ONE BY ONE
// module.exports.one = one
// module.exports.two = two

// EXPORTING ALL FUNCTIONS AS AN OBJECT
module.exports = {
	sing,
	one,
	two
}
