import {useState} from "react";

const InvestmentForm = props => {
  const [userInput, setUserInput] = useState({
    currentSavings: 10000,
    yearlyContribution: 1200,
    expectedReturn: 7,
    duration: 10,
  });
  const submitForm = event => {
    event.preventDefault();
    props.onCalculate(userInput);
  };

  const resetForm = () => {
    setUserInput({
      currentSavings: 1000,
      yearlyContribution: 200,
      expectedReturn: 7,
      duration: 10,
    });
  };

  const inputChangeHandler = (input, value) => {
    if (input === "current-savings") {
      setUserInput(prevUserInput => {
        return {...prevUserInput, currentSavings: +value};
      });
    } else if (input === "yearly-contribution") {
      setUserInput(prevUserInput => {
        return {...prevUserInput, yearlyContribution: +value};
      });
    } else if (input === "expected-return") {
      setUserInput(prevUserInput => {
        return {...prevUserInput, expectedReturn: +value};
      });
    } else {
      setUserInput(prevUserInput => {
        return {...prevUserInput, duration: +value};
      });
    }
  };

  return (
    <form className="form" onSubmit={submitForm}>
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            onChange={event => {
              inputChangeHandler("current-savings", event.target.value);
            }}
            value={userInput.currentSavings}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            onChange={event => {
              inputChangeHandler("yearly-contribution", event.target.value);
            }}
            value={userInput.yearlyContribution}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            onChange={event => {
              inputChangeHandler("expected-return", event.target.value);
            }}
            value={userInput.expectedReturn}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            onChange={event => {
              inputChangeHandler("duration", event.target.value);
            }}
            value={userInput.duration}
          />
        </p>
      </div>
      <p className="actions">
        <button onClick={resetForm} type="reset" className="buttonAlt">
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
};

export default InvestmentForm;
