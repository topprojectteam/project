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
    category_id:number;
    publishing_house_id:number;

}

export class LoginResponse{
    token: string;
}



