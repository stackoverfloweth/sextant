import { MEMBER_INSERT, MEMBER_UPDATE } from '../actions/action_member'

export default function (state = getDefaultState(), action) {
    switch (action.type) {
        case MEMBER_INSERT.RESPONSE:
            return state.concat([action.member])
        case MEMBER_UPDATE.RESPONSE:
            const updatedTeam = state.map(item => {
                if (item.memberId === action.member.memberId) {
                    return action.member
                }
                return item
            })
            return updatedTeam
        default:
            return state
    }
}

function getDefaultState() {
    return [
        {
            memberId: Math.floor(Math.random() * 1000),
            firstName: "Evan",
            lastName: "Sutherland",
            color: "#fe4ca1"
        },
        {
            memberId: Math.floor(Math.random() * 1000),
            firstName: "Erik",
            lastName: "Fisch",
            color: "#4eaf7d"
        },
        {
            memberId: Math.floor(Math.random() * 1000),
            firstName: "Matthew",
            lastName: "Lor",
            color: "#e1a021"
        },
        {
            memberId: Math.floor(Math.random() * 1000),
            firstName: "William",
            lastName: "Krueger",
            color: "#4704fa"
        },
        {
            memberId: Math.floor(Math.random() * 1000),
            firstName: "Vasyl",
            lastName: "Chuy",
            color: "#4e430a"
        }
    ]
}