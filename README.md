# Photobooth App
- React app based on facebook [create-app-react boilerplate](https://github.com/facebook/create-react-app#creating-an-app)
- [Redux](https://redux.js.org/)
- [React-Router](https://reacttraining.com/react-router/core/guides/philosophy)
- [Axios](https://github.com/axios/axios) (ajax call)
- [Babel](https://babeljs.io/)
- [jwt-decode](https://github.com/auth0/jwt-decode)
- [Sass](https://sass-lang.com/)
- yarn

Installing App:
`yarn install` or `npm run install`

Starting the app:
`yarn start` or `npm run start`
`yarn watch-css` or `npm run watch-css`

Build app:
`yarn build` or `npm run build`

For more options see the joined CREATE_APP_REACT_README

Specific structure:
- Components folder:
Holds all components
Each page has is own component folder

- Containers folder:
Each page has its own containers (if needed to be linked to redux)
A container makes the link between a component and redux.
In a container we pass actions, reducer variables to the component
Not every components uses a container, if the component is stateless or just need a props from his 1st level parent
it is not needed.

- Store folder:
Holds reducers
Holds middleware folder
- MiddleWare folder:
Holds ajax call
