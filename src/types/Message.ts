export type State = {
  isValid: boolean;
  message: string;
  error: {
    message: string;
    status: null | number;
  };
  id?: string;
};
