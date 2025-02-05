import { Modal as AntModal } from "antd";

interface ModalProps {
  isOpen: boolean;
  title: string;
  toggle: () => void;
  children: React.ReactNode;
}

export const Modal = ({ isOpen, title, toggle, children }: ModalProps) => (
  <AntModal
    title={title}
    centered
    open={isOpen}
    onCancel={toggle}
    width={600}
    footer={null}
    data-testid='modal'
  >
    {children}
  </AntModal>
);
