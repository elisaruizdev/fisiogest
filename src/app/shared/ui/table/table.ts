import {
  AfterViewInit,
  Component,
  ViewChild,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TableConfig } from '../../models/table.model';

@Component({
  selector: 'f-table',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule],
  templateUrl: './table.html',
  styleUrl: './table.scss',
})
export class Table implements OnInit, AfterViewInit, OnChanges {
  @Input({ required: true }) config!: TableConfig;

  displayedColumns: string[] = [];
  dataSource!: MatTableDataSource<any>;

  filterPlaceholder: string = 'Buscar...';
  pageSizeOptions: number[] = [5, 10, 25, 100];
  showFilter: boolean = true;
  noDataMessage: string = 'No se encontraron datos';
  filterValue: string = ''; // ← AÑADE ESTA PROPIEDAD

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit() {
    this.initializeTable();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['config'] && !changes['config'].firstChange) {
      this.initializeTable();
      this.updatePaginatorAndSort();
    }
  }

  ngAfterViewInit() {
    this.updatePaginatorAndSort();
  }

  private initializeTable() {
    if (!this.config) {
      console.error('No se proporcionó configuración a la tabla');
      return;
    }

    this.displayedColumns = this.config.columns.map((col) => col.key);
    this.dataSource = new MatTableDataSource(this.config.data || []);

    this.filterPlaceholder = this.config.filterPlaceholder || this.filterPlaceholder;
    this.pageSizeOptions = this.config.pageSizeOptions || this.pageSizeOptions;
    this.showFilter =
      this.config.showFilter !== undefined ? this.config.showFilter : this.showFilter;
    this.noDataMessage = this.config.noDataMessage || this.noDataMessage;

    this.dataSource.filterPredicate = (data: any, filter: string) => {
      const searchStr = filter.toLowerCase();
      return this.displayedColumns.some((column) => {
        const columnValue = this.getColumnValue(data, column);
        return columnValue.toLowerCase().includes(searchStr);
      });
    };
  }

  private updatePaginatorAndSort() {
    if (this.dataSource) {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }

  applyFilter(event: Event) {
    const inputValue = (event.target as HTMLInputElement).value;
    this.filterValue = inputValue; // ← GUARDA EL VALOR
    this.dataSource.filter = inputValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getColumnLabel(key: string): string {
    const column = this.config.columns.find((col) => col.key === key);
    return column?.label || key;
  }

  getColumnValue(row: any, key: string): string {
    const column = this.config.columns.find((col) => col.key === key);
    const value = row[key];

    if (column?.format) {
      return column.format(value);
    }

    return value != null ? value.toString() : '';
  }

  isColumnSortable(key: string): boolean {
    const column = this.config.columns.find((col) => col.key === key);
    return column?.sortable !== false;
  }
}
