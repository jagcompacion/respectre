import React from 'react';
import 'spectre.css/dist/spectre.css';
import 'spectre.css/dist/spectre-icons.css';
import { storiesOf } from '@storybook/react';
import {
  Code,
} from '../ui/elements';
import withDocsCustom from './utils/withDocsCustom';
import CodeReadme from '../docs/Code.md';

storiesOf('Elements/ Code', module)
  .addDecorator(withDocsCustom(CodeReadme))
  .add('default', () => (
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
  ));
