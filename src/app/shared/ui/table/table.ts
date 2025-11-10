import { Component, Input, Output, EventEmitter, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TableConfig } from '../../models/table.model';

@Component({
  selector: 'f-table',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './table.html',
  styleUrl: './table.scss',
})
export class Table implements AfterViewInit {
  @Input() config!: TableConfig;
  @Output() rowClick = new EventEmitter<{ row: any; param?: string }>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  dataSource!: MatTableDataSource<any>;
  displayedColumns: string[] = [];
  filterValue: string = '';

  // Propiedades para acceso rápido
  showFilter: boolean = true;
  filterPlaceholder: string = 'Buscar...';
  pageSizeOptions: number[] = [5, 10, 20];
  noDataMessage: string = 'No hay datos disponibles';

  ngOnInit() {
    this.initializeTable();
  }

  ngAfterViewInit() {
    if (this.dataSource) {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }

  private initializeTable() {
    // Extraer las columnas del config
    this.displayedColumns = this.config.columns.map((col) => col.key);

    // Inicializar el dataSource
    this.dataSource = new MatTableDataSource(this.config.data);

    // Configurar propiedades opcionales
    this.showFilter = this.config.showFilter ?? true;
    this.filterPlaceholder = this.config.filterPlaceholder ?? 'Buscar...';
    this.pageSizeOptions = this.config.pageSizeOptions ?? [5, 10, 20];
    this.noDataMessage = this.config.noDataMessage ?? 'No hay datos disponibles';
  }

  getColumnLabel(columnKey: string): string {
    const column = this.config.columns.find((col) => col.key === columnKey);
    return column?.label || columnKey;
  }

  getColumnValue(row: any, columnKey: string): any {
    const column = this.config.columns.find((col) => col.key === columnKey);
    const value = row[columnKey];

    // Si hay una función de formato, la aplicamos
    if (column?.format) {
      return column.format(value);
    }

    return value;
  }

  isColumnSortable(columnKey: string): boolean {
    const column = this.config.columns.find((col) => col.key === columnKey);
    return column?.sortable !== false;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.filterValue = filterValue.trim().toLowerCase();
    this.dataSource.filter = this.filterValue;

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onRowClick(row: any) {
    if (this.config.clickableRows) {
      this.rowClick.emit({
        row,
        param: this.config.clickableParams,
      });
    }
  }

  get isClickable(): boolean {
    return this.config.clickableRows ?? false;
  }
}
