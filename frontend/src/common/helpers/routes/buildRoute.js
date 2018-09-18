export const buildRoute = (baseRoute, params) =>
  Boolean(params)
    ? Object.keys(params).reduce(
        (route, key) => replaceRouteParam(route, key, params[key]),
        baseRoute
      )
    : '';

const replaceRouteParam = (baseRoute, key, value) =>
  Boolean(baseRoute)
    ? baseRoute.replace(new RegExp(`:${key}`, 'g'), value)
    : '';
