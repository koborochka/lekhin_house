export default interface IPet{
    id: number,
    name: string,
    type: 'dog'|'cat',
    age: number,
    gender: 'male'|'female',
    breed: string,
    about: string,
    description: string,
    images_url: string[],
}