export interface IAuthUser{
    name: string,
    email: string,
    photoURL: string,
    _id: string,
}

export const loginUser = (userData: unknown) => {
    localStorage.setItem('user', JSON.stringify(userData));
}

export const logOutUser = () => {
    localStorage.removeItem('user');
}

export const getCurrentUser = (): IAuthUser | null => {
    const user = localStorage.getItem('user');
    if (!user) {
        return null;
    }
    return JSON.parse(user) as IAuthUser;
}