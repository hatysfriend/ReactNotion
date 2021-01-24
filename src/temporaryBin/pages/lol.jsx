import React from 'react'

// export const Lol = () => {
//     console.log('lol page opened')
//     return (
//         <div className='lol'>
//             <h1>League Of Legends</h1>
//         </div>
//     );
// }
// export const Lux = () => {
//     console.log('lol/lux page opened')
//     return (
//         <div className='lol'>
//             <h1>League Of Legends/Lux</h1>
//         </div>
//     );
// }

export const pageC = (obj) => {
    console.log('page: '+obj.title+' will be displyed');
    console.log(obj.content)
    return obj.content.props.children;
    
}

// export const UltiTime = () => {
//     console.log('lol/lux/R/ultiTime')
//     return (
//         <div className='lol'>
//             <h1>League Of Legends/lux/ulti/ultiTime</h1>
//         </div>
//     );
// }

// // export const Ashe = () => {
// //     console.log('lol/ashe page opened')
// //     return (
// //         <div className='lol'>
// //             <h1>League Of Legends/Ashe</h1>
// //         </div>
// //     );
// // }
// export const Mf = () => {
//     console.log('lol/mf page opened')
//     return (
//         <div className='lol'>
//             <h1>League Of Legends/Miss Fortune</h1>
//         </div>
//     );
// }
