import __taxonomies from "./jsons/__taxonomies.json";
import __taxonomiesBank from "./jsons/__taxonomies_banks.json";
import __taxonomiesEfatura from "./jsons/__taxonomies_efatura.json";
import __taxonomiesSanalPos from "./jsons/__taxonomies_sanal_pos.json";

import { TaxonomyType } from "./types";

const DEMO_CATEGORIES: TaxonomyType[] = __taxonomies.map((item) => ({
  ...item,
  taxonomy: "category",
}));

const BANKS: TaxonomyType[] = __taxonomiesBank.map((item) => ({
  ...item,
  taxonomy: "category",
}));
const E_FATURA: TaxonomyType[] = __taxonomiesEfatura.map((item) => ({
  ...item,
  taxonomy: "category",
}));
const SANAL_POS: TaxonomyType[] = __taxonomiesSanalPos.map((item) => ({
  ...item,
  taxonomy: "category",
}));

const DEMO_TAGS: TaxonomyType[] = __taxonomies.map((item) => ({
  ...item,
  taxonomy: "tag",
}));

export { DEMO_CATEGORIES, DEMO_TAGS, BANKS, E_FATURA, SANAL_POS };
