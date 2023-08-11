export interface IHomeDataProvider {
  children: (data: {
    totalProducts: string;
    onCreateProduct: () => void;
  }) => React.ReactNode;
}
