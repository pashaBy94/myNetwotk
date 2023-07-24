import { postAdd, postsDelete, savePhoto } from "./profilePageReducer";
import { profileStateType } from "../typeAndInterface/typeAndInterface";
import { profilPageReducer, updateAboutMyInfo } from "./profilePageReducer"

let initialState: profileStateType;
beforeEach(()=>{
    initialState= {
        postsData: [
            { post: 'Все ок, javaScript и HTML5 an do!', id: 1, likescount: 11 },
            { post: 'Все ', id: 2, likescount: 11 },
            { post: 'Hi jek, bay Все ок, javaScript и HTML5 lan do!', id: 3, likescount: 11 },
            { post: 'Все ок, javaScript и HTML5 an do!', id: 4, likescount: 11 },
        ],
        currentProfile: null,
        currentStatus: '',
        myProfile: null,
        isMyPages: false,
    };
});


test('postAdd', ()=>{
    const res = profilPageReducer(initialState, postAdd('Say hello'));
    expect(res.postsData.length).toBe(5);
})
test('postsDelete', ()=>{
    const res = profilPageReducer(initialState, postsDelete(2));
    expect(res.postsData[1].id).toBe(3);
})
test('savePhoto', ()=>{
    const photo = { large: '123', small: '456' };
    const res = profilPageReducer(initialState, savePhoto(photo));
    expect(res.currentProfile.photos.large).toBe('123')
    expect(res.currentProfile.photos.small).toBe('456')
    expect(res.myProfile.photos.small).toBe('456')
})

test('updateAboutMyInfo', ()=>{
    const info = {
        aboutMe: 'holi',
        fullName: 'war',
        lookingForAJob: true,
        lookingForAJobDescription: 'yes',
        userId: 22,
        photos: { large: '123', small: '456' },
        contacts: { facebook: 'string', github: 'string', instagram: 'string', mainLink: 'string', twitter: 'string', vk: 'string', website: 'string', youtube: 'string' }
    }
    const stateRes = profilPageReducer(initialState, updateAboutMyInfo(info));
    expect(stateRes.currentProfile.fullName).toBe('war')
})

