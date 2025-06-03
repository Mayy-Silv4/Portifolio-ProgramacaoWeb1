


function escrevendoLetra() {
    function ativaLetra(elemento) {
        const arrTexto = elemento.innerHTML.split("");
        elemento.innerHTML = "";
        arrTexto.forEach((letra, i) => {
            setTimeout(() => {
                elemento.innerHTML += letra;
            }, 75 * i);
        });
    }
    const titulo = document.querySelector('.digitando');
    ativaLetra(titulo);
}

escrevendoLetra()

function menuMobol() {
    const ativaMenu = document.querySelector('.fa-bars');


    const navMenu = document.querySelector('header .navegacao-primaria');
    ativaMenu.addEventListener('click', () => {

        ativaMenu.classList.toggle('fa-x');
        navMenu.classList.toggle('ativado');
    })
}


const listaAll = document.querySelectorAll('.projects_armazenamento ul li');

const buttonGeral = document.querySelectorAll('.projects_models ul li');

const buttonAll = document.querySelectorAll('.projects_models .all');

function removeClick(index) {

    buttonGeral.forEach((item) => {

        item.classList.remove('ativo');
    })

    buttonGeral[index].classList.add('ativo');

}

buttonGeral.forEach((item, index)=>{

    item.addEventListener('click', ()=>{

        removeClick(index);
    })
})

function showList(lista, button= "all"){

    lista.forEach((item)=>{

        item.classList.remove('ativo');

    })

    if(button == 'design'){

        lista[0].classList.add('ativo');
        lista[1].classList.add('ativo');
        
    }

    if(button == 'graphic'){

        lista[2].classList.add('ativo');
        lista[3].classList.add('ativo');
        
    }

    if(button == 'website'){

        lista[4].classList.add('ativo');
        lista[5].classList.add('ativo');
        lista[6].classList.add('ativo');
        lista[7].classList.add('ativo');
        
    }

    if(button == 'all'){

        lista[0].classList.add('ativo');
        lista[1].classList.add('ativo');
        lista[2].classList.add('ativo');
        lista[3].classList.add('ativo');
        lista[4].classList.add('ativo');
        lista[5].classList.add('ativo');
        lista[6].classList.add('ativo');
        lista[7].classList.add('ativo');
        
    }
    
}

buttonGeral.forEach((item)=>{

    item.addEventListener('click', (e)=>{
         

        let currentButton = e.target;

        if(currentButton.classList.contains('all')){

            showList(listaAll);
        }
        
        if(currentButton.classList.contains('design')){

            showList(listaAll, 'design');
        }
        
        if(currentButton.classList.contains('graphic')){

            showList(listaAll, 'graphic');
        }
        
        if(currentButton.classList.contains('website')){

            showList(listaAll, 'website');
        }
    })
})


    const filterButtons = document.querySelectorAll('.projects_models ul li');
    const projectItems = document.querySelectorAll('.projects_armazenamento ul li');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove classe ativa dos botões
            filterButtons.forEach(btn => btn.classList.remove('ativo'));
            button.classList.add('ativo');

            const category = button.classList.contains('all') ? 'all' : button.classList[0];

            projectItems.forEach(item => {
                const itemCategory = item.getAttribute('data-category');

                if (category === 'all' || itemCategory === category) {
                    item.classList.add('ativo');
                } else {
                    item.classList.remove('ativo');
                }
            });
        });
    });


