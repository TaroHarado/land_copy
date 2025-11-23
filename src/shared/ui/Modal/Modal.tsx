import React, { FC, ReactNode, useEffect, useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";
import classNames from "../../lib/classNames";
import styles from "./Modal.module.css";

export enum EModalPosition {
  MODAL_POSITION_CENTER = "modal_position_center",
  MODAL_POSITION_RIGHT = "modal_position_right",
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: {
    modalOverlayStyles?: string;
    modalContentStyles?: string;
  };
  disableClose?: boolean;
  position?: EModalPosition;
}

export const Modal: FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  className,
  disableClose,
  position,
}) => {
  const [isStartAnimation, setIsStartAnimation] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  useLayoutEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      const timer = setTimeout(() => setIsStartAnimation(true), 10);
      document.body.style.overflow = "hidden";
      return () => clearTimeout(timer);
    } else {
      setIsStartAnimation(false);
      const timer = setTimeout(() => {
        setShouldRender(false);
        document.body.style.overflow = "auto";
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  useEffect(() => {
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!disableClose && e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!shouldRender) return null;

  const content = (
    <div
      className={classNames(styles.overlay, className?.modalOverlayStyles, {
        [styles.open]: isStartAnimation,
      }, className?.modalOverlayStyles)}
      onClick={handleOverlayClick}
    >
      <div
        className={classNames(
          styles.modalContent,
          className?.modalContentStyles,
          position && styles[position],
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );

  return createPortal(content, document.body);
};
