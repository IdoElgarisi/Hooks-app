import { Component, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { NiceBtn } from '../cmps/NiceBtn';
import { robotService } from '../services/robotService';
import {
  getRobotById,
  tryRobot,
  removeRobot,
} from '../store/actions/robotActions';
import { spendBalance } from '../store/actions/userActions';

const _RobotDetails = ({
  robot,
  history,
  removeRobot,
  getRobotById,
  match,
}) => {
 

  useEffect(() => {
    loadRobot();
  }, [match.params.id]);



  const goBack = () => {
    history.push('/');
  };

  const loadRobot = async () => {
    const { id } = match.params;
    getRobotById(id);
  };

  const onRemoveRobot = async () => {
    await removeRobot(robot._id);
    goBack();
  };

  if (!robot) return <h1>loading...</h1>;
  const nextRobotId = robotService.getNextRobotId(robot._id);
  return (
    <div className='robot-details text-center'>
      <button onClick={goBack}>Back</button>
      <div>
        <img src={'https://robohash.org/' + robot._id} alt='' />
      </div>
      <p>{robot.model}</p>
      <p>{robot.type}</p>
      <p>Battery: {robot.batteryStatus}%</p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur
        debitis dolores autem sequi aliquid. Iusto, nulla ea suscipit iste modi
        sequi possimus, consequuntur blanditiis ut magnam veritatis
        reprehenderit iure quaerat?
      </p>
      <section className='actions flex column align-center'>
        <NiceBtn onClick={tryRobot}>Try me</NiceBtn>
        <NiceBtn onClick={onRemoveRobot}>Delete Robot</NiceBtn>
        <Link to={'/robot/edit/' + robot._id}>
          <NiceBtn>Edit Robo</NiceBtn>
        </Link>
        <Link to={'/robot/' + nextRobotId}>
          <NiceBtn>Next robot</NiceBtn>
        </Link>
      </section>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    robot: state.robotModule.currRobot,
    loggedInUser: state.userModule.loggedInUser,
  };
};

const mapDispatchToProps = {
  getRobotById,
  tryRobot,
  removeRobot,
  spendBalance,
};

export const RobotDetails = connect(
  mapStateToProps,
  mapDispatchToProps
)(_RobotDetails);
