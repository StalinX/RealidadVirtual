window.addEventListener('load', initScene)

// posiciones de los meteoritos
const meteors = [
    {x: 0, y:0, z: -30 },
    {x: 0, y:0, z: 30 },
    {x: 30, y:0, z: 0 },
    {x: -30, y:0, z: 0 },
    {x: 20, y:0, z: 20 },
    {x: 20, y:0, z: -20 },
    {x: -20, y:0, z: -20 },
    {x: -20, y:0, z: 20 },
    
]
let meteor

function initScene(){
    let orbits = document.querySelectorAll('.orbit')
    
    orbits.forEach(orbit=>{
        
        meteors.forEach(pos =>{
            
            meteor = document.createElement('a-entity')
            meteor.setAttribute('geometry', { primitive: 'sphere', radius:2})
            meteor.setAttribute('material', { shader: 'flat', src:'#meteor'})
            meteor.object3D.position.set(pos.x, pos.y, pos.z)

            orbit.appendChild(meteor)
        })
    })
}