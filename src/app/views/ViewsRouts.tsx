import { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Page, PageTabsLayout, PageSpinner } from 'tonwa-app';
import { pathMe, routeMe, TabMe } from './Me';
import { useUqApp } from 'app/UqApp';
import { AppLogin, AppRegister, routePrivacy } from 'app/brand';
import { useAtomValue } from 'jotai';
import { TabHome, pathHome, routeHome } from './Home';

export function ViewsRoutes() {
    let uqApp = useUqApp();
    let { user: atomUser, atomSiteLogined } = uqApp;
    let user = useAtomValue(atomUser);
    let siteLogined = useAtomValue(atomSiteLogined);
    let homeLayout: JSX.Element = (user !== undefined && siteLogined !== true) ?
        <div>
            <div className='m-3'>
                没有授权。请联系管理员
            </div>
        </div>
        :
        <PageTabsLayout tabs={[
            { to: '/' + pathHome, caption: '首页', icon: 'home' },
            { to: '/' + pathMe, caption: '我的', icon: 'user' },
        ]} />;

    return <Suspense fallback={<PageSpinner />}>
        <BrowserRouter basename='label-print'>
            <Routes>
                <Route path="/" element={homeLayout}>
                    <Route index element={<TabHome />} />
                    <Route path={pathHome + '/*'} element={<TabHome />} />
                    <Route path={pathMe + '/*'} element={<TabMe />} />
                </Route>
                {routeMe}
                {routeHome(uqApp)}
                <Route path="/login/*" element={<AppLogin />} />
                <Route path="/register" element={<AppRegister />} />
                {routePrivacy}
            </Routes>
        </BrowserRouter>
    </Suspense>;
}
