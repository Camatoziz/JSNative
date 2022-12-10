type StudentType={
    id: number,
    name: string,
    age: number,
    isActive: boolean,
    address: AddressType,
    technologies: TechnologiesType

}
type AddressType={
    street: string,
    house: number,
    city: CityType
}
type CityType={
    cityTitle: string,
    country: string
}
type TechnologiesType= TechnologiesArrayType []
type TechnologiesArrayType={
    id: number,
    title: string
}
const student: StudentType = {
    id: 1,
    name: "Vasya",
    age: 27,
    isActive: true,
    address: {
        street: "Oginskogo",
        house: 27,
        city: {
            cityTitle: "Grodno",
            country: "Belarus"
        }
    },
    technologies: [
        {
            id: 1,
            title: "HTML"
        },
        {
            id: 2,
            title: "CSS"
        },
        {
            id: 3,
            title: "JS"
        }
    ]

}

console.log(student.address.city.country)