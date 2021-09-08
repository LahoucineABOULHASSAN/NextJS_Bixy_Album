import { closeModal } from "../../utilities/main";

const ImageModal = () => {
  return (
    <div
      id="myModal"
      className="modal hidden fixed top-0 left-0 z-40 w-full h-full overflow-auto py-12"
    >
      <div className="flex flex-col items-center justify-center h-full">
        <h1
          className="text-4xl font-bold text-right text-gray-300 hover:text-red-500 w-11/12 mx-auto cursor-pointer mb-8"
          onClick={closeModal}
        >
          &times;
        </h1>
        <img
          id="myImg"
          className="modal-content block w-11/12 mx-auto"
          alt="modal"
        />
      </div>
    </div>
  );
};

export default ImageModal;
