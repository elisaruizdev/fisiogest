// card-info.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'card-info',
  imports: [CommonModule, FormsModule, MatIconModule, MatButtonModule],
  templateUrl: './card-info.html',
  styleUrls: ['./card-info.scss'],
})
export class CardInfo {
  @Input() label: string = '';
  @Input() value: string = '';
  @Input() placeholder: string = '';
  @Input() type: string = 'text';
  @Input() editable: boolean = false; 

  @Output() valueChange = new EventEmitter<string>();
  @Output() onSave = new EventEmitter<string>();
  @Output() onCancel = new EventEmitter<void>();

  isEditing: boolean = false;
  editValue: string = '';

  startEdit(): void {
    if (!this.editable) return;
    this.isEditing = true;
    this.editValue = this.value;
  }

  save(): void {
    this.value = this.editValue;
    this.valueChange.emit(this.editValue);
    this.onSave.emit(this.editValue);
    this.isEditing = false;
  }

  cancel(): void {
    this.editValue = this.value;
    this.isEditing = false;
    this.onCancel.emit();
  }
}
