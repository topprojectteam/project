export class Company{
    id:number;
    name:string;
    description:string;
}
export class Vacancy{
    id:number;
    title:string;
    description:string;
    author:string;
    cost:number;
    img_url:string;

}

export class LoginResponse{
    token: string;
}



