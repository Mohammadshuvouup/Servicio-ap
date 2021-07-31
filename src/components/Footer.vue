<template>
    <div class="default-layout">
         <!-- <router-view></router-view> -->
        <h1>{{$route.params.anything}}</h1>
    
      <!-- Footer -->
      <mdb-footer class="page-footer font-small pt-4 mt-4 text-white">
        <h1>Footer</h1>
          <hr />
          <div class="text-center py-3">
            <ul class="list-unstyled list-inline mb-0">
              <li class="list-inline-item">
                <h5 class="mb-1">Register for free</h5>
              </li>
              <li class="list-inline-item"><a href="#" class="btn btn-danger btn-rounded">Sign up!</a></li>
            </ul>
          </div>
          <hr />
          <div class="text-center">
            <ul class="list-unstyled list-inline">
              <li class="list-inline-item"><a class="btn-floating btn-sm btn-fb mx-1"><i class="fab fa-facebook"> </i></a></li>
              <li class="list-inline-item"><a class="btn-floating btn-sm btn-tw mx-1"><i class="fab fa-twitter"> </i></a></li>
              <li class="list-inline-item"><a class="btn-floating btn-sm btn-gplus mx-1"><i class="fab fa-google-plus"> </i></a></li>
              <li class="list-inline-item"><a class="btn-floating btn-sm btn-li mx-1"><i class="fab fa-linkedin-in"> </i></a></li>
              <li class="list-inline-item"><a class="btn-floating btn-sm btn-dribbble mx-1"><i class="fab fa-dribbble"> </i></a></li>
            </ul>
          </div>
          <div class="footer-copyright text-center py-3">
            <mdb-container fluid>
              &copy; 2020 Copyright: <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
            </mdb-container>
          </div>
      </mdb-footer>
      <!-- Footer -->
    </div>
</template>
<style>
  .default-layout{
    background-color: black;
    margin-top: 8rem;
  }
</style>

<script>


export default{

}
</script>

