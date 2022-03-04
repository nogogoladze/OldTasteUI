import { Provider } from "../provider/provider";
import { Product, Location } from "./company.component";

export class Company {
    constructor(
      public id: number,
      public companyName: string,
      public owner: string,
      public contactPerson: string,
      public location: Location,
      public providers: Provider[],
      public products: Product[]
    ) {
    }
  }
  