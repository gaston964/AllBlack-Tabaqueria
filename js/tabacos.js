const tabacos = async () => {
    try {
        let response = await fetch("https://raw.githubusercontent.com/gaston964/JSON/main/Tabacos.json");
        let data = await response.json();
        data.forEach(item => {
            const { img, nombre, precio} = item;
            let productos = document.createElement("div");
            productos.className = "card-tabaco col-xs-12 col-md-4 col-lg-4 my-3 mx-2 ";
            productos.innerHTML = `
                <img src="${img}" class="img-fluid rounded-start img__tabaco" alt="...">
                <div class="card-body-tabaco">
                    <h4 class="card-title">${nombre}</h4>
                    <h5 class="card-title text-center price" >$${precio}</h5>
                    <button id ="${item.dataid}" class="text agregar-al-carro">Comprar</button>
                </div>
            `
            contenedor.append(productos);
        })
    } catch (error) {
        console.log(error);
    }
};
tabacos();