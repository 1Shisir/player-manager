<template>
<div>
   <div id="carouselExampleCaptions" class="carousel slide carousel-fade" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src='@/assets/image1.jpg' class="d-block w-100" alt="No Image" style="height:950px" />
        <div class="carousel-caption d-none d-md-block">
          <h2>Welcome to The Birtamode Sports Manager</h2>
          <p>Together, we build champions – fostering sports excellence in Birtamode.</p>
          <!-- <button type="button" class="btn btn-primary">Football</button>
          <button type="button" class="btn btn-success">Cricket</button>
          <button type="button" class="btn btn-danger">Volleyball</button>
          <button type="button" class="btn btn-info">Badminton</button> -->
        </div>
      </div>
      <div class="carousel-item">
        <img src='@/assets/image2.jpg' class="d-block w-100" alt="No Image" style="height:950px" />
        <div class="carousel-caption d-none d-md-block">
          <h2>Expert Planning</h2>
          <p>Your talent, our platform – shaping a brighter future for sports in Birtamode.</p>
          <!-- <button type="button" class="btn btn-primary">Football</button>
          <button type="button" class="btn btn-success">Cricket</button>
          <button type="button" class="btn btn-danger">Volleyball</button>
          <button type="button" class="btn btn-info">Badminton</button> -->
        </div>
      </div>
      <div class="carousel-item">
        <img src='@/assets/image3.jpg' class="d-block w-100" alt="No Image" style="height:950px" />
        <div class="carousel-caption d-none d-md-block">
          <h2>Unforgettable Sport Events</h2>
          <p>Our passion, our commitment – elevating sports in Birtamode to new heights.</p>
          <!-- <button type="button" class="btn btn-primary">Football</button>
          <button type="button" class="btn btn-success">Cricket</button>
          <button type="button" class="btn btn-danger">Volleyball</button>
          <button type="button" class="btn btn-info">Badminton</button> -->
        </div>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>

  <div>

    <div class="container my-4">
        <div class="row mb-2">
            <div class="col-md-6">
                <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div class="col p-4 d-flex flex-column position-static">
                        <strong class="d-inline-block mb-2 text-primary">News</strong>
                        <h3 class="mb-0">Local Player Achieves State Championship</h3>
                        <div class="mb-1 text-muted">October 1</div>
                        <p class="card-text mb-auto">We are proud to announce that one of our local players has won the state championship in their respective sport. This achievement highlights the talent and dedication present in our community.</p>
                    </div>
                    <div class="col-auto d-none d-lg-block">
                        <img class="bd-placeholder-img" width="300" height="370" src='@/assets/photo1.jpg' alt="Failed To Load Image.">
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div class="col p-4 d-flex flex-column position-static">
                        <strong class="d-inline-block mb-2 text-success">Announcement</strong>
                        <h3 class="mb-0">Ward Expands Sports Programs for Youth</h3>
                        <div class="mb-1 text-muted">September 25</div>
                        <p class="mb-auto">The Birtamode Ward is excited to announce the expansion of sports programs for youth, aiming to provide more opportunities for young athletes to participate and excel in various sports.</p>
                    </div>
                    <div class="col-auto d-none d-lg-block">
                        <img class="bd-placeholder-img" width="300" height="370" src='@/assets/photo2.jpg' alt="Failed To Load Image.">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container my-4">
        <div class="row mb-2">
            <div class="col-md-6">
                <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div class="col p-4 d-flex flex-column position-static">
                        <strong class="d-inline-block mb-2 text-primary">Announcement</strong>
                        <h3 class="mb-0">New Coaches Appointed for Local Teams</h3>
                        <div class="mb-1 text-muted">August 15</div>
                        <p class="card-text mb-auto">We are pleased to introduce new coaches who have joined our local teams, bringing fresh strategies and expertise to help our players reach their full potential.</p>
                    </div>
                    <div class="col-auto d-none d-lg-block">
                        <img class="bd-placeholder-img" width="300" height="370" src='@/assets/photo3.jpg' alt="Failed To Load Image.">
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div class="col p-4 d-flex flex-column position-static">
                        <strong class="d-inline-block mb-2 text-success">Announcement</strong>
                        <h3 class="mb-0">Birtamode Municipality Partners with Local Sports Organizations</h3>
                        <div class="mb-1 text-muted">July 30</div>
                        <p class="mb-auto">Birtamode Municipality is thrilled to announce a partnership with local sports organizations to enhance community sports activities, providing better facilities and resources for our athletes.</p>
                    </div>
                    <div class="col-auto d-none d-lg-block">
                        <img class="bd-placeholder-img" width="300" height="370" src='@/assets/photo4.jpg' alt="Failed To Load Image.">
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
  

</div>   
</template>



<script>
export default {
    name:'MyLandingPage'
}
</script>