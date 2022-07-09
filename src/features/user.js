import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        value: {
            allUsers: [
                {
                email: 'first@gmail.com',
                password: '1111',
                image: 'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png'
                },
                {
                email: 'second@gmail.com',
                password: '2222',
                image: 'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png'
                }

            ],
            userLoggedIn: {
                email: 'first@gmail.com',
                password: '1111',
                image: 'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png'
                },
        }
    },
    
    reducers: {
        addUser: ({value}, {payload}) => {
            const user = {
                email: payload.email,
                password: payload.passOne,
                image: 'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png'
            }
            value.allUsers.push(user)
        },
        loginUser: ({value}, {payload}) => {
            value.userLoggedIn = payload
            console.log(payload)
            console.log(value.userLoggedIn)
        }
    }
})

export const {addUser, loginUser} = userSlice.actions

export default userSlice.reducer