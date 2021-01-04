import {data} from '../data/data';
import axios from 'axios';
import { camelCase } from 'lodash';
class getInitialData {
    constructor() {

    }
    getViewport = () => {
        data.properties.width = window.screen.width;
        data.properties.height = window.screen.height;
        if (data.properties.width <= 767) {
          data.properties.isMobile = true;
        } else if (data.properties.width >= 768 && data.properties.width <= 1279) {
          data.properties.isTablet = true;
        } else data.properties.isDesktop = true;
        
      };

    static  getCategories = async () => {
        const result = await axios.get(`${data.baseURL}/call/categories`);
      
        result.data.forEach(element => {
          data.categories.push(camelCase(element));
          data.originalCategories.push(element);
        });
        result.data.forEach(element => {
          data.categoriesList[camelCase(element)] = [];
          this.getCategory(camelCase(element));
        });        
      };
     static getCategory = async categoryName => {
        try {
          const result = await axios.get(
            `https://callboard-backend.herokuapp.com/call/specific/${categoryName}`,
          );
          data.categoriesList[categoryName] = [...result.data];
        } catch (error) {
          console.log(error);
        }
      };
      
    static getRussianCategories = async () => {
        await axios.get(`${data.baseURL}/call/russian-categories`).then(response => {
          data.russianCategories = [...response.data];  
        });
      };
     static init() {
          this.getCategories()
          this.getRussianCategories()
          console.log(data);

      }
}
export default getInitialData;