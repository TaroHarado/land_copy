import {
  NotificationType,
  useNotificationContext,
} from "@/src/app/providers/NotificationProvider";
import { Modal } from "@/src/shared/ui/Modal";
import { EModalPosition } from "@/src/shared/ui/Modal/Modal";
import { FormProvider } from "react-hook-form";
import { IEntry } from "../../../api/query/getLeaderBoard";
import { Header, TraiderTableInfo } from "../components";
import { useTraiderInfoForm } from "../hooks/useTraiderInfoForm";
import styles from "./TraiderInfoModal.module.css";

interface TraiderInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeUser: IEntry;
}

export const TraiderInfoModal = ({
  isOpen,
  onClose,
  activeUser,
}: TraiderInfoModalProps) => {
  const { addNotification } = useNotificationContext();
  const { traiderInfoForm } = useTraiderInfoForm();

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      position={EModalPosition.MODAL_POSITION_CENTER}
      className={{ modalContentStyles: styles.activeUser }}
    >
      <FormProvider {...traiderInfoForm}>
        <div className={styles.header}>
          <Header activeUser={activeUser} onClose={onClose} />
        </div>
        <div className={styles.mainInfo}>
          <TraiderTableInfo activeUser={activeUser} />
        </div>
        <button
          onClick={() =>
            addNotification({
              message: "Your referral code updated successfully to bibaboba2",
              type: NotificationType.SUCCESS,
            })
          }
        >
          Your referral code updated successfully to bibaboba2
        </button>
      </FormProvider>
    </Modal>
  );
};
