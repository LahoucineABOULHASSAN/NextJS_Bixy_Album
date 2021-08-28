import Image from "./Image";
import ImageBody from "./ImageBody";
import ImageHeader from "./ImageHeader";

const ImageCard = ({ image }) => {
  return (
    <div className="shadow-md rounded-lg bg-gray-50 hover:bg-transparent  transition duration-700 ease pb-1">
      <Image image={image} />
      <ImageHeader image={image} />
      <ImageBody image={image} />
    </div>
  );
};

export default ImageCard;
