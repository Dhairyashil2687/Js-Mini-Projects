const addBtn = document.querySelector('#addButton');
const expName = document.querySelector('#expenseName');
const exaAmt = document.querySelector('#expenseAmount');
const container = document.querySelector('.expenseList');
const totalExp = document.querySelector('#finalAmount');

let total = 0;
let expenses = [];

// On Adding Expense
addBtn.addEventListener('click',function(){

    const expense = expName.value ;
    const amount = exaAmt.value;


    // Check-Point
    if(expense === "" || amount === ""){
    alert("Please enter expense name and amount");
    return;
    }

    if(isNaN(amount)|| amount<0){
    alert("Please enter valid amount");
    return;
    }


    // Object Pushing
    const expenseObj = {name:expense , price :amount };
    expenses.push(expenseObj);

    // Storing Locally
    localStorage.setItem('Expenses',JSON.stringify(expenses));

    // Showing Total Expense
    total += Number(amount);
    totalExp.innerText = `₹${total}`;

    const newEle = document.createElement('div');
    newEle.classList.add('listItem');
    newEle.innerHTML = `
    <span>${expense}</span>
    <span>₹${amount}</span>
    <button class="delButton">Delete</button>
    `;

    container.appendChild(newEle);

    // Functionalities to Delete Button
    const delBtn = newEle.querySelector('.delButton');
    delBtn.addEventListener('click',function(){
        newEle.remove();
        total -= Number(amount);
        totalExp.innerText = `₹${total}`;

        expenses = expenses.filter(function(exp){
            return !(exp.name === expense && exp.price === amount);
        });
        localStorage.setItem('Expenses', JSON.stringify(expenses));
    })

    expName.value = "";
    exaAmt.value = "";
})

// On Loading  Page
window.addEventListener('load',function(){

    const saved = JSON.parse(localStorage.getItem('Expenses') || []);

    expenses = saved;

    // total reset कर
    total = 0;
    container.innerHTML = "";


    // 
    saved.forEach(x => {

        total += Number(x.price);
        totalExp.innerText = `₹${total}`;

        const newEle = document.createElement('div');
        newEle.classList.add('listItem');
        newEle.innerHTML = `
        <span>${x.name}</span>
        <span>₹${x.price}</span>
        <button class="delButton">Delete</button>
        `;

        container.appendChild(newEle);

        const delBtn = newEle.querySelector('.delButton');
        delBtn.addEventListener('click',function(){
            newEle.remove();
            total -= Number(x.price);
            totalExp.innerText = `₹${total}`;

            // elimating from array
            expenses = expenses.filter(function(exp){
                return !(exp.name ===x.name && exp.price === x.price);
            })

            // updating Locally
            localStorage.setItem('Expenses',JSON.stringify(expenses));
        })


    });

})