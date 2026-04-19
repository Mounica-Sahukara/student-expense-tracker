const form = document.getElementById("form");
const category = document.getElementById("category");
const amount = document.getElementById("amount");
const list = document.getElementById("list");

let transactions = [];

form.addEventListener("submit", function(e){
e.preventDefault();

if(category.value === "" || amount.value === ""){
return;
}

const transaction = {
category: category.value,
amount: amount.value
};

transactions.push(transaction);

addToDOM(transaction);

category.value="";
amount.value="";
});

function addToDOM(t){
const li = document.createElement("li");

li.innerHTML = `
${t.category}
<span>₹${t.amount}</span>
`;

list.appendChild(li);
}

function clearAll(){
transactions = [];
list.innerHTML = "";
}