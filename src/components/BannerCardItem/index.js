import './index.css'

const BannerCardItem = props => {
  const {bannerDetails} = props
  const {className, description, headerText} = bannerDetails
  return (
    <li className={className}>
      <div className="check">
        <h1 className="heading"> {headerText}</h1>
        <p className="description">{description}</p>
        <button type="button" className="button">
          Show More
        </button>
      </div>
    </li>
  )
}
export default BannerCardItem
