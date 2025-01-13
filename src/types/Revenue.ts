export interface Revenue {
    id: string;
    nome: string;
    investimento: number;
    rendimento: number;
    dataCriacao: Date;
    vencimento: Date;
    liquidez: string;
    instituition: string;
    slug:string,
    stats: boolean;
    tipo:string;
    carencia:Date;
    description: string;
    indexado?:string;
    finalInvestimento:number


  }
