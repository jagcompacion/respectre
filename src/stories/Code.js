import React from 'react';
import 'spectre.css/dist/spectre.css';
import 'spectre.css/dist/spectre-icons.css';
import { storiesOf } from '@storybook/react';
import {
  Code,
} from '../ui/elements';
import { Container } from '../ui/layout';

storiesOf('Elements/ Code', module)
  .add('default', () => (
    <Container className="p-2">
      <Code>
        <code>
          <span className="com">
            &lt;!-- code snippets --&gt;
          </span>
          &lt;
          <span className="tag">
            button
          </span>
          &nbsp;
          <span className="atn">
            class
          </span>
          =
          <span className="atv">
            &quot;btn&quot;
          </span>
          &gt;Submit&lt;
          <span className="tag">
            /button
          </span>
          &gt;
        </code>
      </Code>
    </Container>
  ));
