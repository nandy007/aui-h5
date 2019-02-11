import { router } from '@auicomp/page/Page.aui';

import MainPage from '../pages/MainPage.aui';
import TitlebarPage from '../pages/TitlebarPage.aui';
import ListPage from '../pages/ListPage.aui';
import ButtonPage from '../pages/ButtonPage.aui';
import BadgesPage from '../pages/BadgesPage.aui';
import TabbarPage from '../pages/TabbarPage.aui';
import DialogPage from '../pages/DialogPage.aui';
import RefresherPage from '../pages/RefresherPage.aui';
import SwiperPage from '../pages/SwiperPage.aui';
import FormPage from '../pages/FormPage.aui';
import ActionPage from '../pages/ActionPage.aui';

router.setMode('history');

 
router.add([
    {
        path: '/',
        redirect: '/main'
    },
    {
        path: '/main',
        component: MainPage
    },
    {
        path: '/list',
        component: ListPage,
        cache: true
    },
    {
        path: '/button',
        component: ButtonPage
    },
    {
        path: '/badges',
        component: BadgesPage
    },
    {
        path: '/titlebar',
        component: TitlebarPage
    },
    {
        path: '/tabbar',
        component: TabbarPage
    },
    {
        path: '/dialog',
        component: DialogPage
    },
    {
        path: '/refresh',
        component: RefresherPage
    },
    {
        path: '/swiper',
        component: SwiperPage
    },
    {
        path: '/form',
        component: FormPage
    },
    {
        path: '/action',
        component: ActionPage
    }
]);


export default router;