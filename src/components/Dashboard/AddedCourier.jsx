import { ModalOverlay } from '@chakra-ui/react';
import { useState } from 'react'
import AddCourierModal from '../Modal/AddCourierModal';
import IconButton from '../Buttons/IconButton';
import { CiEdit } from "react-icons/ci";
import AddCourierForm from '../Form/AddCourierForm';

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
         <IconButton icon={CiEdit} title="Added New Courier" color="teal" h="40px" w="180px" onClick={openModal}/>
        <AddCourierModal
         isOpen={isOpen}
         onClose={closeModal}
         overlay={overlay}
         modalTitle="Added Courier Information" 
         modalContent={<AddCourierForm />}
         buttonText="Close"
        />
    </div>
  )
}

export default AddedCourier;