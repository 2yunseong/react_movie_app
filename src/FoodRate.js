import PropTypes from "prop-types";

function Food({ name, image, rating }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <p>{rating}/5.0</p>
      <img src={image} alt={name}></img>
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};
let foodIlike = [
  {
    id: 1,
    name: "kimchi",
    image:
      "https://w.namu.la/s/2958e0d7304f1b744021983c55747de2840e0e59a1f3d677d9315f5bad981f002769ce59921aea02b2dd23b5384a0ce30864fe6d84ea1b9aaed80fb3b5f60b6d43cc7fc158a88b514da3f2ec058ea8c693761c7134358e300e4d6f1d587ebfb8fc57194ea6d40d095806be8fc9273450",
    rating: 5,
  },
  {
    id: 2,
    name: "samgupsal",
    image:
      "https://w.namu.la/s/16c62517c7af89b2adc7f4841488292f142d5d99d8d9ea762b5fe757aa0cffd4fc71380f8a6179109683ec9419a66b77e999f949b18282e3e59e2b829fe7d70f01d774a0020052448096581ccc64e891e34f55a000ff0772d464f0f64b8e40c381ecd2779e3ce0f48067665c41fa0446",
    rating: 4.5,
  },
  {
    id: 3,
    name: "kimbap",
    image:
      "https://ww.namu.la/s/33c9509d550db600898d73c2583211037408f060b2d4f8748fb39d34c8159a2e9867520fb83885e0dbe2ab3884f98c12ed4d9892ea11f54802ab2915170378817812d7293f15af4f0227fb250fd077385f8517f28cd9ae66cf4fca28c35685e5",
    rating: 4.7,
  },
];

function renderFood(food) {
  console.log(food);
  return (
    <Food
      key={food.id}
      name={food.name}
      image={food.image}
      rating={food.rating}
    />
  );
}

function FoodRate() {
  return <div className="FoodRate">{foodIlike.map(renderFood)}</div>;
}

export default FoodRate;
