import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'callender',
    initialState: {
        value: {
            bookedDates: [
            {
                date: 1, 
                user: {
                    email: 'first@gmail.com',
                    image: 'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png'
                },
                style: {backgroundColor: 'gray'}
            },
            {date: 2, user: '', style: {backgroundColor: 'white'}},
            {date: 3, user: '', style: {backgroundColor: 'white'}},
            {date: 4, user: '', style: {backgroundColor: 'white'}},
            {date: 5, user: '', style: {backgroundColor: 'white'}},
            {date: 6, user: '', style: {backgroundColor: 'white'}},
            {date: 7, user: {email: 'second@gmail.com', password: '2222', image: 'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png'}, style: {backgroundColor: 'gray'}},
            {date: 8, user: '', style: {backgroundColor: 'white'}},
            {date: 9, user: '', style: {backgroundColor: 'white'}},
            {date: 10, user: '', style: {backgroundColor: 'white'}},
            {date: 11, user: '', style: {backgroundColor: 'white'}},
            {date: 12, user: '', style: {backgroundColor: 'white'}},
            {date: 13, user: '', style: {backgroundColor: 'white'}},
            {date: 14, user: '', style: {backgroundColor: 'white'}},
            {date: 15, user: '', style: {backgroundColor: 'white'}},
            {date: 16, user: '', style: {backgroundColor: 'white'}},
            {date: 17, user: '', style: {backgroundColor: 'white'}},
            {date: 18, user: '', style: {backgroundColor: 'white'}},
            {date: 19, user: '', style: {backgroundColor: 'white'}},
            {date: 20, user: '', style: {backgroundColor: 'white'}},
            {date: 21, user: '', style: {backgroundColor: 'white'}},
            {date: 22, user: '', style: {backgroundColor: 'white'}},
            {date: 23, user: '', style: {backgroundColor: 'white'}},
            {date: 24, user: '', style: {backgroundColor: 'white'}},
            {date: 25, user: '', style: {backgroundColor: 'white'}},
            {date: 26, user: '', style: {backgroundColor: 'white'}},
            {date: 27, user: '', style: {backgroundColor: 'white'}},
            {date: 28, user: '', style: {backgroundColor: 'white'}},
            {date: 29, user: '', style: {backgroundColor: 'white'}},
            {date: 30, user: '', style: {backgroundColor: 'white'}}
            ]
        }
    },
    
    reducers: {
        bookDate: ({value}, {payload}) => {
            console.log(payload)
            value.bookedDates.map(x=> x.date === payload.date ? {...x, user: payload.user, style: {backgroundColor: 'gray'} } : x)
        }
    }
    
})

export const {bookDate} = userSlice.actions

export default userSlice.reducer