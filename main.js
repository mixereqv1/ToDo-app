const todoapp = {
    myInput: document.querySelector('.task-text'),
    myButton: document.querySelector('.add-button'),
    content: document.querySelector('.content'),

    add: function(){
        if(this.myInput.value == ''){
            alert('Wprowadź zadanie do dodania.');
        }else{
            let taskItem = document.createElement('div');
            let taskElement = document.createElement('span');
            let editElement = document.createElement('i');
            let delElement = document.createElement('i');

            taskItem.className = 'taskItem';
            taskElement.className = 'taskElement';
            editElement.className = 'fas fa-pen editBtn';
            delElement.className = 'fas fa-times delBtn';

            taskElement.innerText = this.myInput.value;

            this.content.style.display = 'block';
            this.content.appendChild(taskItem);
            taskItem.appendChild(taskElement);
            taskItem.appendChild(editElement);
            taskItem.appendChild(delElement);
            
            this.myInput.value = '';
        }
        
    },

    clickBtn: function(event){
        if(event.target.classList.contains('delBtn')){
            if(this.content.childElementCount === 1){
                this.content.style.display = 'none';
            }
            event.target.parentElement.remove();
        }
        else if(event.target.classList.contains('editBtn')){
            event.target.parentElement.querySelector('.taskElement').innerHTML = '<input placeholder="Wpisz zadanie..." type"text" class="newtask">';
            event.target.className = 'fas fa-check acceptBtn';
        }
        else if(event.target.classList.contains('acceptBtn')){
            if(document.querySelector('.newtask').value == ''){
                document.querySelector('.newtask').placeholder = 'Pole nie może być puste';
            }
            else{
                event.target.parentElement.querySelector('.taskElement').innerText = event.target.parentElement.querySelector('.newtask').value;
                event.target.className = 'fas fa-pen editBtn';
            }
            
        }
    },

    init: function(){
        this.myButton.addEventListener('click',this.add.bind(this));
        this.content.addEventListener('click',this.clickBtn.bind(this));
    }
}

todoapp.init();