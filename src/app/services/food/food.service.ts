import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAllFoodByTag(tag: string): Foods[] {
    return tag == "All" ?
    this.getAll() : 
    this.getAll().filter(food => food.tags?.includes(tag))
  }

  getAll(): Foods[]{
    return [
      {
        id: 1,
        name: "Chicken Biriyani",
        price: 10,
        origins: ["indian", "muglai"],
        star: 4.1,
        favorite: true,
        imageUrl: "/assets/chicken-biriyani.jpeg",
        cookTime: "50-60",
        tags: ["Lunch", "Non-veg", "Chicken", "Dinner"]
      },
      {
        id: 2,
        name: "Mutton Biriyani",
        price: 14,
        origins: ["indian", "muglai"],
        star: 4.3,
        favorite: true,
        imageUrl: "/assets/mutton-biriyani.webp",
        cookTime: "70-90",
        tags: ["Lunch", "Non-veg", "Mutton", "Dinner"]
      },
      {
        id: 3,
        name: "Basanti Pulao",
        price: 9,
        origins: ["indian"],
        star: 3.9,
        favorite: false,
        imageUrl: "/assets/basanti-pulao.jpeg",
        cookTime: "30-40",
        tags: ["Lunch", "veg", "Dinner"]
      },
      {
        id: 4,
        name: "Egg Roll",
        price: 7,
        origins: ["chinees"],
        star: 4.2,
        favorite: false,
        imageUrl: "/assets/egg roll.jpeg",
        cookTime: "10-15",
        tags: ["Fast-food", "Non-veg", "Egg"]
      },
      {
        id: 5,
        name: "Fish Cutlet",
        price: 6,
        origins: ["indian"],
        star: 3.8,
        favorite: false,
        imageUrl: "/assets/fish-cutlet.jpg",
        cookTime: "7-10",
        tags: ["Snacks", "Non-veg", "Fish", "Starter"]
      },
      {
        id: 6,
        name: "Kadai Panner",
        price: 9,
        origins: ["indian"],
        star: 4.4,
        favorite: true,
        imageUrl: "/assets/kadai-paneer.jpeg",
        cookTime: "20-30",
        tags: ["Lunch", "Veg", "Paneer", "Dinner"]
      },
      {
        id: 7,
        name: "Mutton kasha",
        price: 9,
        origins: ["indian", "muglai"],
        star: 3.8,
        favorite: false,
        imageUrl: "/assets/mutton-kasha.jpeg",
        cookTime: "40-50",
        tags: ["Lunch", "Non-veg", "Mutton", "Dinner"]
      },
      {
        id: 8,
        name: "Chowmin",
        price: 7,
        origins: ["chinees"],
        star: 4.0,
        favorite: false,
        imageUrl: "/assets/chowmin.jpeg",
        cookTime: "15-20",
        tags: ["Fast-food", "Non-veg", "Veg"]
      },
      {
        id: 9,
        name: "Pani Puri",
        price: 4,
        origins: ["indian", "bangladesi"],
        star: 3.9,
        favorite: true,
        imageUrl: "/assets/pani-puri.jpeg",
        cookTime: "3-5",
        tags: ["Fast-food", "Non-veg"]
      },
      {
        id: 10,
        name: "Pudina Pakoda",
        price: 4,
        origins: ["indian"],
        star: 3.9,
        favorite: false,
        imageUrl: "/assets/pudina-pakoda.jpeg",
        cookTime: "10-15",
        tags: ["Starter", "Veg"]
      }
    ]
  }
}
