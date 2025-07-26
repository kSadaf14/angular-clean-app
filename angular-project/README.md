# Angular 15 Project - User & Professional Sections

A modern, responsive Angular 15 application with two main sections: User and Professional. Built with Angular Material for a clean, professional UI.

## Project Structure

```
angular-project/
├── src/
│   ├── app/
│   │   ├── shared/           # Shared components (header, footer, not-found)
│   │   ├── common/           # Common pages (splash, login, signup)
│   │   ├── user/             # User section with dashboard
│   │   ├── professional/     # Professional section with dashboard
│   │   ├── app.component.*   # Root component
│   │   ├── app.module.ts     # Root module
│   │   └── app-routing.module.ts # Main routing configuration
│   ├── assets/               # Static assets
│   ├── styles.scss           # Global styles
│   └── index.html            # Main HTML file
├── angular.json              # Angular CLI configuration
├── package.json              # Dependencies and scripts
└── tsconfig.json             # TypeScript configuration
```

## Features

### 🏠 Common Pages
- **Splash Page**: Welcome screen with navigation to user/professional sections
- **Login Page**: Responsive login form with validation
- **Signup Page**: User registration form with password confirmation
- **404 Page**: Custom not-found page

### 👤 User Section
- **User Dashboard**: Personal statistics, profile overview, recent activities
- **Responsive Design**: Optimized for all device sizes
- **Material Design**: Clean, modern UI components

### 💼 Professional Section
- **Professional Dashboard**: Project management, client overview, professional tools
- **Advanced Features**: Project tracking, time management, analytics
- **Business Tools**: Invoice generation, client portal, file management

### 🎨 Shared Components
- **Header**: Navigation bar with routing to all sections
- **Footer**: Contact information and quick links
- **Responsive Layout**: Mobile-first design approach

## Technology Stack

- **Angular 15**: Latest Angular framework
- **Angular Material**: UI component library
- **SCSS**: Enhanced CSS with variables and mixins
- **TypeScript**: Type-safe JavaScript
- **RxJS**: Reactive programming
- **Angular Router**: Client-side routing with lazy loading

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm (v8 or higher)
- Angular CLI (v15)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd angular-project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   # or
   ng serve
   ```

4. **Open your browser**
   Navigate to `http://localhost:4200`

### Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run unit tests
- `npm run lint` - Run linting

## Routing Structure

```
/ (root)
├── /splash          # Welcome/landing page
├── /login           # User authentication
├── /signup          # User registration
├── /user            # User section (lazy loaded)
│   └── /dashboard   # User dashboard
├── /professional    # Professional section (lazy loaded)
│   └── /dashboard   # Professional dashboard
└── /**              # 404 not found page
```

## Responsive Design

The application is built with a mobile-first approach and includes:

- **Breakpoints**:
  - Mobile: < 480px
  - Tablet: 481px - 768px
  - Desktop: > 768px

- **Features**:
  - Flexible grid layouts
  - Responsive navigation
  - Adaptive typography
  - Touch-friendly interactions

## Material Design Components Used

- **Layout**: Toolbar, Card, Tabs
- **Forms**: Input, Button, Form Field, Select
- **Navigation**: Menu, Sidebar
- **Data Display**: Table, List, Progress Bar
- **Feedback**: Snackbar, Dialog

## Code Organization

### Modules
- **AppModule**: Root module with core dependencies
- **SharedModule**: Reusable components (header, footer)
- **CommonPagesModule**: Authentication and landing pages
- **UserModule**: User-specific features (lazy loaded)
- **ProfessionalModule**: Professional features (lazy loaded)

### Components
- Each component follows Angular style guide
- Separation of concerns (template, styles, logic)
- Reusable and maintainable code structure

### Routing
- Lazy loading for feature modules
- Route guards ready for implementation
- Clean URL structure

## Customization

### Theming
The application uses Angular Material's theming system. To customize:

1. Edit `src/styles.scss`
2. Modify Material theme variables
3. Add custom CSS variables for brand colors

### Adding New Features
1. Generate new components: `ng generate component feature-name`
2. Add routing in respective module
3. Update navigation in header component

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support and questions, please contact the development team.
