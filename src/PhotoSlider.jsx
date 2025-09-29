import './PhotoSlider.css';
import img1 from './assets/photo1.png';
import img2 from './assets/photo2.png';
import img3 from './assets/photo3.png';
import img4 from './assets/photo4.png';

const images = [img1, img2, img3, img4];

export default function PhotoSlider() {
  return (
    <div className="photo-slider">
      {images.map((src, i) => (
        <div key={i} className={`polaroid rotate-${i % 2 === 0 ? 'left' : 'right'}`}>
          <img src={src} alt={`Carpedium ${i + 1}`} />
        </div>
      ))}
    </div>
  );
}
