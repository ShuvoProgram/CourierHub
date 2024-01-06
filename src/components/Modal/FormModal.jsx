/* eslint-disable react/prop-types */
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader } from "@chakra-ui/react";

function FormModal({ isOpen, onClose, overlay, modalTitle, modalContent, modalSize }) {
  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose} size={modalSize}>
      {overlay}
      <ModalContent>
        <ModalHeader>{modalTitle}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
        {modalContent}
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default FormModal