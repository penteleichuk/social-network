import { useMatch, useNavigate } from "react-router-dom";

export function withRouter<T>(Component: React.ComponentType<T>) {

    const Wrapper = (props: T) => {
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
