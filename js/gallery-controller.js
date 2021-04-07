'ise strict';

function initPage() {
    renderProjs();
}

function renderProjs() {
    var projs = getProjs();
    console.log(projs);
    var strHTMLs = projs.map(function (proj) {
        return `
        <div onclick = "rendeModal('${proj.id}')" class="col-md-4 col-sm-6 portfolio-item">
        <a class="portfolio-link" data-toggle="modal" href="#portfolioModal1">
          <div class="portfolio-hover">
            <div class="portfolio-hover-content">
              <i class="fa fa-plus fa-3x"></i>
            </div>
          </div>
          <img class="img-fluid" src="img/portfolio/${proj.folderName}.jpg" alt="">
        </a>
        <div class="portfolio-caption">
          <h4>${proj.name}</h4>
          <p class="text-muted">${proj.title}</p>
        </div>
        </div>
        `
    });
    document.querySelector('.proj').innerHTML = strHTMLs.join('');
}


function rendeModal(ProjId) {
    var proj = getProjById(ProjId);
        var strHTMLs =  `
        <div class="col-lg-8 mx-auto">
        <div class="modal-body">
            <h2>${proj.name}</h2>
            <p class="item-intro text-muted">${proj.title}</p>
            <img class="img-fluid img-modal d-block mx-auto" src="img/portfolio/${proj.folderName}.jpg" alt="">
                <p>${proj.desc}</p>
                <ul class="list-inline">
                    <li>Date: ${proj.publishedAt}</li>
                    <li>Client: ${proj.client}</li>
                    <li>Category: ${proj.category}</li>
                </ul>
            <br>
                <a href="proj/${proj.folderName}/index.html" target="_blank"><button class="btn btn-proj-modal text-white">Look at my Project</button></a>
                <button class="btn btn-primary" data-dismiss="modal" type="button">
                    <i class="fa fa-times"></i>
          Close Project</button>
    </div>
        </div>
        `
    document.querySelector('.proj-modal').innerHTML = strHTMLs;
}

function onSubmit(ev){
    ev.preventDefault();
    var mail = $('.mail').val();
    var subject = $('.subject').val();
    var msg = $('.msg').val();

    var urlMail = `https://mail.google.com/mail/?view=cm&fs=1&to=${mail}&su=${subject}&body=${msg}`;
    window.open(urlMail,"_blank")
}


