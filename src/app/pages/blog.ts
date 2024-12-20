import { IconType } from "react-icons";
import { FaPenNib } from "react-icons/fa";
import { MdOutlineCalendarMonth } from "react-icons/md";

export interface blogDataType {
        blogImageUrl: string;
        icon1: IconType;
        name: string;
        icon2: IconType;
        time: string;
        heading: string;
        pargarph: string;
        read: string;
        bullet:number,
}

export const blogData =[{
    blogImageUrl:"/Blog/blog-01.png",
    icon1:MdOutlineCalendarMonth,
    name:"Surf Auxion",
    icon2:FaPenNib,
    time:"Aug 09 2020",
    heading:"Mauris at orci non vulputate diam tincidunt nec.",
    pargarph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
    read:"Read More",
    bulllet:1,
},{
    blogImageUrl:"/Blog/blog-02.png",
    icon1:MdOutlineCalendarMonth,
    name:"Surf Auxion",
    icon2:FaPenNib,
    time:"Aug 09 2020",
    heading:"Aenean vitae in aliquam ultrices lectus. Etiam.",
    pargarph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
    read:"Read More",
    bulllet:1,
},{
    blogImageUrl:"/Blog/blog-03.png",
    icon1:MdOutlineCalendarMonth,
    name:"Surf Auxion",
    icon2:FaPenNib,
    time:"Aug 09 2020",
    heading:"Sit nam congue feugiat nisl, mauris amet nisi. ",
    pargarph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
    read:"Read More",
    bulllet:1,
},
] 


export interface RecentPostDataType {
    image:string;
    paragraph:string;
    time?:string;
    price?:string;
}

export const recentPost:RecentPostDataType[] = [{
    image:"/Blog/recent-post-01.png",
    paragraph:"It is a long established fact",
    time:"Aug 09 2020"
},{
    image:"/Blog/recent-post-02.png",
    paragraph:"It is a long established fact",
    time:"Aug 09 2020"
},{
    image:"/Blog/recent-post-03.png",
    paragraph:"It is a long established fact",
    time:"Aug 09 2020"
},{
    image:"/Blog/recent-post-04.png",
    paragraph:"It is a long established fact",
    time:"Aug 09 2020"
}
]

export const saleProduct:RecentPostDataType[]=[{
    image:"/Blog/sale-product-01.png",
    paragraph:"Elit ornare in enim mauris.",
    time:"Aug 09 2020"
},{
    image:"/Blog/sale-product-02.png",
    paragraph:"Viverra pulvinar et enim.",
    time:"Aug 09 2020"
},{
    image:"/Blog/sale-product-03.png",
    paragraph:"Mattis varius donec fdsfd",
    time:"Aug 09 2020"
},
]

export const offerProduct:RecentPostDataType[]=[{
    image:"/Blog/offer-product-01.png",
    paragraph:"Duis lectus est.",
    price:"$12.00 - $15.00"
},{
    image:"/Blog/offer-product-02.png",
    paragraph:"Sed placerat.",
    price:"$12.00 - $15.00"
},{
    image:"/Blog/offer-product-03.png",
    paragraph:"Netus proin.",
    price:"$12.00 - $15.00"
},{
    image:"/Blog/offer-product-04.png",
    paragraph:"Platea in.",
    price:"$12.00 - $15.00"
},
]
