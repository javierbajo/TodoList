console.log('buenas noches bienvenidos');

const ul$$ = document.querySelector('ul');
const empty = document.querySelector('.empty');




const nuevaTarea = (tarea) => {
    //console.log(tarea)
    const li$$ = document.createElement('li');
    p$$ = document.createElement('p');
    //p$$.textContent(tarea);
    li$$.appendChild(p$$);
    ul$$.appendChild(li$$);
    
    
}


const takeInput = () => {
    const input$$ = document.querySelector('input');
    //input$$.innerHTML = "Hola"
    const addButton$$ = document.querySelector('.btn-add');
    //console.log(input$$.value);
    addButton$$.addEventListener('click',  (evento) => {
        evento.preventDefault();
        tarea = input$$.value;
        console.log(tarea)
        nuevaTarea(tarea);
    });
    
    
}



const init = () => {
    takeInput();
    //console.log(listaTareas);
    console.log('por aquí paso');
}

init();