import __services from "./jsons/__services.json";
import a1 from "/images/banks/01.png";
import a2 from "/images/banks/02.png";
import a3 from "/images/banks/03.png";
import a4 from "/images/banks/04.png";
import a5 from "/images/banks/05.png";
import a6 from "/images/banks/06.png";
import a7 from "/images/banks/07.png";
import a8 from "/images/banks/08.png";
import a9 from "/images/banks/09.png";
import a10 from "/images/banks/10.png";
import { PostAuthorType } from "./types";

let as = [a1, a2, a3, a4, a5, a6, a7, a8, a9, a10];

const SERVICES: PostAuthorType[] = __services.map((item, index) => ({
  ...item,
  avatar: as[index],
}));

export { SERVICES };
