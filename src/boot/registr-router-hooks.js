import { getAccessToken } from 'src/api/tokens';

export default ({ router, store }) => {
  const storeAuth = authStore();

  //   if (getAccessToken()) {
  //     store.commit("auth/setAuth", true);
  //   }
  router.beforeEach((to, from, next) => {
    console.log(from.meta);
    if (to.meta && to.meta.auth) {
      if (getAccessToken()) return next();
      else {
        next({ name: 'auth' });
      }
    }
    //     if(to.name ==='auth.login' && getAccessToken()) return next({ name: "index-directive",replace: true});
    //     if(to.name ==='auth.registr' && getAccessToken()) return next({ name: "index-directive",replace: true});
    //     if (!hasAuth(to)) return next();

    // if (storeAuth.countAuth > 0) storeAuth.checkToken()
    return next();
  });
};
