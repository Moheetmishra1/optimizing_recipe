import { RECIPESTYPE } from "../pages/pages-helper";

export interface RECIPEALLTYPE {
    recipes:RECIPESTYPE[],
    total:number,
    skip:number,
    limit:number
}