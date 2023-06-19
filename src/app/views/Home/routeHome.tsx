import { Route } from "react-router-dom";
import { UqApp } from "app/UqApp";

export const pathHome = 'home';
export function routeHome(uqApp: UqApp) {
    const routes = <>
    </>;
    return <>
        <Route path={`${pathHome}/*`}>
            {routes}
        </Route>
        <Route path={`/*`}>
            {routes}
        </Route>
    </>;
}
