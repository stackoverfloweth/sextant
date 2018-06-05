export const TEAM_FETCH = {
    REQUEST: 'TEAM_FETCH_REQUEST',
    RESPONSE: 'TEAM_FETCH_RESPONSE',
}

export const fetchTeam = () => ({ type: TEAM_FETCH.REQUEST })
export const recievedTeam = payload => ({ type: TEAM_FETCH.RESPONSE, team: payload })