# MyLayoutApp

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.2.2.


src/app/
│
├── core/                  # Application-wide services & layouts
│   ├── layouts/
│   │   ├── default-layout/
│   │   │   ├── default-layout.component.ts
│   │   │   ├── default-layout.component.html
│   │   │   └── default-layout.component.scss
│   │   ├── admin-layout/
│   │   │   ├── admin-layout.component.ts
│   │   │   ├── admin-layout.component.html
│   │   │   └── admin-layout.component.scss
│   │   └── auth-layout/
│   │       ├── auth-layout.component.ts
│   │       ├── auth-layout.component.html
│   │       └── auth-layout.component.scss
│   └── services/
│       └── auth.service.ts
│
├── domains/               # Business features
│   ├── dashboard/
│   │   ├── dashboard.component.ts
│   │   ├── dashboard.component.html
│   │   └── dashboard.routes.ts
│   └── users/
│       ├── users.component.ts
│       ├── users.component.html
│       └── users.routes.ts
│
├── shared/                # Reusable dumb components
│   ├── navbar/
│   │   ├── navbar.component.ts
│   │   └── navbar.component.html
│   └── footer/
│       ├── footer.component.ts
│       └── footer.component.html
│
└── app.routes.ts          # Central route configuration



## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

