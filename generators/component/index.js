module.exports = {
  description: 'Component Generator',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'component name',
    }
    // ,
    // {
    //   type: 'confirm',
    //   name: 'stories',
    //   message: 'do you want to add stories book file?',
    //   default: false,
    // },
  ],
  actions: (data) => {
    const actions = [
      {
        type: "add",
        path: "app/components/{{properCase name}}/{{properCase name}}.jsx",
        templateFile: "generators/component/index.jsx.hbs",
      },
      {
        type: "add",
        path: "app/components/{{properCase name}}/styles.css",
        templateFile: "generators/component/styles.css.hbs",
      },
    ];

    // if (data.unit_test) {
    //   actions.push({
    //     type: 'add',
    //     path: 'src/client/components/{{properCase name}}/__tests__/index.test.jsx',
    //     templateFile: 'generators/component/index.test.jsx.hbs',
    //   });
    // }

    return actions;
  },
};
