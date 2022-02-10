import { Todo } from '../js/Todo.js';

let todolist = [];

$(()=>{
    stampaTodo();
    let button = $('.inserisci');
    button.on('click', function(){
        let titolo = $('#titolo').val();
        let testo = $('#testo').val();
        let todo = new Todo(titolo, testo);
        todolist.push(todo);
        localStorage.setItem('listaTodo', JSON.stringify(todolist)); 
        stampaTodo();
    });
});

let stampaTodo = () => {
    let lista = $('.lista ul');
    lista.html('');
    let localLista = localStorage.getItem('listaTodo');
    if (localLista !== null) {
        todolist = JSON.parse(localLista);
    }
    $.each(todolist, function(i, todo){
        let li = $('<li></li>');
        li.addClass('list-group-item');
        li.html(todo.titolo + ' - ' + todo.testo);
        li.append('<span class="btn btn-sm btn-danger float-end">X</span>');
        lista.append(li);
        li.children().on('click', function(){
            todolist.splice(i, 1);
            localStorage.setItem('listaTodo', JSON.stringify(todolist));
            stampaTodo();
        });
    });
}
