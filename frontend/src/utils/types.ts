export interface IWalkthrough {
  setValidInput?: React.Dispatch<React.SetStateAction<boolean>>;
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
