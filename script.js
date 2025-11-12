// Select People
const peopleSum = document.querySelector("#peopleSum");

// Increment By One
const plusSum = document.querySelector("#plusSum");
let count = 1;

plusSum.addEventListener("click", function(){
    count++;
    peopleSum.innerHTML = count;
});

// Decrement By One
const minusSum = document.querySelector("#minusSum");
minusSum.addEventListener("click", function(){
    if(count > 1){
        count--;
    }
    peopleSum.innerHTML = count;
});

// Calculate
const calculator = document.querySelector("#calculator");
const totalPerPersonBox = document.querySelector(".total_per_person");

calculator.addEventListener("click", () => {
    // Read inputs
    const totalBill = Number(document.querySelector("#totalBill").value);
    const tipMain = Number(document.querySelector("#tipMain").value);
    const finalPeople = Number(peopleSum.innerHTML);

    // basic validation
    if (!totalBill || totalBill <= 0) {
        alert("Please enter a valid Total Bill (greater than 0).");
        return;
    }
    if (!tipMain || tipMain < 0) {
        alert("Please enter a valid Tip percentage (0 or more).");
        return;
    }

    totalPerPersonBox.style.display = "block";

    // calculating Tip and Tax (fixed logic)
    let totalTipAmount = totalBill * (tipMain / 100);
    let taxAmount = totalBill * 0.05; // 5% tax correctly calculated
    let totalAll = totalBill + totalTipAmount + taxAmount;
    let perPerson = (totalAll / (finalPeople || 1));

    // display Total Bill and Total in Summary TAB with 2 decimals
    document.querySelector("#finalBill").innerHTML = totalBill.toFixed(2);
    document.querySelector("#tipAmount").innerHTML = totalTipAmount.toFixed(2);
    document.querySelector("#taxAmount").innerHTML = taxAmount.toFixed(2);

    // Final Calculation
    document.querySelector("#totalPerPerson").innerHTML = perPerson.toFixed(2);
});
