const filtros = async () => {
    try {
        let response = await fetch("https://raw.githubusercontent.com/gaston964/JSON/main/Filtros.json");
        let data = await response.json();
        data.forEach(item => {
            const { img, nombre, precio, descr, xmayor} = item;
            let productos = document.createElement("div");
            productos.className = "card col-xs-12 col-md-4 col-lg-3 my-3 mx-2";
            productos.innerHTML = `
            <div class="row g-0">
            <div class="col-md-4">
                <img src="${img}" class="img-fluid rounded-start img__index" alt="...">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h4 class="card-title">${nombre}</h4>
                    <h5 class="card-title price">$${precio}</h5>
                    <p class="card-text">${descr} </p>
                    <form class="">
                    <input type="radio" name="tipo" value="almenor" checked>x1
                    <input type="radio" name="tipo" value="pormayor" id="pormayor" >x${xmayor}
                    </form>
                    <button id = "${item.dataid}" class="agregar-al-carro text " >Comprar</button>
                </div>
            </div>
            `
            fragmento.append(productos);
        })
        contenedor.append(fragmento);
    } catch (error) {
        console.log(error);
    }
};
filtros();