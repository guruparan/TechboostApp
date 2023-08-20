import React from 'react';
import SessionDetail from './SessionDetail';

interface AppState {
  data: SessionDetail[];
  setData?: (data: SessionDetail[]) => void;
}

const AppContext = React.createContext<AppState>({
  data: [],
});

export default AppContext;
