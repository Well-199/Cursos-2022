import { useReducer } from "react"
import { uuid } from 'uuidv4'

type Person = {
    id: string,
    name: string
}

type ActionType = {
    type: string,
    payload: {
        name?: string,
        id?: string
    }
}

const initialState: Person[] = []

const reducer = (state: Person[], action: ActionType) => {

    switch(action.type){
        case 'ADD':
            if(action.payload?.name){
                state.push({
                    id: uuid(),
                    name: action.payload?.name
                })
            }
        break
        case 'DEL':
            if(action.payload?.id){
                state = state.filter(item => item.id !== action.payload?.id)
            }
        break
        case 'ORDER':
            state = state.sort((a, b) => (a.name > b.name) ? 1 : -1)
        break
    }
    return state

}

export const usePeopleList = () => {
    return useReducer(reducer, initialState)
}
