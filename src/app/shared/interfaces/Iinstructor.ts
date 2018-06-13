export interface Iinstructor {
    id:number,
    name:string,
    image?:string,
    email:string,
    phone:number,
    Department:string,
    Courses?:string[],
    students?:string[]
}
