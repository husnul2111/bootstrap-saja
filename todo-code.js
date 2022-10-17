let todoName =document.getElementById('todo-name');
let btnSimpan =document.getElementById('btn-simpan');
btnSimpan.addEventListener('click',function (){
    if (todoName.Value == '') {
        alert('todo list tidak boleh kosong');
        
    }
    else{
        let todoContainer = document.querySelector('.list-group');
        let todoHTML = todoContainer.innerHTML;
        todoHTML +='<li class="list-group-item"><input class="form-check-input me-1" type="checkbox" value=""><span>'; + ${todoName.value} +'</span></li>';
        todoContainer.innerHTML = todoHTML;
        todoName.value ='';
        todoName.focus();

    }
})