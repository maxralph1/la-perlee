const routeNames = {
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
}

function route(name, params = {}) {
  let url = routeNames[name];
  
  for (let prop in params) {
    if (Object?.prototype?.hasOwnProperty?.call(params, prop)) {
      url = url?.replace(`:${prop}`, params[prop]);
    }
  }
  
  return url;
}


export { route }