/* eslint-disable react/prop-types */
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader } from "@chakra-ui/react";
import PrimaryButton from '../Buttons/Button';

function CourierHubModal({ isOpen, onClose, overlay, modalTitle, modalContent, modalSize, buttonTitle, buttonWidth, buttonHeight }) {
  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose} size={modalSize}>
      {overlay}
      <ModalContent>
        <ModalHeader>{modalTitle}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
        {modalContent}
        </ModalBody>
        <ModalFooter>
          <PrimaryButton title={buttonTitle} h={buttonHeight} w={buttonWidth} />
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default CourierHubModal