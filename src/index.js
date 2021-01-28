import React from 'react';
import ReactDOM from 'react-dom';
import { WorkflowApp } from 'frinx-workflow-ui/dist';

const conductorApiUrlPrefix = "/api/uniflow/conductor";
const frontendUrlPrefix = "/uniflow/ui";
const enableScheduling = true;
const disabledTasks = ["js", "py", "graphQL", "while", "while_end"];
const prefixHttpTask = '';

ReactDOM.render(
    <WorkflowApp backendApiUrlPrefix={conductorApiUrlPrefix}
         frontendUrlPrefix={frontendUrlPrefix}
         enableScheduling={enableScheduling}
         disabledTasks={disabledTasks}
         prefixHttpTask={prefixHttpTask}/>,
    document.getElementById('root')
);
