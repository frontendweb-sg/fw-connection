import { useRef, memo, forwardRef, useImperativeHandle } from "react";
import { useToggle } from "@/hooks/useToggle";
import classNames from "classnames";

export interface IModalProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  label: string;
}

export type modalRef = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onToggle: () => void;
};

const Modal = forwardRef<modalRef, IModalProps>(
  ({ children, label, ...rest }, ref) => {
    const mRef = useRef<HTMLDivElement>(null);
    const { isOpen, onOpen, onToggle, onClose } = useToggle();

    useImperativeHandle(ref, () => ({
      isOpen,
      onOpen,
      onToggle,
      onClose,
    }));

    const classes = classNames("modal fade", { show: isOpen });
    return isOpen ? (
      <>
        <div
          ref={mRef}
          className={classes}
          {...rest}
          style={isOpen ? { display: "block", paddingRight: "17px" } : {}}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <ModalHeader>{label}</ModalHeader>
              <div className="modal-body">{children}</div>
            </div>
          </div>
        </div>
        <div className="modal-backdrop fade show" onClick={onClose}></div>
      </>
    ) : (
      <></>
    );
  }
);

interface IModalHeaderProps extends React.HtmlHTMLAttributes<HTMLDivElement> {}
const ModalHeader = ({ children }: IModalHeaderProps) => {
  return (
    <div className="modal-header">
      <h1 className="modal-title fs-5" id="exampleModalLabel">
        {children}
      </h1>
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="modal"
        aria-label="Close"
      ></button>
    </div>
  );
};
export default memo(Modal);
