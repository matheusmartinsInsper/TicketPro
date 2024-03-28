export default class Category {
    category!:string;
    categorys = new Map()
    constructor(category: string) {
        this.categorys.set("leve",1)
        this.categorys.set("Medio",2)
        this.categorys.set("Pesado",3)
        if(this.categorys.has(category)){
            this.category=category
        }else{
            throw Error(`categoria  ${category} invalida`)
        }
    }
    getValue(){
        return this.category;
    }
    getWeight(category:string):number{
        return this.categorys.get(category)!;
    }
}