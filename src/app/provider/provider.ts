import { Company } from "../company/company";

export class Provider {
    constructor(
      public id: number,
      public contactPerson: string,
      public phone: number,
      public mail: string,
      public age: number,
      public description: string,
      public company: Company
    ) {
    }
  }