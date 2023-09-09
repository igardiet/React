const named = 'Batman';
const real = 'Bruce Wayne';

const normal = named + ' is ' + real;
const template = `${named} is ${real}`;

console.log( normal );
console.log( template );

console.log( normal === template );

const html = `
<h1>I'm</h1>
<p>Batman</p>`;
console.log( html );
