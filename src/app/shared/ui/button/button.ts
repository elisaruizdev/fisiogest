import { CommonModule } from '@angular/common';
import { Component, Input, output} from '@angular/core';

@Component({
  selector: 'button-ui',
  imports: [CommonModule],
  templateUrl: './button.html',
  styleUrl: './button.scss'
})
export class ButtonUI {
  
  @Input() icon!: string; 
  @Input() label!: string;
  @Input() title!: string; 
  @Input() disabled: boolean = false;
  @Input() fullWidth: boolean = false;
  
  clicked = output<void>();

  handleClick(): void {
    if (!this.disabled) {
      this.clicked.emit();
    }
  }
}
