# modul-website
The official website of Modul

## Getting started
1. Clone the `modul-components` repo (follow the installation instruction).
1. In the `modul-components` folder location, run the following command: `npm link`.
1. Clone this project.
1. In the project folder, run the following command: `npm link modul-components`. This will create a symbolic link between both projects.
1. Run npm install.
1. Run npm run dev.

> You can work on both projects at the same time. When modifications are made in the `modul-components` project, you must execute `npm run build` in the components project to get the modifications in the website project.