import { UserContext } from "./UserContext";

const user =
{
    id: 123,
    name: 'Bruce Wayne',
    email: 'brucewayne@gmail.com'
};

export const UserProvider = ( { children } ) =>
{
    return (
        <UserContext.Provider value={{ user }}>
            {children}
        </UserContext.Provider>
    );
};