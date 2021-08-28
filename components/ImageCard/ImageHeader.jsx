const fullScreen = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    class="bi bi-arrows-fullscreen fill-current text-blue-400"
    viewBox="0 0 16 16"
  >
    <path
      fill-rule="evenodd"
      d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344 0a.5.5 0 0 1 .707 0l4.096 4.096V11.5a.5.5 0 1 1 1 0v3.975a.5.5 0 0 1-.5.5H11.5a.5.5 0 0 1 0-1h2.768l-4.096-4.096a.5.5 0 0 1 0-.707zm0-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707zm-4.344 0a.5.5 0 0 1-.707 0L1.025 1.732V4.5a.5.5 0 0 1-1 0V.525a.5.5 0 0 1 .5-.5H4.5a.5.5 0 0 1 0 1H1.732l4.096 4.096a.5.5 0 0 1 0 .707z"
    />
  </svg>
);

const ImageHeader = ({ image }) => {
  return (
    <div className="hidden z-10 absolute bottom-0 left-0 bg-black bg-opacity-60 flex-row items-center justify-between w-full py-3 px-4">
      <div className="flex flex-row items-center">
        <img
          className="w-10 h-10 rounded-full"
          src={image.userImageURL}
          alt={image.user}
        />
        <h3 className="text-md text-gray-300 mx-3">{image.user}</h3>
      </div>
      <span className="cursor-pointer bg-blue-100 hover:bg-blue-200 transition duration-700 ease p-1 rounded">
        {fullScreen}
      </span>
    </div>
  );
};

export default ImageHeader;
