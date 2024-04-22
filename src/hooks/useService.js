import React from "react";
import { useState, useEffect } from "react";

const Base = "https://api.themoviedb.org/3/";
const Apikey = "492d218f089fd8c20e9c3a945b482a9f";
const Img = "https://image.tmdb.org/t/p/w500/";
const Lenguaje = "es-CO";

export const useService = () => {
  const { Estrenos, setEstrenos } = useState();
  const { Mejores, setMejores } = useState();
  const { Cartelera, setCartelera } = useState();
  const { Populares, setPopulares } = useState();

  function New_Date(old_date) {
    let months = [
      { id: 1, name: "Enero" },
      { id: 2, name: "Febrero" },
      { id: 3, name: "Marzo" },
      { id: 4, name: "Abril" },
      { id: 5, name: "Mayo" },
      { id: 6, name: "Junio" },
      { id: 7, name: "Julio" },
      { id: 8, name: "Agosto" },
      { id: 9, name: "Septiembre" },
      { id: 10, name: '"Octubre' },
      { id: 11, name: "Noviembre" },
      { id: 12, name: '"Diciembre' },
    ];
    let array_date = old_date.split("-");
    let year = array_date[0];
    let month_id = array_date[1];
    let month = months.find((element) => {
      return element.id == month_id;
    });
    let day = array_date[2];
    let fecha = `${day} de ${month.name} del ${year}`;
    return fecha;
  }

  const getEstrenos = async () => {
    try {
      const response = await fetch(
        `${Base}movie/upcoming?page=1&api_key=${Apikey}&language=${Lenguaje}`
      );
      const estren = await response.json();
      let PelisEst = estren.results
            for(let i=0; i < PelisEst.length; i++) {
                PelisEst[i].release_date = New_Date(PelisEst[i].release_date)
            }
      console.log("estreno", PelisEst);
      setEstrenos(PelisEst);
    } catch (errors) {
      console.error("No se pudo acceder a la API peliculas Estrenos");
    }
  };
  const getBestCalificadas = async () => {
    try {
      const response = await fetch(
        `${Base}movie/now_playing?page=1&api_key=${Apikey}&language=${Lenguaje}`
      );
      const best = await response.json();
      let PelisBest = best.results
            for(let i=0; i < PelisBest.length; i++) {
                PelisBest[i].release_date = New_Date(PelisBest[i].release_date)
            }
      console.log("Best", best.results);
      setMejores(PelisBest);
    } catch (errors) {
      console.error("No se pudo acceder a la API peliculas BestCalificadas");
    }
  };
  const getCartelera = async () => {
    try {
      const response = await fetch(
        `${Base}movie/now_playing?page=1&api_key=${Apikey}&language=${Lenguaje}`
      );
      const cartel = await response.json();
      let PelisCar = cartel.results
            for(let i=0; i < PelisCar.length; i++) {
              PelisCar[i].release_date = New_Date(PelisCar[i].release_date)
            }
      console.log("cartel", PelisCar);
      setCartelera(PelisCar);
    } catch (errors) {
      console.error("No se pudo acceder a la API peliculas Cartelera");
    }
  };
  const getPopulares = async () => {
    try {
      const response = await fetch(
        `${Base}movie/popular?page=1&api_key=${Apikey}&language=${Lenguaje}`
      );
      const popular = await response.json();
      let PelisPop = popular.results
            for(let i=0; i < PelisPop.length; i++) {
              PelisPop[i].release_date = New_Date(PelisPop[i].release_date)
            }
      console.log("Popular", PelisPop);
      setPopulares(PelisPop);
    } catch (errors) {
      console.error("No se pudo acceder a la API peliculas populares");
    }
  };

  useEffect(() => {
    getEstrenos()
    getBestCalificadas()
    getCartelera()
    getPopulares()
  }, []);
  return {
    Estrenos,
    Mejores,
    Cartelera,
    Populares,
  };
};
