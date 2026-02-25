import React from 'react';
import { Carousel } from 'react-bootstrap';

function SlideBar() {
  return (
    <Carousel fade>
      <Carousel.Item interval={3000}>
        <img 
          className="d-block w-100" 
          src="https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg" 
          alt="Pizza 1" 
          style={{height: '450px', objectFit: 'cover'}} 
        />
        <Carousel.Caption className="bg-dark bg-opacity-50 rounded">
          <h3 className="text-warning">PIZZA QUIZ</h3>
          <p>Thử thách kiến thức ẩm thực của bạn ngay hôm nay!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img 
          className="d-block w-100" 
          src="https://img.freepik.com/free-photo/freshly-baked-pizza-with-mozzarella-cheese-tomatoes-basil-generative-ai_188544-12401.jpg" 
          alt="Pizza 2" 
          style={{height: '450px', objectFit: 'cover'}} 
        />
        <Carousel.Caption className="bg-dark bg-opacity-50 rounded">
          <h3 className="text-warning">TIN TỨC MỚI NHẤT</h3>
          <p>Cập nhật xu hướng Pizza trên toàn thế giới.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default SlideBar; // Đảm bảo có dòng này