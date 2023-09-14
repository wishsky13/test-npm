import { useState } from 'react';
import { confirmable, createConfirmation } from '../utilities/modal';
import Modal from './Modal';
import React from 'react';

type IModalF = {
  show: boolean;
  proceed: any;
  ref?: any;
  className?: string;
  handleClose?: () => void;
  noCancelClose?: boolean;
  title: string;
  des?: string;
  contentArea?: React.ReactNode;
  buttonArea?: React.ReactNode;
  buttonText?: string;
  cancelText?: string;
  noCancel?: boolean;
  handleConfirm?: () => Promise<void>;
  noConfirmClose?: boolean;
  disabled?: boolean;
  noButton?: boolean;
  buttonColor?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning' | undefined;
  needFullScreen?: boolean;
  disabledCloseButton?: boolean; // arguments of your confirm function
};

const ModalF = (props: IModalF) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Modal
      className={props?.className}
      open={props.show}
      handleClose={() => {
        if (props?.handleClose) {
          props.handleClose();
        }
        if (!props?.noCancelClose) {
          props.proceed(false);
        }
      }}
      title={props.title}
      des={props?.des}
      contentArea={props?.contentArea}
      buttonArea={props?.buttonArea}
      buttonText={props?.buttonText}
      cancelText={props?.cancelText}
      noCancel={props?.noCancel}
      handleConfirm={async () => {
        setIsLoading(true);
        if (props?.handleConfirm) {
          await props.handleConfirm();
          setIsLoading(false);
        }
        if (!props.noConfirmClose) {
          props.proceed(true);
        }
      }}
      isLoading={isLoading}
      disabled={props?.disabled}
      noButton={props?.noButton}
      buttonColor={props?.buttonColor}
      needFullScreen={props?.needFullScreen}
      disabledCloseButton={props?.disabledCloseButton}
    />
  );
};

export { ModalF };

export function confirm(confirmation: any) {
  return createConfirmation(confirmable(ModalF))({
    ...confirmation,
  });
}
