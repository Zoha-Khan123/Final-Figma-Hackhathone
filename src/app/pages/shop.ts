import { IconType } from "react-icons";
import { FaRegHeart, FaRegStar, FaSearchPlus, FaStar } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";

export interface ShopItemData {
  id:number;
    imageUrl: string;
    heading: string;
    bullets:number;
    currencySymbol: string;
    price: number;
    discountPrice: number;
    stars:IconType[];  // Array of JSX Elements (icons)
    paragraph: string;
    icons:IconType[];  // Array of JSX Elements (icons)
  }
export const shopItem:ShopItemData[] = [
  {
    id:1,
    imageUrl: "/shopList/shop-list-1.png",
    heading: "Accumsan tincidunt",
    bullets:3,
    currencySymbol: "$",
    price: 26.00,
    discountPrice: 52.00,
    stars: [FaStar, FaStar, FaStar, FaStar, FaRegStar],
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    icons: [LuShoppingCart, FaRegHeart, FaSearchPlus],
  },{
    id:1,
    imageUrl: "/shopList/shop-list-2.png",
    heading: "In nulla",
    bullets:3,
    currencySymbol: "$",
    price: 26.00,
    discountPrice: 52.00,
    stars: [FaStar, FaStar, FaStar, FaStar, FaRegStar],
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    icons: [LuShoppingCart, FaRegHeart, FaSearchPlus],
  },{
    id:1,
    imageUrl: "/shopList/shop-list-3.png",
    heading: "Vel sem",
    bullets:3,
    currencySymbol: "$",
    price: 26.00,
    discountPrice: 52.00,
    stars: [FaStar, FaStar, FaStar, FaStar, FaRegStar],
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    icons: [LuShoppingCart, FaRegHeart, FaSearchPlus],
  },{
    id:1,
    imageUrl: "/shopList/shop-list-4.png",
    heading: "Porttitor cum",
    bullets:3,
    currencySymbol: "$",
    price: 26.00,
    discountPrice: 52.00,
    stars: [FaStar, FaStar, FaStar, FaStar, FaRegStar],
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    icons: [LuShoppingCart, FaRegHeart, FaSearchPlus],
  },{
    id:1,
    imageUrl: "/shopList/shop-list-5.png",
    heading: "Nunc in",
    bullets:3,
    currencySymbol: "$",
    price: 26.00,
    discountPrice: 52.00,
    stars: [FaStar, FaStar, FaStar, FaStar, FaRegStar],
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    icons: [LuShoppingCart, FaRegHeart, FaSearchPlus],
  },{
    id:1,
    imageUrl: "/shopList/shop-list-6.png",
    heading: "Vitae facilisis",
    bullets:3,
    currencySymbol: "$",
    price: 26.00,
    discountPrice: 52.00,
    stars: [FaStar, FaStar, FaStar, FaStar, FaRegStar],
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    icons: [LuShoppingCart, FaRegHeart, FaSearchPlus],
  },
];
