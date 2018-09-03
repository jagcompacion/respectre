import React from 'react';
import { withDocs } from 'storybook-readme';

const style = {
  padding: '25px',
  margin: '25px 0',
  boxShadow: '0 0 40px rgba(0, 0, 0, 0.1)',
};

export default withDocs({
  PreviewComponent: ({ children }) => (
    <div style={style}>
      {children}
    </div>
  ),
});