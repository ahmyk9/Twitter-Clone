import React, {useState} from "react";
import Modal from "@mui/material/Modal";

const SignUpModal = () => {
//   const [isOpen, setIsOpen] = useState(true);

//   function handleClose() {
//     setIsOpen(false);
//   }
//   function handleOpen() {
//     setIsOpen(true);
//   }

    const isOpen = useSelector(state=> state.modals.signUpModalOpen)
    console.log(isOpen)


  return (
    <>
      <button
      // onClick={handleOpen}
      className="hover:bg-black  m-1 hover:text-white  bg-white rounded-3xl text-black text-sm font-bold  h-[40px] w-[160px]">
        Sign Up
      </button>
      <Modal open={isOpen} onClose={handleClose}
      className="flex justify-center items-center"
      >
        <div className="w-[400px] h-[200px] bg-white">Sign up Over here!</div>
      </Modal>
    </>
  );
};

export default SignUpModal;
