import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  //fooddetails 
  // fooddetails 
  
  foodDetails = [
    {
      id:1,
      foodName:"Hommos",
      foodDetails:"poichiche .",
      foodPrice:"5 €",
      foodImg:"https://scontent-cdt1-1.xx.fbcdn.net/v/t1.6435-9/188567262_877206232830011_6630560359353618513_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=imm4w8Dix7oAX_KImwM&_nc_ht=scontent-cdt1-1.xx&oh=00_AfCfORXfbycWaPvUl66Zp4kxJH0jGBe9flIgmb3X_XqScA&oe=63CBC554"
    },
    {
      id:2,
      foodName:"Taboulé",
      foodDetails:"Onion| Green Capsicum|Mushroom |black olives , sweet corn , Red Paprika topped with Cheese",
      foodPrice:"6 €",
      foodImg:"https://assets.afcdn.com/recipe/20200518/111358_w1024h768c1cx540cy960.webp"
    },
    {
      id:3,
      foodName:"Grill House",
      foodDetails:"Taouk, agneau, kafta, ailes de poulet",
      foodPrice:"18 €",
      foodImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG7FFJMvntiLL8SxTsaFhMHUQ07RiNJx8iseDQjam7zDnLfbNeP8yoyX313GP5nRoDJOM&usqp=CAU"
    },
    {
      id:4,
      foodName:"Taouk",
      foodDetails:"2 Brochettes de Poulet",
      foodPrice:"14 €",
      foodImg:"https://scontent-cdg2-1.xx.fbcdn.net/v/t39.30808-6/284840048_1105261060024526_1043575697873264533_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=DKWs4wkMfo0AX8FXGFL&_nc_ht=scontent-cdg2-1.xx&oh=00_AfAMAf3watXMJN1I954BPiRnuwKngFWa9SbpjB23dCOXHw&oe=63AA0922"
    },
    {
      id:5,
      foodName:"Kabab Khechkhaach",
      foodDetails:"2 Brochettes de viande hachée avec sauce tomate",
      foodPrice:"14 €",
      foodImg:"https://www.kababjiarabia.com/wp-content/uploads/2020/06/Kabab-Khachkhach-Meal-1-1000x600.jpg"
    },
    {
      id:6,
      foodName:"Kenefeh",
      foodDetails:"Kenefeh",
      foodPrice:"6.5 €",
      foodImg:"https://scontent-cdg2-1.xx.fbcdn.net/v/t1.6435-9/104595561_667479980469305_7523659747242916869_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=fL1Eup_HdBgAX9uV_d-&_nc_ht=scontent-cdg2-1.xx&oh=00_AfDhtkkWzsRXvMPoIllpz5-lFxAJ72-LEOHefFsqJ0h9Ag&oe=63CBAF80"
    },
    {
      id:7,
      foodName:"Mouhlabi",
      foodDetails:"Mouhlabi",
      foodPrice:"4.5 €",
      foodImg:"https://media-cdn.tripadvisor.com/media/photo-s/11/23/4b/1b/dessert-fleur-d-oranger.jpg"
    },
    {
      id:8,
      foodName:"Tiramisu",
      foodDetails:"",
      foodPrice:"3.9 €",
      foodImg:"https://res.cloudinary.com/hv9ssmzrz/image/fetch/c_fill,f_auto,h_387,q_auto,w_650/https://s3-eu-west-1.amazonaws.com/images-ca-1-0-1-eu/tag_photos/original/1139/tiramisu-tag-AdobeStock_139379701.jpg"
    }
  ]



}
