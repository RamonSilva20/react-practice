const Auth = (): JSX.Element => (
    <div>Auth Module</div>
);

export default {
    routeProps: {
        path: '/auth',
        component: Auth
    },
    name: 'Auth',
}
