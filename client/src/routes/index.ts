interface RouteNames {
  [key: string]: string;
  'about-us': string;
  'collection-list': string;
  'collection': string;
  'contact-us': string;
  'product': string;
  'shop': string;
  'index': string;
}

const routeNames: RouteNames = {
  /** Auth routes */
  
  /** Protected routes */
  
  /** Public routes */
  'about-us': '/about-us',
  'collection-list': '/collection/list',
  'collection': '/collection',
  'contact-us': '/contact-us',
  'product': '/product',
  'shop': '/shop',
  'index': '/',
};

interface RouteParams {
  [key: string]: string | number;
}

function route(name: keyof RouteNames, params: RouteParams = {}): string {
  let url = routeNames[name];
  
  for (let prop in params) {
    if (Object.prototype.hasOwnProperty.call(params, prop)) {
      url = url?.replace(`:${prop}`, String(params[prop]));
    }
  }
  
  return url;
}

export { route };