import { TextResources } from "../../../Common/GlobalDeclarations"

export const deleteMessageThread = (threadID: number) => {
    let deleted = fetch(`${TextResources.API_ROUTES.HOST}/${TextResources.API_ROUTES.THREAD}/${threadID}`, {
        method: "DELETE",
    }).then(res => res.json()).then(res => {
        return res
    }).catch(err => console.log('my err: ', err))
    return deleted
}