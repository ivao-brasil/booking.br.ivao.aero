export const Env = {
  API_HOST: process.env.REACT_APP_API_HOST || 'https://booking.br.ivao.aero/api',
  LOGO_URL: process.env.REACT_APP_LOGO_URL,
  DEV: Boolean(process.env.REACT_APP_DEV) || false,
};
