function calculateTip() {

    const billAmount = parseFloat(document.getElementById('billAmount').value);
    const tipPercentage = parseFloat(document.getElementById('tipPercentage').value);  
    if (isNaN(billAmount) || billAmount <= 0) {
        alert('Please enter a valid bill amount.');
        return;
    }
    const tipAmount = (tipPercentage / 100) * billAmount; //equation
    const totalAmount = billAmount + tipAmount; //total amount
    //result
    const result = `                                          
        Tip Amount: $ ${tipAmount.toFixed(2)}<br>
        Total Amount: $ ${totalAmount.toFixed(2)}
    `;
    document.getElementById('result').innerHTML = result;
}
