import { Product } from "../product/Product";
import { User } from "../user/User";

export type Review = {
  createdAt: Date;
  id: string;
  product?: Product | null;
  rating: number | null;
  updatedAt: Date;
  user?: User;
};
