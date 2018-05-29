import { TEAM_ADD_MEMBER } from '../actions/action_team'

export default function (state = [], action) {
    switch (action.type) {
        case TEAM_ADD_MEMBER.RESPONSE:
            return state.concat(action.team)
        default:
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
}