export class CreateUserDto {
    readonly firstName: string
    readonly lastName: string
    readonly patronymic: string
    readonly DOB: string
    readonly email: string
    readonly password: string
    readonly role: string
}