


document.getElementById('calculate-btn').addEventListener('click', function () {
    const incomeField = document.getElementById('input-income');
    const incomeFieldString = incomeField.value;
    const income = parseFloat(incomeFieldString);

    const foodField = document.getElementById('input-food');
    const foodFieldString = foodField.value;
    const food = parseFloat(foodFieldString);

    const rentField = document.getElementById('input-rent');
    const rentFieldString = rentField.value;
    const rent = parseFloat(rentFieldString);

    const clothesField = document.getElementById('input-clothes');
    const clothesFieldString = clothesField.value;
    const clothes = parseFloat(clothesFieldString);

    const totalExpensesValue = food + rent + clothes;
    const totalExpenses = document.getElementById('total-expenses');
    totalExpenses.innerText = totalExpensesValue;

    const totalBalanceValue = document.getElementById('total-balance');
    const totalBalance = income - totalExpensesValue;
    totalBalanceValue.innerText = totalBalance;





})


document.getElementById('save-btn').addEventListener('click', function () {


    const incomeField = document.getElementById('input-income');
    const incomeFieldString = incomeField.value;
    const income = parseFloat(incomeFieldString);

    const foodField = document.getElementById('input-food');
    const foodFieldString = foodField.value;
    const food = parseFloat(foodFieldString);

    const rentField = document.getElementById('input-rent');
    const rentFieldString = rentField.value;
    const rent = parseFloat(rentFieldString);

    const clothesField = document.getElementById('input-clothes');
    const clothesFieldString = clothesField.value;
    const clothes = parseFloat(clothesFieldString);

    const totalExpensesValue = food + rent + clothes;
    const totalExpenses = document.getElementById('total-expenses');
    totalExpenses.innerText = totalExpensesValue;

    const totalBalanceValue = document.getElementById('total-balance');
    const totalBalance = income - totalExpensesValue;
    totalBalanceValue.innerText = totalBalance;





    const saveMoneyField = document.getElementById('save-income');
    const saveMoneyFieldString = saveMoneyField.value;
    const saveMoney = parseFloat(saveMoneyFieldString);
    saveMoneyField.innerText = saveMoney;


    const savingAcount = document.getElementById('saving-amount');
    const saveingAccountMoney = income * (saveMoney / 100);
    savingAcount.innerText = saveingAccountMoney;


    const remainingBalanceField = document.getElementById('remaining-balance');
    const remainingBalance = totalBalance - saveingAccountMoney;
    remainingBalanceField.innerText = remainingBalance;
})