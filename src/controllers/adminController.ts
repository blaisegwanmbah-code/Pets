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
    const adminPass = process.env.ADMIN_PASSWORD || 'admin123';
    
    console.log('Login attempt received');
    if (password === adminPass) {
      console.log('Admin login successful, setting cookie');
      // Use more robust cookie options for iframes
      // Note: SameSite=None requires Secure=true. 
      // In development environments behind proxy, we trust the secure header or x-forwarded-proto
      const isSecure = req.secure || req.headers['x-forwarded-proto'] === 'https';
      
      res.cookie('admin_auth', 'true', { 
        httpOnly: true,
        path: '/',
        maxAge: 86400000, 
        sameSite: isSecure ? 'none' : 'lax',
        secure: isSecure
      });
      return res.redirect('/admin/dashboard');
    }
    console.log('Admin login failed: Password mismatch');
    res.render('admin/login', { title: 'Admin Login', error: 'Invalid Password. (Try admin123 if not set)' });
  },

  logout(req: any, res: any) {
    res.clearCookie('admin_auth');
    res.redirect('/admin/login');
  },

  async getDashboard(req: any, res: any) {
    console.log('Checking admin auth. Cookies:', JSON.stringify(req.cookies));
    if (req.cookies && req.cookies.admin_auth === 'true') {
      console.log('Authorized access to dashboard');
      try {
        console.log('Fetching data for dashboard...');
        const data = await dbService.getData();
        console.log('Data fetched successfully');
        res.render('admin/dashboard', { 
          title: 'Admin Dashboard', 
          puppies: data.puppies || [],
          applications: data.applications || []
        });
      } catch (error) {
        console.error('Error in getDashboard data fetch:', error);
        res.status(500).send('Error loading dashboard data');
      }
    } else {
      console.log('Not authorized, redirecting to login. Cookie value:', req.cookies ? req.cookies.admin_auth : 'undefined');
      return res.redirect('/admin/login');
    }
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
  },

  async deletePuppy(req: any, res: any) {
    if (req.cookies.admin_auth !== 'true') return res.status(403).send('Forbidden');
    try {
      const { id } = req.params;
      const data = await dbService.getData();
      data.puppies = (data.puppies || []).filter((p: any) => p.id !== id);
      await dbService.updateData(data);
      res.redirect('/admin/dashboard');
    } catch (error) {
      res.status(500).send('Error deleting puppy');
    }
  },

  async togglePuppyStatus(req: any, res: any) {
    if (req.cookies.admin_auth !== 'true') return res.status(403).send('Forbidden');
    try {
      const { id } = req.params;
      const data = await dbService.getData();
      const puppy = (data.puppies || []).find((p: any) => p.id === id);
      if (puppy) {
        puppy.status = puppy.status === 'Available' ? 'Reserved' : 'Available';
        await dbService.updateData(data);
      }
      res.redirect('/admin/dashboard');
    } catch (error) {
      res.status(500).send('Error updating status');
    }
  }
};
