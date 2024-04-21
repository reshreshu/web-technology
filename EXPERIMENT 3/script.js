function calculateTax() {
    const name =(document.getElementById('name').value);
    const pan = parseFloat(document.getElementById('pan').value);
    const salary = parseFloat(document.getElementById('salary').value);
    const rent = parseFloat(document.getElementById('rent').value);
    const otherIncome = parseFloat(document.getElementById('otherIncome').value);
    const lifeInsurance = parseFloat(document.getElementById('lifeInsurance').value);
    const medicalInsurance = parseFloat(document.getElementById('medicalInsurance').value);
    const loan = parseFloat(document.getElementById('loan').value) ;

    if (!(name) || !(pan)|| !(salary)|| !(rent) || !(otherIncome) || !(lifeInsurance) || !(medicalInsurance) || !(loan))
     {
        alert("form is not validated");
        return;
    }

    const totalIncome = salary + rent + otherIncome;
    const totalDeduction = lifeInsurance + medicalInsurance + loan;
    const finalDeduction = Math.min(totalDeduction, 50000);
    const taxableIncome = totalIncome - finalDeduction;

    let tax = 0;
    if (taxableIncome <= 250000) 
    {
        tax = 0;
    } 
    else if (taxableIncome > 250000 && taxableIncome <= 500000) 
    {
        tax = 0.05*taxableIncome;
    } 
    else if (taxableIncome > 500000 && taxableIncome <= 1000000) 
    {
        tax = 0.1*taxableIncome;
    } 
    else 
    {
        tax = 0.15*taxableIncome;
    }

    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `
        <h5><i>TOTAL SUMMARY </i></h5>
        <P>Name: ${name}</p>
        <p>Pan num: ${pan}</p>
        <p>Total Income: ${totalIncome}</p>
        <p>Total Deduction: ${totalDeduction}</p>
        <p>standard reduction: 50000</p>
        <p>Final Deduction (Max $50000): ${finalDeduction}</p>
        <p>Taxable Income: ${taxableIncome}</p>
        <p>Tax: ${tax}</p>
    `;
}


