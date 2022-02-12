export const Image = ({ title, largeImage, smallImage,props }) => {
  return (
    <div className='portfolio-item'>
      <div className='hover-bg'>
        {' '}
        <a
          href={largeImage}
          title={title}
          data-lightbox-gallery='gallery1'
        >
          <div className='hover-text'>
            <h4>{title}</h4>
            {
              props ?             <div className='row'>
              <div className='social'>
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : '/'}>
                      <i className='fa fa-facebook'></i>
                    </a>
                  </li>
                  <li>
                    {/* <a href={props.data ? props.data.twitter : '/'}> */}
                      <i className='fa fa-twitter'></i>
                    {/* </a> */}
                  </li>
                  <li>
                    <a href='/'>
                      <i className='fa fa-wordpress'></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div> : ""
            }

          </div>
          {/* </div> */}
          
          <img
            src={smallImage}
            className='img-responsive'
            alt={title}
          />{' '}
        </a>{' '}
      </div>
    </div>
  )
}