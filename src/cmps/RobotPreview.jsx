import { Link } from "react-router-dom"

export function RobotPreview({ robot, removeRobot }) {

  function onremoveRobot(ev) {
    ev.stopPropagation()
    removeRobot(robot._id)
  }

  return (
    <div className="robot-preview" >
      <Link to={'/robot/' + robot._id}>
        <img src={'https://robohash.org/' + robot._id} alt="" />
        <p>{robot.model}</p>
        <p>{robot.type}</p>
      </Link>
      <section className="actions">
        <button onClick={onremoveRobot}>Delete</button>
      </section>
    </div>
  )
}
