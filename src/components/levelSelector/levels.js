import rickandmortyCard from "./img/rickandmorty/rickandmortycard.jpg";
import rickandmortyGame from "./img/rickandmorty/rickandmortyGame.jpg";
import spongebobCard from "./img/spongebob/spongebobcard.jpg";
import spongebobGame from "./img/spongebob/spongebobgame.jpeg";
import mixedCard from "./img/mixed/mixedcard.jpg";
import mixedGame from "./img/mixed/mixedgame.jpg";
import amishcyborg from "./img/rickandmorty/characters/amishcyborg.png";
import ghostinjar from "./img/rickandmorty/characters/ghostinjar.png";
import mrpoopybutthole from "./img/rickandmorty/characters/mrpoopybutthole.png";
import grandma from "./img/spongebob/characters/grandma.png";
import karen from "./img/spongebob/characters/karen.png";
import barnacleboy from "./img/spongebob/characters/barnacleboy.png";
import ash from "./img/mixed/characters/ash.png";
import kermit from "./img/mixed/characters/kermit.png";
import snoo from "./img/mixed/characters/snoo.png";

const levelsArray = [];

const levelFactory = function (id, name, cardImage, image, alt, characters) {
  return { id, name, cardImage, image, alt, characters };
};

const characterFactory = function (id, name, image) {
  const found = false;
};

const rickandmorty = levelFactory(
  "rickandmorty0",
  "Rick and Morty",
  rickandmortyCard,
  rickandmortyGame,
  "Rick and Morty",
  [
    characterFactory(0, "Amish Cyborg", amishcyborg),
    characterFactory(1, "Ghost In Jar", ghostinjar),
    characterFactory(2, "Mr Poopy Butthole", mrpoopybutthole),
  ],
);
const spongebob = levelFactory(
  "spongebob0",
  "SpongeBob SquarePants",
  spongebobCard,
  spongebobGame,
  "SpongeBob SquarePants",
  [
    characterFactory(0, "Grandma Squarepants", grandma),
    characterFactory(1, "Karen Plankton", karen),
    characterFactory(2, "Barnacle Boy", barnacleboy),
  ],
);
const mixed = levelFactory(
  "mixed0",
  "Mixed",
  mixedCard,
  mixedGame,
  "Mixed Characters",
  [
    characterFactory(0, "Ash Ketchum", ash),
    characterFactory(1, "Kermit", kermit),
    characterFactory(2, "Reddit Snoo", snoo),
  ],
);

levelsArray.push(rickandmorty);
levelsArray.push(spongebob);
levelsArray.push(mixed);

export default levelsArray;
