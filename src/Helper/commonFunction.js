const findItemInArray = (id, array) => {
    if(array.length === 0) return false; 
    return array.find(item => item._id === id);
} 

export {findItemInArray};