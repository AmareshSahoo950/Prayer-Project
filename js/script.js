const header = document.querySelector(".header");
header.innerHTML = `   <header class="bg-warning py-2">
    <div class="container">
        <div class="d-flex justify-content-between p-2 flex-wrap contact-info">
                <p class="mb-0"><i class="bi bi-telephone"></i> + (111) 1000-500-800</p>
                <p class="mb-0">Mon - Sat : 9:00 - 18:00</p>
        </div>
    </div>
</header>

<!-- Navigation Section -->
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
        <a class="navbar-brand" href="#"> <img src="./images/logo.png" alt="Logo" class="logo"></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                    <a class="nav-link active" href="./home.html">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="./about-us.html">About Us</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="./gallery.html">Gallery</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="./contact-us.html">Contact Us</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="./login.html">Login</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
`;

const footer = document.querySelector(".footer");

footer.innerHTML = ` <footer class="footer bg-dark text-light "> <div class="container">
    <div class="row py-5">
      <!-- About Us -->
      <div class="col-lg-3 col-md-6 mb-6">
        <h5 class="text-warning">About Us</h5>
        <hr class="mb-2 mt-0 d-inline-block mx-auto" style="width: 60px; background-color: orange; height: 2px;">
        <p class="text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
      </div>

      <!-- Information -->
      <div class="col-lg-3 col-md-6 mb-4" style="color:white;">
        <h5 class="text-warning">Information</h5>
        <hr class="mb-2 mt-0 d-inline-block mx-auto" style="width: 60px; background-color: orange; height: 2px;">
        <ul class="list-unstyled">
          <li><a href="#" class="text-white">About</a></li>
          <li><a href="#" class="text-white">Meet Our Team</a></li>
          <li><a href="#" class="text-white">Our Portfolio</a></li>
          <li><a href="#" class="text-white">Latest News</a></li>
          <li><a href="#" class="text-white">Contact</a></li>
        </ul>
      </div>

      <!-- Helpful -->
      <div class="col-lg-3 col-md-6 mb-4">
        <h5 class="text-warning">Helpful</h5>
        <hr class="mb-2 mt-0 d-inline-block mx-auto" style="width: 60px; background-color: orange; height: 2px;">
        <ul class="list-unstyled">
          <li><a href="#" class="text-white"><i class="fa fa-phone"></i> +1 (817) *** 3377</a></li>
          <li><a href="#" class="text-white"><i class="fa fa-envelope"></i> info@example.com</a></li>
        </ul>
      </div>

      <!-- Newsletter -->
      <div class="col-lg-3 col-md-6 mb-4">
        <h5 class="text-warning">Get the best viral stories straight into your inbox!</h5>
        <hr class="mb-2 mt-0 d-inline-block mx-auto" style="width: 100px; background-color: orange; height: 2px;">
        <form class="form-inline">
          <div class="input-group">
            <input type="email" class="form-control" placeholder="Email" aria-label="Email">
            <div class="input-group-append">
              <button class="btn btn-warning" type="button">SUBSCRIBE</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>

  <div class="text-center py-3 " style="background-color: #222;">
    <p class="text-white mb-0">&copy; Copyright 2024 by <a href="#" class="text-warning">PriyaQubit.com</a></p>
  </div></footer>`;
