import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MockServicePage from './components/pages/MockServicePage';
import JavaMySqlQueryingProgram from './components/pages/JavaMySqlQueryingProgram';
import AnsibleScripts from './components/pages/AnsibleScripts';
import Album from './components/Album';

export default function App() {
  return (
    <BrowserRouter>
      <Route exact path='/' component={Album} />
      <Route path='/mockservice' component={MockServicePage} />
      <Route
        path='/javamysqlqueryingprogram'
        component={JavaMySqlQueryingProgram}
      />
      <Route path='/ansiblescripts' component={AnsibleScripts} />
    </BrowserRouter>
  );
}
