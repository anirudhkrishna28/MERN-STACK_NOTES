export const USER_DATA = [
   { id:1,
    name:'ram',
    age:20,
    email:'abc@gmail.com'
   }
]

export const addUser = (new_user) =>{
    USER_DATA.push(new_user)
}

export const editUser = (id,key,value) =>{

    USER_DATA.forEach((user) =>{
        if(user.id == id)
        {
                user[key] = value
        }
    })

}



export const deleteUser = (id) => {

    for(index in USER_DATA){
        if(USER_DATA[index].id == id)
        {
            USER_DATA.splice(index,1)
        }
    }

}


export const editMultipleParamInUser = (id,updateUser) => {

    // USER_DATA.forEach((user) =>{
    //     if(user.id == id)
    //     {
    //         for(data in updateUser){
    //             user[data] = updateUser[data]
    //         }
            
        
    //     }
    // }) 

    const index = USER_DATA.findIndex((i) => i.id == id)

    if(index!=-1)
    {
        USER_DATA[index] = {...USER_DATA[index],...updateUser}    }
    }

// addUser({id:2,age:20,name:'chandra',emai:'a@gmail.com'})
// editUser(1,'age',34)
// deleteUser(2)
// editMultipleParamInUser(1,{name:'ani',age:19,emai:'anikrish@gmail.com'})

console.log(USER_DATA);
