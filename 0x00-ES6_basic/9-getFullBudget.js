import getBudgetObject from './7-getBudgetObject';
// using method properties
export default function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);
    // The fuction to modify and return
    // first remove the `function` keyword a the `:` colon
  const fullBudget = {
    ...budget,
    getIncomeInDollars (income) {
      return `$${income}`;
    },
    getIncomeInEuros (income) {
      return `${income} euros`;
    },
  };

  return fullBudget;
}
