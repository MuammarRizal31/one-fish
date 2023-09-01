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
            <div class="col-12"> 
                <div class="card mb-3">
                    <img src="./home-image/Sampul Utama.png" class="card-img-top" alt="...">
                </div>              
            </div>
        </div>
    </div>

    <div class="container overflow-x-hidden"> 
        <div class="row">     
            <div class="col-12 mb-3"> 
                <h4 class="text-one-fish">CONTACT US</h4>
                <div class="garis"></div>
            </div>

            <div class="col-12 col-md-6"> 
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.7201454698775!2d106.80249897473057!3d-6.300455961661748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ef10f8dbb46f%3A0xe692e7cea5163031!2sOne%20Research%20%26%20Development!5e0!3m2!1sid!2sid!4v1692785481083!5m2!1sid!2sid" width="100%" height="284" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>

            <div class="col-12 col-md-5 contact-us__contact"> 
              <h5 class="text-one-fish">PT One-Fish</h5>
              <div>
                <h6 class="mb-1">Address : </h6>
                <p class="contact-us__text">Jl. Tridharma Utama 2 No.19, RT.7/RW.12, Cilandak Bar., Kec. Cilandak, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12430</p>
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
