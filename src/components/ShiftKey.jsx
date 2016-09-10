import React from 'react';
import { pie, arc } from 'd3-shape';

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

/*
 * The ShiftKey provides a convenient mechanism for shifting
 * a character set.
 */
const ShiftKey = React.createClass({
  getInitialState: function() {
    return {
      shift: 0
    };
  },
  increaseShift: function(event) {
    this.setState({
      shift: (this.state.shift+1) % this.props.characters.length
    });
  },
  decreaseShift: function(event) {
    const count = this.props.characters.length;
    this.setState({
      shift: (this.state.shift-1+count) % count
    });
  },
  render: function() {
    const {
      characters = [],
      radius = 200
    } = this.props;
    const {
      shift
    } = this.state;
    const padding = 10;
    
    return (
      <div className='shift-key'>
        <button onClick={this.increaseShift}
                style={{display: 'block', width: radius*2+padding*2}}>
          +1
        </button>
        <svg width={radius*2+padding*2} height={radius*2+padding*2} >
          <g transform={`translate(${radius+padding},${radius+padding})`}>
            <CharacterRing characters={characters}
                           className='outer-ring'
                           outerRadius={radius}
                           innerRadius={radius-30} />
            <CharacterRing characters={shiftArray(characters, shift)}
                           className='inner-ring'
                           outerRadius={radius-30}
                           innerRadius={radius-60} />
            <g>
              <text style={{textAnchor: 'middle', fontSize: '36px'}}>
                {shift} / {shift-characters.length}
              </text>
            </g>
          </g>
        </svg>
        <button onClick={this.decreaseShift}
                style={{display: 'block', width: radius*2+padding*2}}>
          -1
        </button>
      </div>
    );
  }
});

function CharacterRing(props) {
  const {
    characters,
    outerRadius,
    innerRadius,
    className = ''
  } = props;

  const pieLayout = pie()
    .value(d => d.count)
    .sort(null);

  const arcPath = arc()
    .innerRadius(innerRadius)
    .outerRadius(outerRadius);

  const pieData = pieLayout(wrapCharacters(characters));
  return (
    <g className={className}>
      {
        pieData.map(node => {
          const [x,y] = arcPath.centroid(node);
          return (
            <g key={node.data.value}>
              <path d={arcPath(node)}></path>
              <text transform={`translate(${x},${y})`} dy='0.5em'>{node.data.value}</text>
            </g>
          )
        })
      }
    </g>
  );
}

function wrapCharacters(characters) {
  return characters.map(c => ({value: c, count: 1}));
}

function shiftArray(characters, shift) {
  return [...characters.slice(shift), ...characters.slice(0, shift)];
}

export default ShiftKey;
export const AlphabetShiftKey = <ShiftKey characters={ALPHABET} />;
