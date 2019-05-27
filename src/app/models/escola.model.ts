import { Cidade } from "./cidade.model";

export interface Escola extends Cidade {
  distanciaNre?: string;
  site?: string;
}
