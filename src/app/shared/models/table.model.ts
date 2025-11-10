export interface ColumnConfig {
  key: string;
  label: string;
  sortable?: boolean;
  format?: (value: any) => string;
}

export interface TableConfig {
  columns: ColumnConfig[];
  data: any[];
  filterPlaceholder?: string;
  pageSizeOptions?: number[];
  showFilter?: boolean;
  noDataMessage?: string;
  clickableRows?: boolean;
  clickableParams?: string;
}
