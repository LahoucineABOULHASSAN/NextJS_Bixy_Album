import { formatNum } from "../../utilities/main";

const heart = (
  <svg
    className="bi bi-heart-fill inline-block fill-current text-red-500"
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="currentColor"
    viewBox="0 0 16 16"
  >
    <path
      fill-rule="evenodd"
      d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
    />
  </svg>
);

const view = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="currentColor"
    className="bi bi-eye-fill fill-current text-gray-400"
    viewBox="0 0 16 16"
  >
    <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
    <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
  </svg>
);

const download = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="currentColor"
    className="bi bi-cloud-arrow-down-fill fill-current text-green-600"
    viewBox="0 0 16 16"
  >
    <path d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2zm2.354 6.854-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 9.293V5.5a.5.5 0 0 1 1 0v3.793l1.146-1.147a.5.5 0 0 1 .708.708z" />
  </svg>
);

const ImageBody = ({ image }) => {
  const likes = formatNum(image.likes);
  const views = formatNum(image.views);
  const downloads = formatNum(image.downloads);
  return (
    <ul className="border z-20 rounded-lg border-transparent bg-gray-100 grid grid-cols-3 divide-x divide-gray-300 w-full">
      <li className="text-md flex flex-col items-center cursor-default hover:bg-red-100 transition duration-700 ease py-2">
        {heart}
        <span className="text-gray-500 mt-1">{likes}</span>
      </li>
      <li className="text-md flex flex-col items-center cursor-default hover:bg-gray-200 transition duration-700 ease py-2">
        {view}
        <span className="text-gray-500 mt-1">{views}</span>
      </li>
      <li className="text-md flex flex-col items-center cursor-default hover:bg-green-100 transition duration-700 ease py-2">
        {download}
        <span className="text-gray-500 mt-1">{downloads}</span>
      </li>
    </ul>
  );
};

export default ImageBody;
