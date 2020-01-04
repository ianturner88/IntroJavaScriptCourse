// Listen for submit
document.getElementById('loan-form').addEventListener('submit', calculateResults);

// Calculate results
function calculateResults(e){
    console.log('Calculating...');
    //UI Vars
    const UIamount = document.getElementById('amount');

    e.preventDefault();
}