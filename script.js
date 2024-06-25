function validateForm() {
    const username = document.getElementById('userid');
    const password = document.getElementById('exampleInputPassword1');

   

    if (username.value==='admin' && password.value==='1234') {
    
       window.location.replace('/main.html');
        return true;
    } else {
        alert('Invalid login');
        return false; 
    }
}

var data=document.getElementById('ajaxdata');

function getdata(){
    var xhttp=new XMLHttpRequest();//creating XHR object

xhttp.onreadystatechange=function(){
    if(this.readyState==4 && this.status==200){
    data.innerText=this.responseText;

    fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(tasks => {
                const completedTasks = tasks.filter(task => task.completed);
                if (completedTasks.length >= 5) {
                    alert('Congrats! 5 Tasks have been Successfully Completed');
                }
                console.log(tasks);
            })
            .catch(error => console.error('Error fetching data:', error));

    }}

    xhttp.open('GET','https://jsonplaceholder.typicode.com/todos',true);
    xhttp.send();
}




            const logoutbtn = document.getElementById('btn');
            logoutbtn.addEventListener('click', e => {
                e.preventDefault();
                window.location.href = '/login.html';
            });