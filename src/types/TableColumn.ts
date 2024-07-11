// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type TableColumn<T, K extends keyof T> = {
  className?: string;
  field: string;
  header: string | React.ReactNode;
  isCentered?: boolean;
  isHeaderCentered?: boolean;
  isSortable?: boolean;
  legend?: string;
  minWidth?: number;
  onRender?: (row: T) => React.ReactNode | string;
  sortValue?: (row: T) => string | number;
};
export default TableColumn;
