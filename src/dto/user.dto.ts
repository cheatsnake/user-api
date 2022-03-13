export interface UserDto {
    id?: number;
    email: string;
    firstName: string;
    lastName: string;
    image: string;
    pdf?: string;
}

export type CreateUserDto = Omit<UserDto, "id" | "pdf">;
