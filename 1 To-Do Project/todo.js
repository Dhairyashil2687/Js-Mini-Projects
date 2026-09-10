const addButton = document.getElementById('addButton');
addButton.addEventListener('click',showTask);

const pending = document.getElementById('pendingCount');
let count = 0;

function showTask(){
    inputTask = document.querySelector('#inputBox').value;

    if(inputTask==='') return;

    const taskDiv = document.createElement('div');
    taskDiv.classList.add('showBar');

    const taskSpan = document.createElement('span');
    taskSpan.classList.add('taskName');
    taskSpan.innerText = inputTask;

    const delBtn = document.createElement('button');
    delBtn.classList.add('delButton');
    delBtn.innerText='Delete';

    delBtn.addEventListener('click', function(){
        taskDiv.remove();
        count--;
        pending.innerText = `Pending Tasks : ${count}`;
    });

    taskSpan.addEventListener('click',function(){
        taskSpan.style.textDecoration = "line-through";
    });

    taskDiv.appendChild(taskSpan);
    taskDiv.appendChild(delBtn);
    document.querySelector('.container').appendChild(taskDiv);

    document.querySelector('#inputBox').value = "";

    // adding task count
    count++;
    pending.innerText = `Pending Tasks : ${count}`;
}
