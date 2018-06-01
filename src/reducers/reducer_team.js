import { TEAM_ADD_MEMBER, TEAM_UPDATE_MEMBER } from '../actions/action_team'

export default function (state = getDefaultState(), action) {
    switch (action.type) {
        case TEAM_ADD_MEMBER.RESPONSE:
            return state.concat([action.member])
        case TEAM_UPDATE_MEMBER.RESPONSE:
            const updatedTeam = state.map(item => {
                if (item.memberId === action.member.memberId) {
                    return { ...item, ...action.member }
                }
                return item
            })
            return updatedTeam
        default:
            return state
    }
}

function getDefaultState(){
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