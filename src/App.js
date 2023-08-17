import { useState } from "react";
import InvestmentForm from "./components/form/InvestmentForm";
import Header from "./components/header/Header";
import ResultsTable from "./components/resultsTable/ResultsTable";

function App() {
  const [userInput, setUserInput] = useState(null);
const calculateHandler = (userInput) => {
    setUserInput(userInput)
    }

    const yearlyData = []; 

    if(userInput){
    let currentSavings = +userInput.currentSavings; 
    const yearlyContribution = +userInput.yearlyContribution; 
    const expectedReturn = +userInput.expectedReturn / 100;
    const duration = +userInput.duration;

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  };

  return (
    <div>
      <Header />

      <InvestmentForm  onCalculate={calculateHandler}/>


      {userInput ? <ResultsTable resultData={yearlyData} initialInvestment={userInput.currentSavings}/> : <p style={{textAlign: 'center'}}>No investment calculated yet.</p>}
    </div>
  );
}

export default App;
