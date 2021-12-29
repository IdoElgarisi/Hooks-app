import React, { useEffect, useRef, useState } from 'react';

export const Counter = ({}) => {
  // const [state, setState] = useState({
  //   count: 0,
  //   isDarkMode: false,
  // });
  const [count, setCount] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const intervalId = useRef();
  const h1Ref = useRef();

  //cmp did mount
  useEffect(() => {
    intervalId.current = setInterval(() => {
      // setCount((prevCount) => prevCount + 1);
    }, 1000);

    //componentWillUnmount
    return () => {
      // clearInterval(intervalId.current);
    };
  }, []);

  useEffect(() => {
    if (count) {
      console.log('count: ', count);
      // update...
    } else {
      // mount...
    }
  }, [count]);

  const onIncrement = () => {
    setCount((prevCount) => prevCount + 1);
    // this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  return (
    <div className='count'>
      <h1 ref={h1Ref}>count</h1>
      <p>You clicked {count} times</p>
      <button onClick={onIncrement}>Click me</button>
      <button onClick={() => clearInterval(intervalId.current)}>
        clear interval
      </button>
    </div>
  );
};

// export class Counter extends React.Component {
//   state = {
//     count: 0,
//   };

//   onIncrement = () => {
//     this.setState((prevState) => ({ count: prevState.count + 1 }));
//   };

//   render() {
//     const { onIncrement } = this;
//     const { count } = this.state;

//     return (
//       <div className='count'>
//         <h1>count</h1>
//         <p>You clicked {count} times</p>
//         <button onClick={onIncrement}>Click me</button>
//       </div>
//     );
//   }
// }
