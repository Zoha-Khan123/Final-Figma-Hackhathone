

export interface ProductType {
    
        id: string,
        title: string,
        image: string,
        code ?: string,
        description: string,
        price:number
    }


export const featuredList:ProductType[] = [
    {
        id: "1",
        title: 'Cantilever chair',
        image: '/featuredImage/image-1168.png',
        code : 'Y523201',
        description: '    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam eaque voluptate recusandae quia laboriosam beatae fugit at culpa voluptatibus molestias dolores, quisquam, perspiciatis rem mollitia ex similique praesentium voluptatem distinctio ullam ab autem. Ratione consectetur, nesciunt quos aspernatur distinctio ullam?',
        price : 42.00
    },
    {
        id: "2",
        title: 'Cantilever chair',
        image: '/featuredImage/image-1.png',
        code : 'Y523201',
        description: '    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam eaque voluptate recusandae quia laboriosam beatae fugit at culpa voluptatibus molestias dolores, quisquam, perspiciatis rem mollitia ex similique praesentium voluptatem distinctio ullam ab autem. Ratione consectetur, nesciunt quos aspernatur distinctio ullam?',
        price : 42.00
    },
    {
        id: "3",
        title: 'Cantilever chair',
        image: '/featuredImage/image-1169.png',
        code : 'Y523201',
        description: '    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam eaque voluptate recusandae quia laboriosam beatae fugit at culpa voluptatibus molestias dolores, quisquam, perspiciatis rem mollitia ex similique praesentium voluptatem distinctio ullam ab autem. Ratione consectetur, nesciunt quos aspernatur distinctio ullam?',
        price : 42.00
    },
    {
        id: '4',
        title: 'Cantilever chair',
        image: '/featuredImage/image-3.png',
        code : 'Y523201',
        description: '    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam eaque voluptate recusandae quia laboriosam beatae fugit at culpa voluptatibus molestias dolores, quisquam, perspiciatis rem mollitia ex similique praesentium voluptatem distinctio ullam ab autem. Ratione consectetur, nesciunt quos aspernatur distinctio ullam?',
        price : 42.00
    },
] 