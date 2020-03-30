import IInput from './types'
import * as React from 'react'

/**
 * Input
 */
const Input: React.FC<IInput.IProps> = ({ name, label, type = 'text', value, onChange }) => (
  <div>
    <label>{label}</label>
    <input name={name} value={value || ''} type={type} onChange={(e) => onChange(e.target.value)} />
  </div>
)

export default Input
