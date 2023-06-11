import axios from 'axios';

class APIUS {
    constructor() {
        this.instance = axios.create({
            withCredentials: true,
            baseURL: `https://social-network.samuraijs.com/api/1.0/`,
        });
    };
    updatePhoto(photo) {
        let formData = new FormData();
        formData.append('image', photo);
        return this.instance.put(`profile/photo`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }).catch(r=>{throw Error(r)})
    };
    updateInfoProfile(info) {
        let json = JSON.stringify(info);
        return this.instance.put(`profile/`, json, {
            headers: {
                "Content-Type": "application/json",
            },
        }).catch(r=>{throw Error(r)})
    }
    setAuthentication() {
        return this.instance.get(`auth/me`).then(res => res.data).catch(r=>{throw Error(r)})
    };
    setPageProfile(usId) {
        return this.instance.get(`profile/` + usId).then(res => res.data).catch(r=>{throw Error(r)})
    };
    getStatus(usId) {
        return this.instance.get(`profile/status/` + usId).then(res => res.data).catch(r=>{throw Error(r)})
    };
    setStatus(status) {
        return this.instance.put(`profile/status/`, { status: status }).then(res => res.data).catch(r=>{throw Error(r)})
    };
    setUsersPageNumber(countUsersPage, numPage) {
        return this.instance.get(`users?count=${countUsersPage}&page=${numPage}`).catch(r=>{throw Error(r)})
    };
    deleteFollowUser(id) {
        return this.instance.delete(`follow/` + id, { headers: { 'API-KEY': 'a3085c13-b7e2-4ffc-892a-9ba320b8602e' } }).catch(r=>{throw Error(r)})
    };
    addFollowUser(id) {
        return this.instance.post(`follow/` + id, {}, { headers: { 'API-KEY': 'a3085c13-b7e2-4ffc-892a-9ba320b8602e' } }).catch(r=>{throw Error(r)})
    };
    login(email, password, rememberMe, captcha) {
        return this.instance.post('auth/login', { email, password, rememberMe, captcha }, {}).catch(r=>{throw Error(r)})
    }
    logout() {
        return this.instance.delete('auth/login').catch(r=>{throw Error(r)})
    };
    getCaptcha() {
        return this.instance.get(`security/get-captcha-url`).catch(r=>{throw Error(r)})
    };
}
export const userAPI = new APIUS();
