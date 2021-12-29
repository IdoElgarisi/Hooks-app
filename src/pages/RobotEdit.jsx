import { Component, createRef, useEffect, useState } from 'react'
import { useForm } from '../hooks/useForm'
import { robotService } from '../services/robotService'

export const RobotEdit = (props) => {

  const [robot, handleChange, setRobot] = useForm(null)
  
 

  useEffect( () => {
    loadRobot()
  }, [])


  const loadRobot = async () => {
    const id = props.match.params.id
    const robot = id ? await robotService.getById(id) : robotService.getEmptyRobot()
    setRobot(robot)
  }

 

  const onSaveRobot = async (ev) => {
    ev.preventDefault()
    
    await robotService.save(robot)
    props.history.push('/')
  }

  if (!robot) return <div>Lodaing...</div>
  const { model, type, batteryStatus } = robot
  return (
    <form className="robot-edit">
      <label htmlFor="model">Model</label>
      <input value={model} name="model" type="text" id="model" onChange={handleChange} />

      <label htmlFor="type">Type</label>
      <input value={type} name="type" type="text" id="type" onChange={handleChange} />

      <label htmlFor="batteryStatus">Max Battery</label>
      <input value={batteryStatus} name="batteryStatus" type="number" id="batteryStatus" onChange={handleChange} />

      <button onClick={onSaveRobot}>Save</button>

      <p></p>
    </form>
  )
}
