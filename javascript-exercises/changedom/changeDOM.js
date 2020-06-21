const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

const red = document.createElement('p');
red.textContent = "Hey I'm red!";
red.style.cssText = "color: red";

const blue = document.createElement('h3');
blue.textContent = "I'm a blue h3!";
    blue.style.cssText = "color: blue;";

const pink = document.createElement('div');
    pink.classList.add('twoContents');
    pink.style.cssText = "background-color: pink; border: 1px black;"
    
const titleInDiv = document.createElement('h1');
    titleInDiv.textContent = "I'm in a div"

const meToo = document.createElement('p');
    meToo.textContent = "ME TOO!";

pink.appendChild(titleInDiv);
pink.appendChild(meToo);

container.appendChild(content);
container.appendChild(red);
container.appendChild(blue);
container.appendChild(pink);