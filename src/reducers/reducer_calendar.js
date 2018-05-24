export default function (state = null, action) {
    switch (action.type) {
        case "EVENT_ADDED":
            return action.payload
        default:
            return state;
    }
}