import { Category } from "./category";
import { Unit } from "./unidad";

export interface Product {
    code: string;
    name: string;
    stock?: number;
    description?: string;
    category: Category;
    unit: Unit;
    costUnit: string;
    costSale: string;
    performance?: number;
}