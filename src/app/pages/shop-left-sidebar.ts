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
export const shopItemLeftSidebar:ShopItemData[] = [
  {
    id:1,
    imageUrl: "/shopLeftSidebar/leftSidebar-1.png",
    heading: "Dictum morbi",
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
    imageUrl: "/shopLeftSidebar/leftSidebar-2.png",
    heading: "Sodales sit",
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
    imageUrl: "/shopLeftSidebar/leftSidebar-3.png",
    heading: "Nibh varius",
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
    imageUrl: "/shopLeftSidebar/leftSidebar-4.png",
    heading: "Mauris quis",
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
    imageUrl: "/shopLeftSidebar/leftSidebar-5.png",
    heading: "Morbi sagittis",
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
    imageUrl: "/shopLeftSidebar/leftSidebar-6.png",
    heading: "Ultricies venenatis",
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
  imageUrl: "/shopLeftSidebar/leftSidebar-7.png",
  heading: "Scelerisque dignissim",
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