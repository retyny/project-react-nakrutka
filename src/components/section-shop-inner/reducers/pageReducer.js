import {createSlice} from "@reduxjs/toolkit";

const pageSlice = createSlice({
    name: 'page',
    initialState: {
        pageName: "subscribesInstagram",
        pageIcon: "Instagram"
    },
    reducers: {
        pageAction(page, action) {
            page.pageName = action.payload;
        },
        pageIconAction(icon, action) {
            icon.pageIcon = action.payload;
        }
    }
});

export const {pageAction, pageIconAction, btnColor} = pageSlice.actions;
export default pageSlice.reducer;