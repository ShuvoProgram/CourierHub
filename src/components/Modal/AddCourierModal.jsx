/* eslint-disable react/prop-types */
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader } from "@chakra-ui/react";

function AddCourierModal({ isOpen, onClose, overlay, modalTitle, modalContent }) {
  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose} size='xl'>
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

export default AddCourierModal