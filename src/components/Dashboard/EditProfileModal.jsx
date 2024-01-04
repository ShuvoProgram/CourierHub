/* eslint-disable react/prop-types */
import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, Text } from "@chakra-ui/react";

function EditProfileModal({isOpen, onClose, overlay}) {
  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose}>
    {overlay}
    <ModalContent>
      <ModalHeader>Modal Title</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <Text>Custom backdrop filters!</Text>
      </ModalBody>
      <ModalFooter>
        <Button onClick={onClose}>Close</Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
  )
}

export default EditProfileModal;