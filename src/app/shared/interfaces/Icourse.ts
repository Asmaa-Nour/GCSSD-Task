export interface Icourse {
    id:number;
    code?:string;
    name:string;
    description:string;
    hours:number;
    instructors?:string[],
    students?:string[]
}
