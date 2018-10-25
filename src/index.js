const {a}=require('./t')

console.log('index')
a();


const render = require('./tpl/art/index.art');
const data = {
    title: 'My Page111'
};
const html = render(data);
console.log(html);

$("#app").html(html);