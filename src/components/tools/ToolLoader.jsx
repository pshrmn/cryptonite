import React from 'react';

import { AlphabetShiftKey, CustomShiftKey } from './ShiftKey';
import { EnglishVigenereTable } from './VigenereTable';
import { EnglishVigenereKeys } from './VigenereKeys';
import VigenereIndices from './VigenereIndices';

import 'scss/tool-loader.scss';

export default class ToolLoader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tools: []
    }

    this.addTool = this.addTool.bind(this);
    this.removeTool = this.removeTool.bind(this);
    this.tools = [
      {
        name: 'Shift Key (English Alphabet)',
        component: AlphabetShiftKey
      },
      {
        name: 'Shift Key (Custom)',
        component: CustomShiftKey
      },
      {
        name: 'Vigenère Table',
        component: EnglishVigenereTable
      },
      {
        name: 'Vigenère Keys',
        component: EnglishVigenereKeys
      },
      {
        name: 'Vigenère Indices',
        component: VigenereIndices
      }
    ];
  }

  addTool(index) {
    this.setState({
      tools: this.state.tools.concat([{
        tool: this.tools[index],
        key: Math.random()
      }])
    });
  }

  removeTool(key) {
    this.setState({
      tools: this.state.tools.filter((t,i) => t.key !== key)
    });
  }

  render() {

    const buttons = this.tools.map((tool, key) => {
      return (
        <button
          key={key}
          onClick={() => this.addTool(key)}>
          {tool.name}
        </button>
      );
    });

    const addedTools = this.state.tools.map(t => {
      const {
        tool,
        key
      } = t;
      const Component = tool.component;
      return (
        <div className='tool' key={key}>
          <h3>{ tool.name }</h3>
          <div>
            <button className='neg' onClick={() => this.removeTool(key)}>
              Remove
            </button>
          </div>
          <Component />
        </div>
      );
    });

    return (
      <div className='tool-loader'>
        <div className='tool-choices'>
          { buttons }
        </div>
        <div className='loaded-tools'>
          { addedTools }
        </div>
      </div>
    );
  }
}
