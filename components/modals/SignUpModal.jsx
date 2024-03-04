import React, {useEffect, useState} from "react";
import Modal from "@mui/material/Modal";
import {useDispatch, useSelector} from "react-redux";
import {closeSignUpModal, openSignUpModal} from "@/redux/modalSlice";
import {createUserWithEmailAndPassword, onAuthStateChanged} from "firebase/auth";
import {auth} from "@/firebase/firebase";

const SignUpModal = () => {
  const isOpen = useSelector((state) => state.modals.signUpModalOpen);
  const dispatch = useDispatch();
  console.log(isOpen);

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  async function handleSignUp(event) {
    const userCredentials = await createUserWithEmailAndPassword(auth, email, password)

  }


  

  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
      console.log(currentUser)
    })
  })

  return (
    <>
      <button
        onClick={() => dispatch(openSignUpModal())}
        className="hover:bg-black  m-1 hover:text-white  bg-white rounded-3xl text-black text-sm font-bold  h-[40px] w-[160px]">
        Sign Up
      </button>
      <Modal
        open={isOpen}
        onClose={() => dispatch(closeSignUpModal())}
        className="flex justify-center items-center">
        <div
          className="w-[90%] h-[600px] bg-black text-white md:w-[560px]
         md:h-[600px] rounded-lg border border-gray-700
         flex justify-center">
          <div className="w-[90%] mt-8 flex flex-col">
            <button
              className="rounded-md bg-white text-black w-full font-bold text-lg 
             p-2">
              Sign in as Guest
            </button>
            <h1 className="text-center mt-4 font-bold text-lg">or</h1>
            <h1 className=" mt-4 font-bold text-4xl">Create your account</h1>
            <input
              className="h-10 mt-8 rounded-md bg-transparent border border-gray-700 p-6 "
              placeholder="Full Name"
              type={"text"}
            />
            <input
              className="h-10 mt-8  rounded-md bg-transparent border border-gray-700 p-6 "
              placeholder="Email"
              type={"email"}
              onChange={(event) => setEmail(event.target.value)}
            />
            <input
              className="h-10 mt-8  rounded-md bg-transparent border border-gray-700 p-6 "
              placeholder="Password"
              type={"password"}
              onChange={(event) => setPassword(event.target.value)}
            />
            <button
              onClick={handleSignUp}
              className="rounded-md bg-white mt-8 text-black w-full font-bold text-lg 
             p-2">
              Create account
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default SignUpModal;
