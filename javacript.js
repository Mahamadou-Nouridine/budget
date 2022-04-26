    let budget = document.getElementById("budget");
    let budgetbutton = document.getElementById("budget-button");
    let expenseName = document.getElementById("expense-name");
    let expenseAmout = document.getElementById("expense-ajouterRetirer");
    let expenseButton =  document.getElementById("expense-button");
    let budgetResume = document.getElementById("budget-resume");
    let expenseResume = document.getElementById("expense-resume");
    let balance = document.getElementById("balance");
    let titleCell = document.getElementById("title-cell");
    let valueCell = document.getElementById("value-cell");
    let editCell = document.getElementById("edit-cell");
    let actu = 0;
    let addExpense = 0 ;
    let calcul =0 ;
    let inventaire = document.getElementById("inventaire")
    function calculate(){
        calcul =Number( budget.value);
        if (Number(budget.value)){
            budgetResume.innerHTML = `${calcul } CFA`
        balance.innerHTML = `${calcul - addExpense} CFA`
        } else {
            alert("veuillez entrer une valeur")
        }
    }


    function expenseAdding(){
        actu = Number(expenseAmout.value);
        if (actu && String(expenseName.value)){
        addExpense += actu;
        expenseResume.innerHTML = `${addExpense} CFA`
        balance.innerHTML = `${calcul - addExpense} CFA`
        } else{
            alert("veuillez remplir toutes les cases")
        }
    }



    var i = 0;
    function add(){
        if (actu && String(expenseName.value)){
      
        
        i ++ 
      var nom = expenseName.value;
      let ajouterRetirer=actu
        const pere = document.createElement('div');
        const fils1 = document.createElement('div');
        const fils2 = document.createElement('div');
        const fils3 = document.createElement('div');
        const but1 = document.createElement('i');
        const but2 = document.createElement('i');
       pere.setAttribute("class", `row pere${i}`)
       pere.setAttribute("id",  `${ajouterRetirer}`)
       fils1.setAttribute("class", " col s4 center bebe")
       fils2.setAttribute("class", " col s4 center bebe" )
       fils3.setAttribute("class", " col s4 center bebe" )
       but1.setAttribute("class", "fa-solid fa-pen-to-square  teal-text white  " )
       but1.addEventListener("click",() => {
            expenseName.value = `${nom}`;
            expenseAmout.value = ajouterRetirer;
            addExpense -= document.getElementById(`${ajouterRetirer}`).id ; 
            expenseResume.innerHTML = addExpense ;
            balanceRefresh() })
        but1.setAttribute("onclick", "((this.parentElement).parentElement).parentElement.removeChild((this.parentElement).parentElement)" )
        but1.setAttribute("style", "margin-right:15px" )
        but2.setAttribute("class", "fa-solid fa-trash   teal-text white" );
        but2.addEventListener("click",() => {
            addExpense -= document.getElementById(`${ajouterRetirer}`).id ; 
            expenseResume.innerHTML = addExpense ;
            balanceRefresh() })
        but2.setAttribute("onclick", "((this.parentElement).parentElement).parentElement.removeChild((this.parentElement).parentElement)" )
        fils1.textContent = `- ${nom}`
        fils2.textContent = `- ${actu}`
        fils3.appendChild(but1)
        fils3.appendChild(but2)
        pere.appendChild(fils1);
        pere.appendChild(fils2);
        pere.appendChild(fils3);
        inventaire.appendChild(pere)
    } else{
        alert("veuillez remplir toutes les cases")
    }
    }
    

    function balanceRefresh(){
        balance.innerHTML = `${calcul - addExpense}`
    }

    // addExpense = 5

    // const t = document.createElement('div')
    // t.setAttribute("id", `${2}`)
    // expenseResume.innerHTML = addExpense -  t.id

