import React from 'react'
import StudentHeader  from '../../Component/Task10_16-10-2026/Task10_16-10-2026/Task10'
import { CalculateTotal } from './../../Component/Task10_16-10-2026/Task10_16-10-2026/Vitest_Jest_Fundamental_16-10-2026/Marks';

function Task10_Pages() {
  const total = CalculateTotal(80,90)
  return (
    <>
    <StudentHeader/>
    <hr/>
    <br/>
    <h2>Marks Calculation</h2>
      <p>Total Marks: {total}</p>
    </>
  )
}

export default Task10_Pages