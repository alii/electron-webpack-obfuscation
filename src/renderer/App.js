import { createElement, add } from './dom';

const root = createElement('div', { id: 'root' });
document.body.appendChild(root);

const title = createElement('div', { id: 'titlebar' }, 'this is the titlebar');
add(title).to(root);
add('hello world').to(root);
