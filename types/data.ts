export type Data<T> = {
  data: {
    count: number;
    limit: number;
    total: number;
    results: Array<T>;
  };
};
