<template>
  <div
    class="modal fade"
    id="successModel"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="staticBackdropLabel">
            {{ $t("Your message has been sent!") }}
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            @click="closeM"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          {{
            $t(
              "Thank you for contacting us, a member of staff will contact you soon."
            )
          }}
        </div>
        <div class="modal-footer">
          <button
            type="button"
            @click="closeM"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            {{ $t("Close") }}
          </button>
        </div>
      </div>
    </div>
  </div>

  <Nav />
  <ColorB />

  <header class="home" id="home">
    <div class="container">
      <div class="row h-100 align-items-center">
        <div
          class="col-12 col-md-7 content text-center text-md-start"
          data-aos="zoom-in"
        >
          <h2 class="hofw-white">{{ $t("name company") }}</h2>
          <h4 class="hofw-white mt-3">{{ $t("Kings Of World Trade") }}</h4>
          <p class="my-4">
            {{
              $t(
                "A Turkish company that produces electrical, manual and plastic household appliances, with high quality and a long-term guarantee. The company also aspires to meet all the requirements of customers at the local and regional levels, by providing the best products to our customers, because our commitment to quality and product excellence is our most prominent policy."
              )
            }}
          </p>

          <a href="#contact-us" class="mt-link">
            <button class="bk-color">{{ $t("CONTACT US") }}</button>
          </a>
        </div>

        <div class="d-none d-md-block col-md-5" :data-aos="fadeStart">
          <img
            src="../assets/img/header-md-photo.png"
            alt="photo contain moblle phone and computer"
            class="img-fluid w-75 ms-auto d-block"
          />
        </div>
      </div>

      <figure class="fa-arrow" data-aos="zoom-in">
        <a
          href="#about"
          class="translate-middle arrow b-color f-color shadow-lg"
        >
          <span class="fas fa-arrow-down"></span>
        </a>
      </figure>
    </div>
  </header>

  <section class="about-us pt80" id="about">
    <h2 data-aos="zoom-in" class="hofw">{{ $t("ABOUT US") }}</h2>

    <div class="container align-content-center">
      <div class="row mt-5 mt-md-0">
        <div
          class="
            col-md-6
            align-content-center
            justify-content-center justify-content-md-start
            d-flex
            text-center text-md-start
          "
          :data-aos="fadeEnd"
        >
          <p class="w-100 mt-3">
            {{
              $t(
                "We are a leading company in the field of manufacturing electrical and manual machines as well as plastic household appliances. Founded in 2015, we work with the highest quality standards required by the public and private sectors and institutions."
              )
            }}
          </p>

          <p class="w-100 mt-1">
            {{
              $t(
                "We passionately believe in our ability to dazzle everyone with our innovative technologies, products, and designs that create economic opportunity for every member of the global workforce."
              )
            }}
          </p>

          <!-- <p class="w-100 mt-1">
            {{ $t("") }}
          </p> -->
          <!-- {{ $t("main page") }} -->

          <a href="#products" class="d-none">
            <button>{{ $t("Our Products") }}</button>
          </a>
        </div>

        <div class="col-md-6 d-none d-md-block" :data-aos="fadeStart">
          <img src="../assets/img/about-wallpaper.png" alt="chef photo" />
        </div>
      </div>
    </div>
  </section>

  <div class="products overflow-hidden pt80" id="products">
    <div class="container" data-aos="zoom-in">
      <h2 class="text-center pt-3 h2 hofw" data-aos="zoom-in">
        {{ $t("Our Products") }}
      </h2>
      <p data-aos="zoom-in" class="par-serv text-center mb-5">
        {{
          $t(
            "Our products symbolize Turkey's supremacy in the world, and we seek to stand by companies and stores to enable them to start their projects with ease, develop them with confidence, and manage them successfully."
          )
        }}
      </p>

      <div class="shuffle-container" id="shuffle-cont">
        <div class="row">
          <div class="box-minue mb-2">
            <li data-filter=".elec" class="f-li" data-aos="zoom-in">
              {{ $t("Electrical devices") }}
            </li>
            <li data-filter=".hd" data-aos="zoom-in">
              {{ $t("Handy household tools") }}
            </li>
            <li data-filter=".bl" data-aos="zoom-in">
              {{ $t("plastic tools") }}
            </li>
          </div>

          <div class="alert alert-success w-auto m-1" role="alert">
            <strong>
              {{
                $t(
                  "Here are some of our products, and you can see all our products, prices and details on our Telegram channel in the following link"
                )
              }}
            </strong>
            <a
              href="https://t.me/Anadolu_Kudus"
              target="_blank"
              class="d-inline-block ms-1 fw-bold"
            >
              {{ $t("click here") }}
            </a>
          </div>

          <div class="row box-list p-0 m-auto">
            <div class="col-6 col-lg-3 mix box-item bl">
              <a>
                <img src="../assets/img/bl/2.jpeg" alt="" />
                <h4 class="hnv">0.6$</h4>
              </a>
            </div>

            <div class="col-6 col-lg-3 mix box-item hd">
              <a>
                <img src="../assets/img/hd/1.jpg" alt="" />
                <h4 class="hnv">
                  {{ $t("Lemon and pomegranate squeezer") }} - 40$
                </h4>

                <div class="d-detail align-content-center text-center">
                  <h5 class="my-3 hnv">
                    {{ $t("Lemon and pomegranate squeezer") }} - 40$
                  </h5>
                  <hr />
                  <p>
                    {{
                      $t(
                        "Lemon and pomegranate squeezer, made of chrome and aluminum, with thermal coating."
                      )
                    }}
                  </p>
                </div>
              </a>
            </div>

            <div class="col-6 col-lg-3 mix box-item bl">
              <a>
                <img src="../assets/img/bl/3.jpeg" alt="" />
                <h4 class="hnv">0.4$</h4>
              </a>
            </div>

            <div class="col-6 col-lg-3 mix box-item elec">
              <a>
                <img src="../assets/img/elec/1.jpg" alt="" />
                <h4 class="hnv">{{ $t("A vegetable chopper") }} - 98$</h4>

                <div class="d-detail align-content-center text-center">
                  <h5 class="my-3 hnv">
                    {{ $t("A vegetable chopper") }} - 98$
                  </h5>
                  <hr />
                  <p>
                    {{
                      $t(
                        "Vegetable chopper and whisk for hummus and garlic cream, capacity 5 liters, electricity 220v, made of stainless steel, steel blade, glass cover for the cooker, weight 16kg."
                      )
                    }}
                  </p>
                </div>
              </a>
            </div>

            <div class="col-6 col-lg-3 mix box-item bl">
              <a>
                <img src="../assets/img/bl/1.jpeg" alt="" />
                <h4 class="hnv">0.5$</h4>
              </a>
            </div>

            <div class="col-6 col-lg-3 mix box-item hd">
              <a>
                <img src="../assets/img/hd/2.jpg" alt="" />
                <h4 class="hnv">{{ $t("Potato cutter") }} - 92$</h4>

                <div class="d-detail align-content-center text-center">
                  <h5 class="my-3 hnv">{{ $t("Potato cutter") }} - 92$</h5>
                  <hr />
                  <p>
                    {{
                      $t(
                        "Potato cutter made of aluminium, thermoplastic coating."
                      )
                    }}
                  </p>
                </div>
              </a>
            </div>

            <div class="col-6 col-lg-3 mix box-item bl">
              <a>
                <img src="../assets/img/bl/4.jpeg" alt="" />
                <h4 class="hnv">0.9$</h4>
              </a>
            </div>

            <div class="col-6 col-lg-3 mix box-item elec">
              <a>
                <img src="../assets/img/elec/2.jpg" alt="" />
                <h4 class="hnv">{{ $t("Electric potato fryer") }} - 88$</h4>

                <div class="d-detail align-content-center text-center">
                  <h5 class="my-3 hnv">
                    {{ $t("Electric potato fryer") }} - 88$
                  </h5>
                  <hr />
                  <p>
                    {{
                      $t(
                        "Made of stainless steel, capacity of 3 liters + 3 liters, electricity 220v."
                      )
                    }}
                    <br />
                    {{ $t("Other sizes are available.") }}
                  </p>
                </div>
              </a>
            </div>

            <div class="col-6 col-lg-3 mix box-item bl">
              <a>
                <img src="../assets/img/bl/5.jpeg" alt="" />
                <h4 class="hnv">0.4$</h4>
              </a>
            </div>

            <div class="col-6 col-lg-3 mix box-item hd">
              <a>
                <img src="../assets/img/hd/3.jpg" alt="" />
                <h4 class="hnv">
                  {{ $t("HAMBURGER FORMING MACHINES") }} - 80$
                </h4>

                <div class="d-detail align-content-center text-center">
                  <h5 class="my-3 hnv">
                    {{ $t("HAMBURGER FORMING MACHINES") }} - 80$
                  </h5>
                  <hr />
                  <p>
                    {{
                      $t(
                        "12 CM Meatbours & hamburger forming machines, 10 and 14 cm sizes are available."
                      )
                    }}
                  </p>
                </div>
              </a>
            </div>

            <div class="col-6 col-lg-3 mix box-item bl">
              <a>
                <img src="../assets/img/bl/6.jpeg" alt="" />
                <h4 class="hnv">0.55$</h4>
              </a>
            </div>

            <div class="col-6 col-lg-3 mix box-item elec">
              <a>
                <img src="../assets/img/elec/3.jpg" alt="" />
                <h4 class="hnv">{{ $t("Hot soup cooker") }} - 126$</h4>

                <div class="d-detail align-content-center text-center">
                  <h5 class="my-3 hnv">{{ $t("Hot soup cooker") }} - 126$</h5>
                  <hr />
                  <p>
                    {{
                      $t(
                        "A cooker for preparing hot soups, 220v electricity, thermal coating, anti-rust, capacity 18 liters, with a temperature setting counter."
                      )
                    }}
                  </p>
                </div>
              </a>
            </div>

            <div class="col-6 col-lg-3 mix box-item bl">
              <a>
                <img src="../assets/img/bl/7.jpeg" alt="" />
                <h4 class="hnv">{{ $t("dozen") }} - 2$</h4>
              </a>
            </div>

            <div class="col-6 col-lg-3 mix box-item hd">
              <a>
                <img src="../assets/img/hd/4.jpg" alt="" />
                <h4 class="hnv">{{ $t("Potato cutter") }} - 76$</h4>

                <div class="d-detail align-content-center text-center">
                  <h5 class="my-3 hnv">{{ $t("Potato cutter") }} - 76$</h5>
                  <hr />
                  <p>
                    {{
                      $t(
                        "It is used for slicing peeled potatoes in 9×9 mm dimensions."
                      )
                    }}
                    <br />
                    {{
                      $t(
                        "The blades inside the press are made of stainless steel, and the outer ring is made of aluminum for a stronger grip."
                      )
                    }}
                  </p>
                </div>
              </a>
            </div>

            <div class="col-6 col-lg-3 mix box-item bl">
              <a>
                <img src="../assets/img/bl/8.jpeg" alt="" />
                <h4 class="hnv">0.5$</h4>
              </a>
            </div>

            <div class="col-6 col-lg-3 mix box-item elec">
              <a>
                <img src="../assets/img/elec/4.jpg" alt="" />
                <h4 class="hnv">
                  {{ $t("The stretch wrapping machine") }} - 75$
                </h4>

                <div class="d-detail align-content-center text-center">
                  <h5 class="my-3 hnv">
                    {{ $t("The stretch wrapping machine") }} - 75$
                  </h5>
                  <hr />
                  <p>
                    {{
                      $t(
                        "The stretch wrapping machine, made of stainless steel, for packing vegetables and foods, 220V electricity, there is a heat wire to cut the stretch and a heated floor for the stretch to stick."
                      )
                    }}
                  </p>
                </div>
              </a>
            </div>

            <div class="col-6 col-lg-3 mix box-item bl">
              <a>
                <img src="../assets/img/bl/9.jpeg" alt="" />
                <h4 class="hnv">0.55$</h4>
              </a>
            </div>

            <div class="col-6 col-lg-3 mix box-item bl">
              <a>
                <img src="../assets/img/bl/10.jpeg" alt="" />
                <h4 class="hnv">{{ $t("dozen") }} - 3.5$</h4>
              </a>
            </div>

            <div class="col-6 col-lg-3 mix box-item bl">
              <a>
                <img src="../assets/img/bl/11.jpeg" alt="" />
                <h4 class="hnv">0.7$</h4>
              </a>
            </div>

            <div class="col-6 col-lg-3 mix box-item bl">
              <a>
                <img src="../assets/img/bl/12.jpeg" alt="" />
                <h4 class="hnv">0.55$</h4>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="comp-value">
    <div class="container">
      <div class="section-title mt-5" data-aos="zoom-in">
        <h2 class="text-center hofw-white">
          {{ $t("company Value") }}
        </h2>
      </div>

      <div class="row m-0 mt-5 mb-3">
        <div class="val col-12 col-lg-6" :data-aos="fadeEnd">
          <div class="val-child p-3">
            <h4>{{ $t("Commitment:") }}</h4>
            <p>
              {{
                $t(
                  "The team is committed to fulfill the highest level of quality."
                )
              }}
            </p>
          </div>
        </div>
        <div class="val col-12 col-lg-6" :data-aos="fadeStart">
          <div class="val-child p-3">
            <h4>{{ $t("Respect:") }}</h4>
            <p>
              {{
                $t(
                  "We strive to uphold the ethics of professional work and build our relationship with our customers and employees with respect and appreciation."
                )
              }}
            </p>
          </div>
        </div>
        <div class="val col-12 col-lg-6" :data-aos="fadeEnd">
          <div class="val-child p-3">
            <h4>{{ $t("Fulfillment:") }}</h4>
            <p>
              {{
                $t(
                  "We keep our promises to our customers and companies with outstanding service and high integrity."
                )
              }}
            </p>
          </div>
        </div>
        <div class="val col-12 col-lg-6" :data-aos="fadeStart">
          <div class="val-child p-3">
            <h4>{{ $t("Seeking for the Best:") }}</h4>
            <p>
              {{
                $t(
                  "We always strive to develop the work and provide the best service and the best product at the most appropriate price."
                )
              }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <main class="services pt80 mb-5" id="services">
    <div class="container">
      <div class="title text-center">
        <h2 data-aos="zoom-in" class="hofw">{{ $t("SERVICES") }}</h2>
        <p data-aos="zoom-in" class="par-serv">
          {{
            $t(
              "We exist to help customers dazzle the world, we do this by dedicating our lives to executing our strategy and promoting constructive competition that leads to more progress and success."
            )
          }}
        </p>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-sm-6 col-lg-4">
            <div
              class="media"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="400"
            >
              <div class="icon-cont"><i class="me-4 fas fa-award"></i></div>

              <div class="media-body">
                <h5>{{ $t("High quality") }}</h5>
                {{
                  $t(
                    "Our products are made by modern machinery operated by highly skilled, accurate and honest employees."
                  )
                }}
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-lg-4">
            <div
              class="media"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="600"
            >
              <div class="icon-cont">
                <i class="me-4 fas fa-dollar-sign"></i>
              </div>
              <div class="media-body">
                <h5>{{ $t("Competitive prices") }}</h5>
                {{
                  $t(
                    "Our goal is to gain customer satisfaction and provide the product they deserve. Therefore, we strive to provide products with the highest specifications and the lowest possible cost."
                  )
                }}
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-lg-4">
            <div
              class="media"
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-duration="800"
            >
              <div class="icon-cont">
                <i class="me-4 fas fa-gem" style="font-size: 45px"></i>
              </div>

              <div class="media-body">
                <h5>{{ $t("Golden guarantee") }}</h5>
                {{ $t("One year warranty on all electrical appliances.") }}
              </div>
            </div>
          </div>

          <div class="col-sm-6 col-lg-4">
            <div
              class="media"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="400"
            >
              <div class="icon-cont">
                <i
                  class="me-4 fas fa-cart-arrow-down"
                  style="font-size: 45px"
                ></i>
              </div>

              <div class="media-body">
                <h5>{{ $t("Shipping is free") }}</h5>
                {{
                  $t(
                    "We have fast and free shipping service to all regions of Turkey."
                  )
                }}
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-lg-4">
            <div
              class="media"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="600"
            >
              <div class="icon-cont"><i class="me-4 fas fa-headset"></i></div>

              <div class="media-body">
                <h5>{{ $t("24/7 Support") }}</h5>
                {{
                  $t(
                    "We have a professional team that is able to respond to you and answer all that comes to your mind about the company and its products at any time."
                  )
                }}
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-lg-4">
            <div
              class="media"
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-duration="800"
            >
              <div class="icon-cont"><i class="me-4 fas fa-globe"></i></div>
              <div class="media-body">
                <h5>{{ $t("international shipping") }}</h5>
                {{
                  $t(
                    "We can deliver our products to all places locally and internationally."
                  )
                }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>

  <section class="contact pt80" id="contact-us">
    <h2 data-aos="zoom-in-up" class="text-center hofw-white">
      {{ $t("CONTACT US") }}
    </h2>

    <div class="container">
      <form
        class="
          row
          gx-3
          gy-3
          needs-validation
          flex-wrap
          d-flex
          align-items-center
        "
        novalidate
        autocomplete="off"
        action="https://formsubmit.co/e02d490cf3aeed1f3fb61856387ae71a"
        method="POST"
      >
        <div class="col-12 col-md-6" data-aos="fade-up">
          <label for="InFullName" class="form-label"
            >{{ $t("Full Name") }}
          </label>
          <input
            type="text"
            class="form-control"
            id="InFullName"
            required
            placeholder="Full Namee"
            minlength="8"
          />

          <div class="valid-feedback">{{ $t("Name Is Set") }}</div>
          <div class="invalid-feedback">
            {{ $t("Please Write Your Full Name") }}
          </div>
        </div>

        <div class="col-12 col-md-6" data-aos="fade-up">
          <label for="InPhone" class="form-label">{{
            $t("Your Number")
          }}</label>
          <input
            type="tel"
            class="form-control"
            id="InPhone"
            required
            placeholder="Phone Number"
            length="6"
            minlength="6"
            oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
            name="Phone"
          />
          <div class="invalid-feedback">
            {{ $t("Please Write A Valid Phone Number") }}
          </div>
          <div class="valid-feedback">{{ $t("Looks Good Number") }}</div>
        </div>

        <div class="col-12" data-aos="fade-up">
          <label for="InEmail" class="form-label">{{ $t("Your Email") }}</label>
          <input
            type="email"
            name="Email"
            class="form-control"
            id="InEmail"
            required
            placeholder="Your Email"
          />
          <div class="valid-feedback">{{ $t("Looks Good Email") }}</div>
          <div class="invalid-feedback">
            {{ $t("Please Write A Valid Email") }}
          </div>
        </div>

        <div class="col-12" data-aos="fade-up">
          <label for="Your-Massage" class="form-label">
            {{ $t("Message") }}
          </label>
          <textarea
            name="textarea"
            id="Your-Massage"
            placeholder="Message"
            class="form-control w-100"
            required
            style="height: 200px; resize: none"
          ></textarea>
          <div class="valid-feedback">{{ $t("Looks Good Massage") }}</div>
          <div class="invalid-feedback">
            {{ $t("Please Write Your Massage") }}
          </div>
        </div>

        <input type="hidden" name="_captcha" value="false" />
        <input type="text" name="_honey" class="d-none" />
        <input
          type="hidden"
          name="_subject"
          value="New Email From My Website"
        />
        <input
          type="hidden"
          name="_next"
          value="https://anadolu-kudus.github.io/i/"
        />

        <div
          class="col-md-4 col-12 mt-5 text-md-start text-center"
          data-aos="fade-up"
        >
          <button @click="submitt" type="submit">{{ $t("send") }}</button>
        </div>

        <div
          class="
            website
            col-md-8
            ms-md-auto
            mt-5 mt-md-auto
            text-center text-md-end
          "
          data-aos="fade-up"
        >
          <a href="https://t.me/Anadolu_kudus_Contact"
            ><img
              src="https://img.icons8.com/color/48/000000/telegram-app--v2.png"
          /></a>

          <a href="https://wa.me/963950556805" class="mx-3"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="43"
              height="43"
              viewBox="0 0 172 172"
              style="fill: #000000; transform: translateY(-2px)"
            >
              <g
                fill="none"
                fill-rule="nonzero"
                stroke="none"
                stroke-width="1"
                stroke-linecap="butt"
                stroke-linejoin="miter"
                stroke-miterlimit="10"
                stroke-dasharray=""
                stroke-dashoffset="0"
                font-family="none"
                font-weight="none"
                font-size="none"
                text-anchor="none"
                style="mix-blend-mode: normal"
              >
                <path d="M0,172v-172h172v172z" fill="none"></path>
                <g fill="#2ecc71">
                  <path
                    d="M86,2.6875c-45.95625,0 -83.3125,37.35625 -83.3125,83.3125c0,14.10938 3.4927,27.95053 10.34583,40.17865l-7.1203,26.06927c-1.20938,4.16563 -0.00157,8.4651 3.08905,11.55573c3.09062,3.09062 7.39272,4.30052 11.55835,3.22552l27.1427,-7.12292c11.825,6.18125 24.99322,9.40625 38.43072,9.40625c45.95625,0 83.3125,-37.35625 83.3125,-83.3125c0,-22.30625 -8.59948,-43.13542 -24.32135,-58.8573c-15.85625,-15.72188 -36.81875,-24.4552 -59.125,-24.4552zM86,10.75c20.15625,0 39.1026,7.79428 53.21198,22.03803c14.24375,14.24375 22.1724,33.1901 22.03802,53.21197c0,41.52188 -33.72812,75.25 -75.25,75.25c-12.49688,0 -24.9948,-3.22605 -36.01355,-9.13855c-0.5375,-0.26875 -1.20728,-0.5354 -1.87915,-0.5354c-0.40312,0 -0.67292,-0.00052 -1.07605,0.13385l-28.62292,7.52448c-2.01562,0.5375 -3.35728,-0.53855 -3.89478,-1.07605c-0.5375,-0.5375 -1.61355,-1.87915 -1.07605,-3.89478l7.52447,-27.68335c0.26875,-1.075 0.13595,-2.14843 -0.40155,-3.08905c-6.45,-11.2875 -9.81042,-24.3224 -9.81042,-37.49115c0,-41.52187 33.72813,-75.25 75.25,-75.25zM86,22.84375c-34.80312,0 -63.15625,28.21875 -63.15625,63.15625c0,11.15313 2.9573,22.0375 8.46667,31.57813c2.15,3.7625 2.68645,8.19583 1.61145,12.36145l-3.8974,14.10938l15.05157,-3.89478c1.34375,-0.40312 2.6875,-0.53802 4.03125,-0.53802c2.6875,0 5.37395,0.67188 7.65833,2.01563c9.27187,4.8375 19.61875,7.52448 30.23438,7.52448c34.80313,0 63.15625,-28.35312 63.15625,-63.15625c0,-16.93125 -6.58542,-32.78855 -18.5448,-44.74792c-11.825,-11.825 -27.6802,-18.40833 -44.61145,-18.40833zM57.9151,49.31458h3.76355c1.47812,0 2.95468,0.13437 4.4328,3.35938c1.74687,3.89687 5.64375,13.70677 6.04688,14.6474c0.5375,0.94062 0.80835,2.14948 0.13647,3.49323c-0.67187,1.34375 -0.94062,2.15 -2.01562,3.35938c-0.94062,1.20937 -2.15157,2.55522 -2.95782,3.49585c-0.94062,0.94063 -2.0151,2.01563 -0.80572,4.03125c1.20937,2.01563 5.1052,8.46458 11.0177,13.7052c7.525,6.71875 13.97552,8.8698 15.99115,9.81042c2.01563,0.94063 3.0922,0.80573 4.30157,-0.53802c1.20938,-1.34375 4.97083,-5.77918 6.31458,-7.7948c1.34375,-2.01562 2.68855,-1.61145 4.43542,-0.93957c1.88125,0.67188 11.55573,5.5078 13.57135,6.44843c2.01563,0.94062 3.3578,1.4797 3.76093,2.28595c0.5375,1.075 0.53907,4.97082 -1.07343,9.67395c-1.6125,4.56875 -9.675,9.1375 -13.4375,9.40625c-3.62813,0.26875 -6.98907,1.61355 -23.78595,-4.97082c-20.15625,-7.92813 -32.92083,-28.62293 -33.86145,-29.96668c-0.94063,-1.34375 -8.0625,-10.74843 -8.0625,-20.5578c0,-9.80937 5.1052,-14.51355 6.98645,-16.52917c1.88125,-2.01562 3.8974,-2.4198 5.24115,-2.4198z"
                  ></path>
                </g>
              </g></svg
          ></a>

          <a href="#" class="d-none"
            ><img
              src="https://img.icons8.com/fluent/48/000000/instagram-new.png"
          /></a>

          <a href="#" class="d-none"
            ><img
              src="https://img.icons8.com/color/48/000000/twitter-circled--v4.png"
          /></a>
        </div>
      </form>
    </div>
  </section>

  <UpArrow />
  <Footer />
</template>

<script>
import Nav from "@/components/Layout/Nav.vue";
import ColorB from "@/components/Layout/ColorB.vue";
import UpArrow from "@/components/Layout/UpArrow.vue";
import Footer from "@/components/Layout/Footer.vue";

import "../assets/js/main.js";

export default {
  name: "HomeView",
  data: function () {
    return {
      haveMsg: "",
      fadeStart: "",
      fadeEnd: "",
    };
  },

  components: {
    Nav,
    ColorB,
    UpArrow,
    Footer,
  },

  methods: {
    closeM() {
      localStorage.setItem("submitSuccess", "false");
      this.haveMsg = "false";
      // console.log('click close button ' + this.haveMsg  );
    },
  },
  mounted() {
    let langV = localStorage.getItem("lang") || "en";
    if (langV == "ar") {
      this.fadeStart = "fade-right";
      this.fadeEnd = "fade-left";
    } else {
      this.fadeStart = "fade-left";
      this.fadeEnd = "fade-right";
    }

    // *******************

    this.haveMsg = localStorage.getItem("submitSuccess") || "false";
    // console.log("first open website value is " + this.haveMsg);

    let myModal = new bootstrap.Modal(document.getElementById("successModel"));

    if (this.haveMsg == "true") {
      // console.log("if have msg from localstorage " + this.haveMsg);
      myModal.show();
    } else {
      // console.log("else " + this.haveMsg);
    }

    mixitup("#shuffle-cont");
    $(".f-li").click();

    // form bs5
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll(".needs-validation");
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms).forEach(function (form) {
      form.addEventListener(
        "submit",
        function (event) {
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          }
          // the solution are here
          else {
            localStorage.setItem("submitSuccess", true);
          }
          form.classList.add("was-validated");
        },

        false
      );
    });
  },
};
</script>

<style lang="scss" scoped>
</style>
