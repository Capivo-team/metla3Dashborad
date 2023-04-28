import Apiservices from '../services/ApiServices';

const category = {
  get: async (count) => {
    const items = await Apiservices.get(`/Categories?limit=${count}`);
    return items;
  },

};

export default category;