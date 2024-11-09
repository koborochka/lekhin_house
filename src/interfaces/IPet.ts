export default interface IPet{
    id: number,
    name: string,
    type: 'dog'|'cat',
    birthdate: string,
    gender: 'male'|'female',
    breed: string,
    about: string[],
    description: string,
    images_url: [{
        secure_url: string,
        public_id: string,
        display_name: string,
    }],
}