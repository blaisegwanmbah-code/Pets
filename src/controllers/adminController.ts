import { Request, Response } from 'express';
import { dbService } from '../services/apiService.js';
import { imageService } from '../services/imageService.js';
import { v4 as uuidv4 } from 'uuid';

export const adminController = {
  getLogin(req: any, res: any) {
    res.render('admin/login', { title: 'Admin Login', error: null });
  },

  postLogin(req: any, res: any) {
    const { password } = req.body;
    if (password === process.env.ADMIN_PASSWORD) {
      // In a real app, use sessions or JWT. For this demo, we'll use a simple query toggle or cookie.
      res.cookie('admin_auth', 'true', { httpOnly: true });
      return res.redirect('/admin/dashboard');
    }
    res.render('admin/login', { title: 'Admin Login', error: 'Invalid Password' });
  },

  async getDashboard(req: any, res: any) {
    if (req.cookies.admin_auth !== 'true') return res.redirect('/admin/login');
    const data = await dbService.getData();
    res.render('admin/dashboard', { 
      title: 'Admin Dashboard', 
      puppies: data.puppies || [],
      applications: data.applications || []
    });
  },

  async addPuppy(req: any, res: any) {
    if (req.cookies.admin_auth !== 'true') return res.status(403).send('Forbidden');
    try {
      if (!req.file) throw new Error('No image uploaded');
      const imageUrl = await imageService.uploadImage(req.file.buffer);
      const data = await dbService.getData();
      
      const newPuppy = {
        id: uuidv4(),
        ...req.body,
        image: imageUrl,
        status: 'Available'
      };

      data.puppies = data.puppies || [];
      data.puppies.push(newPuppy);
      await dbService.updateData(data);
      
      res.redirect('/admin/dashboard');
    } catch (error) {
      res.status(500).send('Error adding puppy');
    }
  }
};
