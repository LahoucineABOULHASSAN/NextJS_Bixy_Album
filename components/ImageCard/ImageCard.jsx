import Image from "./Image";
import ImageBody from "./ImageBody";
import ImageTags from "./ImageTags";

const ImageCard = ({ image }) => {
  return (
    <div className="shadow-md rounded-lg  transition duration-700 ease pb-1">
      <Image image={image} />
      <div className="relative bg-white z-20 p-4">
        <ImageBody image={image} />
        <ImageTags data={image.tags} />
      </div>
    </div>
  );
};

export default ImageCard;
