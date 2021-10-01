const Products = (): JSX.Element => (
    <div>Products Module</div>
);

export default {
    routeProps: {
        path: '/products',
        component: Products
    },
    name: 'Products',
}
