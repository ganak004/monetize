export interface IWalkthrough {
  setValidInput?: React.Dispatch<React.SetStateAction<boolean>>;
  handleNext?: () => void;
}

export interface ISavingsWalkthrough {
  handleNext: (stepNumber: number) => void;
}

export type TButtonText =
  | 'signUp'
  | 'login'
  | 'alreadyHaveAccount'
  | 'createAccount'
  | 'next'
  | 'finish'
  | 'save'
  | 'cancel'
  | 'letsSave'
  | 'dashboard'
  | 'yes'
  | 'no'
  | 'saveAndContinue'
  | 'viewAll'
  | 'addAnother';

export type TButtonType = 'normal' | 'boxed' | 'underlined';

export type TButtonVariant = 'primary' | 'secondary';

export interface ExpensesType {
  expenseName: string;
  expenseAmount: number;
  expenseDate: string;
}
