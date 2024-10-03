import {useState} from 'react'

type Primitive = number | string | boolean

type ReturnValue = [
    Primitive,
    (v?: Primitive) => void
]

type Props = undefined | Primitive | Primitive[]

type UseToggle = (props?: Props) => ReturnValue


const initialSetup = (prop: Props) => {
    if (prop !== undefined) {
        if (Array.isArray(prop)) {
            if (prop.length > 0) {
                return {
                    initial: prop,
                    result: prop[0],
                    idx: 0
                }
            } else {
                return {
                    initial: true,
                    result: true,
                    idx: 0
                }
            }
        }
        else {
            return {
                initial: prop,
                result: prop,
                idx: 0
            }
        }
    } else {
        return {
            initial: true,
            result: true,
            idx: 0
        }
    }
}


export const useToggle: UseToggle = (props: Props): ReturnValue => {
    const [state, setState] = useState(() => initialSetup(props))

    const toggle = (val?: Primitive) => {
        if (val === undefined) {
            if (Array.isArray(state.initial)) {
                if (state.idx + 1 < state.initial.length) {
                    setState(oldState => ({
                        ...oldState,
                        result: Array.isArray(oldState.initial) ? oldState.initial[oldState.idx + 1] : oldState.initial,
                        idx: Array.isArray(oldState.initial) ? oldState.idx + 1 : oldState.idx
                    }))
                } else {
                    setState(oldState => ({
                        ...oldState,
                        result: Array.isArray(oldState.initial) ? oldState.initial[0] : oldState.result,
                        idx: 0
                    }))
                }
            }
            if (typeof state.initial === 'boolean') {
                setState(oldState => ({
                    ...oldState,
                    result: !oldState.result,
                    idx: 0
                }))
            }
        } else {
            setState(oldState => ({
                ...oldState,
                initial: val,
                result: val,
                idx: 0
            }))
        }
        console.log(state.result)
    }

    return [state.result.toString(), toggle]
}
