export const TEAM_ADD_MEMBER = {
    REQUEST: 'TEAM_ADD_MEMBER_REQUEST',
    RESPONSE: 'TEAM_ADD_MEMBER_RESPONSE',
};

export const addNewTeamMember = () => ({ type: TEAM_ADD_MEMBER.REQUEST })
export const recievedNewTeamMember = function (payload) {
    return {
        type: TEAM_ADD_MEMBER.RESPONSE,
        team: payload
    }
}