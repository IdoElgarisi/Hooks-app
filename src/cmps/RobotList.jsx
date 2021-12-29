import React from 'react';
import { RobotPreview } from './RobotPreview';

const _RobotList = ({ robots, removeRobot }) => {
  console.log('robot list rendered');
  return (
    <div className="robot-list specific-cards-grid">
      {robots.map(robot => (
        <RobotPreview removeRobot={removeRobot} robot={robot} key={robot._id} />
      ))}
    </div>
  )
}

export const RobotList = React.memo(_RobotList)
