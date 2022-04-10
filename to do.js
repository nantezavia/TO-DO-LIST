const forms = document.querySelector(".forms");
const name = document.querySelector("#fname");
const todos = document.querySelector("#todos");

forms.addEventListener('submit', sub);
function sub(lis){
    lis.preventDefault();
    if(fname.value=='' && todos.value==''){
        msg.innerHTML='Please enter the required fields'
        setTimeout(()=>msg.remove(),3000);
    }


        const arrayOfTodos =[
            todos,{
               fname:fname.value,
               todos:todos.value
            }];
            console.log(arrayOfTodos);
        //to clear the fields
        fname.value='';
        todos.value='';
    
    }
