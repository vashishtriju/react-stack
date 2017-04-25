import React from 'react';
import { render } from 'react-dom';
import App from './components/App.jsx';
import {indigo500, indigo700, redA200} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

require('./main.scss');
const muiTheme = getMuiTheme({
    palette: {
        primary1Color: indigo500,
        primary2Color: indigo700,
        accent1Color: redA200,
        pickerHeaderColor: indigo500,
    },
});

render(<MuiThemeProvider muiTheme={muiTheme}>
        <div>
        <App />
        </div>
        </MuiThemeProvider>,document.getElementById('container'));

