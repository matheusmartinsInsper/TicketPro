export default class Category {

    categoryId!:string;
    codeCategory!:string;
    weigth!:number;
    category!:string;
    categorys:string[] = ["Leve","Medio","Pesado"]

    constructor(category: string,codeCategory:string,weigth:number) {
        if(this.categorys.includes(category)){
            this.category=category;
            this.weigth=weigth;
            this.codeCategory=codeCategory;
        }else{
            throw Error(`categoria  ${category} invalida, apenas Leve,Medio e Pesado permitidos`)
        }
    }

    getCategory(){
        return this.category;
    }

    getWeight():number{
        return this.weigth;
    }
}