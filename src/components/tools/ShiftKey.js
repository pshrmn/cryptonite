import React from 'react';
import { pie, arc } from 'd3-shape';

import { InputRow } from 'components/inputs';
import { EnglishAlphabet } from 'constants/CharacterSets';

import 'scss/shiftkey.scss';

/*
 * The ShiftKey provides a convenient mechanism for shifting
 * a character set.
 */
class ShiftKey extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      shift: props.initialShift || 0
    };

    this.increaseShift = this.increaseShift.bind(this);
    this.decreaseShift = this.decreaseShift.bind(this);
  }

  increaseShift(event) {
    this.setState({
      shift: (this.state.shift+1) % this.props.characters.length
    });
  }

  decreaseShift(event) {
    const count = this.props.characters.length;
    this.setState({
      shift: (this.state.shift-1+count) % count
    });
  }

  render() {
    const {
      characters = [],
      radius = 125,
      noControls = false
    } = this.props;
    const {
      shift
    } = this.state;
    const padding = 10;
    
    const farRing = radius;
    const medRing = radius - 30;
    const nearRing = medRing - 30;
    const tri = 30;
    const halfTri = tri/2;
    const d = `M 0,${-halfTri} l ${tri},${halfTri} l ${-tri},${halfTri} Z`
    return (
      <div className='shift-key'>
        <svg width={radius*2+padding*2} height={radius*2+padding*2} >
          <g transform={`translate(${radius+padding},${radius+padding})`}>
            <CharacterRing characters={characters}
                           className='outer-ring'
                           outerRadius={farRing}
                           innerRadius={medRing} />
            <CharacterRing characters={shiftArray(characters, shift)}
                           className='inner-ring'
                           outerRadius={medRing}
                           innerRadius={nearRing} />
            <g>
              {
                noControls ? null : (
                  <g className='clickable'
                     transform={`translate(${Math.floor((nearRing)/2)},0)`}
                     onClick={this.increaseShift} >
                     <circle r={tri} 
                             transform={`translate(${halfTri},0)`}
                             /* this circle exists to make clicking the button easier */ />
                    <path d={d} />
                    <title>- Left Shift / + Right Shift</title>
                  </g>
                )
              }
              <g className='shift-amount'>
                <text dy='-2.0em'>left {Math.abs(shift-characters.length)}</text>
                <text dy='0.3em' className='big'>{characters[shift]}</text>
                <text dy='2.5em'>right {shift}</text>                
              </g>
              {
                noControls ? null : (
                  <g className='clickable'
                     transform={`translate(${-Math.ceil((nearRing)/2)},0)`}
                     onClick={this.decreaseShift} >
                     <circle r={tri} 
                             transform={`translate(${-halfTri},0)`}
                             /* this circle exists to make clicking the button easier */ />
                    <path d={d} transform='scale(-1,1)' />
                    <title>+ Left Shift / - Right Shift</title>
                  </g>
                )
              }
            </g>
          </g>
        </svg>
      </div>
    );
  }
}

function CharacterRing(props) {
  const {
    characters,
    outerRadius,
    innerRadius,
    className = ''
  } = props;

  const pieLayout = pie()
    .value(1)
    .sort(null);

  const arcPath = arc()
    .innerRadius(innerRadius)
    .outerRadius(outerRadius);

  const pieData = pieLayout(characters);
  return (
    <g className={className}>
      {
        pieData.map(node => {
          const [x,y] = arcPath.centroid(node);
          return (
            <g key={node.data}>
              <path d={arcPath(node)} />
              <text transform={`translate(${x},${y})`} dy='0.5em'>{node.data}</text>
            </g>
          )
        })
      }
    </g>
  );
}

function shiftArray(characters, shift) {
  return [...characters.slice(shift), ...characters.slice(0, shift)];
}


export default ShiftKey;

const EnglishCharacters = EnglishAlphabet.split('');
/*
 * A ShiftKey whose characters are the letters in the English alphabet
 */
export function AlphabetShiftKey(props) {
  return <ShiftKey characters={EnglishCharacters} {...props} />
};

export class CustomShiftKey extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chars: ''
    };
    this.handleCharacters = this.handleCharacters.bind(this);
  }

  handleCharacters(event) {
    this.setState({
      chars: event.target.value
    });
  }

  render() {
    const {
      chars
    } = this.state;
    const charsArray = chars.split('');
    const charSet = new Set(charsArray);
    let errors = undefined;
    if ( charSet.size !== chars.length ) {
      errors = ['Duplicate characters are not allowed in shift ciphers']
    }
    return (
      <div>
        <p>
          Enter the characters to use in the shift key below as one long string
          (with no spaces). For example, to create a shift key using the English
          alphabet, you would enter "ABCDEFGHIJKLMNOPQRSTUVWXYZ".
        </p>
        {
          chars.length === 0 ? null : <ShiftKey characters={Array.from(charSet)} />
        }
        <InputRow value={chars}
                  handler={this.handleCharacters}
                  errors={ errors } />
        
      </div>
    );
  }
}
