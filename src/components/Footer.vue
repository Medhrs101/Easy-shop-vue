<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <h4>About Us</h4>
          <p>
            Easy-Shop is a leading online retailer specializing in affordable
            and high-quality products. Our mission is to provide our customers
            with the best shopping experience possible.
          </p>
        </div>
        <div class="col-md-4">
          <h4>Contact Us</h4>
          <p>Email: support@easy-shop.com</p>
          <p>Phone: 1-800-555-1234</p>
          <p>Address: 123 Main St, Anytown USA</p>
        </div>
        <div class="col-md-4">
          <h4>Follow Us</h4>
          <p><a href="#">Facebook</a></p>
          <p><a href="#">Twitter</a></p>
          <p><a href="#">Instagram</a></p>
          <p><a href="#">Pinterest</a></p>
        </div>
      </div>
      <hr />
      <div class="row">
        <div class="col-md-12">
          <p class="text-center">
            Copyright © 2023 Easy-Shop. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style>
footer {
  background-color: #f8f9fa;
  padding: 40px 0;
  font-size: 14px;
  color: #6c757d;
}
h4 {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #343a40;
}
p {
  margin-bottom: 10px;
}
a {
  color: #6c757d;
}
hr {
  border-top: 1px solid #ddd;
  margin-top: 30px;
  margin-bottom: 30px;
}
.text-center {
  text-align: center;
}
.container {
  max-width: 1200px;
  margin: auto;
}
.row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}
.col-md-4 {
  flex: 0 0 33.333333%;
  max-width: 33.333333%;
  padding-right: 15px;
  padding-left: 15px;
}
.col-md-12 {
  flex: 0 0 100%;
  max-width: 100%;
  padding-right: 15px;
  padding-left: 15px;
}
</style>