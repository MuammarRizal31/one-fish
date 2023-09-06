const ContactUs = {
  async render() {
    return `
    <div class="container container-carousel my-3">
        <div class="title-with-line">
            <div class="line"></div>
                <h2 class="title mb-3 text-one-fish">Contact One-Fish</h2>
            <div class="line"></div>
        </div>
    </div>

    <div class="container"> 
        <div class="row">     
            <div class="col-12 mb-2"> 
                <img src="./home-image/Sampul Utama.png" class="card-img-top" alt="Sampul">              
            </div>
        </div>
    </div>

    <div class="container overflow-x-hidden"> 
        <div class="row">     
            <div class="col-12 mb-3"> 
                <h4 class="text-one-fish">CONTACT US</h4>
                <div class="garis"></div>
            </div>

            <div class="col-12 col-md-4"> 
              <img src="./icon-one-fish.jpeg"/>
            </div>

            <div class="col-12 col-md-5 ms-auto contact-us__contact"> 
              <h5 class="text-one-fish">PT One-Fish</h5>
              <div>
                <h6 class="mb-1">Address : </h6>
                <p class="contact-us__text">Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12430</p>
              </div>

              <div> 
                <h6 class="mb-1">Email :</h6>
                <p class="contact-us__text">One-fish@gmail.com</p>
              </div>

              <div> 
                <h6 class="mb-1">Phone :</h6>
                <p class="contact-us__text">+62 31 749 1199 (Hunting) | +62 821-4326-6277 Customer Care | Working Hours (Mon-Fri, 08.00-17.00 WIB)</p>
            </div>

            <div> 
              <h6 class="mb-1">Fax :</h6>
              <p class="contact-us__text">+62 31 749 0545 / +62 31 749 5628</p>
              </div>
            </div>
        </div>
    </div>

    <div class="container">
    <form action="proses-form.php" method="post">
      <div class="row">
      <div class="col-md-6">
          <div class="form-group">
            <label for="nama">Nama:</label>
            <input type="text" class="form-control" id="nama" name="nama" required>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label for="Phone">Phone:</label>
            <input type="telp" class="form-control" id="nama" name="Phone" required>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label for="subject">Subject:</label>
            <input type="text" class="form-control" id="nama" name="Subject" required>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" class="form-control" id="email" name="email" required>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="form-group">
            <label for="pesan">Pesan:</label>
            <textarea class="form-control" id="pesan" name="pesan" rows="5" required></textarea>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 mt-3">
          <button type="submit" class="btn btn-primary">Kirim Pesan</button>
        </div>
      </div>
    </form>
  </div>
    `;
  },

  async afterRender() {},
};

export default ContactUs;
