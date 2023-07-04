import { APIUS } from "./api";
import { profileType } from '../typeAndInterface/typeAndInterface';
import { GenericType } from "./apiAuth";

type SavePhotoApiType = {
        small: string,
        large: string
    };
type UpdateProfileApiType =  profileType;
type SetStatusApiType = object;
class apiProfile extends APIUS {
    async setPageProfile(usId: number) {
        return this.instance.get<profileType>(`profile/` + usId).then(res => res.data).catch(r => { throw Error(r) })
    };
    async updatePhoto(photo: string | Blob) {
        let formData = new FormData();
        formData.append('image', photo);
        return this.instance.put<GenericType<SavePhotoApiType>>(`profile/photo`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }).catch(r => { throw Error(r) })
    };
    async updateInfoProfile(info: profileType) {
        let json = JSON.stringify(info);
        return this.instance.put<GenericType<UpdateProfileApiType>>(`profile/`, json, {
            headers: {
                "Content-Type": "application/json",
            },
        }).catch(r => { throw Error(r) })
    }
    async getStatus(usId: number) {
        return this.instance.get<string>(`profile/status/` + usId).then(res => res.data).catch(r => { throw Error(r) })
    };
    async setStatus(status: string) {
        return this.instance.put<GenericType<SetStatusApiType>>(`profile/status/`, { status: status }).then(res => res.data).catch(r => { throw Error(r) })
    };
}
export const api_Profile = new apiProfile();