import ImageHeader from "./ImageHeader";

const Image = ({ image }) => {
  return (
    <div className="relative image-header">
      <a href={image.largeImageURL} target="_blank">
        <img
          className="w-full rounded-t-lg"
          src={image.webformatURL}
          alt={image.user}
        />
      </a>
      <ImageHeader image={image} />
    </div>
  );
};

export default Image;
