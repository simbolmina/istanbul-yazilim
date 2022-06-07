import __authors from "./jsons/__users.json";
import a1 from "./banks/01.png";
import a2 from "./banks/02.png";
import a3 from "./banks/03.png";
import a4 from "./banks/04.png";
import a5 from "./banks/05.png";
import a6 from "./banks/06.png";
import a7 from "./banks/07.png";
import a8 from "./banks/08.png";
import a9 from "./banks/09.png";
import a10 from "./banks/10.png";
import { PostAuthorType } from "./types";

let as = [a1, a2, a3, a4, a5, a6, a7, a8, a9, a10];

const BANKS: PostAuthorType[] = __authors.map((item, index) => ({
  ...item,
  avatar: as[index],
}));

export { BANKS };
