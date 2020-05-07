declare namespace IField {
  interface IProps {
    id: string
    required?: boolean
    validation?: (fields: { [key: string]: IState }, value: any) => boolean
    prereq?: (fields: { [key: string]: IState }) => boolean
    children: (
      value: {
        name: string
        value: string
        valid: boolean
        onChange: (value: any) => void
      },
      fields: { [key: string]: IState }
    ) => React.ReactElement
  }

  interface IState {
    value: any
    valid: boolean
    stepId?: string
  }
}

export default IField
