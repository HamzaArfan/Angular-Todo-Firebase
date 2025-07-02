import { Timestamp } from "@angular/fire/firestore";

export interface Todo 
{
    id?: string;
    title: string ;
    description : string;
    userId : string;
    createdAt : Timestamp;
    completed? : boolean;
}



