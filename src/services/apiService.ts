import axios from 'axios';
import { Puppy, Application } from '../models/types.js';

const JSONBIN_API_KEY = process.env.JSONBIN_API_KEY;
const JSONBIN_BIN_ID = process.env.JSONBIN_BIN_ID;

const api = axios.create({
  baseURL: 'https://api.jsonbin.io/v3/b',
  headers: {
    'X-Master-Key': JSONBIN_API_KEY,
    'Content-Type': 'application/json'
  }
});

export const dbService = {
  async getData() {
    try {
      const response = await api.get(`/${JSONBIN_BIN_ID}/latest`);
      return response.data.record;
    } catch (error) {
      console.error('Error fetching data from JSONBin:', error);
      return { puppies: [], applications: [] };
    }
  },

  async updateData(data: { puppies: Puppy[]; applications: Application[] }) {
    try {
      await api.put(`/${JSONBIN_BIN_ID}`, data);
      return true;
    } catch (error) {
      console.error('Error updating data in JSONBin:', error);
      return false;
    }
  }
};
