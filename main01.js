// PROMESA 1
const promesa = new Promise((resolve, reject)=>{
    (10===10)
        ? resolve ("Los valores son iguales")
        : reject ("Los valores son distintos")
});

promesa
.then(res => console.log(res))
.catch(err => console.log(err))


//PROMESA 2
const promesaDos = (provincia) => {
    const promesa = new Promise( (resolve, reject) => {
        ("Formosa" === provincia)
            ? resolve("Usted se encuentra en Formosa")
            : reject ("Error al realizar la consulta")
})
    promesa
    .then(res => console.log(res))
    .catch(err => console.log(err))
}
   
promesaDos("Formosa")


//PROMESA 3
const promesaTres = (valorBooleano) => {
    return new Promise( (resolve,reject)=> {
        ( true === valorBooleano )
            ? resolve('El argumento que llego es true')
            : reject('El argumento que llego es false')
    })    
}

promesaTres(false)
.then(res => console.log(res))
.catch(err => console.log(err))


//PROMESA 4
const promesaCuatro = async (arguments) => 
        ( true === arguments )
            ? 'Los valores son igualessss'
            : 'Los valores son distintossss'


promesaCuatro(false)
.then(console.log)
.catch(console.log)




