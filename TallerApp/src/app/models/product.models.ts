export interface Product{
    id: string,
    brand: string,
    name: string,
    section: string,
    description: string,
    cant: number,
    price: number,
    image: string
    // image: Image[],
    state: string
    // especification: Especification[]
}

// export interface Image {
//     image: string,
// }

// export interface Especification {
//     id: number,
//     column: string
//     description: string
// }

export interface Section {
    id: number,
    section: string,
}

