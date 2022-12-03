import React, { useEffect, useState } from "react";
import { EyeInvisibleOutlined } from "@ant-design/icons";
// import type { PaginationProps } from 'antd';
import { Pagination, Select } from "antd";
import { twitter } from "assets";
import { Rating } from "@mui/material";

import { testimonials } from "store/dataTestimonials";

const Card = ({ imgUrl, name, rating, date, office, comment }) => 
  return (
  <div className="bg-white p-8 my-4 mx-8 drop-shadow-4xl rounded-2xl w-[520px]">
    <div className="flex justify-between">
      <div className="flex">
        <img src={imgUrl} className="rounded-full" alt="gambar" />
        <div className="pl-4 flex flex-col text-start">
          <p className="font-bold text-xl my-auto">{name}</p>
          <Rating
            name="half-rating-read"
            defaultValue={rating}
            precision={0.5}
            readOnly
          />
        </div>
        <p className="text-gray-500">{date}</p>
      </div>
      <div className="my-12 text-start">
        <h3 className="font-bold text-gray-500">{office}</h3>
        <p className="text-gray-500">“{comment}”</p>
      </div>
      <div className="flex justify-end">
        <button className="text-red-600 border-2 rounded-2xl border-red-600 px-8 py-1 flex content-center">
          <EyeInvisibleOutlined className="text-2xl mb-1" />
          <p className="ml-4 my-auto">Hide Comment</p>
        </button>
      </div>
    </div>
  </div>

);
};

const ReviewPage = () => {
  const pageSize = 4;
  const [dataReview, setDataReview] = useState({
    minValue: 0,
    maxValue: 2,
  });
  const [filter, setFilter] = useState("newest");
  const [testimonial, setTestimonial] = useState(testimonials);
  // const TestiImage = {image1, image2, image3, image4, image5, image6, image7, image8, image9, image10}

  useEffect(() => {
    setTestimonial(testimonials);
    setDataReview({
      minValue: 0,
      maxValue: 4,
    });
  }, [testimonial]);

  const handleChange = (value) => {
    setDataReview({
      minValue: (value - 1) * pageSize,
      maxValue: value * pageSize,
    });
    // console.log(dataReview);
  };

  const handleFilter = (value) => {
    // console.log(`selected ${value}`);
    setFilter(value);
  };

  // const handleFilter = ({name}) => {
  //     setFilter(name);
  // }

  // console.log(dataReview.data);
  // onClick={handleFilter()}
  // console.log(menu.props.items[0].name);
  // console.log(filter);
  return (
    <div className="flex flex-col w-full">
      <div className="flex justify-between px-8 py-4 w-full bg-white rounded-2xl shadow">
        <h1 className="text-2xl font-bold my-auto">Review</h1>
        <div className="flex content-center pl-12 rounded-xl text-lg py-2">
          <p className="mr-4">Sort By : </p>
          <Select
            defaultValue="newest"
            style={{ width: 140 }}
            className="ring-0 border-0"
            onChange={handleFilter}
            options={[
              {
                value: "newest",
                label: "Newest",
              },
              {
                value: "oldest",
                label: "Oldest",
              },
            ]}
          />
        </div>
      </div>
      <div className=" my-4 py-8 justify-center flex min-w-full flex-wrap bg-white rounded-2xl shadow">
        {testimonial &&
          testimonial.length > 0 &&
          testimonial
            .slice(dataReview.minValue, dataReview.maxValue)
            ?.map((review) => {
              return (
                <Card
                  key={review.id}
                  imgUrl={twitter}
                  name={review.name}
                  rating={review.rating}
                  date={"22/05/2022"}
                  office="Equity Tower Floor 34"
                  comment={review.comment}
                />
              );
            })}
      </div>
      <div className="text-start mt-4">
        <Pagination
          defaultCurrent={1}
          defaultPageSize={pageSize}
          // current={dataReview.current}
          total={testimonial.length}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default ReviewPage;
