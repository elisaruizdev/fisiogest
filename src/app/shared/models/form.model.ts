import { ValidatorFn } from '@angular/forms';

export type FieldType =
  | 'text'
  | 'email'
  | 'tel'
  | 'date'
  | 'select'
  | 'textarea'
  | 'number'
  | 'password'
  | 'checkbox';

export interface SelectOption {
  value: string | number;
  label: string;
}

export interface CheckboxLink {
  text: string;
  linkText: string;
  linkUrl: string;
}

export interface FormFieldConfig {
  name: string;
  label: string;
  type: FieldType;
  placeholder?: string;
  value?: any;
  required?: boolean;
  validators?: ValidatorFn[];
  options?: SelectOption[]; 
  rows?: number; 
  cssClass?: string; 
  gridColumn?: string; 
  icon?: string; 
  checkboxLink?: CheckboxLink;
}

export interface FormSectionConfig {
  title?: string;
  subtitle?: string;
  fields: FormFieldConfig[];
  cssClass?: string;
}

export interface FormConfig {
  sections: FormSectionConfig[];
}
