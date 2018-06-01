export const TEAM_ADD_MEMBER = {
    REQUEST: 'TEAM_ADD_MEMBER_REQUEST',
    RESPONSE: 'TEAM_ADD_MEMBER_RESPONSE',
};
export const TEAM_UPDATE_MEMBER = {
    REQUEST: 'TEAM_UPDATE_MEMBER_REQUEST',
    RESPONSE: 'TEAM_UPDATE_MEMBER_RESPONSE',
}

export const addNewTeamMember = payload => ({ type: TEAM_ADD_MEMBER.REQUEST, member: payload })
export const recievedNewTeamMember = payload => ({ type: TEAM_ADD_MEMBER.RESPONSE, member: payload })

export const updateTeamMember = payload => ({ type: TEAM_UPDATE_MEMBER.REQUEST, member: payload })
export const recievedUpdatedTeamMember = payload => ({ type: TEAM_UPDATE_MEMBER.RESPONSE, member: payload })