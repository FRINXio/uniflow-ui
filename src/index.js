import React from 'react';
import ReactDOM from 'react-dom';
import App from 'frinx-workflow-ui/lib/App'

const conductorApiUrlPrefix = "/uniflow/api/conductor";
const frontendUrlPrefix = "/uniflow/ui";
const enableScheduling = true;
const disabledTasks = ["js", "py", "graphQL", "while", "while_end"];
const prefixHttpTask = '';

ReactDOM.render(
    <App backendApiUrlPrefix={conductorApiUrlPrefix}
         frontendUrlPrefix={frontendUrlPrefix}
         enableScheduling={enableScheduling}
         disabledTasks={disabledTasks}
         prefixHttpTask={prefixHttpTask}/>,
    document.getElementById('root')
);
