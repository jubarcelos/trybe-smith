export interface IOrder {
  id?:number;
  name: string;
  amount: string;
  productsIds: number[];
}