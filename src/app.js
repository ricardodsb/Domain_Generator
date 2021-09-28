/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#generator").addEventListener("click", () => {
    document.querySelector("#domain").innerHTML = generateDomain();
  });
};
const generateDomain = () => {
  let pronoun = ["the", "our", "my"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let dom = [".com", ".es", ".net"];
  let result = [];
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let y = 0; y < noun.length; y++) {
        for (let x = 0; x < dom.length; x++) {
          result.push(pronoun[i] + adj[j] + noun[y] + dom[x]);
        }
      }
    }
  }
  let index = Math.floor(Math.random() * result.length);
  return result[index];
};
