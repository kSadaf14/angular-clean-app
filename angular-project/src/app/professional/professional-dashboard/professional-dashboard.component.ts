import { Component } from '@angular/core';

@Component({
  selector: 'app-professional-dashboard',
  templateUrl: './professional-dashboard.component.html',
  styleUrls: ['./professional-dashboard.component.scss']
})
export class ProfessionalDashboardComponent {
  professionalStats = [
    { title: 'Active Projects', value: '12', icon: 'work' },
    { title: 'Clients', value: '34', icon: 'business' },
    { title: 'Revenue', value: '$45,678', icon: 'attach_money' },
    { title: 'Team Members', value: '8', icon: 'group' }
  ];

  recentProjects = [
    { name: 'E-commerce Platform', client: 'TechCorp Inc.', status: 'In Progress', progress: 75 },
    { name: 'Mobile App Design', client: 'StartupXYZ', status: 'Review', progress: 90 },
    { name: 'Website Redesign', client: 'LocalBiz', status: 'Completed', progress: 100 },
    { name: 'Brand Identity', client: 'CreativeCo', status: 'Planning', progress: 25 }
  ];

  tools = [
    { name: 'Project Manager', description: 'Manage your projects and tasks', icon: 'assignment' },
    { name: 'Time Tracker', description: 'Track time spent on projects', icon: 'schedule' },
    { name: 'Invoice Generator', description: 'Create and send invoices', icon: 'receipt' },
    { name: 'Client Portal', description: 'Communicate with clients', icon: 'forum' },
    { name: 'Analytics', description: 'View performance metrics', icon: 'analytics' },
    { name: 'File Manager', description: 'Organize project files', icon: 'folder' }
  ];
}
