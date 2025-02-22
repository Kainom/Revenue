import { JSX, ReactNode } from "react";

export interface Menu {
  name: string;
  icon: JSX.Element;
  rota?: string;
  subMenu?: SubMenu[];
}

interface SubMenu {
  name: string;
  icon: JSX.Element;
  subRota: string;
}
