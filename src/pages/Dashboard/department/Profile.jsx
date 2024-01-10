import { ModalOverlay } from "@chakra-ui/react";
import { useState } from "react";
import { CiEdit, CiLogout } from "react-icons/ci";
import IconButton from "../../../components/Buttons/IconButton";
import EditProfileModal from "../../../components/Modal/EditProfileModal";
import EditProfileForm from "../../../components/Form/EditProfileForm";
import { useSelector } from "react-redux";


function DProfile() {
    const [isOpen, setIsOpen] = useState(false);
    const departmentInitialValues = useSelector((state) => state.auth.department);
    const {name, registrationNumber, state, city, contactEmail, contactNumber, country, location, pinCode} = departmentInitialValues;
    console.log(departmentInitialValues)

    
  
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
    <div className="h-full bg-gray-200 p-8">
    <div className="bg-white rounded-lg shadow-xl pb-8">
        
        <div className="w-full h-[250px]">
            <img src="https://vojislavd.com/ta-template-demo/assets/img/profile-background.jpg" className="w-full h-full rounded-tl-lg rounded-tr-lg" />
        </div>
        <div className="flex flex-col items-center -mt-20">
            <img src="https://vojislavd.com/ta-template-demo/assets/img/profile.jpg" className="w-40 border-4 border-white rounded-full" />
            <div className="flex items-center space-x-2 mt-2">
                {/* <p className="text-2xl">{name}</p> */}
                <span className="bg-blue-500 rounded-full p-1" title="Verified">
                    <svg xmlns="http://www.w3.org/2000/svg" className="text-gray-100 h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path>
                    </svg>
                </span>
            </div>
            {/* <p className="text-gray-700">Registration Number #{registrationNumber}</p>
            <p className="text-sm text-gray-500">{country}</p> */}
        </div>
        <div className="flex-1 flex flex-col items-center lg:items-center justify-end px-8 mt-2">
            <div className="flex items-center space-x-4 mt-2">
            <IconButton icon={CiEdit} title="Edit" color="teal" h="40px" w="150px" onClick={openModal}/>
                <IconButton icon={CiLogout} title="Log Out" color="red" h="40px" w="150px" />
            </div>
        </div>
    </div>

    {/* <div className="my-4 flex flex-col 2xl:flex-row space-y-4 2xl:space-y-0 2xl:space-x-4">
        <div className="w-full flex flex-col 2xl:w-1/3">
            <div className="flex-1 bg-white rounded-lg shadow-xl p-8">
                <h4 className="text-xl text-gray-900 font-bold">Personal Info</h4>
                <ul className="mt-2 text-gray-700">
                    <li className="flex border-y py-2">
                        <span className="font-bold w-24">Full name:</span>
                        <span className="text-gray-700">{name}</span>
                    </li>
                    <li className="flex border-b py-2">
                        <span className="font-bold w-24">Registration Number:</span>
                        <span className="text-gray-700">{registrationNumber}</span>
                    </li>
                    <li className="flex border-b py-2">
                        <span className="font-bold w-24">Email:</span>
                        <span className="text-gray-700">{contactEmail}</span>
                    </li>
                    <li className="flex border-b py-2">
                        <span className="font-bold w-24">Contact Number:</span>
                        <span className="text-gray-700">{contactNumber}</span>
                    </li>
                    <li className="flex border-b py-2">
                        <span className="font-bold w-24">Address:</span>
                        <span className="text-gray-700">{location}</span>
                    </li>
                    <li className="flex border-b py-2">
                        <span className="font-bold w-24">Country:</span>
                        <span className="text-gray-700">{country}</span>
                    </li>
                    <li className="flex border-b py-2">
                        <span className="font-bold w-24">State:</span>
                        <span className="text-gray-700">{state}</span>
                    </li>
                    <li className="flex border-b py-2">
                        <span className="font-bold w-24">city:</span>
                        <span className="text-gray-700">{city}</span>
                    </li>
                    <li className="flex border-b py-2">
                        <span className="font-bold w-24">Pin Code:</span>
                        <span className="text-gray-700">{pinCode}</span>
                    </li>
                    
                </ul>
            </div>
            
        </div>
    </div> */}
    <EditProfileModal
        isOpen={isOpen}
        onClose={closeModal}
        overlay={overlay}
        modalTitle="Update Profile Information" 
        modalContent={<EditProfileForm />}
        buttonText="Close"
      />
</div>
  )
}

export default DProfile;