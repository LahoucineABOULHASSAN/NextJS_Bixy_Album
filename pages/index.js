import Head from "next/head";
import { useState } from "react";
import Masonry from "react-masonry-css";
import { ImageCard, ImageModal, SearchForm } from "../components";

const URL = `https://pixabay.com/api/?key=${process.env.NEXT_PUBLIC_BIXBAY_API_KEY}&image_type=photo&per_page=200`;

const breakPoints = {
  default: 5,
  1100: 4,
  700: 2,
  500: 1,
};

export const getStaticProps = async () => {
  const response = await fetch(URL);
  const data = await response.json();

  return {
    props: { images: data.hits },
  };
};

export default function Home({ images }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleFilter = (term) => {
    setSearchTerm(term.toLowerCase());
  };

  const alert = (
    <div className="flex flex-row items-center justify-center rounded-2xl w-full sm:w-11/12 text-xl sm:text-2xl text-center capitalize bg-pink-200 p-4 md:p-8 my-8 mx-auto">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        fill="currentColor"
        className="bi bi-exclamation-octagon inline-block fill-current text-pink-700 mr-2 md:mr-8"
        viewBox="0 0 16 16"
      >
        <path d="M4.54.146A.5.5 0 0 1 4.893 0h6.214a.5.5 0 0 1 .353.146l4.394 4.394a.5.5 0 0 1 .146.353v6.214a.5.5 0 0 1-.146.353l-4.394 4.394a.5.5 0 0 1-.353.146H4.893a.5.5 0 0 1-.353-.146L.146 11.46A.5.5 0 0 1 0 11.107V4.893a.5.5 0 0 1 .146-.353L4.54.146zM5.1 1 1 5.1v5.8L5.1 15h5.8l4.1-4.1V5.1L10.9 1H5.1z" />
        <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z" />
      </svg>
      This picture is not on our list
    </div>
  );
  const loading = (
    <div className="my-12">
      <h2 className="text-4xl w-2/4 mx-auto text-center animate-ping">
        Loading ...
      </h2>
    </div>
  );

  const data =
    images &&
    images
      .filter((image) => {
        return image.tags.toLowerCase().includes(searchTerm);
      })
      .map((image) => <ImageCard key={image.id} image={image} />);

  return (
    <div id="main" className="bg-gray-50 w-full px-4 py-10">
      <Head>
        <title>BixyAlbum | Home Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {!images && loading}
      {data && (
        <section className="w-full md:w-10/12 mx-auto">
          <SearchForm handleFilter={handleFilter} />
          <ImageModal />
          {!data.length && alert}
          <section className="container mt-10 w-full">
            <Masonry
              breakpointCols={breakPoints}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column"
            >
              {data}
            </Masonry>
          </section>
        </section>
      )}
    </div>
  );
}
