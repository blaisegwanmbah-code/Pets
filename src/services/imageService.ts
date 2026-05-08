import axios from 'axios';
import FormData from 'form-data';

const IMGBB_API_KEY = process.env.IMGBB_API_KEY;

export const imageService = {
  async uploadImage(imageBuffer: Buffer) {
    try {
      const formData = new FormData();
      formData.append('image', imageBuffer.toString('base64'));
      
      const response = await axios.post(
        `https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`,
        formData,
        { headers: { ...formData.getHeaders() } }
      );

      return response.data.data.url;
    } catch (error) {
      console.error('Error uploading to ImgBB:', error);
      throw new Error('Image upload failed');
    }
  }
};
