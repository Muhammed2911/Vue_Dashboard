const Module = () => import("./Module.vue");
const Home = () => import("./views/Home.vue");

const moduleRoute = {
    path: "/",
    component: Module,
    children: [{ path: "", component: Home, name: "Home" }],
};

export default (router) => {
    router.addRoute(moduleRoute);
};
