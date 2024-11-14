import { makeAutoObservable } from "mobx";
import AuthService from "../services/AuthService";


export default class Store{
    isAuth = false;

    constructor(){
        makeAutoObservable(this)
    }

    setAuth(bool: boolean){
        this.isAuth = bool;
    }

    async login(username: string, password: string){
        try {
            const response = await AuthService.login(username, password);
            console.log(response);
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
        } catch (e) {
            console.log(e.response?.data?.message)
        }
    }

    async logout(){
        try {
            const response = await AuthService.logout();
            console.log(response);
            localStorage.removeItem('token');
            this.setAuth(true);
        } catch (e) {
            console.log(e.response?.data?.message)
        }
    }
}