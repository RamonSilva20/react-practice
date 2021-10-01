const Dashboard = (): JSX.Element => (
    <div>Dashboard Module</div>
);

export default {
    routeProps: {
        path: '/',
        exact: true,
        component: Dashboard,
    },
    name: 'Dashboard',
};