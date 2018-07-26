

export const PurchasesActionTypes = {
    add: 'Purchases Add',
    edit: 'Purchases edit',
    remove: 'Purchases remove',
}


function add (payload) {
    return {
        type: PurchasesActionTypes.add,
        payload
    }
}

function edit (payload) {
    return {
        type: PurchasesActionTypes.edit,
        payload
    }
}

function remove(payload) {
    return {
        type: PurchasesActionTypes.remove,
        payload
    }
}



export const PurchasesActions = {
    add,
    edit,
    remove
}