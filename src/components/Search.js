import { useState } from "react";
import data from "../assets/data/data.json";
import Line from "./Line";

const Search = (props) => {
  /********************************************************************************************************************************************
                                                  DEBUT GESTION DE MES HOOK useState                                                          *
   ********************************************************************************************************************************************/

  const [input, setInput] = useState(""); //mon hook pour stocker et changer la valeur de ma recherche
  const [dataJson, setDataJson] = useState(data); // je passe mon fichier JSON dans mon useState
  const [filteredResults, setFilteredResults] = useState([]); // je crée un useState pour stocker mes résultats de la recherche

  /*********************************************************************************************************************************************
                                                  FIN GESTION DE MES HOOK useState                                                               *
   ***********************************************************************************************************************************************/

  /*************************************************************************************************************************************************
                                                  DEBUT FONCTION QUI :
                                    - stocke la valeur d'état
                                    - modifie la valeur d'état
                                    - filtre le fichier json (clé keywords) selon la valeur d'état dans une variable filteredData
                                    - assigne le résultat au changment d'état setFilteredResults
                                          => filteredData si résultat, sinon dataJson                                                                             *
   ***********************************************************************************************************************************************/
  // Variable contenant la fonction déclenchée à la saisie sur le onChange
  const searchItems = (value) => {
    // contenu de ma fonction qui récupère la valeur de recherche saisie et la passe à la fonction qui change son état
    //console.log("valeur de recherche =>", value);
    setInput(value); // je passe ma valeur au changement d'état dans le hook useState
    if (input !== "") {
      // s'il y a une saisie, je filtre mon objet data (fichier data.json) sur la valeur saisie 'input' en comparant avec les mots-clés
      const filteredData = dataJson.filter((item) => {
        return Object.values(item.keywords)
          .join("")
          .toLowerCase()
          .includes(input.toLowerCase());
      });
      setFilteredResults(filteredData); // je mets le résultat de ma recherche dans l'état 'filteredData'
      //console.log("filteredData =>", filteredData);
    } else {
      setDataJson(dataJson.slice(0, 20)); // sinon mon résultat correspond au 20 premières lignes du fichier data.json
      console.log("dataJson =>", dataJson);
    }
  };
  /*************************************************************************************************************************************************
                                                  FIN FONCTION                                                                *
   ***********************************************************************************************************************************************/

  // CE QUE RETOURNE MON COMPOSANT => UN TITRE, UN INPUT ET DANS UNE TERNAIRE LE COMPOSANT LINE (CONTENU DU FICHIER data.json OU RESULTAT DE LA RECHERCHE
  return (
    <div>
      <p>
        <span>😎</span>Emoji search<span>😎</span>
      </p>
      <input
        type="text"
        placeholder="what emoji are you looking for ?"
        value={input} //stockage de la valeur
        onChange={(event) => {
          // appel de la fonction searchItems lors de l'évènement onChange au niveau de la saisie
          searchItems(event.target.value);
        }}
      ></input>

      {setInput.length >= 0
        ? filteredResults.map((item, index) => {
            return <Line key={index} title={item.title} symbol={item.symbol} />;
          })
        : dataJson.map((item, i) => {
            return <Line key={i} title={item.title} symbol={item.symbol} />;
          })}
    </div>
  );
};

export default Search;
