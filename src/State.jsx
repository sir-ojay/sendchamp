const {atom, selector} = require("recoil");

const nameState = atom({
    key:"nameState",
    default:""
})
const charState = selector({
    key:"nameState",
    get: ({ get }) => {
        const name = get(nameState);
        return name.length;
    }
})

export{nameState, charState}