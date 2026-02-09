function abrirLink(id) {

    let caixas = document.querySelectorAll('.box');
   
    caixas.forEach(caixas => {
        caixas.style.display = 'none';
    });
    document.getElementById(id).style.display = 'block';
}
