import { ModalOverlay } from '@chakra-ui/react';
import { useState } from 'react'
import AddCourierModal from './AddCourierModal';
import AddedCourierForm from './AddedCourierForm';
import IconButton from '../Buttons/IconButton';
import { CiEdit } from "react-icons/ci";

function AddedCourier() {
    const [isOpen, setIsOpen] = useState(false);

  
    const OverlayOne = () => (
        <ModalOverlay
          bg='blackAlpha.300'
          backdropFilter='blur(10px) hue-rotate(90deg)'
        />
      )

      const openModal = () => {
        setOverlay(<OverlayOne/>)
      setIsOpen(true);
    };
  
    const closeModal = () => {
      setIsOpen(false);
    };

     
      const [overlay, setOverlay] = useState(<OverlayOne />)
    
  return (
    <div>
         <IconButton icon={CiEdit} title="Edit" color="teal" h="40px" w="200px" onClick={openModal}/>
        <AddCourierModal
         isOpen={isOpen}
         onClose={closeModal}
         overlay={overlay}
         modalTitle="Added Courier Information" 
         modalContent={<AddedCourierForm />}
         buttonText="Close"
        />
    </div>
  )
}

export default AddedCourier