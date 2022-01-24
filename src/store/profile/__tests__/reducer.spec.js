import { SIGN_OUT } from "../actions";
import { profileReducer, initialState } from "../reduser";

describe("profile reducer", () => {
  it("SIGN_OUT", () => {
    const action = { type: SIGN_OUT };
    expect(profileReducer(initialState, action)).toEqual({
      ...initialState,
      isAuthed: false,
    });
  });
});
