export const data = {   
    baseURL: 'https://callboard-backend.herokuapp.com',    
    originalCategories: [],
    categories: [],    
    russianCategories: [],
    renderedCategories: [],
    categoriesList: {},    
    auth: {
      isAuth: false,
      token: '',
      refreshToken: '',
    },
    user: {
      email: '',
      favorites: [],
      ownCalls: [],
    },
    properties: {
      width: 0,
      height: 0,
      isMobile: false,
      isTablet: false,
      isDesktop: false,
    },
  };