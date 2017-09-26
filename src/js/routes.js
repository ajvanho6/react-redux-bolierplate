import Config from './lib/Config';

const routes = {
    // General
    ROOT: Config.ROOT,
    HOME: `${Config.ROOT}home`,

    // Profile pages
    SIGN_IN: `${Config.ROOT}sign-in`,
    PROFILE: `${Config.ROOT}profile`,
    SIGN_UP: `${Config.ROOT}sign-up`,
    FORGOT_PASSWORD: `${Config.ROOT}forgot-password`,
    RESET_PASSWORD: `${Config.ROOT}reset-password`,
};

export default routes;
