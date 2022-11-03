import { useState } from "react";
import data from "../assets/data/data.json";

const Search = (props) => {
  const [searchInput, setSearchInput] = useState(""); //mon hook pour stocker et changer la valeur de moa recherche

  const searchItems = (value) => {
    // ma fonction qui récupère la valeur de recherche saisie et la passe à la fonction qui change son état
    console.log("valeur de recherche =>", value);
    setSearchInput(value);

    //   {data.map((element) => {
    //     return (
    //       <Section category={element.category} tabImages={element.images} /> //on mets en props 1 catégorie et un tableau d'images dans la section
    //     );
  };
  return (
    <div>
      <p>
        <span>😎</span>Emoji search<span>😎</span>
      </p>
      <input
        type="text"
        placeholder="Recherche..."
        value={searchInput} //stockage de la valeur
        onChange={(event) => {
          // appel de la fonction searchItems lors de l'évènement onChange au niveau de la saisie
          searchItems(event.target.value);
        }}
      ></input>
    </div>
  );
};

export default Search;
