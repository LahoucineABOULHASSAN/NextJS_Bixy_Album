import Head from "next/head";
import Masonry from "react-masonry-css";
import { ImageCard } from "../components";

const URL = `https://pixabay.com/api/?key=${process.env.NEXT_PUBLIC_BIXBAY_API_KEY}&image_type=photo`;

export const getStaticProps = async () => {
  const response = await fetch(URL);
  const data = await response.json();

  return {
    props: { images: data.hits },
  };
};

export default function Home({ images }) {
  const breakPoints = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  const img = images[0];
  return (
    <div>
      <Head>
        <title>BixyAlbum</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="container p-8">
        <ImageCard image={img} />
      </section>
    </div>
  );
}
