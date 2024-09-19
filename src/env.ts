const activeEnv = process.env.NODE_ENV || 'production';

let envVariables = {
    API_HOST: process.env.REACT_APP_API_HOST || 'http://localhost.ivao.aero:8080/api',
    LOGO_LIGHT: process.env.REACT_APP_LOGO_LIGHT || 'https://assets.br.ivao.aero/logos/kronos_light.svg',
    LOGO_DARK: process.env.REACT_APP_LOGO_DARK || 'https://assets.br.ivao.aero/logos/kronos_dark.svg',
    LOGO_SIDEBAR_LIGHT: process.env.REACT_APP_LOGO_SIDEBAR_LIGHT || 'https://assets.br.ivao.aero/logos/symbol_white.svg',
    LOGO_SIDEBAR_DARK: process.env.REACT_APP_LOGO_SIDEBAR_DARK || 'https://assets.br.ivao.aero/logos/symbol_white.svg',
    ANALYTICS_TRACKING_ID: process.env.REACT_APP_ANALYTICS_TRACKING_ID || '',
    AUTHORIZATION_SERVER: process.env.REACT_APP_AUTHORIZATION_SERVER || 'https://login.ivao.aero/index.php'
};

if (activeEnv === 'development') {
    envVariables = {
        API_HOST: process.env.REACT_APP_API_HOST || 'http://localhost:3003/api',
        LOGO_LIGHT: process.env.REACT_APP_LOGO_LIGHT || 'https://assets.br.ivao.aero/logos/kronos_light.svg',
        LOGO_DARK: process.env.REACT_APP_LOGO_DARK || 'https://assets.br.ivao.aero/logos/kronos_dark.svg',
        LOGO_SIDEBAR_LIGHT: process.env.REACT_APP_LOGO_SIDEBAR_LIGHT || 'https://assets.br.ivao.aero/logos/symbol_white.svg',
        LOGO_SIDEBAR_DARK: process.env.REACT_APP_LOGO_SIDEBAR_DARK || 'https://assets.br.ivao.aero/logos/symbol_white.svg',
        ANALYTICS_TRACKING_ID: process.env.REACT_APP_ANALYTICS_TRACKING_ID || '',
        AUTHORIZATION_SERVER: process.env.REACT_APP_AUTHORIZATION_SERVER || 'http://localhost:3003/login'
    }
}

export const Env = envVariables;