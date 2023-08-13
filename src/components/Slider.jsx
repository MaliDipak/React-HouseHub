import React, { useState, useEffect } from "react";
import { db } from "../firebase.config";
import { collection, query, orderBy, limit, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

import Spinner from "./Spinner";

import { ImLocation2 } from "react-icons/im";

//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Slider = () => {
  const [listings, setListings] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchListing = async () => {
      const listingRef = collection(db, "listings");
      const q = query(listingRef, orderBy("timestamp", "desc"), limit(5));
      const querySnap = await getDocs(q);
      let listings_array = [];
      querySnap.forEach((doc) => {
        return listings_array.push({
          id: doc.id,
          data: doc.data(),
        });
      });
      setListings(listings_array);
      setLoading(false);
    };
    fetchListing();
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <div
        className="container d-flex align-items-center justify-content-center "
        style={{ width: "80%" }}
      >
        {listings === null ? (
          <Spinner />
        ) : (
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={1}
            className="mySwipe"
          >
            {listings.map(({ data, id }) => (
              <SwiperSlide
                key={id}
                onClick={() => {
                  navigate(`/category/${data.type}/${id}`);
                }}
              >
                <img
                  src={data.imgUrls[0]}
                  alt={data.name}
                  className="slider-img"
                />
                <h4 className=" text-light p-4 m-0 ">
                  <ImLocation2 size={20} className="ms-2" />
                  {data.location}
                  <span
                    className="ms-4 mt-2"
                    style={{
                      fontWeight: "bold",
                      fontSize: "1.5rem",
                    }}
                  >
                    {data.name}
                  </span>
                  <span className="ms-2">
                    {!data.offer ? (
                      <p>Price : &#8377;{data.regularPrice}/-</p>
                    ) : (
                      <p>
                        Price :{" "}
                        <span style={{ textDecoration: "line-through red" }}>
                          &#8377;{data.regularPrice}/-
                        </span>{" "}
                        &#8377;
                        {data.discountedPrice}/-
                      </p>
                    )}
                    <p>
                      {data.offer && (
                        <span>
                          &#8377;
                          {data.regularPrice - data.discountedPrice}/- Discount.
                        </span>
                      )}
                    </p>
                  </span>
                </h4>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </>
  );
};

export default Slider;
