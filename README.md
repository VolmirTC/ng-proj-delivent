# Ngproj

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## PROXY e CORS - ISSUES
1. Usei esta configuracao do link abaixo
https://github.com/angular/angular-cli/issues/4676#issuecomment-367270531

2. usei o arquivo `PROXY.CONF.JSON`
{
  "/api/*": {
    "target": "http://tbaw.site",
    "secure": false,
    "changeOrigin": true,
    "pathRewrite": {
      "^/api": "http://tbaw.site/api"
    }
  },
  "/assets/*": { 
    "target": "http://tbaw.site/app",
    "changeOrigin": true,
    "secure": true
  }
}

3. No `package.json`
    "start": "ng serve --proxy-config proxy.conf.json",
4. No `prompt`:
ng serve --proxy-config proxy.conf.json

5. No `ListaService` do Angular nao precisa PROXY pra `local`, apenas pra
`backend externo`. 

  //public  BASE_UNICA =  "http://localhost:3000/resultado"; // `LOCAL` com DB.json
   public  BASE_UNICA =  "/api/resultado";



# INSTALL e Configuracao extra para PWA  
Projeto: `ngproj` 
npm install -g http-server-spa@1.3.0
ng build --prod --source-map
http-server-spa dist/ngproj/ index.html 8080