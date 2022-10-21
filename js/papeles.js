const papeles = async () => {
    try {
        let response = await fetch("https://raw.githubusercontent.com/gaston964/JSON/main/Papeles.json");
        let data = await response.json();
        data.forEach(producto => {
            const { img, nombre, precio, descr, xmayor, id } = producto;
            let item = document.createElement("div");
            item.className = "card col-xs-12 col-md-4 col-lg-4 my-3 mx-2"
            item.innerHTML = `
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="${img}" class="img-fluid rounded-start img__index" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h4 class="card-title">${nombre}</h4>
                        <h5 class="card-title price" >$${precio}</h5>
                        <p class="card-text">${descr} </p>
                        <form class="">
                        <input type="radio" name="tipo" value="almenor" checked id="">x1
                        <input type="radio" name="tipo" value="pormayor" >x${xmayor}
                        </form>
                        <button id = "${id}" class="text agregar-al-carro">Comprar</button>
                    </div>
                </div>
            `;
            contenedor.append(item)
        });
    } catch (error) {
        console.log(error);
    }
};
papeles();