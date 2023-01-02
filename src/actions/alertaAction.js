import {
    MOSTRAR_ALERTA,
    OCULTAR_ALERTA
} from "../types/index"

//Muesta una alerta
export function mostrarAlerta(alerta) {
    return (dispatch) => {
        dispatch( crearAlerta() )
    }
}

const crearAlerta = (alerta) => ({
    type: MOSTRAR_ALERTA,
    payload: alerta
})

export function ocultarAlertaAction() {
    return (dispatch) => {
        dispatch( ocultarAlerta() )
    }
}

const ocultarAlerta = () => ({
    type: MOSTRAR_ALERTA
})