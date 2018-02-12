
function calculateSimpleInterest(interestValue, principalValue, yearsValue) {
    var interest = parseFloat(interestValue);
    var endOfYearResult = 0;
    var principal = parseFloat(principalValue);
    var finalResult = principal;
    var years = parseFloat(yearsValue);
    var totalInterest = 0;
    var simpleInterest = principal * interest;
    var simpleResults = [];
    for (var numOfYears = 1; numOfYears <= years; numOfYears++) {
        endOfYearResult = finalResult + simpleInterest;
        totalInterest += simpleInterest;
        simpleResults.push({ year: numOfYears, result: endOfYearResult, interest: simpleInterest });
        finalResult += simpleInterest;
    }    
    return { finalResult, totalInterest, simpleResults };
}

function calculateCompoundInterest(interestValue, principalValue, yearsValue) {
    var interest = parseFloat(interestValue);
    var endOfYearResult = 0;
    var principal = parseFloat(principalValue);
    var finalResult = principal;
    var years = parseFloat(yearsValue);
    var totalInterest = 0;
    var compoundResults = [];
    var compoundInterest = 0;

    for (var numOfYears = 1; numOfYears <= years; numOfYears++) {
        compoundInterest = principal * interest;
        totalInterest += compoundInterest;
        endOfYearResult = finalResult + compoundInterest;
        principal = endOfYearResult;
        compoundResults.push({ year: numOfYears, result: endOfYearResult, interest: compoundInterest });
        finalResult += compoundInterest;
    }
    return { finalResult, totalInterest, compoundResults };
}


export default { calculateCompoundInterest, calculateSimpleInterest }