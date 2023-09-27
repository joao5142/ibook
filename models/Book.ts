export interface IBook{

   id:string;
   volumeInfo:{
    description:string;
    authors:Array<string>;
    title:string;
    subtitle:string;
    imageLinks:{
     smallThumbnail:string;
     thumbnail:string;

    };
    previewLink:string;
    pageCount:number;
    categories:Array<string>
   }

}
