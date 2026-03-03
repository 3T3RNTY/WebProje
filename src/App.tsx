import './App.css'

function App() {
  return (
    <>
    <header>
      
      <nav  aria-label="Ana navigasyon">
        <ul>     
          <h1>Emirhan Bayrak</h1>              
          <li><a href="#hakkimda">Hakkımda</a></li>
          <li><a href="#projeler">Projeler</a></li>
          <li><a href="#iletisim">İletişim</a></li>
        </ul>
      </nav>
    </header>

    <main id="main-content">
      
      <section id="hakkimda">
        <h2>Hakkımda</h2>
        <figure>
          <img src="profil.jpg"
              alt="Emirhan'ın Profil Fotoğrafı" />             
          <figcaption>Emirhan Bayrak</figcaption>
        </figure>
        
        <p>
          Merhaba! Ben Emirhan Bayrak, yazılım geliştirici ve teknoloji meraklısıyım.
          Yazılım dünyasında kendi imzamı atabileceğim projeler üzerinde çalışmayı seviyorum.
          Farklı projelerde deneyim kazanarak, her zaman öğrenmeye ve gelişmeye açık biriyim.</p>
         
        <ul className="skill-tags">    
          
          <li>JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
        </ul>
      </section>

      <section id="projeler">          
        <h2>Projelerim</h2>
        <div className="project-grid">
          <article className="project-card">
            <img src="proje1.jpg"
                  alt="Portföy Web Sitesi anasayfa ekran goruntusu" />
            <h3>Portföy Web Sitesi</h3>
            <p>Kendi portföyümü sergilemek için geliştirdiğim kişisel web sitesi.</p>
            <ul className="skill-tags">
              <li>React</li>
              <li>JavaScript</li>
            </ul>
          </article>

          <article className="project-card">
            <img src="proje2.jpg"
                  alt="Dijital Pazarlama Sitesi goruntusu" />
            <h3>Dijital Pazarlama Sitesi</h3>
            <p>Kisisel blog platformu.
                Markdown destekli yazi editoru.</p>
            <ul className="skill-tags">
              <li>Java</li>
              <li>SpringBoot</li>
            </ul>
          </article>

          <article className="project-card">
            <img src="proje3.jpg"
                alt="Market Otomasyonu arayuzu" />
            <h3>Market Otomasyonu</h3>
            <p>Market ürünlerini takip eden ve stok durumunu gösteren bir otomasyon sistemi.</p>
            <ul className="skill-tags">
              <li>C#</li>
              <li>SQLite</li>
              </ul>
              </article>
          </div>
      </section>

      <section id="iletisim">
        <h2>İletişim</h2>
      </section>

      <form action="#" method="POST" noValidate>
        <fieldset>
          <legend>İletişim Formu</legend>

          <div className="form-group">
            <label htmlFor="name">Ad Soyad:</label>
            <input type="text" id="name" name="name"
                  required minLength={2}
                  aria-describedby="name-error" />
            <small id="name-error" className="error-msg"
                  role="alert"></small>
          </div>

          <div className="form-group">
            <label htmlFor="email">E-posta:</label>
            <input type="email" id="email" name="email"
                  required
                  aria-describedby="email-error" />
            <small id="email-error" className="error-msg"
                  role="alert"></small>
          </div>

          <div className="form-group">
            <label htmlFor="subject">Konu:</label>
            <select id="subject" name="subject" required
                  aria-describedby="subject-error">
              <option value="">-- Seçiniz--</option>
              <option value="is">İş Teklifi</option>
              <option value="soru">Soru</option>
              <option value="oneri">Öneri</option>
            </select>
            <small id="subject-error" className="error-msg"
                  role="alert"></small>
            </div>

            <div className="form-group">
              <label htmlFor="message">Mesajınız:</label>
              <textarea id="message" name="message"
                      rows={5} required minLength={10}
                      aria-describedby="message-error">
              </textarea>
              <small id="message-error" className="error-msg"
              role="alert"></small>
            </div>

            <button type="submit">Gönder</button>
          </fieldset>
      </form>
    </main>
   

    <a href="#main-content" className="skip-link">
        Ana içeriğe atla
    </a>

    <footer>       
      <p>&copy; 2025 Emirhan Bayrak. Tüm hakları saklıdır.</p>
    </footer>
    </>
  )
}

export default App
