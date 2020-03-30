import ISelect from './types'
import * as React from 'react'

/**
 * Select
 */
const Select: React.FC<ISelect.IProps> = ({ name, label, options, value, onChange }) => (
  <div>
    <label>{label}</label>
    <select name={name} value={value || ''} onChange={(e) => onChange(e.target.value)}>
      <option value={''}>-- Select --</option>
      {options.map(({ value, label }) => (
        <option key={`option-${value}`} value={value}>{label}</option>
      ))}
    </select>
  </div>
)

export default Select
