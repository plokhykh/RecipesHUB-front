export interface IRecipeCategory{
  "id": number;
  "name": string;
  "subcategories": [ISubcategories]
}

interface ISubcategories {
  "id": number;
  "name": string;
}
