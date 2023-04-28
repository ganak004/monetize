import { ExpensesType } from './types';

export const mapArrayWithSuffixes = () =>
  Array.from({ length: 31 }, (_, i) => {
    let suffix;
    if ((i + 1) % 10 === 1 && i !== 10) {
      suffix = 'st';
    } else if ((i + 1) % 10 === 2 && i !== 11) {
      suffix = 'nd';
    } else if ((i + 1) % 10 === 3 && i !== 12) {
      suffix = 'rd';
    } else {
      suffix = 'th';
    }
    return {
      number: i + 1,
      suffix: suffix,
    };
  });

export const sumExpenses = (expensesArr: Array<ExpensesType>) => {
  let total = 0;

  expensesArr.forEach((expense) => {
    total += expense.expenseAmount;
  });

  return total;
};

export const willMeetSavingsGoal = (
  goalDate: string,
  goalAmount: number,
  amountToSave: number,
  payday: string
): [boolean, number] => {
  const parseDate = (dateString: string) => {
    const [day, month, year] = dateString.split('-').map(Number);
    return new Date(year, month - 1, day);
  };

  const goalDateObject = parseDate(goalDate);
  const currentDate = new Date();

  const paydayNumber = parseInt(payday.slice(0, -2), 10);
  const nextPayday = new Date(currentDate);
  if (currentDate.getDate() >= paydayNumber) {
    nextPayday.setMonth(nextPayday.getMonth() + 1);
  }
  nextPayday.setDate(paydayNumber);

  const monthsUntilGoal =
    (goalDateObject.getFullYear() - nextPayday.getFullYear()) * 12 +
    goalDateObject.getMonth() -
    nextPayday.getMonth();

  const amountSaved = monthsUntilGoal * amountToSave;

  if (amountSaved >= goalAmount) {
    const remainingAmount = amountSaved - goalAmount;
    const daysBeforeGoal = Math.floor((remainingAmount / amountToSave) * 30);
    return [true, daysBeforeGoal];
  } else {
    const remainingAmount = goalAmount - amountSaved;
    const daysAfterGoal = Math.ceil((remainingAmount / amountToSave) * 30);
    return [false, daysAfterGoal];
  }
};

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear().toString();
  return `${day}-${month}-${year}`;
};
