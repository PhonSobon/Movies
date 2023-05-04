
import Araticlecomponents from "@/components/Araticlecomponents";
import Cardcomponents from "@/components/Cardcomponents";
import { API_KEY } from "@/lib";
import { BASE_PATH } from "@/lib";

export default function Home({ movies }) {
  const data = movies?.results || [];
  console.log(data);
  return (
    <>
      <h1 className="m-5">Movie</h1>
      <div className="container">
        <h1 className=" text-center text-white">Movie</h1>
        <div className="d-flex justify-content-evenly flex-wrap ">
          {data.length > 0 && data.map((movies) => <Cardcomponents key =
          {movies.id} imagePath={movies.backdrop_path
          } title={movies.title}  id={movies.id}/>)}
        </div>
      </div>
    </>
  );
}

// getServersidProps

export async function getServerSideProps(context) {
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=1`;
  const res = await fetch(url);
  if (!res) {
    console.log("Error");
  }
  const movies = await res.json();
  if (!movies) {
    console.log("Error");
    return {
      props: {
        movies: [],
      },
    };
  }
  return {
    props: {
      movies,
    },
  };
}

