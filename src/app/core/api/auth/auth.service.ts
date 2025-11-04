import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class Auth {
    login() { }
    register(id: string, name: string, email: string, password: string, role: string = "user") { }
    logout() { }
}