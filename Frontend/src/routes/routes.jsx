import Root from "../pages/Root";
import Detail from "../pages/detail/Detail";
import Main from "../pages/main/Main";



export const ROUTES = [
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: '/',
                element: <Main />
            },
            {
                path: '/id',
                element: <Detail />
            }
        ]
    }
]