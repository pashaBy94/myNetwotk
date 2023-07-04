import { APIUS } from "./api";
import { GenericType } from "./apiAuth";

type SetUsersApiPageType = {
    items: Array<{
        name: string,
        id: number,
        photos: {
            small: null | string,
            large: null | string
        },
        status: null | string,
        followed: boolean,
    }>
    totalCount: number,
    error: null | string
};
type FollowApiType =  object;

class apiUsers extends APIUS {
    async setUsersPageNumber(countUsersPage: number, numPage: number) {
        return this.instance.get<SetUsersApiPageType>(`users?count=${countUsersPage}&page=${numPage}`).catch(r => { throw Error(r) })
    };
    async deleteFollowUser(id: number) {
        return this.instance.delete<GenericType<FollowApiType>>(`follow/` + id, { headers: { 'API-KEY': 'a3085c13-b7e2-4ffc-892a-9ba320b8602e' } }).catch(r => { throw Error(r) })
    };
    async addFollowUser(id: number) {
        return this.instance.post<GenericType<FollowApiType>>(`follow/` + id, {}, { headers: { 'API-KEY': 'a3085c13-b7e2-4ffc-892a-9ba320b8602e' } }).catch(r => { throw Error(r) })
    };
}
export const api_Users = new apiUsers();