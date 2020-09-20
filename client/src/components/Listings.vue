<template>
  <main>
    <title>{{title}}</title>
    <div class="container">
      <div class="single-items">
        <div class="items">
          <div class="item-title">
            <h1 class="author-title">Cracking The Conding Interview</h1>
          </div>
          <div class="item-image">
            <a href="#">
              <img src="../assets/coding-book.png" width="100px" height="150px" class="img-fluid" />
            </a>
          </div>
          <!-- Author's Name -->
          <div class="author-name">
            by
            <a href="#" class="author-link-name">Gayle Laakmann McDowell</a> (Author)
          </div>Length: 500 pages
          <p class="seller-name">Seller:</p>
        </div>
      </div>
    </div>

    <!--------------------Items-------------------->
    <div class="single-items">
      <div class="items">
        <hr class="title-divider" />
        <div class="item-title">
          <h1 class="author-title">Intro to Chemistry</h1>
        </div>
        <div class="item-image">
          <a href="#">
            <img src="../assets/chemistry.jpg" width="100px" height="150px" class="img-fluid" />
          </a>
        </div>
        <!-- Author's Name -->
        <div class="author-name">
          by
          <a href="#" class="author-link-name">Francis A. Carey</a> (Author)
        </div>Length: 386 pages
        <p class="seller-name">Seller:</p>
      </div>
    </div>

    <!--------------------Items-------------------->

    <div class="single-items">
      <div class="items">
        <hr class="title-divider" />
        <div class="item-title">
          <h1 class="author-title">Modern Biology</h1>
        </div>
        <div class="item-image">
          <a href="#">
            <img src="../assets/Biology.jpeg" width="100px" height="150px" class="img-fluid" />
          </a>
        </div>
        <!-- Author's Name -->
        <div class="author-name">
          by
          <a href="#" class="author-link-name">Gayle Laakmann McDowell</a> (Author)
        </div>Length: 386 pages
        <p class="seller-name">Seller:</p>
      </div>
    </div>

    <!--------------------Items-------------------->

    <div class="single-items">
      <div class="items">
        <hr class="title-divider" />
        <div class="item-title">
          <h1 class="author-title">World History</h1>
        </div>
        <div class="item-image">
          <a href="#">
            <img src="../assets/history.jpeg" width="100px" height="150px" class="img-fluid" />
          </a>
        </div>
        <!-- Author's Name -->
        <div class="author-name">
          by
          <a href="#" class="author-link-name">Gayle Laakmann McDowell</a> (Author)
        </div>Length: 386 pages
        <p class="seller-name">Seller:</p>
      </div>
    </div>

    <!--------------------Items-------------------->
  </main>
</template>

<script>
export default {
  title: "Listing Page",
};
</script>

<style>
.page-name {
  margin-bottom: 15%;
  font-size: 2rem;
}

.items {
  display: block;
}
</style>