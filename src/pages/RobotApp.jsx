import { connect, useDispatch, useSelector } from 'react-redux';
import { Component, useCallback, useEffect, useState } from 'react';
import { RobotList } from '../cmps/RobotList';
import { RobotFilter } from '../cmps/RobotFilter';
import { Link } from 'react-router-dom';
import { NiceBtn } from '../cmps/NiceBtn';
import { ReactComponent as Logo } from '../assets/imgs/logo.svg';
import {
  loadRobots,
  removeRobot,
  setFilterBy,
} from '../store/actions/robotActions';
import { Counter } from '../cmps/Counter';

export const RobotApp = (props) => {
  // componentDidMount() {
  // }

  const { robots } = useSelector(state => state.robotModule)
  const dispatch = useDispatch()

  const [popo, setPopo] = useState(false)

  useEffect(() => {
    dispatch(loadRobots());
  }, [])

  const onChangeFilter = (filterBy) => {
    dispatch(setFilterBy(filterBy));
    dispatch(loadRobots());
  };

  const onRemoveRobot = useCallback(async (robotId) => {
    dispatch(removeRobot(robotId));
  }, [])

  if (!robots) return <div className='page-loading-screen'>Loading...</div>;

  return (
    <div className='robot-app'>

      {/* <Counter /> */}
      <RobotFilter onChangeFilter={onChangeFilter} />
      <RobotList robots={robots} removeRobot={onRemoveRobot} />

      <Link to='robot/edit'>
        <NiceBtn Icon={Logo} style={{ margin: '0 auto' }}>
          Add Robot
        </NiceBtn>
      </Link>
      <button onClick={() => setPopo(prevPopo => !prevPopo)}>Toggle Popo </button>
    </div>
  );
}



// Connects the store with the component, injects it to the props
