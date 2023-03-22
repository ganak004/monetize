import copy from '@/assets/copy-en.json';
import { TButtonText, TButtonType, TButtonVariant } from '@/utils/types';

import styles from './Button.module.scss';

interface IButton {
  handleClick: () => void;
  buttonText: TButtonText;
  buttonType: TButtonType;
  buttonVariant?: TButtonVariant;
}

const Button = ({
  handleClick,
  buttonText,
  buttonType,
  buttonVariant = 'primary',
}: IButton) => {
  const { buttons } = copy;

  const returnStyles = () => {
    switch (buttonType) {
      case 'boxed':
        if (buttonVariant === 'primary') {
          return styles.buttonBoxedPrimary;
        } else {
          return styles.buttonBoxedSecondary;
        }
      case 'normal':
        return styles.buttonNormal;
      case 'underlined':
        return styles.buttonUnderlined;
      default:
        return styles.buttonNormal;
    }
  };

  return (
    <div className={styles.container}>
      <button id="next-button" onClick={handleClick} className={returnStyles()}>
        {buttons[buttonText]}
      </button>
    </div>
  );
};

export default Button;
