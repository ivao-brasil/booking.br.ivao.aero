const activeEnv = process.env.NODE_ENV || 'production';

let envVariables = {
  LOGO_LIGHT: process.env.REACT_APP_LOGO_LIGHT || 'https://assets.br.ivao.aero/logos/kronos_light.svg',
  LOGO_DARK: process.env.REACT_APP_LOGO_DARK || 'https://assets.br.ivao.aero/logos/kronos_dark.svg',
  LOGO_SIDEBAR_LIGHT: process.env.REACT_APP_LOGO_SIDEBAR_LIGHT || 'https://assets.br.ivao.aero/logos/symbol_white.svg',
  LOGO_SIDEBAR_DARK: process.env.REACT_APP_LOGO_SIDEBAR_DARK || 'https://assets.br.ivao.aero/logos/symbol_white.svg',
  ANALYTICS_TRACKING_ID: process.env.REACT_APP_ANALYTICS_TRACKING_ID || '',
  IVAO_KRONOS_API_SERVER: process.env.REACT_APP_IVAO_KRONOS_API_HOST || '',
  IVAO_API_SERVER: process.env.REACT_APP_IVAO_API_HOST || '',
  CLIENT_ID: process.env.REACT_APP_CLIENT_ID || '',
  CLIENT_URL: process.env.REACT_APP_CLIENT_URL || '',
};

if (activeEnv === 'development') {
  envVariables = {
    LOGO_LIGHT: process.env.REACT_APP_LOGO_LIGHT || 'https://assets.br.ivao.aero/logos/kronos_light.svg',
    LOGO_DARK: process.env.REACT_APP_LOGO_DARK || 'https://assets.br.ivao.aero/logos/kronos_dark.svg',
    LOGO_SIDEBAR_LIGHT: process.env.REACT_APP_LOGO_SIDEBAR_LIGHT || 'https://assets.br.ivao.aero/logos/symbol_white.svg',
    LOGO_SIDEBAR_DARK: process.env.REACT_APP_LOGO_SIDEBAR_DARK || 'https://assets.br.ivao.aero/logos/symbol_white.svg',
    ANALYTICS_TRACKING_ID: process.env.REACT_APP_ANALYTICS_TRACKING_ID || '',
    IVAO_KRONOS_API_SERVER: process.env.REACT_APP_IVAO_KRONOS_API_HOST || 'http://localhost:3003/api',
    IVAO_API_SERVER: process.env.REACT_APP_IVAO_API_HOST || 'http://localhost:3003',
    CLIENT_ID: process.env.REACT_APP_CLIENT_ID || '',
    CLIENT_URL: process.env.REACT_APP_CLIENT_URL || '',
  }
}

export const Env = envVariables;
