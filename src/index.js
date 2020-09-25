import React from 'react';
import ReactDOM from 'react-dom';
import App from 'frinx-workflow-ui/lib/App'

const conductorApiUrlPrefix = "/uniflow/api/conductor";
const frontendUrlPrefix = "/uniflow/ui";
const enableScheduling = false;
const disabledTasks = ["js", "py", "graphQL"];
const prefixHttpTask = '';

ReactDOM.render(
    <App backendApiUrlPrefix={conductorApiUrlPrefix}
         frontendUrlPrefix={frontendUrlPrefix}
         enableScheduling={enableScheduling}
         disabledTasks={disabledTasks}
         prefixHttpTask={prefixHttpTask}/>,
    document.getElementById('root')
);
