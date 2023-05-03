import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Navbarcomponents from "@/components/Navbarcomponents";
import Foootercomponents from "@/components/Foootercomponents";
import Araticlecomponents from "@/components/Araticlecomponents";
import Cardcomponents from "@/components/Cardcomponents";
import { API_KEY } from "@/lib";
import { BASE_PATH } from "@/lib";

export default function Home({ movies }) {
  const data = movies?.results || [];
  console.log(data);
  return (
    <>
      <div className="container">
        <h1>Home Page</h1>
        <div className="d-flex justify-content-evenly flex-wrap">
          {data.length > 0 && data.map((movies) => <Cardcomponents key =
          {movies.id} imagePath={movies.backdrop_path
          } title={movies.title}  id={movies.id}/>)}
        </div>
      </div>
      <Foootercomponents />
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
