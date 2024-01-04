import { ModalOverlay, useDisclosure } from "@chakra-ui/react";
import IconButton from "../../components/Buttons/IconButton";
import { CiEdit, CiLogout } from "react-icons/ci";
import React from "react";
import EditProfileModal from "../../components/Dashboard/EditProfileModal";

function Profile() {
    const OverlayOne = () => (
        <ModalOverlay
          bg='blackAlpha.300'
          backdropFilter='blur(10px) hue-rotate(90deg)'
        />
      )
      const { isOpen, onOpen, onClose } = useDisclosure()
      const [overlay, setOverlay] = React.useState(<OverlayOne />)
    return (
        <div
            className=" flex items-center justify-center min-h-screen w-full">
            <section
                className="w-full max-w-[530px] relative rounded-[6px] shadow-lg backdrop-blur-sm mx-2 overflow-hidden">

                <a href="https://ionel.olariu.dev" target="_blank" className="" rel="noreferrer">
                    <img src="https://avatars.githubusercontent.com/u/25511379?v=4" className="rounded-full w-[120px] mx-auto my-10 p-0 border-[6px] box-content border-[#231f39] shadow-[0px_27px_16px_-11px_rgba(31,27,56,0.25)] transition-all duration-150 ease-in hover:scale-105 cursor-pointer slide-in-elliptic-top-fwd" />
                </a>
                <h1 className="text-xl font-bold text-center">Shuvo Khan</h1>
                <small className="block my-1 text-center">Khan@gmail.com</small>
                <p className="mt-5 text-center">Delivery Man</p>
                <div className="flex items-center justify-center gap-2 w-[80%] mx-auto mt-5 mb-10">
                    <IconButton icon={CiEdit} title="Edit" color="teal" h="40px" w="200px" onClick={() => {
          setOverlay(<OverlayOne />)
          onOpen()
        }}/>
                    <IconButton icon={CiLogout} title="Log Out" color="red" h="40px" w="200px" />

                </div>
                <div className="p-4 text-sm font-semibold backdrop-blur-sm">
                    <p className="text-xl text-center">Information</p>
                    <div className="overflow-x-auto mt-6">

                        <table className="table-auto border-collapse w-full">
                            <thead>
                                <tr className="rounded-lg text-sm font-medium text-gray-700 text-left">
                                    <th className="px-4 py-2 bg-gray-200 ">Title</th>
                                    <th className="px-4 py-2 ">Details</th>
                                    
                                </tr>
                            </thead>
                            <tbody className="text-sm font-normal text-gray-700">
                                <tr className="hover:bg-gray-100 border-b border-gray-200 py-10">
                                    <td className="px-4 py-4">Email</td>
                                    <td className="px-4 py-4">Khan@gmail.com</td>
                                </tr>
                                <tr className="hover:bg-gray-100 border-b border-gray-200 py-4">
                                    
                                    <td className="px-4 py-4">Contact Number</td>
                                    <td className="px-4 py-4">112</td>
                                </tr>
                                <tr className="hover:bg-gray-100 border-b border-gray-200 py-4">
                                    
                                    <td className="px-4 py-4">Location</td>
                                    <td className="px-4 py-4">1,280</td>
                                </tr>
                                <tr className="hover:bg-gray-100 border-b border-gray-200 py-4">
                                    
                                    <td className="px-4 py-4">Country</td>
                                    <td className="px-4 py-4">1,280</td>
                                </tr>
                                <tr className="hover:bg-gray-100 border-b border-gray-200 py-4">
                                    
                                    <td className="px-4 py-4">State</td>
                                    <td className="px-4 py-4">1,280</td>
                                </tr>
                                <tr className="hover:bg-gray-100 border-b border-gray-200 py-4">
                                    
                                    <td className="px-4 py-4">City</td>
                                    <td className="px-4 py-4">1,280</td>
                                </tr>
                                <tr className="hover:bg-gray-100 border-b border-gray-200 py-4">
                                    
                                    <td className="px-4 py-4">Pin Code</td>
                                    <td className="px-4 py-4">1,280</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
            {
                <EditProfileModal isOpen={isOpen} onClose={onClose} overlay={overlay}/>
            }
        </div>
    )
}

export default Profile