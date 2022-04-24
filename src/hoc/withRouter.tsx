import { useMatch, useNavigate } from "react-router-dom";

// export const withRouter = (Component: any) => {
//     return (props: any) => {
//         const match = useMatch('/profile/:userId/');
//         const navigate = useNavigate();
//         return <Component {...props} navigate={navigate} match={match} />;
//     };
// }

export const withRouter = (Component: any) => {
    const Wrapper = (props: any) => {
        const navigate = useNavigate();
        const match = useMatch('/profile/:userId/');

        return (
            <Component
                {...props}
                navigate={navigate}
                match={match}
            />
        );
    };

    return Wrapper;
};
