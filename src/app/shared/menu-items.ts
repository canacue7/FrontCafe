import { Injectable } from "@angular/core";

export interface Menu{
    state: string;
    name: string;
    type: string;
    icon: string;
    role: string;
}

const MANUITEMS = [
    {state:'dashboard', name:'Dashboard', type:'link', icon:'dashboard',role:''},
    {state:'category', name:'Manage Category', type:'link', icon:'caregory',role:'admin'}
]

@Injectable()
export class MenuItems{
    getMenuitem():Menu[]{
        return MANUITEMS;
    }
}