// console.log("Hello World");
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Rajeshwar Nidhi Secondary School|srnss.meritsee.com</title>
      <link rel="stylesheet" href="css/style.css">
      <link rel="stylesheet"  media ="screen and (max-width:1100px)" href="css/phone.css">
      <link rel="preconnect" href="https://fonts.gstatic.com">
      <link href="https://fonts.googleapis.com/css2?family=Bree+Serif&display=swap" rel="stylesheet">
  </head>
  <body>
      <nav id="navbar">
          <div id="logo">
              <img src="logo.png" alt="MyOnlineMeal.com">
          </div>
          <ul>
              <li class="item"><a href="#">Home</a></li>
              <li class="item"><a href="#">Services</a></li>
              <li class="item"><a href="#">About Us</a></li>
              <li class="item"><a href="#">Contact Us</a></li>
          </ul>
      </nav>
      <section id="home">
          <h1 class="h-primary">Welcome to MyOnlineMeal</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui natus reiciendis illum laudantium numquam.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui natus reiciendis illum laudantium numquam.</p>
          <button class="btn">Order Now</button>
      </section>
      <section class="services-container">
          <h1 class="h-primary center">Our Services</h1>
          <div id="services">
              <div class="box">
                  <img src="img/1.jpg" alt="">
                  <h2 class="h-secondary center">Food Ordering</h2>
                  <p class="center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam perspiciatis
                      asperiores et nihil culpa, sint, qui error molestias beatae obcaecati dolorum molestiae fugit
                      provident illo voluptates doloremque quae! Porro, eveniet.</p>
              </div>
              <div class="box">
                  <img src="img/2.jpg" alt="">
                  <h2 class="h-secondary center">Food Catering</h2>
                  <p class="center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam perspiciatis
                      asperiores et nihil culpa, sint, qui error molestias beatae obcaecati dolorum molestiae fugit
                      provident illo voluptates doloremque quae! Porro, eveniet.</p>
              </div>
              <div class="box">
                  <img src="img/3.jpg" alt="">
                  <h2 class="h-secondary center">Bulk Ordering</h2>
                  <p class="center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam perspiciatis
                      asperiores et nihil culpa, sint, qui error molestias beatae obcaecati dolorum molestiae fugit
                      provident illo voluptates doloremque quae! Porro, eveniet.</p>
              </div>
          </div>
      </section>
      <section class="client-section">
          <h1 class="h-primary center">Our Clients</h1>
          <div id="clients">
              <div class="client-item">
                  <img src="img/logo1.png" alt="Our Client">
              </div>
              <div class="client-item">
                  <img src="img/logo2.png" alt="Our Client">
              </div>
              <div class="client-item">
                  <img src="img/logo3.jpg" alt="Our Client">
              </div>
              <div class="client-item">
                  <img src="img/logo1.png" alt="Our Client">
              </div>
          </div>
      </section>
      <section id="contact">
          <h1 class="h-primary center">Contact Us</h1>
          <div id="contact-box">
              <form action="">
                  <div class="form-group">
                      <label for="name">Name</label>
                      <input type="text" name="name" id="name" placeholder="Enter Your Name">
                  </div>
                  <div class="form-group">
                      <label for="email">Email</label>
                      <input type="text" name="email" id="email" placeholder="Enter Your Email">
                  </div>
                  <div class="form-group">
                      <label for="phone">Telephone Number</label>
                      <input type="text" name="phone" id="phone" placeholder="Enter Your phone">
                  </div>
                  <div class="form-group">
                      <label for="phone">Message</label>
                    <textarea name="message" id="message" cols="30" rows="10">Enter your message</textarea>
                  </div>
          </div>
      </section>
      <footer>
          <div class="center">Copyright &copy; www.MyOnlineMeal.com <br>all right reserved</div>
      </footer>
  </body>
  
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
