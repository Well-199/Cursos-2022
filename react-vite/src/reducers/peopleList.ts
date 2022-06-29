import { useReducer } from "react"

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

const reducer = (state: Person[], action) => {

}

export const usePeopleList = () => {

}