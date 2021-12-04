import { createContext, FunctionComponent, useState } from "react";
import { Toast, ToastContainer } from "react-bootstrap";
import style from "./notification-context.module.css";

export enum NotificationType {
  SUCCESS,
  ERROR,
  ALERT,
}

interface INotificationContext {
  dispatch: (
    text: string,
    title: string,
    type: NotificationType,
    timeout?: number
  ) => void;
}

export const NotificationContext = createContext<INotificationContext>({
  dispatch: (...args) => {},
});

const getBackground = (type: NotificationType) => {
  return {
    [NotificationType.ALERT]: style.alert,
    [NotificationType.ERROR]: style.error,
    [NotificationType.SUCCESS]: style.success,
  }[type];
};

export const NotificationProvider: FunctionComponent = ({ children }) => {
  const [visible, setVisible] = useState(false);
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const [type, setType] = useState(NotificationType.SUCCESS);

  return (
    <NotificationContext.Provider
      value={{
        dispatch: (
          text: string,
          title: string,
          type: NotificationType,
          timeout?: number
        ) => {
          setVisible(true);
          setText(text);
          setTitle(title);
          setType(type);
          timeout &&
            setTimeout(() => {
              setVisible(false);
            }, timeout);
        },
      }}
    >
      <>
        {visible && (
          <ToastContainer position="bottom-end">
            <Toast
              className="d-inline-block m-1"
              onClose={() => setVisible(false)}
            >
              <Toast.Header className={getBackground(type)}>
                <img
                  src="holder.js/20x20?text=%20"
                  className="rounded me-2"
                  alt=""
                />
                <strong className="me-auto">{title}</strong>
              </Toast.Header>
              <Toast.Body>{text}</Toast.Body>
            </Toast>
          </ToastContainer>
        )}
        {children}
      </>
    </NotificationContext.Provider>
  );
};
