import React, { Suspense, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { AutoBatchEventHndler } from './components/AutoBatchEventHandler';
import { AutoBatchOther } from './components/AutoBatchOther';
import { Transition } from './components/Transition';
import { ReactQuery } from './components/ReactQuery';
import { ErrorBoundary } from 'react-error-boundary';

function App() {
  useEffect(() => {
    console.log('useEffect');
  },[]);
  return (
    <div className="App">
      <AutoBatchEventHndler />
      <AutoBatchOther />
      <hr />
      <Transition />
      <hr />
      <ErrorBoundary fallback={<p>全体エラー!!!!!!</p>}>
        <Suspense fallback={<p>全体ローディングLoading!!!!!!</p>}>
          <ReactQuery />
        </Suspense>
      </ErrorBoundary>
      
    </div>
  );
}

export default App;
