// window.onload = (e) => {
//     let body = document.querySelector('body')
//     let before = document.createElement('div')

//     before.style.width = '100%'
//     before.style.height = '100%'

//     let textCenter = document.createElement('p')

//     textCenter.style.position = 'absolute';
//     textCenter.style.display = 'block'
//     textCenter.style.top = '50%';
//     textCenter.style.left = '50%';
//     textCenter.style.transform = 'translate(-50%, -50%)'
//     textCenter.style.fontSize = '200px'
//     textCenter.style.color = 'white'
//     textCenter.innerHTML = 'ApsTree';

//     before.appendChild(textCenter);

//     body.prepend(before)

//     before.animate(
//         [
//             {
//                 backgroundColor: 'transparent'
//             },
//             {
//                 backgroundColor: 'black'
//             },
//             {
//                 display: 'none'
//             }

//         ],
//         {
//             duration: 3000,
//             fill: `forwards`,
//         }
//     )

//     setTimeout(() => {
//         let page = document.querySelector('.before-win-load-container')
//         page.classList.remove('d-none')
//     }, 3300);
// }




