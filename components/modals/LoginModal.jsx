import React, {useState} from "react";
import Modal from "@mui/material/Modal";
import {useDispatch, useSelector} from "react-redux";
import {closeLogInUpModal, openLogInUpModal} from "@/redux/modalSlice";
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "@/firebase/firebase";

const LoginUpModal = () => {
  const isOpen = useSelector((state) => state.modals.loginUpModalOpen);
  const dispatch = useDispatch();
  console.log(isOpen);

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")



  async function handleSignIn(){
    await signInWithEmailAndPassword(auth, email, password)
  }

  async function handleGuestSignIn(){
    await signInWithEmailAndPassword(auth, "guest98083370@gmail.com", "guest98083370")
  }

  return (
    <>
      <button
        onClick={() => dispatch(openLogInUpModal())}
        className="hover:bg-black  m-1 hover:text-white  bg-white rounded-3xl text-black text-sm font-bold  h-[40px] w-[160px]">
        Log In
      </button>
      <Modal
        open={isOpen}
        onClose={() => dispatch(closeLogInUpModal())}
        className="flex justify-center items-center">
        <div
          className="w-[90%] h-[600px] bg-black text-white md:w-[560px]
         md:h-[600px] rounded-lg border border-gray-700
         flex justify-center">
          <div className="w-[90%] mt-8 flex flex-col">
            
            <h1 className=" mt-4 font-bold text-4xl">Sign in to your account</h1>
     
            <input
              className="h-10 mt-8  rounded-md bg-transparent border border-gray-700 p-6 "
              placeholder="Email"
              type={"email"}
              onChange={(event)=>setEmail(event.target.value)}
              />
            <input
              className="h-10 mt-8  rounded-md bg-transparent border border-gray-700 p-6 "
              placeholder="Password"
              type={"password"}
              onChange={(event)=>setPassword(event.target.value)}
            />
            <button
            onClick={handleSignIn}
            className="rounded-md bg-white mt-8 text-black w-full font-bold text-lg 
            p-2">
              Sign In 
            </button>
            <h1 className="text-center m-8 font-bold text-lg">or</h1>
            <button
               onClick={handleGuestSignIn}
              className="rounded-md bg-white text-black w-full font-bold text-lg 
             p-2">
              Sign in as Guest
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default LoginUpModal;
