document.querySelector('#main-heading').textContent = 'New DOM Layout'
document.querySelector('#page-header').setAttribute('class', 'bg-success text-white col-sm-12 mt-1');

document.querySelector('#para1').textContent = 'The Document Object Model (DOM) is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure.';
document.querySelector('#para2').textContent = 'The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page.';

const btn = document.querySelector('#btn');
btn.addEventListener('click', function () {
    const para4 = document.querySelector('#para4');
    para4.textContent = 'The Document Object Model is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure wherein each node is an object representing a part of the document.';
});

document.querySelector('#red').setAttribute('class', 'bg-danger');
document.querySelector('#blue').setAttribute('class', 'bg-primary');
document.querySelector('#yellow').setAttribute('class', 'bg-warning');
document.querySelector('#green').setAttribute('class', 'bg-success');
document.querySelector('#black').setAttribute('class', 'bg-dark');