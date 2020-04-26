export class Category{
    id:number;
    name:string;
    description:string;
}
export class Book{
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



