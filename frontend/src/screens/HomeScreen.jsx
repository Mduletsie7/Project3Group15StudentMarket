import { Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useGetProductsQuery } from '../slices/productsApiSlice';
import { Link } from 'react-router-dom';
import Product from '../components/Product';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Paginate from '../components/Paginate';
import Meta from '../components/Meta';

const HomeScreen = () => {
  const { pageNumber, keyword } = useParams();

  const { data, isLoading, error } = useGetProductsQuery({
    keyword,
    pageNumber,
  });

  return (
    /* This code creates a div for the 'Hero' section and sets an image as our hero image
    ::return:: sets the hero image on the homescreen
    */
    <>
      <div className='Hero'>
        <img
          src={process.env.PUBLIC_URL + "/images/Hero.png"}
          alt=''
          srcset=''
        />

      </div>

  {/* Below code generates a Bootstrap loading spinner 
  ::return:: Loading spinner from Bootstrap when page elements are still loading */}

      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>
          {error?.data?.message || error.error}
        </Message>
      ) : (

        /* This code uses the Javascript map function to go through the json file and return the objects 1 by 1
        ::return:: products from MongoDB database 
        */
        <>
          <Meta />
          <h1>Featured Products</h1>
          <Row>
            {data.products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate
            pages={data.pages}
            page={data.page}
            keyword={keyword ? keyword : ''}
          />
        </>
      )}
    </>
  );
};

export default HomeScreen;
