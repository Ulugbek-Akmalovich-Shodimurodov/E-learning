let carouselInner = document.querySelector('.carousel-inner')

fetch('http://127.0.0.1:8000/main/get-blog')
.then(res=>res.json())
.then(data =>{
        data ? renderCarousel(data) : ''
        console.log(data);
        
    }
).catch()

function renderCarousel(data){
    carouselInner.innerHTML = '';
    let k = 0;

    data.forEach((item)=>{
        ++k
        carouselInner.innerHTML += 
        `
        
        <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="course-item shadow">
                        <div class="position-relative overflow-hidden text-light image">
                            <img class="img-fluid" src="img/card.jpg" alt="">

                        </div>
                        <div class="p-2 pb-0">

                            <h5 class="mb-1"><a href="single.html" class="text-dark">${item.title}</a> </h5>
                        </div>
                        <div class="d-flex">
                            <small class="flex-fill py-1 px-2"><i
                                    class="fa fa-user me-2"></i>Talabalar uchun</small>
                                    <small class=" text-primary py-1 px-2 fw-bold fs-6" style="float:right;"><a href="/course.html?id=${item.id}">
                                    Bajarish </a><i class="fa fa-chevron-right me-2 fs-10"></i></small>
                        </div>
                        <div class="d-flex">
                            
                        </div>
                    </div>
                </div>       `
    })
}