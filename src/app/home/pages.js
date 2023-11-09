"use client";
import { Box, Container, Grid } from "@mui/material";
import React from "react";
import styles from "./Home.module.css";
import StarRateIcon from "@mui/icons-material/StarRate";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
import Link from "next/link";
import { BrowseGalleryRounded } from "@mui/icons-material";
const Home = () => {
  return (
    <>
      {/*  1 Wrapper */}
      <Box component={"section"} className={styles.home_wrp}>
        <Container>
          <Grid container spacing={2} alignItems={"center"}>
            <Grid item lg={7} md={12} sm={12}>
              <Box className={styles.left_sec}>
                <h1 className="aos-animate" data-aos="zoom-in">
                  your go-to source to <span>manage payment</span>{" "}
                  <i>with Complete Ease.</i>
                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et
                </p>

                <Box className={styles.ftr_btn}>
                  <a href="#">Get Started Now!</a>
                  <Box className={styles.active_user}>
                    <img
                      src="https://advanture.icu/bden/wp-content/uploads/sites/18/2023/04/newclients.png"
                      alt=""
                    />
                    <p>25k+ Active Users</p>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item lg={5} md={12} sm={12}>
              <Box className={styles.right_img}>
                <img
                  src="https://advanture.icu/bden/wp-content/uploads/sites/18/2023/04/MobileApp03-843x1536.png"
                  alt=""
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      {/* servives 2nd Wrapper */}
      <Box component={"section"} className={styles.home_wrp_service}>
        <Container className={styles.fx_cnt}>
          <Grid container spacing={2}>
            <Grid item lg={12} md={12} sm={12}>
              <Box className={styles.our_services_heading_name}>
                <h5>
                  Our Services{" "}
                  <sup>
                    <img
                      src="https://cook-web-app.netlify.app/images/icons/benefitstik.svg"
                      alt=""
                    />
                  </sup>
                </h5>
              </Box>
              <Box className={styles.our_services}>
                <div className={styles.service_item}>
                  <img
                    src="https://payrup.com/assets/images/Icons/mobile-recharge-dth.svg"
                    alt=""
                  />
                  <Link href="">Mobile Recharge & DTH</Link>
                </div>
                <div className={styles.service_item}>
                  <img
                    src="https://payrup.com/assets/images/Icons/mobile-recharge-dth.svg"
                    alt=""
                  />
                  <Link href="">Bill Payments</Link>
                </div>
                <div className={styles.service_item}>
                  <img
                    src="https://payrup.com/assets/images/Icons/mobile-recharge-dth.svg"
                    alt=""
                  />
                  <Link href="">Travel Booking Payments</Link>
                </div>

                <div className={styles.service_item}>
                  <img
                    src="https://payrup.com/assets/images/Icons/mobile-recharge-dth.svg"
                    alt=""
                  />
                  <Link href="">More</Link>
                </div>
                <div className={styles.service_item}>
                  {/* <img src="https://payrup.com/assets/images/Icons/mobile-recharge-dth.svg" alt="" />
                    <Link href="">More</Link> */}
                </div>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      {/* reveiw sec 3 Wrapper  */}
      {true && (
        <Box component={"section"} className={styles.home_wrp_bag1}>
          <Container>
            <Grid container spacing={2} alignItems={"center"}>
              <div className={styles.shadow_img}>
                <img
                  src="https://advanture.icu/bden/wp-content/uploads/sites/18/2023/04/IMG-bg.png"
                  alt=""
                />
              </div>
              {/* <Grid item lg={7} md={12} sm={12}>
              <div className={styles.review_sec}>
                {[...Array(5).keys()].map((_, index) => (
                  <StarRateIcon key={index} />
                ))}
                <h3>
                  <span>300+</span>
                  <sub> Reviews</sub>
                </h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>
            </Grid> */}
              <Grid item lg={7} md={12} sm={12}>
                <div className={styles.left_text_bag2}>
                  <h3>
                    We Strive To Offer An <span>Unparalleled Experience</span>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et
                  </p>
                  <p>
                    We believe that everyone should have access to financial
                    services regardless of their background. That’s why we
                  </p>
                </div>

                <Grid container>
                  <Grid lg={6} md={12} sm={12}>
                    <Box className={styles.items_sec}>
                      <Box className={styles.svg_itm}>
                        <AddToPhotosIcon />
                      </Box>
                      <h4>Anytime Transaction</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ut elit tellus, luctus nec ullamcorper mattis
                      </p>
                    </Box>
                  </Grid>
                  <Grid lg={6} md={12} sm={12}>
                    <Box className={styles.items_sec}>
                      <Box className={styles.svg_itm2}>
                        <AddToPhotosIcon />
                      </Box>
                      <h4>Anytime Transaction</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ut elit tellus, luctus nec ullamcorper mattis
                      </p>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item lg={5} md={12} sm={12}>
                <img
                  src="https://advanture.icu/bden/wp-content/uploads/sites/18/2023/04/Dashboard.png"
                  alt=""
                />
                {/* <Box className={styles.review_form}>
                <h3>Read our blogs</h3>
                </Box>
                <Box className={styles.service_sec}>
                    <div className={styles.service_item}>
                    <img src="https://payrup.com/assets/images/Icons/mobile-recharge-dth.svg" alt="" />
                        <h5>Mobile Recharge & DTH</h5>
                    </div>
                    <div className={styles.service_item}>
                    <img src="https://payrup.com/assets/images/Icons/mobile-recharge-dth.svg" alt="" />
                        <h5>Bill Payments</h5>
                    </div>
                    <div className={styles.service_item}>
                    <img src="https://payrup.com/assets/images/Icons/mobile-recharge-dth.svg" alt="" />
                        <h5>Travel Bookings</h5>
                    </div>
                </Box> */}
              </Grid>
            </Grid>
          </Container>
        </Box>
      )}

      <Box component={"section"} className={styles.home_wrp_third}>
        <Container>
          <Grid container spacing={3}>
            <Grid item lg={5} sm={12} xs={12} md={12}>
              <Box className={styles.third_left_bag3}>
                <h2>
                  Everyone Should Have Access <span>To Financial Services</span>
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et
                </p>
              </Box>
            </Grid>
            <Grid item lg={7} sm={12} xs={12} md={12}>
              <Box className={styles.third_right_bag3}>
                <p>
                  Our commitment to excellence is reflected in our customer
                  service. We are always here to help you with any questions or
                  concerns you may have.{" "}
                </p>
                <Box sx={{ textAlign: "right", marginTop: "30px" }}>
                  <button>Get Started</button>
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Box className={styles.thrd_bag3_niche}>
            <Grid container spacing={3}>
              <Grid item lg={5} sm={12} xs={12} md={12}>
                <Box className={styles.box1_bag4}>
                  <div className={styles.box1_content}>
                  <Box className={styles.svg_itm}>
                        <AddToPhotosIcon />
                      </Box>
                    <h3>Anytime Transaction</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ut elit tellus, luctus nec ullamcorper mattis
                    </p>
                  </div>
                  <div className={styles.box1_img}>
                    <img
                      src="https://advanture.icu/bden/wp-content/uploads/sites/18/2023/04/App-Block01.png"
                      alt=""
                    />
                  </div>
                </Box>
              </Grid>
              <Grid item lg={4} sm={12} xs={12} md={12}>
                <h1>Hello World</h1>
              </Grid>
              <Grid item lg={3} sm={12} xs={12} md={12}>
                <h1>Hello World</h1>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Home;
