import { FunctionComponent } from "react";
import { Button, Modal } from "react-bootstrap";

export interface ConfirmProps {
  text: string;
  onConfirm: (value: boolean) => void;
}

export const Confirm: FunctionComponent<ConfirmProps> = ({
  text,
  onConfirm,
}) => {
  return (
    <Modal
      show={true}
      onClick={() => onConfirm(false)}
      onHide={() => onConfirm(false)}
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Confirmação</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>{text}</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={() => onConfirm(false)}>
          Cancelar
        </Button>
        <Button variant="primary" onClick={() => onConfirm(true)}>
          Confirmar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
