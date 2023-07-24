import { follow, initialUserStateType, unfollow, usersPageReducer } from "./usersPageReducer";
let initialState:initialUserStateType;
beforeEach(()=>{
    initialState = {
        users: [{id: 0, name:'ddd', followed: false},{id: 1, name:'ddd', followed: true},{id: 2, name:'ddd', followed: true},{id: 0, name:'ddd', followed: true}],
        numberCurrentPage: 1,
        countUsersPage: 10,
        totalCountPage: 0,
        lengthCountPage: [],
        isLoader: true,
        isDisabledFollowButton: [],
        search: {
            friend: null,
            term: ''
        }
    };
});
test('foloow', ()=>{
    const res = usersPageReducer(initialState, follow(0));
    expect(res.users[0].followed).toBeTruthy();
    expect(res.users[1].followed).toBeTruthy();
});
test('unfolow', ()=>{
    const res = usersPageReducer(initialState, unfollow(1));
    expect(res.users[0].followed).toBeFalsy();
    expect(res.users[1].followed).toBeFalsy();
});