import { Request, Response } from 'express';
import { dbService } from '../services/apiService.js';
import { Application } from '../models/types.js';
import { v4 as uuidv4 } from 'uuid';

export const publicController = {
  async getHome(req: Request, res: Response) {
    res.render('index', { title: 'Home' });
  },

  async getAvailable(req: Request, res: Response) {
    const data = await dbService.getData();
    res.render('available', { 
      title: 'Available Puppies', 
      puppies: data.puppies || [] 
    });
  },

  async getApply(req: Request, res: Response) {
    res.render('apply', { title: 'Adoption Application' });
  },

  async submitApplication(req: Request, res: Response) {
    try {
      const data = await dbService.getData();
      const newApp: Application = {
        id: uuidv4(),
        ...req.body,
        status: 'Pending',
        submittedAt: new Date().toISOString()
      };
      
      data.applications = data.applications || [];
      data.applications.push(newApp);
      
      await dbService.updateData(data);
      res.render('apply-success', { title: 'Application Submitted' });
    } catch (error) {
      res.status(500).send('Error submitting application');
    }
  }
};
