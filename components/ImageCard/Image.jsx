const Image = ({ image }) => {
  return (
    <a href={image.largeImageURL} target="_blank">
      <img
        className="w-full  rounded-t-lg"
        src={image.webformatURL}
        alt={image.user}
      />
    </a>
  );
};

export default Image;
