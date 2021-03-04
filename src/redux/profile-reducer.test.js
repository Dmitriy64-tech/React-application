import profileReducer, { addPostActionCreator, deletePost } from "./profile-reducer";


//test data
let initialState = {
    posts: [
        { id: 1, message: 'Hi, how are you?', likesCount: 12 },
        { id: 2, message: 'It\'s my first post', likesCount: 11 },
        { id: 3, message: 'Blabla', likesCount: 11 },
        { id: 4, message: 'Dada', likesCount: 11 }
    ]
};


it('new Post should be added', () => {
    //action
    let action = addPostActionCreator("Hello!")
    let newState = profileReducer(initialState, action)

    //expectation
    expect(newState.posts.length).toBe(5);
  }); 
  
it('new Post should be added', () => {
    //action
    let action = addPostActionCreator("Hello!")
    let newState = profileReducer(initialState, action)

    //expectation
    expect(newState.posts[4].message).toBe("Hello!");
  }); 
  it('delete post', () => {
    //action
    let action = deletePost(1)
    let newState = profileReducer(initialState, action)

    //expectation
    expect(newState.posts.length).toBe(3); 
  });   