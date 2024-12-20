import { IconType } from "react-icons";
import {  FaRegStar, FaStar } from "react-icons/fa";

export interface SingleBlogData {
  id:number;
    imageUrl: string;
    heading: string;
    currencySymbol: string;
    price: number;
    discountPrice: number;
    stars:IconType[];  // Array of JSX Elements (icons)
   
  }
export const singleBlog:SingleBlogData[] = [
  {
    id:1,
    imageUrl: "/singleBlog/single-blog-04.png",
    heading: "Quam sed",
    currencySymbol: "$",
    price: 26.00,
    discountPrice: 52.00,
    stars: [FaStar, FaStar, FaStar, FaStar, FaRegStar],
  }, {
    id:1,
    imageUrl: "/singleBlog/single-blog-05.png",
    heading: "Tristique sed",
    currencySymbol: "$",
    price: 26.00,
    discountPrice: 52.00,
    stars: [FaStar, FaStar, FaStar, FaStar, FaRegStar],
  }, {
    id:1,
    imageUrl: "/singleBlog/single-blog-06.png",
    heading: "A etiam",
    currencySymbol: "$",
    price: 26.00,
    discountPrice: 52.00,
    stars: [FaStar, FaStar, FaStar, FaStar, FaRegStar],
  }, {
    id:1,
    imageUrl: "/singleBlog/single-blog-07.png",
    heading: "Mi nisi",
    currencySymbol: "$",
    price: 26.00,
    discountPrice: 52.00,
    stars: [FaStar, FaStar, FaStar, FaStar, FaRegStar],
  }]