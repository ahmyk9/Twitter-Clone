import {closeCommentUpModal} from "@/redux/modalSlice";
import Modal from "@mui/material/Modal";
import {
  ChartBarIcon,
  PhotoIcon,
  FaceSmileIcon,
  CalendarIcon,
  MapPinIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import {useDispatch, useSelector} from "react-redux";

const CommentModal = () => {
  const isOpen = useSelector((state) => state.modals.commentModalOpen);
  const dispatch = useDispatch();

  return (
    <>
      <Modal
        className="flex justify-center items-center"
        open={isOpen}
        onClose={() => dispatch(closeCommentUpModal())}>
        <div
          className="w-full h-full 
          relative
          sm:w-[600px] sm:h-[386px]
        rounded-lg bg-black border border-gray-500 text-white
        sm:p-10
        ">
          <div className="absolute w-[2px] h-[77px] bg-gray-500 left-[40px] top-[96px] sm:left-[64px] sm:top-[120px]"></div>
          <div
            onClick={() => dispatch(closeCommentUpModal())}
            className="absolute top-4 cursor-pointer ">
            <XMarkIcon className="w-6 "></XMarkIcon>
          </div>

          <div className="mt-8 flex space-x-3 w-full">
            <div>
              <img
                className="w-12 h-12 rounded-full object-cover "
                src="/assets/pfp.png"
                alt=""
              />
            </div>

            <div>
              <div className="flex space-x-1.5">
                <h1 className="font-bold">Elon Musk</h1>
                <h1 className="text-gray-500">@elon</h1>
              </div>
              <p className="mt-1">This is Elon Musk</p>
              <h1 className="text-gray-500 text-[15px] mt-2">
                Replying to <span className="text-[#1b9bf0]">@username</span>
              </h1>
            </div>
          </div>

          <div className="mt-11">
            <div className="flex space-x-3">
              <div>
                <img
                  className="w-12 h-12 rounded-full object-cover "
                  src="/assets/pfp.png"
                  alt=""
                />
              </div>

              <div className="w-full ">
                <textarea
                  placeholder="Tweet your reply!"
                  className="w-full bg-transparent resize-none text-lg outline-none "></textarea>

                <div className="pt-4 flex justify-between border-t border-gray-700">
                  <div className="flex space-x-0">
                    <div className="iconsAnimation">
                      <PhotoIcon className="h-[22px] text-[#1d9bf0] "></PhotoIcon>
                    </div>
                    <div className="iconsAnimation">
                      <ChartBarIcon className="h-[22px] text-[#1d9bf0] "></ChartBarIcon>
                    </div>
                    <div className="iconsAnimation">
                      <FaceSmileIcon className="h-[22px] text-[#1d9bf0] "></FaceSmileIcon>
                    </div>
                    <div className="iconsAnimation">
                      <CalendarIcon className="h-[22px] text-[#1d9bf0] "></CalendarIcon>
                    </div>
                    <div className="iconsAnimation">
                      <MapPinIcon className="h-[22px] text-[#1d9bf0] "></MapPinIcon>
                    </div>
                  </div>
                  <button
                    className="bg-[#1d9bf0] rounded-full px-4 py-1.5 h-[40px] w-[80px]
                  disabled:bg-opacity-50
                  ">
                    Tweet
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default CommentModal;
