import IForm from '../../context/Form/types'

/**
 * Get invalidated steps
 */
const getInvalidatedSteps = (steps: IForm.IStepsState, id: string, nextId: string) => {
  let invalidate: any = []

  const rec = (step: any, nextId?: string) => {
    if (!step?.next) return
    for (const x of step.next) {
      const exists = invalidate.find((y: any) => x.nextId === y)

      if (nextId === x.nextId || exists) continue
      invalidate = [...invalidate, x.nextId]

      if (steps[x.nextId]) {
        rec(steps[x.nextId])
      }
    }
  }

  rec(steps[id], nextId)
  return invalidate
}

export default getInvalidatedSteps
