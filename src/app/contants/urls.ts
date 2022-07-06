import {environment} from "../../environments/environment";

const {API} = environment;

export const urls = {
  recipes: `${API}/recipes`,
  recipeImage: `${API}/recipes/image/`
}
