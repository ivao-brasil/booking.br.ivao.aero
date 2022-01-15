import { Alert, AlertColor, AlertTitle, Snackbar } from '@material-ui/core';
import { createContext, FunctionComponent, useState } from 'react';

export enum NotificationType {
  SUCCESS,
  ERROR,
  ALERT,
}

interface INotificationContext {
  dispatch: (text: string, title: string, type: NotificationType, timeout?: number) => void;
}

export const NotificationContext = createContext<INotificationContext>({
  dispatch: (...args) => {},
});

const getBackground = (type: NotificationType): AlertColor => {
  return ({
    [NotificationType.ALERT]: 'warning',
    [NotificationType.ERROR]: 'error',
    [NotificationType.SUCCESS]: 'success',
  }[type] || 'info') as AlertColor;
};

export const NotificationProvider: FunctionComponent = ({ children }) => {
  const [visible, setVisible] = useState(false);
  const [text, setText] = useState('');
  const [title, setTitle] = useState('');
  const [type, setType] = useState(NotificationType.SUCCESS);

  return (
    <NotificationContext.Provider
      value={{
        dispatch: (text: string, title: string, type: NotificationType, timeout?: number) => {
          setVisible(true);
          setText(text);
          setTitle(title);
          setType(type);
          timeout &&
            setTimeout(() => {
              setVisible(false);
            }, timeout);
        },
      }}>
      <>
        {visible && (
          <Snackbar open={true} onClose={() => setVisible(false)} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
            <Alert onClose={() => setVisible(false)} severity={getBackground(type)} sx={{ width: '100%' }}>
              <AlertTitle>{title}</AlertTitle>
              {text}
            </Alert>
          </Snackbar>
        )}
        {children}
      </>
    </NotificationContext.Provider>
  );
};
