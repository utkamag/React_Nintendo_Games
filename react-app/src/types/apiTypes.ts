// Интерфейс состояния

export interface apiState {
    users: any[],
    loading: boolean,
    error: null | string
}

// Интерфейс action

export interface apiAction {
    type: string,
    payload?: any,
}
