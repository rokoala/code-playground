export type Action = {type: string, payload: string}

export type SET_JS = {type:"SET_JS", payload: string}

export const setJS = (code:string):SET_JS =>({
    type: "SET_JS",
    payload: code
})


export type SET_CSS = {type:"SET_CSS", payload:string}

export const setCSS = (code:string):SET_CSS =>({
    type:"SET_CSS",
    payload:code
})

export type SET_HTML = {type:"SET_HTML",payload:string}

export const setHTML = (code:string):SET_HTML=>({
    type:"SET_HTML",
    payload:code
})