import { Component } from '@angular/core';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent {
  userStats = [
    { title: 'Profile Views', value: '1,234', icon: 'visibility' },
    { title: 'Messages', value: '56', icon: 'message' },
    { title: 'Connections', value: '89', icon: 'people' },
    { title: 'Activities', value: '23', icon: 'activity' }
  ];

  recentActivities = [
    { action: 'Updated profile picture', time: '2 hours ago' },
    { action: 'Connected with John Doe', time: '5 hours ago' },
    { action: 'Completed profile setup', time: '1 day ago' },
    { action: 'Joined the platform', time: '3 days ago' }
  ];
}
