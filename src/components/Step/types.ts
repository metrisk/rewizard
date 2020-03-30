declare namespace IStep {
  interface IProps {
    id: string
    entryPoint?: boolean
    fieldIds: string[]
    next?: {
      fieldId: string
      value: string | RegExp
      nextId: string
    }[]
    nextId?: string
    children: (value: { valid: boolean; prevId: string; nextId: string }) => React.ReactElement
  }

  interface IState {
    fieldIds: string[]
    valid: boolean
    invalidate: string[]
    prevId: string
    nextId: string
    next?: {
      fieldId: string
      value: string | RegExp
      nextId: string
    }[]
  }
}

export default IStep
