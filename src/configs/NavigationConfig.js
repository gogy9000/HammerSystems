import {
    DashboardOutlined,
    PieChartOutlined,
    ShoppingCartOutlined,
    BookOutlined,
} from '@ant-design/icons';
import {APP_PREFIX_PATH} from 'configs/AppConfig'


const catalogueNavTree = [
    {
        key: 'catalogue',
        path: `${APP_PREFIX_PATH}/dashboards/catalogue`,
        title: 'sidenav.dashboard.catalogue',
        icon: ShoppingCartOutlined,
        breadcrumb: false,
        isGroupTitle: false,
        submenu: [
            {
                key: 'catalogue-products',
                path: `${APP_PREFIX_PATH}/dashboards/catalogue/products`,
                title: 'sidenav.dashboard.catalogue.products',
                breadcrumb: false,
                submenu: []
            },
            {
                key: 'catalogue-categories',
                path: `${APP_PREFIX_PATH}/dashboards/catalogue/categories`,
                title: 'sidenav.dashboard.catalogue.categories',
                breadcrumb: false,
                submenu: []
            },
            {
                key: 'catalogue-collections',
                path: `${APP_PREFIX_PATH}/dashboards/catalogue/collections`,
                title: 'sidenav.dashboard.catalogue.collections',
                breadcrumb: false,
                submenu: []
            },
            {
                key: 'catalogue-combo',
                path: `${APP_PREFIX_PATH}/dashboards/catalogue/combo`,
                title: 'sidenav.dashboard.catalogue.combo',
                breadcrumb: false,
                submenu: []
            }
        ]
    }
]

const ordersNavTree = [
    {
        key: 'dashboards-orders',
        path: `${APP_PREFIX_PATH}/dashboards/orders`,
        title: 'sidenav.dashboard.orders',
        icon: BookOutlined,
        breadcrumb: false,
        submenu: []
    }
]

const clientsNavTree = [
    {
        key: 'dashboards-clients',
        path: `${APP_PREFIX_PATH}/dashboards/clients`,
        title: 'sidenav.dashboard.clients',
        icon: PieChartOutlined,
        breadcrumb: false,
        isGroupTitle: false,
        submenu: [
            {
                key: 'clients-clients-list',
                path: `${APP_PREFIX_PATH}/dashboards/clients/clients-list`,
                title: 'sidenav.dashboard.clients.clients-list',
                breadcrumb: false,
                submenu: []
            },
            {
                key: 'clients-clients-group',
                path: `${APP_PREFIX_PATH}/dashboards/clients/clients-group`,
                title: 'sidenav.dashboard.clients.clients-group',
                breadcrumb: false,
                submenu: []
            },
        ]
    }
]

const bannersNavTree = [
    {
        key: 'dashboards-banners',
        path: `${APP_PREFIX_PATH}/dashboards/banners`,
        title: 'sidenav.dashboard.banners',
        icon: BookOutlined,
        breadcrumb: false,
        submenu: []
    }
]
const promoCodesNavTree = [
    {
        key: 'dashboards-promo-codes',
        path: `${APP_PREFIX_PATH}/dashboards/promo-codes`,
        title: 'sidenav.dashboard.promo-codes',
        icon: BookOutlined,
        breadcrumb: false,
        submenu: []
    }
]

const offlinePoints = [
    {
        key: 'dashboards-offline-points',
        path: `${APP_PREFIX_PATH}/dashboards/offline-points`,
        title: 'sidenav.dashboard.offline-points',
        icon: PieChartOutlined,
        breadcrumb: false,
        isGroupTitle: false,
        submenu: [
            {
                key: 'offline-points-addresses',
                path: `${APP_PREFIX_PATH}/dashboards/offline-points/addresses`,
                title: 'sidenav.dashboard.offline-points.addresses',
                breadcrumb: false,
                submenu: []
            },
            {
                key: 'offline-points-geo-areas',
                path: `${APP_PREFIX_PATH}/dashboards/offline-points/geo-areas`,
                title: 'sidenav.dashboard.offline-points.geo-areas',
                breadcrumb: false,
                submenu: []
            },
        ]
    }
]
const employsNavTree = [
    {
        key: 'dashboards-employs',
        path: `${APP_PREFIX_PATH}/dashboards/employs`,
        title: 'sidenav.dashboard.employs',
        icon: PieChartOutlined,
        breadcrumb: false,
        isGroupTitle: false,
        submenu: []
    }
]

const spamNavTree = [
    {
        key: 'dashboards-spam',
        path: `${APP_PREFIX_PATH}/dashboards/spam`,
        title: 'sidenav.dashboard.spam',
        icon: PieChartOutlined,
        breadcrumb: false,
        isGroupTitle: false,
        submenu: []
    }
]


const dashBoardNavTree = [{
    key: 'dashboards',
    path: `${APP_PREFIX_PATH}/dashboards`,
    title: 'sidenav.dashboard',
    icon: DashboardOutlined,
    breadcrumb: false,
    isGroupTitle: true,
    submenu: [
        {
            key: 'dashboards-default',
            path: `${APP_PREFIX_PATH}/dashboards/default`,
            title: 'sidenav.dashboard.default',
            icon: DashboardOutlined,
            breadcrumb: false,
            submenu: []
        },
        ...catalogueNavTree,
        ...ordersNavTree,
        ...clientsNavTree,
        ...bannersNavTree,
        ...promoCodesNavTree,
        ...offlinePoints,
        ...employsNavTree,
        ...spamNavTree

    ]
}]

const systemsNavTree = [{
    key: 'systems',
    path: `${APP_PREFIX_PATH}/systems`,
    title: 'sidenav.systems',
    icon: DashboardOutlined,
    breadcrumb: false,
    isGroupTitle: true,
    submenu: [
        {
            key: 'systems-settings',
            path: `${APP_PREFIX_PATH}/systems/settings`,
            title: 'sidenav.systems.settings',
            icon: DashboardOutlined,
            breadcrumb: false,
            submenu: []
        },
        {
            key: 'systems-mobile-app',
            path: `${APP_PREFIX_PATH}/systems/mobile-app`,
            title: 'sidenav.systems.mobile-app',
            icon: DashboardOutlined,
            breadcrumb: false,
            submenu: []
        },
        {
            key: 'systems-logs',
            path: `${APP_PREFIX_PATH}/systems/logs`,
            title: 'sidenav.systems.logs',
            icon: DashboardOutlined,
            breadcrumb: false,
            submenu: []
        },
    ]
}
]

const navigationConfig = [
    ...dashBoardNavTree,
    ...systemsNavTree

]

export default navigationConfig;
