## uniflow-ui

Node.js application that hosts wrapper UI which directly renders `frinx-workflow-ui` dependency.

version of `frinx-workflow-ui` is set in `package.json`

### Parameters
To overwrite `frinx-workflow-ui` default parameters, change constants in `/src/index.js`: 

- conductorApiUrlPrefix = "/uniflow/api/conductor";
- frontendUrlPrefix = "/uniflow/ui";
- enableScheduling = true;
- disabledTasks = ["js", "py", "graphQL", "while", "while_end"];
- prefixHttpTask = "";
