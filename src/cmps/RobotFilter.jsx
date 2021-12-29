import { Component, useState } from 'react'
import { useForm } from '../hooks/useForm'

export const RobotFilter = ({ onChangeFilter }) => {
  // const [filterBy, setFilterBy] = useState({
  //   type: '',
  //   model: '',
  //   minBatteryStatus: '',
  //   maxBatteryStatus: ''
  // })

  // const handleChange = ({ target }) => {
  //   var field = target.name
  //   var value = target.type === 'number' ? +target.value : target.value
  //   setFilterBy(filterBy=>({...filterBy, [field]:value}))
  // }


  const [filterBy, handleChange] = useForm({
    type: '',
    model: '',
    minBatteryStatus: '',
    maxBatteryStatus: ''
  }, onChangeFilter)


  const { type, model, minBatteryStatus, maxBatteryStatus } = filterBy
  return (
    <>
      <h3 style={{ textAlign: 'center' }}>Filter</h3>
      <form className="simple-form robot-filter">
        <label htmlFor="model">Model
          <input value={model} type="text" id="model" name="model" onChange={handleChange} />
        </label>

        <label htmlFor="type">Type
          <input value={type} type="text" id="type" name="type" onChange={handleChange} />
        </label>

        <label htmlFor="maxBatteryStatus">Max Battery
          <input value={maxBatteryStatus} type="number" id="maxBatteryStatus" name="maxBatteryStatus" onChange={handleChange} />
        </label>

        <label htmlFor="minBatteryStatus">Min Battery
          <input value={minBatteryStatus} type="number" id="minBatteryStatus" name="minBatteryStatus" onChange={handleChange} />
        </label>
      </form>
    </>
  )
}