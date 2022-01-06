import React, { FunctionComponent } from 'react';
import { User } from '../types/User';
import { Confirm } from './Confirm';

const confirmationText = {
  block: 'Please confirm {1} suspension of system use?',
  unblock: 'Please confirm {1} unsuspension of system use?',
};

interface ConfirmUserBlockProps {
  user: User;
  onConfirm: (value: boolean) => void;
}

export const ConfirmUserBlock: FunctionComponent<ConfirmUserBlockProps> = ({ user, onConfirm }) => {
  return (
    <Confirm
      text={
        user?.suspended
          ? confirmationText.unblock.replace('{1}', `${user.firstName} ${user.lastName} (${user.vid})`)
          : confirmationText.block.replace('{1}', `${user.firstName} ${user.lastName} (${user.vid})`)
      }
      onConfirm={onConfirm}
    />
  );
};
