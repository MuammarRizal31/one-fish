class VisiMisi extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="container">
            <div class="row">

            <div class="col-12">
                <h4 class="text-one-fish">VISION AND MISSION</h4>
            </div>
                <div class="col-12">
                    VISI :
                    <p>Menjadi Produsen pakan ikan hias yang menghasilkan produk unggulan dengan pengembangan bisnis yang berkelanjutan</p>
                </div>

                <div class="col-12 my-3">
                    MISI :
                    <ul>
                        <li>Menyediakan pakan yang berkualitas tinggi untuk penghobi Ikan Hias Indonesia</li>
                        <li>Memberikan solusi atas kebutuhan Aquatic secara berkelanjutan</li>
                        <li>Memberikan kontribusi nyata dalam kemajuan Ikan Hias Indonesia</li>
                        <li>Tumbuh bersama dengan meningkatkan kompetensi karyawan dan teknologi yang unggul</li>
                    </ul>
                        
                </div>

                <div class="col-12"> 
                    <div class="image-about__misi">
                        <img src="./about-us/hero-section.jpg" alt="image-about" />
                    </div>
                </div>

                <div class="col-12 mt-3"> 
                    <h3 class="text-one-fish">OUR SERVICE</h3>
                </div>

                <div class="col-12 mb-3"> 
                    <div class="rourching-management">
                        <h5 class="text-one-fish">PRODUCTION MANAGEMENT</h5>
                        <p>
                        Memproduksi pakan ikan hias dengan bahan baku yang terbukti berkualitas dan konsisten dalam perkembangannya. One Fish menjaga kualitas produk dan telah melalui proses quality control, menjadikannya sebagai prioritas utama kami.
                        </p>
                    </div>
                </div>

                <div class="col-12 my-3"> 
                    <div class="one-fish__about">
                        <h5 class="text-one-fish">SALES AND MARKETING</h5>
                        <p>
                        Meriset segmen dan karekteristik pasar untuk mengetahui kebutuhan dan keinginan penghobi ikan hias agar tepat sasaran dengan jaringan yang tersebar di Tanah Air. 
                        </p>
                    </div>
                </div>

                <div class="col-12 my-3"> 
                    <div class="sales-marketing__about">
                        <h5 class="text-one-fish">EDUCATION</h5>
                        <p>
                            Memberikan edukasi tentang Aquatic secara menyeluruh dan persisten dalam mengembangkan ilmu baru di Dunia Ikan Indonesia. 
                        </p>
                    </div>
                </div>

                <div class="col-12 my-3"> 
                    <div class="logistic-distributor__about">
                        <h5 class="text-one-fish">LOGISTIC & DISTRIBUTOR</h5>
                        <p>
                            Memastikan seluruh kebutuhan para penghobi ikan hias di Tanah Air terpenuhi. One Fish memberikan pelayanan yang profesional dan terpercaya dengan membentuk armada distribusi yang tangguh hingga dapat sampai di tangan pelanggan dengan cepat dan terjaga kualitasnya. 
                        </p>
                    </div>
                </div>

                <div class="col-12 my-3"> 
                    <div class="logistic-distributor__about">
                        <img src="./about-us/hero-section.jpg" alt="image" />
                    </div>
                </div>

                <div class="col-12 my-3"> 
                    <div class="core-values__about text-center">
                    <h5 class="text-one-fish">CORE VALUES</h5>
                        <h6 class="mb-1 text-one-fish">Integrity</h6>
                        <p>Mengutamakan profesionalisme, bertanggung jawab, dan terpercaya sebagai pedoman kinerja secara konsisten.</p>

                        <h6 class="mb-1 text-one-fish">Quality</h6>
                        <p>Menghasilkan produk berkualitas yang menjadi manfaat dan solusi bagi kebutuhan ikan hias.</p>

                        <h6 class="mb-1 text-one-fish">Continuous Improvement</h6>
                        <p>Upaya berkelanjutan yang dilakukan untuk mengembangkan dan memperbaiki usaha, produk, layanan maupun proses.</p>

                        <h6 class="mb-1 text-one-fish">Team Work</h6>
                        <p>Berkerja sama dan bersinergi sebagai kekuatan untuk membentuk tim dan menghasilkan kinerja yang maksimal.</p>

                    </div>
                </div>

                <div class="col-12 my-3"> 
                    <div class="core-values__about text-center">
                    <h5 class="text-one-fish">CORPORATE CULTURE</h5>
                        <p>Cepat & Sigap</p>
                        <p>Jujur & Tanggung Jawab</p>
                        <p>Disiplin & Loyal</p>
                        <p>Tekun & Gigih</p>
                        <p>Keseimbangan Kehidupan Kerja</p>
                    </div>
                </div>

            </div>
        </div>
    `;
  }
}

customElements.define("visi-misi", VisiMisi);
