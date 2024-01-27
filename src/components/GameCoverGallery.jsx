import {usePopularGames} from "../features/usePopularGames";

export default function GameCoverGallery() {
  const {isLoading, popularGames} = usePopularGames();

  if (isLoading) {
    return <div>Loading</div>
  }

  if (!popularGames) {
    return null;
  }
  
  const getGameNames = popularGames.map((name) => name.name);
  const getImageIds = popularGames.map((image) => image.cover.image_id);
  const gameCoverUrls = getImageIds.map((imageId)=>{
    return `//images.igdb.com/igdb/image/upload/t_1080p/${imageId}.jpg`;
  })

  // console.log(popularGames);

  return (
    <div className='container'>
<div className="row">
{gameCoverUrls.map((imageUrl, index) => (
  <div className='col-4 col-md-3 col-lg-2 mb-4' key={index}>
          <div className='card h-100'>
            <img
              className='card-img-top'
              srcSet={`${imageUrl}`}
              src={imageUrl}
              alt={`Game Cover ${index}`}
            />
            <p className="card-text fs-5 text" key={index}>{getGameNames[index]}</p>
          </div>
          </div>
        ))}
    </div>
    
    </div>

  )
} 
// -fluid w-75
// row-cols-4 