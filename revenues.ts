interface Investimento {
  id: number;
  nome: string;
  descricao: string;
  investimento: number;
  rentabilidade: number;
  dataCriacao: Date;
  vencimento: Date;
  liquidez: string;
  stats: string;
  instituition: string;
  slug:string,
}

const investimentos: Investimento[] = [
  {
    id: 1,
    nome: "CDB",
    descricao: "CDB",
    investimento: 1000,
    rentabilidade: 15,
    dataCriacao: new Date(),
    vencimento: new Date(),
    liquidez: "A mercado",
    stats: "ativo",
    instituition: "Nunbank",
    slug: "cdb",
  },
  {
    id: 2,
    nome: "TESOURO SELIC",
    descricao: "SELIC",
    investimento: 150,
    rentabilidade: 18,
    dataCriacao: new Date(),
    vencimento: new Date(),
    liquidez: "Diária",
    stats: "ativo",
    instituition: "Rico",
    slug: "tesouro-selic",
  },

  {
    id: 3,
    nome: "TESOURO EDUCA",
    descricao: "EDUCA",
    investimento: 120,
    rentabilidade: 11,
    dataCriacao: new Date(),
    vencimento: new Date(),
    liquidez: "Vencimento",
    stats: "ativo",
    instituition: "Sorisa",
    slug: "tesouro-educa",
  },
];

export default investimentos;
